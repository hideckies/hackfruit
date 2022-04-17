---
title: Cat
desc: Reads contents from files.
tags: [Linux, PrivEsc]
alts: [Less, Sed]
website:
---

## Interesting

```sh
# Cron jobs
cat /etc/crontab
# NFS settings
cat /etc/exports
# Hosts
cat /etc/hosts
# LDAP config
cat /etc/ldap/ldap.conf
# Messages
cat /etc/issue
cat /etc/motd
# Nameserver
cat /etc/resolv.conf
# Os kernel version
cat /proc/version
# SSH config
cat /etc/ssh/ssh_config
cat /etc/ssh/sshd_config
# Users and passwords
cat /etc/passwd
cat /etc/shadow
# Sudo config
cat /etc/sudoers
cat /etc/sodoers.d/somefile
```

<br /><br />

## Misc

```sh
# Display line numbers
cat -n passwords.txt
```