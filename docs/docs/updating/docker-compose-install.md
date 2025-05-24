---
title: Docker Compose
category: Upgrade
hash: "#docker-compose-upgrade"
fullpath: /docs
order: 2.2
---

If you used docker compose, you just need to make sure the tag is either the version you want or `latest` if you want the newest release. If you want to run a specific release, such as older version, change the tag to the desired version number.

Then, you can just run the following commands.

```bash
docker compose pull
docker compose down
docker compose up --detach
```

Still confused about Docker? Check out [this FAQ](/faq/server#im-still-confused-about-what-docker-and-containers-are-and-how-they-work)
