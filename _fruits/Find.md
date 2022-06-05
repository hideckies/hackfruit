---
title: Find
desc: Searches files and directories.
tags: [Linux, PrivEsc, SUID]
alts: [Getcap, Grep]
website:
render_with_liquid: false
---

## Interesting files

```sh
# Sensitive data
find / -name "*.txt" 2>/dev/null
find /opt -name "*.txt" 2>/dev/null
find / -name "authorized_keys" 2>/dev/null
find / -name "users" 2>/dev/null
find / -name "*user*" 2>/dev/null
find / -name "secret.key" -or -name "secret" 2>/dev/null
find / -name "credential*.txt" 2>/dev/null
find / -name "*secret*" -or -name "*credential*" 2>/dev/null
find / -name "*root*" -or -name "*password*" 2>/dev/null
find / -name "*.key" -or -name "*.db" 2>/dev/null
find / -name "*data*" 2>/dev/null
find / -name "*flag*" 2>/dev/null

# Backup files for /etc/shadow.
# ex. /var/shadow.bak
find / -name *shadow* 2>/dev/null
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