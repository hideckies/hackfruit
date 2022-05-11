---
title: Find
desc: Searches files and directories.
tags: [Linux, PrivEsc, SUID]
alts: [Getcap]
website:
render_with_liquid: false
---

## Interesting files

```sh
find / -name "*.txt" 2>/dev/null
find /opt -name "*.txt" 2>/dev/null

# SSH keys
find / -name authorized_keys 2>/dev/null
```

<br />

## SUID/SGID files

```sh
# Option 1
find / -type f -perm -04000 2>/dev/null

# Option 2
find / -type f -perm -u=s 2>/dev/null

# Option 3
find / -user root -perm -4000 -exec ls -ldb {} \; 2>/dev/null
```

<br />

## Writable folders

```sh
find / -writable 2>/dev/null | cut -d "/" -f 2,3 | sort -u
```