---
title: Cat
desc: Reads contents from files.
tags: [Linux, PrivEsc]
alts: [Less, More, Sed]
website:
render_with_liquid: false
---

## Interesting

```sh
# Cron jobs
cat /etc/cron*
cat /etc/crontab
cat /etc/cron.d/*
cat /var/spool/cron/*
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
cat /etc/sodoers.d/usersgroup
```

<br />

## Search Sensitive Text in Files

```sh
# grep -e: OR search
cat * | grep -e username -e password -e credential -e secret -e key -e root
cat */* | grep -e username -e password -e credential -e secret -e key -e root
cat */*/** | grep -e admin
```

<br />

## Misc

```sh
# Display line numbers
cat -n passwords.txt
```
