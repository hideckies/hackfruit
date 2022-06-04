---
title: Firewalld
desc: A firewall management tool.
tags: [Linux]
alts: [Ufw]
website: 
render_with_liquid: false
---

## Open Firewall Port

```sh
firewall-cmd --zone=public --add-port 15000/tcp
```