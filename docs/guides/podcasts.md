---
title: Podcasts
slug: podcasts
fullpath: /guides/podcasts
---

---

# Introduction

This guide will help you understand how podcasts work within ABS. This guide assumes you have correctly configured your installation.

ABS is designed as a media server for your local files.
ABS provides the ability to download files from an RSS feed and store them on your server, which you can then listen to through an ABS client or a [locally created RSS feed](/guides/rss_feeds).
ABS is not designed as a passthrough from other services, so you first must download the files to your server.

NOTE: If you are using docker, make sure your mounts are set up correctly. If they are not set up correctly, you will lose data at some point in the future. The easiest way to check if they are set up correctly is to add a podcast to the library and ensure that it shows up in your file system whereever you mounted your podcasts to.

Still confused about Docker? Check out [this FAQ](/faq/server#im-still-confused-about-what-docker-and-containers-are-and-how-they-work)

# Adding a podcast

First, you need to [add a new library](https://www.audiobookshelf.org/guides/library_creation) with type "Podcasts". Sign in as an admin, then:

1. Click on settings
2. Click on Libraries on the left
3. Click the "Add Library" button
4. Under Media Type, choose "Podcasts"

There are two ways to add a podcast to your server:

1. Add the podcast through the UI.
2. Add the episode files to your filesystem.

NOTE: By default, ABS will not allow you to add a podcast that is hosted via a local IP address.
This is a mitigation to potential server-side request forgery attacks (SSRF).
In rare cases where you are self-hosting a podcast, you might need to disable this filter to add it.
To do so, set the environment variable `DISABLE_SSRF_REQUEST_FILTER=1` on the ABS server.

### Adding through the UI

You can add podcasts in the UI using the "Add" tab (either in the web interface or the app).
You can search by name, RSS link, or upload an OPML file.
This is just a general search field, the search terms are not stored anywhere.
![Podcast search results](/guides/podcasts/security_now_search.png)

Once you have searched for the podcast and added it, you can [check for episodes to download](/guides/podcasts#downloading-podcasts). No podcast episodes are downloaded automatically when you first create the podcast.

### Adding through the file system

If you already have files for your podcast, you can manually create a [directory for the podcast](/docs#podcast-directory-structure).
Note that all files for a podcast must be in the same folder, and subfolders are not yet supported.
ABS will parse metadata tags from the podcast files, but [this is not well documented yet](https://github.com/advplyr/audiobookshelf/issues/1488).

You can use another program or service to get the podcast files and place them in the directory instead of using the integrated ABS downloader.

# Downloading podcasts

There are several ways to download podcast episodes within ABS.
If you want to search for files and pick which ones you want to download, you can use the "Find Episodes" button (magnifying glass button circled in blue below).
This presents you with a list of files available from the RSS feed that you can download.
![Find Episodes](/guides/podcasts/newly_added.png)

You can also ask ABS to download episodes since a certain date. This is done on the "Episodes" tab of the podcast settings.
Note that you will need to change the date because it defaults to the current time.
You can specify a max number of episodes to download or change it to unlimited.
![Podcast Episodes tab](/guides/podcasts/episodes_tab_blank.png)

If you would like ABS to automatically check for new episodes to download, you can do this on the "Schedule" tab of the podcast settings.
By default, ABS will keep every episode downloaded.
If you would like ABS to automatically delete the oldest episode once you have reached a threshold, you can set the max number of episodes to keep.
![Podcast Schedule tab](/guides/podcasts/schedule_tab.png)

Podcasts marked for download are added to the Download Queue page.

# Tracking listen state

ABS only tracks media progress for media present on the server.
If you listen to or mark an episode as played, this progress will be tracked just like an audiobook.
If you delete the podcast episode file from the server, the listen state of the episode is lost.
If you want to keep track of what episodes you have listened to but still delete the files, you will need to track this progress using an external utility.
