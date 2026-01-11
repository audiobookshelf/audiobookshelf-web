---
id: server
sidebar_label: Server
title: Server
sidebar_position: 1.4
---

This section aims to answer common questions related to the server and managing files.

## Why are multiple books showing as the same book?

This is almost always due to not following the [required directory structure](/docs/libraries/book-library/directory-structure#directory-structure) of one folder per book. This incorrect grouping can also persist even after fixing your library directory structure because the Audiobookshelf tracks file moves by file inode, so once the server has grouped the files under the same book you will need to remove the book from the Audiobookshelf database and scan your library again.

A common cause of this issue is using other tools to manage or move files around your library structure with "watch for file changes" enabled, so the Audiobookshelf server may incorrectly merge files if it scans the directory at the same time.

## How is metadata pulled in from scans?

Scans can pull information from your folder names, audio file meta tags, or other metadata files in the directory based on the [library metadata priority](/docs/libraries/book-library/book-metadata).
Metadata is only pulled from external online providers when using the "Match" or "Quick Match" features.

You can also use a `desc.txt`, `reader.txt` and `.opf` file to pull data into Abs. See [here](/docs/libraries/book-library/directory-structure#file-metadata)

## Why does audiobookshelf not get data from the internet automatically during a scan?

Scanning and matching are two different operations. A "scan" is when your local files are scanned for metadata based on the ["Library Scanner" precedence](/docs/libraries/book-library/book-metadata). A "Match" is using the metadata ABS already has from the scan to try and match your book against an online metadata provider.

Scanning can occur automatically when using the File Watcher, which watches for changes to your files, or by setting up Periodic Scans in the library settings.

Matching against an online metadata provider is a manual operation which must be initiated by a user or through the server API.

## Should I use mp3 or m4b (or something else)?

It's really up to you.
If you're using other devices or software, you should check what file formats and codecs they support.

MP3 is supported by pretty much everything.
A lot of books are obtained as a collection of mp3 files, especially from CDs, and some people prefer to keep the files as mp3 files so they have better support.
Note that ABS has some outstanding issues with seeking within very long mp3 files.

M4B is convenient if you want to have 1 file per book.
This file format is supported on a number of devices, but does not have as good of support as mp3.
Most phones and web browsers shouldn't have any problems.

Opus is another common codec that is used to retain comparable quality at much lower bitrates, reducing storage space and bandwidth usage when streaming. Apple has now added opus support to iOS so this should be able to play on most iOS devices without needing to transcode.

## I'm still confused about what Docker and containers are and how they work?

This answer is not meant to replace other documentation (such as the official Docker documentation), but to provide a better introductory overview of Docker for ABS.

To run a Docker container, you first pull an _image_ from the internet and then run a copy of the _image_ as a _container_.
You can run multiple _containers_ from the same _image_, but changes to one container will not affect the _image_ or other _containers_.
When you want to update, you pull a new _image_ down and then replace the _container_ that's running. Pulling and running the new image is handled automatically by docker-compose or Portainer.
Deleting the container deletes everything that was within the _container_, so if you want your data to persist (such as your library and users), you need to store the data outside of the container.

Data is stored externally using mounts (in red).
Each mount consists of two parts, the path on your computer (in green) and the path within the Docker container (in blue).
Both parts are separated by a colon.
![Docker mount points](/pages/faq/docker_mounts.png)

The path on the computer can be anywhere the user running Docker has permissions to access.
You can also have as many of these mounts as you want, so if you want multiple audiobook folders, you can just add more (see [Library Creation Guide](https://www.audiobookshelf.org/guides/library_creation)).
If you don't provide mounts, the container cannot see anything outside of the container to store your data or see your books.

There are also volume mounts, but this only discusses bind mounts.

## What is the default admin username and password?

There is not a default username and password.
You will set the root username and password when you first visit the server in a web browser.
Once you have created this first user, you can create other admin and user accounts.

## How can I reset a password?

A user password can be reset for an individual account by an admin account on the User page of the server settings.
If the user is using OIDC to log in, the password should be reset in the OIDC provider.

If you forgot the password for the root user you will need to manually edit the SQLite database.
[DBeaver](https://dbeaver.io/) is a good tool for this if you are unfamiliar with editing SQLite databases.

NOTE: make sure the server is not running when you are manually editing the SQLite database and close the database before starting the server.

In the `users` table find the root user row and update the `pash` column to NULL.
This will allow you to log in as the root user with a blank password and you can set a new password after logging in.
