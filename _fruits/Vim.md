---
title: Vim
desc: Text editor.
tags: [Linux, PrivEsc, SUID]
alts: []
website:
render_with_liquid: false
---

## Run commands

```sh
# Run commands
:!whoami

# Open another file
:e ~/example.txt
```

<br />

## Run as root (privilege escalation)

```sh
sudo vim /example.txt

# --- in the vim editor ----------------

# Run linux commands as root
:r!whoami
```

<br />

## Shell

```sh
:set shell=/bin/bash

:shell
```