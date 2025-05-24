---
title: Podman
category: Upgrade
hash: "#podman-upgrade"
fullpath: /docs
order: 2.3
---


If AutoUpdate policy is set to registry, you can just execute the following command:

```bash
podman auto-update
```

Otherwise, you can manually update the container by pulling the new image and replacing the old one.

**For rootless containers: (Containers not running as root)**

To pull the new image:

```bash
podman pull ghcr.io/advplyr/audiobookshelf
```

To start the container with the new image:

```bash
systemctl --user restart audiobookshelf
```

**For rootful containers: (Containers running as root)**

To pull the new image:

```bash
sudo podman pull ghcr.io/advplyr/audiobookshelf
```

To start the container with the new image:

```bash
sudo systemctl restart audiobookshelf
```

If you are running the container with the `podman run` command, you can remove the old container and start it again with the new image:

```bash
podman stop audiobookshelf
podman rm audiobookshelf
podman run -d \
  -p 13378:80 \
  -v </path/to/config>:/config \
  -v </path/to/metadata>:/metadata \
  -v </path/to/audiobooks>:/audiobooks \
  -v </path/to/books>:/books \
  -v </path/to/podcasts>:/podcasts \
  --name audiobookshelf \
  -e TZ="America/Toronto" \
  ghcr.io/advplyr/audiobookshelf
```
