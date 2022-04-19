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

# HTTP header
ffuf -H "Cookie: value=123" -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.0.0.1/FUZZ

# Recursion
ffuf -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.0.0.1/FUZZ -maxtime-job 60 -recursion -recursion-depth 2
```