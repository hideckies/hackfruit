---
title: Dos2unix
desc: Convert line breaks in a text file from Unix format to DOS format and vice versa. It helps when using payloads from the Exploit-DB and so on.
tags: [Linux]
alts: [ExploitDB, Searchsploit]
website: 
render_with_liquid: false
---

## Convert DOS to UNIX

```sh
dos2unix example.py

# Manual convert
sed -i 's/\r//' example.py
```