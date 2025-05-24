---
title: Configuration
category: Configuration
hash: "#env-configuration"
fullpath: /docs
order: 3.1
---

Audiobookshelf is configured via environment variables.
You can pass them to your Docker container using `-e VARIABLE=VALUE`
or set them in `/etc/default/audiobookshelf` if you install audiobookshelf via packages.

Here is a list of all available options:

## Filesystem

- `CONFIG_PATH` (default: `./config`)
  - Path to the config directory.
  - It will contain the database (users/books/libraries/settings). This location must not be mounted over the network.
- `METADATA_PATH` (default: `./metadata`)
  - Path to the metadata directory.
  - It will contain cache, streams, covers, downloads, backups and logs.
- `BACKUP_PATH` (default: `./metadata/backups`)
  - Path to where backups are stored.
  - Backups contain a backup of the database in `/config` and images/metadata stored in `./metadata/items` and `./metadata/authors`

## External Tools

- `FFMPEG_PATH` (default: `ffmpeg`)
  - Path to the `ffmpeg` binary.
  - If no path is set, Audiobookshelf will assume the binary to exist in the system path.
- `FFPROBE_PATH` (default: `ffprobe`)
  - Path to the `ffprobe` binary.
  - If no path is set, Audiobookshelf will assume the binary to exist in the system path.

## Network

- `HOST`
  - The host Audiobookshelf binds to.
    Most commonly, this will be `127.0.0.1` if you want the service to listen to localhost only,
    or left unset if you want to listen to all interfaces (both IPv4 and IPv6).
- `PORT`
  - The TCP port Audiobookshelf will listen on.
- `EXP_PROXY_SUPPORT`
  - Experimental workaround to repsect the `HTTP_PROXY` and `HTTPS_PROXY` environment variables.
    The SSRF request filter is also disablede by using thes environment variable

## Security

- `TOKEN_SECRET`
  - Secret used for generating the JSON Web Tokens.
  - If none is provided, a secure random token is generated automatically.
    That will usually be sufficient.
- `ALLOW_CORS` (default: `'0'`)
  - Allow Cross-Origin Resource Sharing if set to `'1'`.
- `DISABLE_SSRF_REQUEST_FILTER` (default: `'0'`)
  - Disables the security of using the "Server Side Request Forgery" filter.
  - If you are self-hosting a podcast from the same server, you may need to disable the SSRF filter.
- `SSRF_FILTER_REQUEST_WHITELIST`
  - A comma-separated whitelist of domains to exclude from the SSRF filter
- `ALLOW_IFRAME` (default: `'0'`)
  - Allow use of iframes. This can also be done at the reverse proxy level.

## Other

- `SOURCE`
  - Installation source. Will be shown in the web client.
  - Usually set to `docker`, `debian` or `rpm`.
- `NODE_ENV` (default: `production`)
  - Type of deployment.
  - Should be `production` unless using `development`.
- `PODCAST_DOWNLOAD_TIMEOUT` (default: `30` seconds)
  - Timeout to wait for a podcast to start downloading.
- `QUERY_LOGGING`
  - Debug information for logging SQL queries
  - Use `log` to log the queries, and `benchmark` to also log the runtime of each query.
- `QUERY_PROFILING`
  - Experimental profiling of specific database queries. Not implemented on most queries.
- `SQLITE_MMAP_SIZE`
  - Set the `mmap_size` pragma for the SQLite database
- `SQLITE_CACHE_SIZE`
  - Set the `cache_size` pragma for the SQLite database
- `SQLITE_TEMP_STORE`
  - Set the `temp_store` pragma for the SQLite database
