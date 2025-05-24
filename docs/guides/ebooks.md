---
title: Ebooks
slug: ebooks
fullpath: /guides/ebooks
---

---

# Introduction
This guide will outline how ebooks are handled in book libraries.

Any file with an extension `EPUB`, `PDF`, `CBR`, `CBZ`, `AZW3`, `MOBI` is considered an "ebook file". 

`AZW3` and `MOBI` ebook files have limited support and do not keep your progress.

A library item can be both an ebook and an audiobook by keeping the ebook in the same folder as the audiobook.

<br>

<!-- # [Primary and supplementary ebooks](#primary-and-supplementary-ebooks) -->

# Primary and supplementary ebooks

Here is an example of a library item that is both an audiobook and an ebook.

![Audiobook and ebook library item](/guides/ebooks/AudiobookAndEbookLibraryItem.png)

In the above screenshot there are two ebook files. The primary ebook is indicated with the green checkmark and is what will be opened when pressing the "Read" button at the top.

When the scanner is choosing which ebook to set as the primary ebook it will prefer `EPUB`. If there are multiple ebook files then the others are set as supplementary.

You can change an ebook file from supplementary to primary and vice versa.

![Set ebook to supplementary](/guides/ebooks/SettingEbookAsSupplementary.png)
![Set ebook to primary](/guides/ebooks/SettingEbookAsPrimary.png)

If all of your ebook files are set to supplementary then the "Read" button will no longer be shown.

![All ebooks supplementary](/guides/ebooks/AllEbooksSupplementary.gif)

<br>

# Supplementary ereader

You can open an ereader for any ebook file by pressing the book icon. This is intended for viewing supplementary ebooks so your progress will not be saved. 

For reading the primary ebook you should use the "Read" button at the top so that your progress will be saved (only `EPUB`, `PDF`, `CBR`, and `CBZ` ebooks save progress).

![Supplementary ereader](/guides/ebooks/SupplementaryEbookReader.png)

<br>

# Audiobooks only library setting

By default, the scanner will treat ebook files the same as it treats audio files when determining how library items should be created.

If the "Audiobooks only" library setting is enabled then all ebook files inside audiobook folders will be set as supplementary. All ebook files outside of an audiobook folder (or in the folder root) will be ignored.

![Audiobooks only library setting](/guides/ebooks/AudiobooksOnlyLibrarySetting.png)