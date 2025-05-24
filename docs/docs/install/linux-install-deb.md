---
title: Linux (Debian, Ubuntu, …)
category: Install
hash: "#linux-install-deb"
fullpath: /docs
order: 1.03
---

<div class=warn>Only for amd64 architecture.</div>

For Debian based systems, you can activate the official Audiobookshelf repository and install the Debian package.

## Installation

Activate the repository:

```bash
sudo apt install gnupg curl
wget -O- https://advplyr.github.io/audiobookshelf-ppa/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/adb-archive-keyring.gpg
sudo curl -s -o /etc/apt/sources.list.d/audiobookshelf.list https://advplyr.github.io/audiobookshelf-ppa/audiobookshelf.list
```

Install Audiobookshelf:

```bash
sudo apt update
sudo apt install audiobookshelf
```

## Configuration

The Audiobookshelf service will use the config file localted at `/etc/default/audiobookshelf`.
The default configuration is as follows:

```js
METADATA_PATH=/usr/share/audiobookshelf/metadata
CONFIG_PATH=/usr/share/audiobookshelf/config
FFMPEG_PATH=/usr/lib/audiobookshelf-ffmpeg/ffmpeg
FFPROBE_PATH=/usr/lib/audiobookshelf-ffmpeg/ffprobe
TONE_PATH=/usr/lib/audiobookshelf-ffmpeg/tone
PORT=13378
```

If you update the configuration, restart the service by running:

```bash
sudo systemctl restart audiobookshelf.service
```
