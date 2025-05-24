---
title: Power Query and Stats in Excel
slug: power-query
fullpath: /guides/power-query
---

---

# Introduction
We have the ability to use Audiobookshelf’s API to export a list of items listened to for analysis or importing into other systems like Goodreads for tracking. 

To do so we are going to use Excel’s Power Query functionality to pull the data in. 

This will need a modern version of Excel which includes Power Query tools. Office 365 will work. 

First we need to capture some information from ABS itself. 

We need the following

User_ID and API key these can be found by doing the following

Log into your ABS server and click Settings
![Settings](/guides/powerquery/Powerquery0.png)
 
We are going to get User_ID first to do so click on Listening Sessions 
![Menu](/guides/powerquery/Powerquery1.png)

Click on any of the sessions for your user
![Listening Sessions](/guides/powerquery/Powerquery2.png)
 

In the box that appears copy the User ID
![API](/guides/powerquery/Powerquery3.png) 
 

You can Close this box down now

Now click on Users and then your User Name from the list, make sure you click on the Username itself for the next part

There should be a long API number click on the copy icon to copy this
![Excel](/guides/powerquery/Powerquery4.png)

We can now proceed to Excel. 

In Excel go to the Data tab in the ribbon and select Get Data and Launch Power Query Editor

![Excel2](/guides/powerquery/Powerquery5.png)
![Excel3](/guides/powerquery/Powerquery6.png)

When the Editor opens select Manage Parameters
![ManageParams](/guides/powerquery/Powerquery7.png)
 

Click On New and create the following

|     Name            |     Required    |     Type    |     Suggested Value    |     Current Value                                        |
|---------------------|-----------------|-------------|------------------------|----------------------------------------------------------|
|     User_ID         |     Yes         |     Text    |     Any Value          |     Your Unique User ID from ABS                         |
|     Bearer_Key      |     Yes         |     Text    |     Any Value          |     Your API key from ABS                                |
|     ItemsPerPage    |     Yes         |     Any     |     Any Value          |     1000000                                              |
|     ABS_Server      |     Yes         |     Any     |     Any Value          |     Your ABS Server address (do not include https://)    |

Once done click OK. 

Now select New Source
![Source](/guides/powerquery/Powerquery8.png)
 

Other Sources then Blank Query
![Query](/guides/powerquery/Powerquery9.png)

Click on Advanced Editor
![Query](/guides/powerquery/Powerquery9a.png)
 

In the screen that appears delete the text that appears and enter the following

```
let
    // Get the values of parameters
    User_ID = Text.From(#"User_ID"),
    Bearer_Key = Text.From(#"Bearer_Key"),
    ItemsPerPage = Text.From(#"ItemsPerPage"),
    ABS_Server = Text.From(#"ABS_Server"),
    
    // Construct the API URL
    apiUrl = "https://" & ABS_Server & "/api/users/" & User_ID & "/listening-sessions?itemsPerPage=" & ItemsPerPage,
    
    // Set the headers with the Bearer Token
    headers = [#"Authorization" = "Bearer " & Bearer_Key],

    // Make the GET request
    response = Web.Contents(apiUrl, [Headers=headers]),
    
    // Convert the response to JSON
    jsonResponse = Json.Document(response),

    // Extract 'sessions' field
    sessions = jsonResponse[sessions],

    // Convert 'sessions' list to a table
    sessionsTable = Table.FromList(sessions, Splitter.SplitByNothing()),

    // Expand the record fields
    expandedFields = Table.ExpandRecordColumn(sessionsTable, "Column1", {"id", "userId", "libraryId", "libraryItemId", "bookId", "episodeId", "mediaType", "mediaMetadata", "chapters", "displayTitle", 
"displayAuthor", "coverPath", "duration", "playMethod", "mediaPlayer", "deviceInfo", "serverVersion", "date", "dayOfWeek", "timeListening", "startTime", "currentTime", "startedAt", "updatedAt"}),

    // Expand the 'mediaMetadata' record
    expandedMediaMetadata = Table.ExpandRecordColumn(expandedFields, "mediaMetadata", {"title", "subtitle", "author", "releaseDate"}),

    // Convert duration to HH:MM:SS format
    durationFormatted = Table.AddColumn(expandedMediaMetadata, "Duration (HH:MM:SS)", each
        let
            totalSeconds = [duration],
            hours = Number.RoundDown(totalSeconds / 3600),
            remainingSeconds = totalSeconds - hours * 3600,
            minutes = Number.RoundDown(remainingSeconds / 60),
            seconds = Number.RoundDown(remainingSeconds - minutes * 60),
            formattedDuration = Text.From(hours) & ":" & Text.From(minutes) & ":" & Text.From(seconds)
        in
            formattedDuration
    ),

    // Convert date to DateTime type first, and then to UK format
    dateFormatted = Table.TransformColumns(durationFormatted, {{"date", each DateTime.FromText(_, "en-GB"), type datetime}}),
    dateFormattedUK = Table.TransformColumns(dateFormatted, {{"date", each DateTime.ToText(_, "dd/MM/yyyy"), type text}}),
    
    // Select the desired fields
    selectedFields = Table.SelectColumns(dateFormattedUK, {"mediaType", "title", "subtitle","author", "displayTitle", "displayAuthor", "Duration (HH:MM:SS)", "date", "dayOfWeek", "timeListening"}),
    
    // Remove wrong column
    #"Removed Columns" = Table.RemoveColumns(selectedFields,{"author"}),

    //Rename Columns to make it easier
    #"Renamed Columns" = Table.RenameColumns(#"Removed Columns",{{"displayTitle", "episode Title or Book Title"}, {"displayAuthor", "Author"}, {"date", "Date Listened"}, {"Duration (HH:MM:SS)", "Duration of Title (HH:MM:SS)"}, {"timeListening", "Listening Time (Seconds)"}}),

    // Convert Listening Time to HH:MM:SS format
    listeningTimeFormatted = Table.AddColumn(#"Renamed Columns", "Listening Time (HH:MM:SS)", each
        let
            totalSeconds = [#"Listening Time (Seconds)"],
            hours = Number.RoundDown(totalSeconds / 3600),
            remainingSeconds = totalSeconds - hours * 3600,
            minutes = Number.RoundDown(remainingSeconds / 60),
            seconds = Number.Round(remainingSeconds - minutes * 60, 0),
            formattedListeningTime = Text.From(hours) & ":" & Text.From(minutes) & ":" & Text.From(seconds)
        in
            formattedListeningTime
    ),

    //Convert Date Listened to Date Format
    #"Changed Type" = Table.TransformColumnTypes(listeningTimeFormatted,{{"Date Listened", type date}, {"Duration of Title (HH:MM:SS)", type time}, {"Listening Time (HH:MM:SS)", type time}})
in
    #"Changed Type"
```

Once done click on Close and Load
![Close](/guides/powerquery/Powerquery10.png)
 
