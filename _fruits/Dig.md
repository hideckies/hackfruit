---
title: Dig
desc: DNS resolution.
tags: [DNS, Linux, PassiveRecon]
alts: [Host, Nslookup, Whois]
website:
render_with_liquid: false
---

## Basic

```sh
dig example.com @1.1.1.1
```

<br />

## Records

```sh
# AAAA records
dig example.com @1.1.1.1 AAAA

# MX records
dig example.com @1.1.1.1 MX
```
