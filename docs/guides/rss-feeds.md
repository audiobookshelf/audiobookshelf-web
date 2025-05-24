---
title: RSS Feeds
slug: rss_feeds
fullpath: /guides/rss_feeds
---

---

# Introduction

This guide discusses the RSS Manager in the server settings.

These RSS feeds are *not* the same as the RSS feeds that are used to automatically download new podcast episodes.

# Creating RSS Feeds

Audiobookshelf allows admins to host audio content from the server through an RSS feed. The following types can be hosted using an RSS feed:
- Library items
- Collections
- Podcasts

Playlists cannot have an associated RSS feed because they are account specific.

To create an RSS feed, select "Open RSS Feed" in the 3-dot dropdown menu.
![Open the feed](/guides/rss_feeds/open_feed.jpg)

You can then change some settings for the RSS feed that you will be hosting. You can set the slug (defaults to the library item ID), whether to prevent the RSS feed from being indexed by web services, and a custom owner name and email.

The URL is created based on how you are accessing your ABS server at the time you create the RSS feed (outlined in red). If you are connected to your local IP, then the RSS feed will only be accessible on your local IP. If you connect using your public domain name, the URL will be set up to use the domain name.
![Feed settings](/guides/rss_feeds/feed_menu.jpg)

You can copy the link displayed in the confirmation modal. You can click anywhere off of the modal to continue using ABS.
![Confirmation modal](/guides/rss_feeds/confirmation.jpg)

# Managing Open RSS Feeds
From the settings, you can access the open RSS Feeds.
The table shows you what audiobooks, collections, and podcasts are currently available through RSS feeds.
Clicking on a row allows an admin to copy the RSS URL for sharing.
Open feeds can be closed from this table as well.

![RSS Feed Manager](/guides/rss_feeds/feed_manager.jpg)

