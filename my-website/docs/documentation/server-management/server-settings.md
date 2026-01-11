---
id: server-settings
sidebar_label: Server Settings
title: Server Settings
sidebar_position: 1.0
---

The Audiobookshelf server is managed through the web client by Admin accounts. The administrative pages include:

- General Server Settings
- Library Creation
- User Management
- API Key Management
- List of Listening Sessions
- Database Backup Management
- Logs
- Notification Configuration
- Send to E-reader Management
- Item Metadata Utilities
- Open RSS Feed Management
- Authentication Settings
- Server and Library Stats

## Caching

The Audiobookshelf server uses two caches: file cache and API cache.

### File Cache

The File Cache is stored in `/metadata/cache` and can be manually cleared from the server settings or by manually deleting files through the filesystem.

- Items Cache: Temporary media backups when using the Encoder or Metadata Embed tools (only if Backup is selected). Not for long-term storage and not included in database backups.

- Image Cache: Stores resized cover/author images for faster loading.

The `Purge Items Cache` button will only clear `/metadata/cache/items`, and `Purge All Cache` will clear the entire File cache.

### API Cache

The API Cache exists in memory only and speeds up navigation by caching data for recently visited pages. This cache auto-clears after a short amount of time or when the database updates to ensure you always see the most recent version of the data. Because of this, seeing `API Cache Miss` in the debug logs is common and is only used for debugging performance issues.
