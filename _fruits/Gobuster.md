---
title: Gobuster
desc: Scans web contents.
tags: [ActiveRecon, DirectoryDiscovery, Linux, Web]
alts: [Dirb, FeroxBuster, Ffuf]
website:
render_with_liquid: false
---

## Examples

```sh
gobuster dir -u http://10.0.0.1:80 -w /usr/share/seclists/Discovery/Web-Content/common.txt

# Quiet mode (-q)
gobuster dir -q -u http://10.0.0.1 -w /usr/share/seclists/Discovery/Web-Content/common.txt

# Specify file extention (-x)
gobuster -q -x php -u http://10.0.0.1 -w /usr/share/wordlists/rockyou.txt
```
