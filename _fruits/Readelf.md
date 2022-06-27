---
title: Readelf
desc: Display information about one or more ELF format object files.
tags: [Malware, ReverseEngineering]
alts: []
website:
render_with_liquid: false
---

## Basic Commands

```sh
# All information
readelf -a example.so
# Headers
readelf -e example.so
# ELF file header
readelf -h example.so
# Section's header
readelf -S example.so
```