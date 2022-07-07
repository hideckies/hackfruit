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

# IPv4 only
ip -4 a
ip -4 a show tun0
# IPv6 only
ip -6 a
ip -6 a show eth0

# Static route
ip route
```

<br />

## Delete Interface

```sh
# ex. remove docker0
ip link delete docker0
```