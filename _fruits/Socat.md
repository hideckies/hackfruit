---
title: Socat
desc: Opens another port and redirects to the port.
tags: [Linux, SSH]
alts: [SSH]
website:
---

```sh
# Open port 2222 which binds to port 22
socat TCP-LISTEN:2222,fork TCP:localhost:22
```