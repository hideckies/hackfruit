---
title: Systemctl
desc: Manages the state of the systemd.
tags: [Linux]
alts: []
website:
render_with_liquid: false
---

## Examples

```sh
# Check status the service (ex. ssh)
systemctl status ssh

# Start servide
systemctl start ssh

# Stop servide
systemctl stop ssh

# Start during system boot
systemctl enable ssh

# Not start during system boot
systemctl disable ssh
```