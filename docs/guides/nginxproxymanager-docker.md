---
title: Docker setup with Nginx Proxy Manager
slug: docker-nginxproxymanager-setup
fullpath: /guides/docker-nginxproxymanager-setup
---

---
# How to setup ABS with Nginx Proxy Manager

***> Thanks to Quan Nguyen on his [Blog](https://quannguyen.ca/setting-up-audiobookshelf/) for this contribution! <***

---

### About this guide

This guide is intended to help you set up remote access for Audiobookshelf with Nginx Proxy Manager.
This guide assumes you already have Docker set up.
Some Linux commands are used, but you can adjust the commands as needed to your specific system.

### Phase 1: Nginx Proxy Manager

First, let's create your `compose.yml` file where the instructions for you Nginx Proxy Manager container will live.
It's good practice to have separate folders for all your containers for easy backups and management.
So, in this case, we're at `/mnt/nginx`.
Create a new `compose.yml` file using the following command or another text editor:

```bash
nano compose.yml
```

The contents should be as follows:

```compose
version: '3.8'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```

> **IMPORTANT - YOU HAVE TO CHANGE THE PATHS IN THE VOLUMES SECTION**
> This is what mine looks like, so `data` and `letsencrypt` folders are under the same `nginx` folder we're at right now. Make sure to adjust it according to your needs, the same will be true for the next section, whenwe setup the Audiobookshelf container.

Once you have finished editing the file, type `CTRL + X` to save and exit the nano editor. Now, let's start this container with `docker compose up -d`. 

### Phase 2: Audiobookshelf

To set up Audiobookshelf, let's go to another folder and set all we need in there.

```bash
mkdir /mnt/audiobookshelf
cd /mnt/audiobookshelf
```

I'm also using a `compose.yml` file, so `nano compose.yml` once more and place the following contents in it:

```compose
version: "3.7"
services:
  audiobookshelf:
    container_name: audiobookshelf-server
    image: ghcr.io/advplyr/audiobookshelf:latest
    #ports:
    #  - 13378:80
    volumes:
      - /mnt/audiobookshelf/data/audiobooks:/audiobooks
      - /mnt/audiobookshelf/data/podcasts:/podcasts
      - /mnt/audiobookshelf/data/config:/config
      - /mnt/audiobookshelf/data/metadata:/metadata
    networks:
      - nginx
    restart: unless-stopped

networks:
  nginx:
    name: nginx_default
    external: true
```

This is just a regular Docker Compose file as you can find in [Audiobookshelf's documentation](https://www.audiobookshelf.org/docs#docker-compose-install), but instead of setting a port, we're going to leave it empty, which defaults to port 80 (Nginx can deal with multiple containers running on port 80), and we'll add the `nginx_default` network we've created earlier. Thus the container won't try to make a new network just for this container called `audiobookshelf_default` and will instead join this already existing one.

> **IMPORTANT - YOU HAVE TO CHANGE THE PATHS IN THE VOLUMES SECTION**
> Make sure the folders on the volume section are correct for your installation.

Now you can start this container using the `docker compose up -d` command again.

### Phase 3: Setting up the Proxy Host

After you've alreay set up Nginx Proxy Manager, as the guides provided on the first phase of this guide, go to `Hosts` > `Proxy Hosts` and click `Add Proxy Host`. Then, on the **Details** tab:

1. **Domain Names**: usually we go with a subdomain, such as **audiobookshelf**.example.com (make sure to replace example.com with your actual domain), but if that's your only installation, you can make it a top level, with no subdomain whatsoever, it's up to your use case and what you want to do.
2. **Scheme**: http
3. **Forward Hostname / IP**: `audiobookshelf-server` (this is the same as the container_name property on our compose file, so if you've changed it there, make sure to use the same name here)
4. **Forward Port**: `80`
5. **Enable settings**: make sure to enable `Websockets Support` and `Block Commom Exploits`
6. **Access List**: Publicly Accessible

After that, go to the **SSL** tab and:

1. **SSL Certificate**: Select your desired SSL certificate for the domain you're using
2. **Enable settings**: Enable all four options (`Force SSL`, `HTTP/2 Supoprt`, `HSTS Enabled` and `HSTS Subdomains`)

Now click **Save** and you're done. You should now be able to access your **Audiobookshelf** web client using the domain name you've set up from a web browser or app.
