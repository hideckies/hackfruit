---
title: Kerbrute
desc: Bruteforcing Kerberos pre-auth.
tags: [ActiveDirectory, Linux, Windows]
alts: []
website:
---

## Enumerate users

```sh
kerbrute userenum --dc 10.0.0.1 -d example.local /usr/share/wordlists/username.txt
```