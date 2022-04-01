---
title: Nslookup
desc: DNS (Domain Name System) resolution. Gets information about hosts. 
tags: [Linux, PassiveRecon]
alts: [Dig, Host, Whois]
website:
---

## Basic

```sh
nslookup example.com
```

## Records

```sh
# NS records
nslookup -type=ns example.com
```

## Reverse lookup

```sh
nslookup 10.0.0.1
```