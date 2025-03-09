---
title: Linux (RHEL, CentOS, …)
category: Install
hash: "#linux-install-rpm"
fullpath: /docs
order: 1.04
---

<div class=warn>
<ul>
<li>This installation method is still in testing.</li>
<li>Only for amd64 architecture.</li>
<li>Supported operating systems are all Red Hat and CentOS Stream 8/9 variants.</li>
</ul>
</div>

## Installation

To activate the repository, run:

```bash
dnf install -y "https://github.com/lkiesow/audiobookshelf-rpm/raw/el$(rpm -E %rhel)/audiobookshelf-repository-1-1.el$(rpm -E %rhel).noarch.rpm"
```

You can now install Audiobookshelf.
All dependencies will be installed automatically:

```bash
dnf install audiobookshelf
```

## Configuration

You can configure Audiobookshelf in `/etc/default/audiobookshelf`.
Here you can add the same configuration options you would pass to the Docker container.

```js
METADATA_PATH=/var/lib/audiobookshelf/metadata
CONFIG_PATH=/var/lib/audiobookshelf/config
PORT=13378
HOST=127.0.0.1
```

By default, Audiobookshelf will listen to `localhost` only.
This should be sufficient if you install a reverse proxy (you should!).
If you want to listen to all network interfaces, set `HOST=0.0.0.0` instead.

## Start Audiobookshelf

To run Audiobookshelf and ensure it will be started automatically after a reboot, run:

```bash
systemctl start audiobookshelf.service
systemctl enable audiobookshelf.service
```

To check the current status of the service, run:

```bash
systemctl status audiobookshelf.service
```
