---
title: Ffuf
desc: Discovers web contents.
tags: [ActiveRecon, DirectoryDiscovery, Linux]
alts: [Gobuster, Dirb, FeroxBuster]
website: https://github.com/ffuf/ffuf
render_with_liquid: false
---

## Examples

```sh
# silent mode (-s)
ffuf -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.0.0.1/FUZZ

# Custom header (-H)
ffuf -H "Cookie: value=123" -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.0.0.1/FUZZ

# Recursion (-recursion, -recursion-depth)
ffuf -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.0.0.1/FUZZ -maxtime-job 60 -recursion -recursion-depth 2
```