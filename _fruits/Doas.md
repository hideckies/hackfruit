---
title: Doas
desc: Execute commands as another user. doas.conf is interesting to privilege escalation.
tags: [Linux, PrivEsc, SUID]
alts: [Sudo]
website: 
render_with_liquid: false
---

## Basic Commands

```sh
doas -u root <command> <arg>

doas -C /etc/doas.conf
```