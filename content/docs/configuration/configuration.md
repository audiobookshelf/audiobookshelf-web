---
title: Configuration
category: Configuration
slug: 6.5.configuration
hash: "#configuration"
fullpath: /docs
---

Audiobookshelf is configured via environment variables.
You can pass them to your Docker container using `-e VARIABLE=VALUE`
or set them in `/etc/default/audiobookshelf` if you install audiobookshelf via packages.

Here is a list of all available options:

## Filesystem

- `CONFIG_PATH` (default: `./config`)
  - Path to the config directory.
  - It will contain the database (users/books/libraries/settings).
- `METADATA_PATH` (default: `./metadata`)
  - Path to the metadata directory.
  - It will contain cache, streams, covers, downloads, backups and logs.

## External Tools

- `FFMPEG_PATH` (default: `ffmpeg`)
  - Path to the `ffmpeg` binary.
  - If no path is set, Audiobookshelf will assume the binary to exist in the system path.
- `FFPROBE_PATH` (default: `ffprobe`)
  - Path to the `ffprobe` binary.
  - If no path is set, Audiobookshelf will assume the binary to exist in the system path.
- `TONE_PATH` (default: `tone`)
  - Path to the `tone` binary.
  - If no path is set, Audiobookshelf will assume the binary to exist in the system path.

## Network

- `HOST`
  - The host Audiobookshelf binds to.
    Most commonly, this will be `127.0.0.1` if you want the service to listen to localhost only,
    or left unset if you want to listen to all interfaces (both IPv4 and IPv6).
- `PORT`
  - The TCP port Audiobookshelf will listen on.

## Security

- `TOKEN_SECRET`
  - Secret used for generating the JSON Web Tokens.
  - If none is provided, a secure random token is generated automatically.
    That will usually be sufficient.

## Other

- `AUDIOBOOKSHELF_GID` *– deprecated*
  - Numeric group identifier to which Audiobookshelf will assign some of its managed files.
  - If not specified, Audiobookshelf will simply write files using the default permissions of the user it runs as.
  - To use this, you must specify both `uid` and `gid`.
- `AUDIOBOOKSHELF_UID` *– deprecated*
  - Numeric user identifier to which Audiobookshelf will assign some of its managed files.
  - If not specified, Audiobookshelf will simply write files using the default permissions of the user it runs as.
  - To use this, you must specify both `uid` and `gid`.
- `SOURCE`
  - Installation source. Will be shown in the web client.
  - Usually set to `docker`, `debian` or `rpm`.
