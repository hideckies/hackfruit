---
title: Chmod
desc: Change permission of directory or file.
tags: [Linux, PrivEsc]
alts: []
website:
---

## Examples

```sh
# Basic
chmod 755 curl
chmod +x curl

# Recursive
chmod -R 755 ./somedir
```

<br />

## SUID (privilege escalation)

```sh
chmod 4755 /bin/bash

# run as privilege
user@machine:~/$ /bin/bash -p
root@machine:~/$
```