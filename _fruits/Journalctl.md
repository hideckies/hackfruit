---
title: Journalctl
desc: Show journal logs which are recorded by systemd-journald.
tags: [Linux, Troubleshooting]
alts: []
website: 
render_with_liquid: false
---

## Basic Commands

```sh
# Show all logs
journalctl

# Show current boot
journalctl -b

# Show kernel message from boot
journalctl -k

# Show recenct logs (x: details)
journalctl -e
journalctl -ex

# Shog logs from specified unit
journalctl -u httpd
journalctl -u sshd
```