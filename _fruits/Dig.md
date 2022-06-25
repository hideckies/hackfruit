---
title: Dig
desc: DNS resolution.
tags: [DNS, Linux, Network, PassiveRecon]
alts: [Host, Nslookup, Whois]
website:
render_with_liquid: false
---

## Basic Commands

```sh
dig example.com

# Useful command
dig example.com +nocmd +noall +answer
```

<br />

## Specify DNS Server

```sh
# Cloudflare
dig example.com @1.1.1.1
# Google
dig example.com @8.8.8.8
# Quad9
dig example.com @9.9.9.9

# Custom name server like private DNS server
dig example.com @10.0.0.1
```

<br />

## Specify Record Type

```sh
# All records
dig example.com any +noall +answer
# A record
dig example.com a +noall +answer
# CNAME record
dig example.com cname +noall +answer
# TXT record
dig example.com txt +noall +answer
# MX record
dig example.com mx +noall +answer
# NS record
dig example.com ns +noall +answer
# SOA record
dig example.com soa +noall +answer
```