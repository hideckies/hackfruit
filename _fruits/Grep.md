---
title: Grep
desc: Search plain-text data sets for lines that match a regular expression.
tags: [Linux, PrivEsc]
alts: [Cat, Find]
website:
render_with_liquid: false
---

## Display Sensitive Info in Files

```sh
# OR Search (-e)
grep -e admin -e root -e credential -e password ./*
grep -e secret -e key /*/*

# IP Address
grep -E -o "([0-9]{1,3}[\.]){3}[0-9]{1,3}" ./*

# Exclude Search (-v)
grep -v node_modules /*/*
```