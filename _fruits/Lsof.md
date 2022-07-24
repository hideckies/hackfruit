---
title: Lsof
desc: List all open files and the processes that opened them.
tags: [Linux]
alts: []
website:
render_with_liquid: false
---

## Basic Usage

```sh
# List all processes
lsof

# Select IPv[46] files
lsof -i
# Select IPv[46] files against specific port
lsof -i:53
lsof -i:80
# Select IPv[46] files against specific port (no port names)
lsof -i:53 -P
lsof -i:80 -P

# Specify user
lsof -u username
```