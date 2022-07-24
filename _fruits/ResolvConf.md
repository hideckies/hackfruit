---
title: Resolv.conf
desc: Configure the system's Domain Name System (DNS) resolver.
tags: [DNS, Linux, Network, Web]
alts: [HostsFile]
website:
render_with_liquid: false
---

## Resolve Nameserver

```sh
vim /etc/resolv.conf

# ------------------------------------------------------

...

# Google nameservers
nameserver 8.8.8.8
nameserver 8.8.4.4
# Google nameservers (IPv6)
nameserver 2001:4860:4860::8888
nameserver 2001:4860:4860::8844

# -------------------------------------------------------


# Restart resolved
sudo systemctl restart systemd-resolved.service
```