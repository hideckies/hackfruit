---
title: Hostname
desc: Gets and sets hosname or DNS domain name.
tags: [Linux, Network]
alts: [Uname]
website:
render_with_liquid: false
---

## Get

```sh
# Alias
hostname -a

# DNS
hostname -d

# Network address
hostname -i

# All network addresses
hostname -I
```

## Set

```sh
# Temporary hostname
hostname MyHostname
```