---
title: Book Scanner
slug: book-scanner
fullpath: /guides/book-scanner
---

---

This guide describes how the book scanner works as of server `v2.5.0`.

Book grouping is different from metadata parsing, with books being defined by directory due to how the data is stored in the database. The metadata parsing is how metadata is applied to the book, and does not take priority over the book grouping. This scanning occurs locally with no automatic lookups with online metadata providers. To get metadata from an online provider, you will need to perform a Match operation on the media or library.

## Book library scanner steps
![Scanner flowchart](/guides/scanner/scanner_flowchart.png)
1. Library is scanned and files are grouped into books.
    - Each audio and ebook files in the root of a library folder are considered an individual books
    - Otherwise, every folder with a supported media file is considered to be a book (including subfolders of the top folder)
    - Ebook files are ignored if scanning an "Audiobooks only" library
2. Check for missing books (priority given to filepath, falls back to [inode value](https://wikipedia.org/wiki/Inode) to handle renames)
    - All books in the library are checked to see if any are missing
    - Books can also be set as missing if all audio and ebook files are removed
3. Each book found by the scanner is checked to see if it already exists in the library. If a book already exists, it is checked for updates. If this is a new book, the same steps are made.
    - Newly added or modified audio files are probed (using [ffprobe](https://ffmpeg.org/ffprobe.html))
    - Audio tracks are ordered
    - Ebook files are checked
        - If not "Audiobook only" library, primary ebook is set with priority given to `epub` format.
        - All other supported ebook formats are added as supplementary
    - Cover image is cleared if missing. If no cover is set, an attempt is made to set the cover.
        - Cover image is set using an image file in the folder, priority given to files named "cover"
        - Otherwise, check for image embedded in audio file
        - Otherwise, check for image in an epub or comic book file
        - Otherwise, if "Find covers" server setting is enabled search online for a cover (Note: This setting is planned to be replaced by a more comprehensize lookup)
    - Book metadata is parsed according to configured priority, shown further down this page
    - The `metadata.json` is created or updated accordingly.
4. Authors and series are checked for removal
    - Authors are removed if they have no books and have no additional metadata set (image, description or asin)
    - Series are removed if they have no books

---

## Book metadata parsing
![Metadata priority](/guides/scanner/scanner_priority.png)

Metadata priority is set in the "Scanner" tab of the library settings. Lower priority sources can fill empty fields if a higher priority metadata source does not include that information.

NOTE: This is unintuitive in `2.5.0` since the highest priority is visibly lower due a "fill order" being displayed. This is changed in `2.6.0` to better reflect a priority order. In `2.5.0` the item with the lowest priority (1) fills the data it has if enabled. The second lowest priority (2) then fills its data, overwriting any duplicate fields from the previous step.

### Folder structure
Book metadata is pulled from folder names according to the [directory structure](/docs#book-directory-structure), [author folder naming](/docs#book-author-folder-naming) and [title folder naming](/docs#book-title-folder-naming) docs.
The following metadata can be pulled from here: title, subtitle, asin, authors, narrators, series, series sequence, and published year.

### Audio file meta tags OR ebook metadata
Audio file meta tags are found from [ffprobe](https://ffmpeg.org/ffprobe.html). After the audio files are sorted into track order (only) the first audio file will be checked for meta tags following the [audio metadata](/docs#book-audio-metadata) docs.

As of `v2.7.2` epub and comic book metadata will pulled if the book has no audio files.

### desc.txt & reader.txt files
If a file named `desc.txt` is found in the books folder it will be used as the description. If a file named `reader.txt` is found in the books folder it will be used as the narrator.

### OPF file
If a file with `.opf` extension is found in the books folder it will be parsed. (Example OPF file coming soon)

### Audiobookshelf metadata file
The `metadata.json` file is automatically saved anytime book metadata is set. If the "Store metadata with item" server setting is enabled then the metadata file will be stored in the same folder as your book (only for books in subfolders). Otherwise, the metadata file is stored in `/metadata/items/`.

Every book metadata field is stored in this file including chapters.
