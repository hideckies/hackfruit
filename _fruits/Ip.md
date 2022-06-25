---
title: Ip
desc: Show or manipulate routing, devices, policy routing and tunnels.
tags: [Linux, Network]
alts: [Netstat]
website:
render_with_liquid: false
---

## Basic Commands

```sh
# IP address
ip a
# IP address (show only eth0, eth1)
ip a s eth0
ip a s eth1

# Static route
ip route
```

<br />

## Delete Interface

```sh
# ex. remove docker0
ip link delete docker0
```