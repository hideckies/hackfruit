---
title: Dirb
desc: Scans web contents.
tags: [ActiveRecon, DirectoryDiscovery, Linux]
alts: [Gobuster, FeroxBuster, Ffuf]
website:
---

## Basic

```sh
dirb http://10.0.0.1/

dirb https://10.0.0.1/ /usr/share/seclists/Discovery/Web-Content/common.txt
```

<br />

## HTTP header request

```sh
# HTTP Header request
dirb http://10.0.0.1/ /usr/share/seclists/Discovery/Web-Content/common.txt -H "Authorization: Basic cmFzY2FsOm9jdG9iZXIyMQ=="
```