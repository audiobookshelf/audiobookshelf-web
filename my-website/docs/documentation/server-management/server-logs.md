---
id: server-logs
sidebar_label: Logs
title: Logs
sidebar_position: 1.5
---

The Audiobookshelf server supports 3 log levels: `Warn`, `Info`, and `Debug`. By default, server log levels are set to `Info`.

All daily logs are stored in `/metadata/logs/daily` as JSON files and can be viewed in the web client. Note that logs are only stored for the current log level, so if you have the server set to log `Info`, no `Debug` level logs will be stored.

Logs from scanning the library are stored in `/metadata/logs/scans` to assist with debugging issues.

Logs from server crashes are stored in `/metadata/logs/crash_logs.txt` and can contain information regarding a crash that does not show up in the daily log (due to the server crashing). If you do not see anything in `crash_logs.txt`, you will need to check the logs for how you are running the server (for example, Docker container logs).

![Log Settings](/pages/server-management/logs.png)
