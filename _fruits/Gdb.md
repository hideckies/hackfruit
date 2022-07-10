---
title: Gdb
desc: GNU debugger.
tags: [Malware, ReverseEngineering]
alts: []
website:
render_with_liquid: false
---

## Basic Commands

```sh
chmod 700 example.obj
gdb example.obj

# ---------------------------------

# On debugger

# Set breakpoint at specific point
break main

# Start debugged program
run
# Buffer overflow
run <<< `python3 -c 'print("A"*32+"B"*8+"C"*8)'`
(python3 -c 'print("A"*32+"BBBBBBBB"+"\x86\x06\x40\x00\x00\x00\x00\x00")'; cat) | ./Dear

# List of integer registers and their contents
info registers

# Quit
q
```