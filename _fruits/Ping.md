---
title: Ping
desc: Tests reachability, connectivity of hosts.
tags: [ActiveRecon, Linux]
alts: []
website:
render_with_liquid: false
---

## Basic

```sh
ping 10.0.0.1

# Stop after 5 times
ping -c 5 10.0.0.1

# No DNS resolution
ping -n 3 10.0.0.1
```

## Count

```sh
# Stop after 5 times
ping -c 5 example.com
```