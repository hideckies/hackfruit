---
title: Objdump
desc: Display information from object files.
tags: [Malware, ReverseEngineering]
alts: [Radare2]
website: 
render_with_liquid: false
---

## Basic Commands

```sh
# -d: disassemble
objdump -d example.obj

# -M: option
objdump -M intel -d example.obj
```