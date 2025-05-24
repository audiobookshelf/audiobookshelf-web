---
title: Podman
category: Install
hash: "#podman"
fullpath: /docs
order: 1.10
---

**Quadlet Container (Requires Podman version 4.4 or above)**

```ini
# audiobookshelf.container
[Container]
ContainerName=audiobookshelf
Image=ghcr.io/advplyr/audiobookshelf:latest
AutoUpdate=registry
NoNewPrivileges=true
PublishPort=13378:80
Volume=</path/to/audiobooks>:/audiobooks
Volume=</path/to/books>:/books
Volume=</path/to/podcasts>:/podcasts
Volume=</path/to/config>:/config
Volume=</path/to/metadata>:/metadata

[Service]
Restart=always

[Install]
WantedBy=default.target
```

<div class=warn>
<ul>
<li>Remember to change the path to your actual directory and remove the &#60;&#62; symbols</li>
<li>Volume mappings should all be separate directories that are not contained in each other</li>
<li>
    If SELinux is enabled on your host, you may need to run the following command to allow the container to access the directories you are mapping to it:
    <br/>
    <code>sudo chcon -R -t svirt_sandbox_file_t /path/to/directory</code>
</li>
</li>
</ul>
</div>

**Volume mappings**

- `/config` will contain the database (users/books/libraries/settings). Beginning with `2.3.x`, [this needs to be on the same machine you are running ABS on](/guides/migration-and-backups#from-version-22x).
- `/metadata` will contain cache, streams, covers, downloads, backups and logs
- Map any other directories you want to use for your book and podcast collections (ebooks supported)
  Still confused about containers? Check out [this FAQ](/faq/server#im-still-confused-about-what-docker-and-containers-are-and-how-they-work) (It is about Docker, but the concept is the same)

**`💡` Prefer the CLI? This is our podman run command. YMMV**

> ```bash
> podman pull ghcr.io/advplyr/audiobookshelf
>
> podman run -d \
>  -p 13378:80 \
>  -v </path/to/config>:/config \
>  -v </path/to/metadata>:/metadata \
>  -v </path/to/audiobooks>:/audiobooks \
>  -v </path/to/books>:/books \
>  -v </path/to/podcasts>:/podcasts \
>  --name audiobookshelf \
>  -e TZ="America/Toronto" \
>  ghcr.io/advplyr/audiobookshelf
> ```
