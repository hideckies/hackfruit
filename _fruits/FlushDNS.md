---
title: Flush DNS
desc: Clear IP addresses or DNS records from caches.
tags: [DNS, Linux, Network]
alts: []
website: 
render_with_liquid: false
---

```sh
sudo resolvectl flush-cache
# or
sudo systemd-resolve --flush-cache


# Check DNS caches are actually flushed
sudo resolvectl statistics
# or
sudo systemd-resolve --statistics

```