---
title: Cat
desc: Reads contents from files.
tags: [Linux, PrivEsc]
alts: [Less, ]
---

## Cron jobs

```sh
cat /etc/crontab
```

## Messages

```sh
# before login
cat /etc/issue

# after login
cat /etc/motd
```

## Nameserver

```sh
cat /etc/resolv.conf
```

## Users and Passwords

```sh
# Users
cat /etc/passwd

# Passwords
cat /etc/shadow
```

## Sudo configurations

```sh
cat /etc/sudoers
```

<br /><br />

## Misc

```sh
# Display line numbers
cat -n passwords.txt
```