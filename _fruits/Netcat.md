---
title: Netcat
desc: Manages network connections.
tags: [Linux, PrivEsc, ReverseShell]
alts: [Ncat, Telnet]
---

## HTTP request

```sh
echo -en "GET / HTTP/1.1\nhost: netcat\n\n" | nc 10.10.44.191 80
```

## Listen for reverse shell

```sh
nc -lvnp 4444
```