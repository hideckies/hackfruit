---
title: Reverse Engineering Cheat Sheet
desc: Cheat sheet for reverse engineering.
tags: [Malware, ReverseEngineering]
alts: []
website:
render_with_liquid: false
---

## ELF File

```sh
# Check file
file example.so
readelf -a example.so

# Change MSB <=> LSB by editing binary number.
hexedit example.so
(MSB) 7F 45 4C 46  02 02 01 ... <=> (LSB) 7F 45 4C 46  02 01 01 ...

# Analyze binary
r2 example.so
>aaa
>pdf @main
```