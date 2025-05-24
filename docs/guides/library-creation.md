---
title: Setup a Library
slug: library_creation
fullpath: /guides/library_creation
---

---

# Introduction

This guide will help you to create a library in ABS. This guide assumes you have correctly configured your installation.

NOTE: If you are using docker, make sure your mounts are set up correctly. If they are not set up correctly, you will lose data at some point in the future. The easiest way to check if they are set up correctly is to add a book to the library and ensure that it shows up in your file system.

Still confused about Docker? Check out [this FAQ](/faq/server#im-still-confused-about-what-docker-and-containers-are-and-how-they-work)

# Setting up a library

ABS supports two kinds of libraries: book and podcast. Both kinds of library allow individual items to be added to the library. A podcast library can also download new episodes from an RSS feed automatically.
To create a library in ABS:

- Create a library directory for either [audiobooks](/docs#book-structure) or [podcasts](/docs#podcast-structure)
- Go to (1) Settings -> (2) Library -> (3) Add Library.
  ![Add library](/guides/library_setup/add_library.jpg)
- Set library paths. You can either type the path manually or Browse for Folder. If you have multiple directories where books/podcasts are stored, you can add multiple paths to the library. You can have multiple paths in the same library. If you are using docker, you should be using the path within the docker container, not the path in your normal file system.
  ![Add paths](/guides/library_setup/initial_library_creation.gif)
- Modify library settings (you can set this up now or edit the settings later)
  ![Edit settings](/guides/library_setup/settings.jpg)
- You can also set a schedule to rescan the library for new books or changes. This periodic scan is disabled by default. NOTE: This should not be necessary if the watcher is enabled and working because changes to your folders are detected and scanned automatically. The watcher is known to have issues with network mounted libraries and some filesystems.
  ![Periodic scan](/guides/library_setup/schedule_scan.jpg)
- After creating the library, you can scan for items within the library using the "Scan" button or use the dropdown to scan. The library settings can be adjusted from here as well. Additional information on the scanner can be found [here](/guides/book-scanner).
  ![Periodic scan](/guides/library_setup/scan_and_dropdown.jpg)
- You can create more libraries to either divide books or add podcasts. If you have multiple libraries, you can switch between them using the button circled in red.
  ![Added podcasts to switch libraries](/guides/library_setup/switching_libraries.jpg)

# Conclusion

You should now have a functioning library!

# Notes and Troubleshooting

- If you get an error about "permission denied", the permissions of a folder are probably incorrect. This could be an issue with the library directory or the cache or metadata directory (most likely the library directory if you made it this far). Ensure the audiobookshelf user has read and write permission to the directory.
- Not everything fits perfectly into a book or podcast type (such as radio dramas). Discussion has occurred about how to incorporate them better, but has not been finalized.
- If you are having trouble finding your media files in a container (such as Docker), ensure you are using the internal path to the media and not the external path.
