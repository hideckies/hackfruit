---
title: Dig
desc: DNS resolution.
tags: [Linux, PassiveRecon]
alts: [Host, Nslookup, Whois]
website:
---

## Basic

```sh
dig example.com @1.1.1.1
```

## Records

```sh
# AAAA records
dig example.com @1.1.1.1 AAAA

# MX records
dig example.com @1.1.1.1 MX
```