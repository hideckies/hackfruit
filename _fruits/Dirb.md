---
title: Dirb
desc: Scans web contents.
tags: [ActiveRecon, ContentDiscovery, Web]
alts: [Gobuster, FeroxBuster, Ffuf]
website:
render_with_liquid: false
---

## Basic

```sh
dirb http://10.0.0.1/

dirb https://10.0.0.1/ /usr/share/seclists/Discovery/Web-Content/common.txt

# Custom header (-H)
dirb http://10.0.0.1/ /usr/share/seclists/Discovery/Web-Content/common.txt -H "Authorization: Basic cmFzY2FsOm9jdG9iZXIyMQ=="
```

<br />

## Search Hidden Files by Extensions

```sh
dirb http://10.0.0.1/ -X .txt
```