---
title: Media Item Shares
slug: media-item-shares
fullpath: /guides/media-item-shares
---

---

# Introduction

This guide discusses Media Item Shares to allow users to listen to ABS media in their web browser without needing to authenticate or use another RSS client.

This feature is still in development.

# Creating Media Item Shares

Beginning in server version 2.11.0, Audiobookshelf allows admins to create public shares. Currently, only books can be shared. To share a media item, use the "Share" option in the dropdown menu on a cover image or in the media details page. This will open a dialog to allow configuring how long the share will be available.

![Open the share](/guides/media_item_shares/share_dropdown.png)

The URL is displayed based on how you are accessing your ABS server at the time you create the share. For example, if you connect to your server at `http://192.168.0.5`, then the link will automatically be populated as `http://192.168.0.5/share/[slug]`, but you can manually share the link as `https://mycooldomain.com/share/[slug]`.

![Share modal](/guides/media_item_shares/share_modal.png)

To share a specific time stamp in an audio book, you can add `?t=1234` to the end of the URL, where `1234` is the time to start listening in seconds.

Admins can filter based on what library items have a media share open in the main library page using the same filter dropdown as Genres and Tags.

# Listening to Media Item Shares

Anyone with the link and the ability to access the server can access the media item share without authentication. This includes anyone on the internet if your ABS server is accessible to the internet.

Progress for the media item is not tracked by the ABS server and is stored in a cookie on the client, so if someone listens on one device and then goes to another device, their progress will not be synced. Clients can only direct play media, the server will not perform any transcoding. This means if the clients do not support the file format or codec, the media file will not play.

# Roadmap

This feature is still in development. The interface may change but the functionality will largely remain the same.

- Add ability to share podcast episodes
- Add timestamp control to the share dialog to more easily pick specific points in the book
- Add a summary page of open shares similar to the [RSS Feed Manager](/guides/rss_feeds)
