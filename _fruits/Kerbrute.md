---
title: Kerbrute
desc: Bruteforcing Kerberos pre-auth.
tags: [ActiveDirectory, Linux, Windows]
alts: [Impacket]
website:
---

## Enumerate users

```sh
# Get users (--dc: the location of domain controller, -d: domain name)
kerbrute userenum --dc 10.0.0.1 -d example.local /usr/share/wordlists/username.txt
```