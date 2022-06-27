---
title: Hd
desc: Display file contents in hexadecimal, decimal, octal, or ascii.
tags: [Malware, ReverseEngineering]
alts: []
website:
render_with_liquid: false
---

## Basic Commands

```sh
# -n: only length bytes of input (ex. display the first 28 bytes)
# -s: skip offset bytes from the beginning (ex. no display the first 568 bytes)
hd -n 28 -s 568 example.so
# only display the first 64 bytes
hd -n 64 example.bin
```