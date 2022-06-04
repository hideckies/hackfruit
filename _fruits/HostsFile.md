---
title: Hosts File
desc: Edit /etc/hosts to be able to access subdomain which is same IP as root domain.
tags: [Linux, Web]
alts: []
website:
render_with_liquid: false
---

## Resolve Host and IP in etc/hosts

```sh
vim /etc/hosts

# -------------------------------------------------------

127.0.0.1  localhost

# Custom host
10.0.0.1  vulnerable.com subdomain.vulnerable.com

# -------------------------------------------------------------

# Restart hostnamed
sudo systemctl restart systemd-hostnamed
```
