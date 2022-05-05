---
title: Hosts File
desc: Edit /etc/hosts to be able to access subdomain which is same IP as root domain.
tags: [Web]
alts: []
website:
render_with_liquid: false
---

## Edit /etc/hosts

```
127.0.0.1  localhost

# Custom host
10.0.0.1  vulnerable.com subdomain.vulnerable.com
```

<br />

## Restart hostnamed (after editing /etc/hosts)

```sh
systemctl restart systemd-hostnamed
```