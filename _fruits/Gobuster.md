---
title: Gobuster
desc: Scans web contents.
tags: [ActiveRecon, DirectoryDiscovery, Linux]
alts: [Dirb, FeroxBuster, Ffuf]
website:
---

## Examples

```sh
# Basic
gobuster dir -u http://10.0.0.1:80 -w /usr/share/seclists/Discovery/Web-Content/common.txt

# -q: quiet mode
gobuster dir -q -u http://10.0.0.1 -w /usr/share/seclists/Discovery/Web-Content/common.txt
```
