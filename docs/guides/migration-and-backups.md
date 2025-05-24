---
title: Migration and Backups
slug: migration-and-backups
fullpath: /guides/migration-and-backups
---

---

This page discusses common migration problems for server `2.2.x` through `2.8.x` and how to restore from backups.

# Migration Instructions
There are a lot of version numbers, so verify the version due to confusion with all of the 2's and 3's in version numbers.

## From version 2.2.x

If you are running version `2.2.23` or lower and want to upgrade, you may have some additional steps because `2.3.x` includes a database migration.

First, if you are not running `2.2.23`, you should first upgrade to this version to ensure everything is working correctly with your library before migrating.
Once you have verified you are on `2.2.23`, there are several different things which may have happened (especially if you had previously tried to upgrade).

The `2.3.x` and `2.4.x` versions include a database migration.
The following graphic shows the steps the server does for the database migration (all within the `/config` directory).
You do not do any of these steps.
![Migration steps](/guides/migration_and_backups/upgrade_flowchart.jpeg)

If you have previously tried to upgrade or run into a migration issue, look in your `/config` directory and check if the SQLite database exists.
If it does, that is why your server is still not starting/migrating your data.
You can either rename this database file or delete it.
If you have `oldDb.zip`, you should also rename that (but don't delete it until you have verified the migration went well in case there's data there you don't have).
Once you have removed the SQLite database file, you can upgrade to `2.3.3`, `2.4.1`, or `latest` to get the last official release.
*DO NOT* upgrade to `2.3.0`, `2.3.1`, or `2.3.2` as migration issues were fixed in `2.3.3`.
You can go directly to `2.4.1` and do not need to first migrate to `2.3.3`.
![Failed migration leftovers](/guides/migration_and_backups/2_2_x_database.png)

If your server is failing to start after the migration, ensure your `/config` directory is on the same machine that is running the ABS server.
The new SQLite database needs to be on the same machine and cannot be stored on a remote location (such as if you're running the ABS server on your desktop but all of the data for the server is stored on a NAS).
If you are doing this, you will need to make a local directory and move your `/config` there.
The `/metadata` and all media files can remain on another machine.

## From version 2.3.3
If you are on version `2.3.3`, you should upgrade to `2.4.1`, skipping `2.3.4` and `2.3.5`.
There were some issues with `2.3.4` and `2.3.5` which were immidately fixed in `2.4.1`, but due to version numbering these releases still exist.
Some servers have updated automatically due to Watchtower or other tools automatically updating the Docker image as soon as they were released, so these servers should be updated to `2.4.1` since we already know those versions don't work.
Your data is not affected if you updated to `2.3.4` or `2.3.5`, just your server may not start until you upgrade.

# Restoring from backup

This section includes information on restoring from a backup. Backups from `2.2.x` are NOT supported on `2.3.x` and above. If you would like to use a backup from `2.2.x` on a newer version, you can either roll back to `2.2.23` and restore from a backup and let the server perform the migration again (see above), or just restore the `2.2.x` backup manually in the filesystem as explained below, and then perform the migration as above.

Before restoring from a backup using the filesystem, make sure your ABS server is not running.

![Backup Interface](/guides/migration_and_backups/2_2_x_backups.png)

## Restoring 2.2.x
To restore a backup in `2.2.x`, you can either use the web GUI in the server settings or manually restore using the filesystem.

These backups are just a zip file of the `/config`, `/metadata/authors` and `/metadata/items`. If you're on Windows, you can just rename the backup file to end in `.zip` instead of `.audiobookshelf`, then extract the backup. You will then replace the corresponding directories on your server with these extracted files. Note that the metadata directories from the backup are replacing the `/metadata/authors` and `/metadata/items` directories, NOT creating a new `/metadata-items` directory on the server.

## Restoring 2.3.x and above

To restore from a backup in `2.3.x` and above, follow these steps:

1. **Stop the Service:**
   > - If ABS is installed as a service: `systemctl stop audiobookshelf.service`
   > - If using Docker: `docker stop <container-name>`
   > - If on Windows: Close the application via the tray

2. **Navigate to Your Base Path:**
  - Note: If you have changed the metadata or config paths, navigate to those paths instead.
   > - Service: `cd /usr/share/audiobookshelf`
   > - Docker: `cd <path-to-your-docker-compose-file>`

3. **Locate and Unzip the Backup Folder:**
  - Note: The backup is named according to the date it was created. Use the newest backup and if that doesn't work, try the next newest.
   > - Service: `cd metadata/backups` and `unzip <date>.audiobookshelf`
   > - Docker: `cd metadata/backups` and `unzip <date>.audiobookshelf`
   > - Windows: Open the backup folder in Explorer and unzip the file using a tool like 7-Zip

4. **Replace the `audiobookshelf.sqlite` File:**
   > - Service: `cp audiobookshelf.sqlite ../../config/audiobookshelf.sqlite`
   > - Docker: `cp audiobookshelf.sqlite ../../config/audiobookshelf.sqlite`
   > - Windows: Copy the `audiobookshelf.sqlite` file to the config folder

5. **Replace the `authors` and `items` Folders:**
   > - Service: `cp -r metadata-authors ../authors` and `cp -r metadata-items ../items`
   > - Docker: `cp -r metadata-authors ../authors` and `cp -r metadata-items ../items`
   > - Windows: Copy the contents of `metadata-authors` and `metadata-items` to the `metadata/authors` and `metadata/items` folders

6. **Start the Service:**
   > - If ABS is installed as a service: `systemctl start audiobookshelf.service`
   > - If using Docker: `docker start <container-name>`
   > - If on Windows: Start the application via the tray
  
