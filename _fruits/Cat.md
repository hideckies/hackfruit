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
# Apache
cat /var/log/apache2/access.log
# Cron jobs
cat /etc/cron*
cat /etc/crontab
cat /etc/cron.d/*
cat /var/spool/cron/*
# Hosts
cat /etc/hosts
# LDAP config
cat /etc/ldap/ldap.conf
# Messages
cat /etc/issue
cat /etc/motd
# MySQL
cat /etc/my.cnf
# Nameserver
cat /etc/resolv.conf
# NFS settings
cat /etc/exports
# Os kernel version
cat /proc/version
# PAM
cat /etc/pam.d/passwd
# Sudo config
cat /etc/sudoers
cat /etc/sodoers.d/usersgroup
# SSH config
cat /etc/ssh/ssh_config
cat /etc/ssh/sshd_config
# Users and passwords
cat /etc/passwd
cat /etc/shadow
```

<br />

## Search Sensitive Text in Files

```sh
# grep -e: OR search
cat * | grep -e username -e password -e credential -e secret -e key -e root
cat */* | grep -e username -e password -e credential -e secret -e key -e root
cat */*/** | grep -e admin

# grep -v: Exclude
cat * | grep -v node_modules
```

<br />

## Misc

```sh
# Display line numbers
cat -n passwords.txt
```
