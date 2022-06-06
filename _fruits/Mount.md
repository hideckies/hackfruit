---
title: Mount
desc: Mount file systems.
tags: [Linux, NFS, PrivEsc]
alts: [Umount]
website:
render_with_liquid: false
---

## Basic

```sh
mount 10.0.0.1:/path/to/victim /path/to/target
```

<br />

## Mount NFS Folder (Local -> Remote)

```sh
# On attack machine

mkdir /mnt/share

sudo mount -t nfs <target-ip>:/target/dir /mnt/share -o nolock
# or
sudo mount -t nfs -o vers=2 <target-ip>:/target/dir /mnt/share -o nolock

# Check if mounting successfully
ls /mnt/share

# After that, don't forget to unmount.
umount /mnt/share
rm -rf /mnt/share
```