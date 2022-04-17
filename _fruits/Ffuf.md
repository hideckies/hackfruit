---
title: Ffuf
desc: Discovers web contents.
tags: [ActiveRecon, DirectoryDiscovery, Linux]
alts: [Gobuster, Dirb, FeroxBuster]
website: https://github.com/ffuf/ffuf
---

## Examples

```sh
# -s: silent mode
ffuf -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.0.0.1/FUZZ

# HTTP Authorization
ffuf -H "Authorization: Basic cmFzY2FsOnJpdmVycw==" -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.0.0.1/FUZZ

# Recursion
ffuf -H "Authorization: Basic cmFzY2FsOnJpdmVycw==" -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.0.0.1/FUZZ -maxtime-job 60 -recursion -recursion-depth 2
```