---
title: Searchsploit
desc: Search Exploit Database.
tags: [Linux]
alts: [Dos2unix, ExploitDB, Metasploit]
website:
render_with_liquid: false
---

## Search

```sh
# Search CMS
searchsploit cms

# Search the ProFtpd version 1.3.5
searchsploit ProFtpd
```

<br />

## Mirror (Copy) to Current Directory

```sh
searchsploit -m windows/remote/42031.py
# or
searchsploit -m 42031

# Then, before using this exploit, convert it to UNIX format
dos2unix 42031.py

# Run
python 42031.py
```