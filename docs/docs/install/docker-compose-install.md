---
title: Docker Compose
category: Install
hash: "#docker-compose-install"
fullpath: /docs
order: 1.02
---

```bash
services:
  audiobookshelf:
    image: ghcr.io/advplyr/audiobookshelf:latest
    ports:
      - 13378:80
    volumes:
      - </path/to/audiobooks>:/audiobooks
      - </path/to/podcasts>:/podcasts
      - </path/to/config>:/config
      - </path/to/metadata>:/metadata
    environment:
      - TZ=America/Toronto
```

<div class=warn>
<ul>
<li>Remember to change the path to your actual directory and remove the &#60;&#62; symbols</li> 
<li>Volume mappings should all be separate directories that are not contained in eachother</li> 
</ul>
</div>

**Volume mappings**

- `/config` will contain the database (users/books/libraries/settings). Beginning with `2.3.x`, [this needs to be on the same machine you are running ABS on](/guides/migration-and-backups#from-version-22x).
- `/metadata` will contain cache, streams, covers, downloads, backups and logs
- Map any other directories you want to use for your book and podcast collections (ebooks supported)
  Still confused about Docker? Check out [this FAQ](/faq/server#im-still-confused-about-what-docker-and-containers-are-and-how-they-work)

**💡 Prefer the CLI? This is our docker run command. YMMV**

```bash
docker pull ghcr.io/advplyr/audiobookshelf

docker run -d \
-p 13378:80 \
-v </path/to/config>:/config \
-v </path/to/metadata>:/metadata \
-v </path/to/audiobooks>:/audiobooks \
-v </path/to/podcasts>:/podcasts \
--name audiobookshelf \
-e TZ="America/Toronto" \
ghcr.io/advplyr/audiobookshelf
```

⚠️ Windows users will need to remove the \ and run this as a single line
