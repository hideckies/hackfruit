---
title: Cat
desc: Reads contents from files.
tags: [Linux, PrivEsc]
alts: [Less, Sed]
website:
---

## Cron jobs

```sh
cat /etc/crontab
```

<br />

## Hosts

```sh
cat /etc/hosts
```

<br />

## Messages

```sh
# before login
cat /etc/issue

# after login
cat /etc/motd
```

<br />

## Nameserver

```sh
cat /etc/resolv.conf
```

<br />

## OS kernel version

```sh
cat /proc/version
```

<br />

## Users and Passwords

```sh
# Users
cat /etc/passwd

# Passwords
cat /etc/shadow
```

<br />

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