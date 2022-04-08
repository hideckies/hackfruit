---
title: Mount
desc: Mount file systems.
tags: [Linux, PrivEsc]
alts: [Umount]
website:
---

## Basic

```sh
mount 10.0.0.1:/path/to/victim /path/to/target
```

<br />

## Mount share directory (type: NFS)

```sh
mkdir /tmp/share

sudo mount -t nfs -o port=4444 localhost:/ /tmp/share
```