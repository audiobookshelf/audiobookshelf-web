---
title: Server logs
slug: server_logs
fullpath: /guides/server_logs
---

---

# Introduction
This page discusses how logging works on the server.
Log settings are located in the server settings under "Logs" in the left pane.

# Server Logs
By default, server log levels are set to `Info`.
The 3 log levels in order of increasing information are `Warn`, `Info`, and `Debug`.
Logs can be viewed in the web browser, but all logs are stored in `/metadata/logs` as JSON files.
Note that logs are stored based on the log level setting, so if you are logging as `Info` no `Debug` logs are stored.

![Log Settings](/guides/server_logs/logs.png)

# Crash logs
Beginning with server version 2.8.0, crash logs are stored in `/metadata/logs/crash_logs.txt`.
This file will include more information than the normal log files.
If the server is crashing and you do not see anything in `crash_logs.txt`, you will need to check the logs of however you are running the server (Docker container logs, etc).
