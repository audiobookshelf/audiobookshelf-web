---
id: migration
sidebar_label: Migrate OS
title: Migrating an OS or File Paths
---

:::warning
Switching between installation methods (e.g., Linux, Windows, Docker) is not a supported process. This guide provides best-effort instructions to help you recover as much data as possible.

There is no guarantee that this process will be successful. Proceed with caution, and please do not open GitHub issues related to this process. If you have advanced knowledge, you can seek assistance on the official Discord server. Please note that these are complicated operations, and support for beginners is limited.
:::

# General Notes

### Why is this necessary?

Audiobookshelf stores all data with absolute paths, not relative ones. This means the full file paths to your books and folders are hardcoded and do not adapt if the root directory changes.

Similarly, paths within metadata files are absolute and will not update automatically if you change the metadata environment variable. This can only be set during the initial setup.

This guide is primarily based on a community-provided [script](https://github.com/Vito0912/absToolbox/blob/main/tools/migrate_backup_to_new_server.py).

# A Generally Reliable Method

You can often succeed by replicating the original file system structure on the new system, even when migrating from Windows to Linux. Ensure you preserve the exact directory structure. Preserving file permissions is also recommended where possible. Migrations from Windows can be problematic due to the use of backslashes (`\`) in file paths.

# Windows to Docker

Follow the instructions provided in the [migration script](https://github.com/Vito0912/absToolbox/blob/main/tools/migrate_backup_to_new_server.py).

If your library folder paths are not updated after running the script, you may need to edit the database manually as described below:

:::info
To edit the paths manually, first create a backup. Before restoring the backup on the new server, unpack the backup file. Open the `database.sqlite` file within it using an SQLite editor (several web-based editors are available).

To view your current library folder paths, execute the following SQL query:

```sql
SELECT * FROM libraryFolders;
```

This command will display all your library paths, which will likely still be the old, incorrect paths.

To update a path, execute a query like the following. You will need to replace the `path` and `id` with your specific values.

```sql
UPDATE libraryFolders
SET
  path = '/new/path/to/library'
WHERE
  id = '56798b97-b544-4e85-96e7-27497f519a5c';
```

:::

If you encounter issues, please review the [Windows to Docker migration discussion thread](https://github.com/advplyr/audiobookshelf/discussions/3995). Read the existing conversation before posting a new question for help.

### Additional Resources

-   [Basic Debian to Docker migration issue](https://example.com) `[TODO: Link needed]`
-   [Windows to Docker migration conversation](https://github.com/advplyr/audiobookshelf/discussions/3995)
