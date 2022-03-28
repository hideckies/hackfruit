---
title: Find
desc: Searches files and directories.
tags: [Linux, PrivEsc, SUID]
alts: [Getcap]
---

## SUID/SGID files

```sh
find / -type f -perm -04000 -ls 2>/dev/null

find / -user root -perm -4000 -exec ls -ldb {} \; 2>/dev/null
```

## Writable folders

```sh
find / -writable 2>/dev/null | cut -d "/" -f 2,3 | sort -u
```