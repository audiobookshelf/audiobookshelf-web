---
title: Collections and Playlists
slug: collections
fullpath: /guides/collections
---

---

# Introduction
This page describes the similarities and differences between a collection and playlist. Collections and playlists are another way to organize individual books and podcast episodes (not podcasts).

Both Collections and Playlists:
- Are Library specific
- Listening progress is tracked by user (not shared listening state between multiple users)
- Have a description field
- Can be reordered
- Cannot contain groups of things (other playlists/collections, series, etc)
- Have a "Play" button at the top which acts as a "Play All" button

Collections:
- Are Public. Any user with access to the library can see the contents of the collection
- Can only contain books

Playlists:
- Are Private. Only the user who created the playlist can see it
- Can contain books or podcast episodes

Screenshots are from an install of v2.2.0 in Docker. The interface is still pretty much the same, but some buttons have moved slightly. These changes are noted in the text.

# Creating a collection or playlist
When no collections exist, you will be presented with a view similar to this in the book library. The playlist tab does not show up unless you have created a playlist (similar method to creating a collection).

![Initial collection](/guides/collections/1_no_collections.png)

For a book library, a collection or playlist is created from an individual book. You can do this either from the library view or when viewing a specific book's details.
In the second gif, the button has moved to the dropdown list of 3 dots in the same location.

![Collections from library](/guides/collections/collections_library.gif)
![Collections from book details](/guides/collections/collections_book_details.gif)

For a podcast, you can follow the same steps as for the book library. The podcast episode is added to a playlist using the icon circled in red.

![Add podcast to playlist](/guides/collections/podcast_add_to_playlist.png)

To add more books to existing collections or playlists, you would follow the same steps to create a new collection, but instead of selecting a new one you simply click on the collection.

![Add to existing collection](/guides/collections/collection_add_to_existing.gif)

# Editing a collection or playlist
Once a collection or playlist exists, the corresponding tab will appear in the navigation pane. When viewing a collection or playlist, you will see the items in the order they were added to the collection. You can edit the order of items by dragging on the three horizontal lines to the left of the item (shown in red).
You can also mark items as read, edit the item details, or remove the item from the collection (shown in blue).

![Collections view](/guides/collections/2_collection_main_view.png)

Collection descriptions can be added or edited by clicking on the pencil in the corner, as seen below.
![Edit collection description](/guides/collections/edit_collection.gif)

# Roadmap items
The following items are on the roadmap, in no particular order or expected time to be released.
- Auto adding new podcast episodes to playlists
