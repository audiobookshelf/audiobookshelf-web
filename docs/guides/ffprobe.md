---
title: Checking file metadata
slug: ffprobe
fullpath: /guides/ffprobe
---

---

# Introduction
This page discusses how ffprobe can be used within the ABS web client to help debug issues with your audio files or their metadata.
Common metadata issues include:
- Incorrect duration
- Incorrect chapter titles

Audio files not playing or seeking correctly can be a result of a corrupted or malformed file.
Playback errors can also be a result of the audio codec not being supported by your device.

[ffprobe](https://ffmpeg.org/ffprobe.html) is used to extract metadata from files, and can be used to help check files for issues.

If the metadata ABS displays is not what was expected, the ffprobe interface allows you to directly view the file metadata.

# Inspecting an audio file
You can access the metadata for a specific file in an audiobook through the "More Info" dropdown in the "Audio Tracks" table for a library item.

![More info](/guides/ffprobe/more_info.png)

This will open a dialog with the metadata that ABS is already aware of in a formatted view. You can use the "Probe Audio File" button to get the raw output from `ffprobe`.

![Probe audio file](/guides/ffprobe/probe.png)

This raw data can be copied to assist during debugging efforts.

![Get raw data](/guides/ffprobe/probed_data.png)

# Fixing an audio file
Not all devices or programs support every audio codec.
The audiobookshelf server will attempt to transcode your files if the client device cannot direct play the codec, but this can fail if a file is corrupted.

To fix an audio file, there are 2 main options:
1. Obtain a new copy of the source audio (download or rip from CD again)
2. Encode the file.

If you are unable to obtain another copy of the audio file, you can use `ffmpeg` to try encoding the file again.
You can copy the audio data and rewrite the metadata using the `-c copy` argument. An example of this is `ffmpeg -i input.mp3 -c copy output.mp3`.
If the filename contains spaces you will need to surround the filename in quotes like this: `ffmpeg -i "original file.m4b" -c copy "new file.m4b"`.
This will usually fix corrupt metadata or other header issues, but will not fix corrupted audio data or make the codec playable on a device which does not support the codec.

If the file is still unplayable, you can attempt to encode the file using the same codec or a new codec.
An example of this is `ffmpeg -i input.mp3 output.mp3`.
