---
title: Oledump
desc: A program to analyze OLE files (Compund File Binary Format). These files contain streams of data. oledump allows you to analyze these streams.
tags: [Malware]
alts: []
website: https://blog.didierstevens.com/programs/oledump-py/
render_with_liquid: false
---

## Basic Commands

```sh
oledump.py example.doc

# -s: stream number to analyze
# -d: dump
oledump.py -s 8 -d example.doc
oledump.py -s 9 -d example.doc

# Then decrypt using CyberChef
```