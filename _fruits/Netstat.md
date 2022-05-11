---
title: Netstat
desc: Checks network connection.
tags: [Linux, PrivEsc]
alts: [Ip]
website:
render_with_liquid: false
---

```sh
netstat

# -t: tcp, -u: udp, -l: listen, -p: programs, -n: don't resolve names
netstat -lnptu
```