---
title: Netcat
desc: Manages network connections. Also known as 'nc'.
tags: [ActiveRecon, Linux, PrivEsc, ReverseShell]
alts: [Ncat, Telnet]
website:
render_with_liquid: false
---

## HTTP request

```sh
echo -en "GET / HTTP/1.1\nhost: netcat\n\n" | nc 10.10.44.191 80
```

<br />

## Listen

```sh
# HTTP
nc -lvnp 80

# HTTPS
nc -lvnp 443
```

<br />

## Listen (background)

```sh
# Add '&'
nc -lvnp 4444 &
```

<br />

## Listen for Reverse Shell

```sh
nc -lvnp 4444

# ---- Activate -------------------------

# Interactive shell
/bin/bash -i

# Enable to get a better functional shell
$ SHELL=/bin/bash script -q /dev/null
www-data@vulnerable:~$
```
