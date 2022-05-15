---
title: Knock
desc: Subdomain scanner.
tags: [ActiveRecon, DNS, Web]
alts: [MassDNS]
website: https://github.com/guelfoweb/knock
render_with_liquid: false
---

```sh
knockpy vulnerable.com

# Using wordlist
knockpy -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt
```