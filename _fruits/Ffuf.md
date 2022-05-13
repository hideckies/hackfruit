---
title: Ffuf
desc: Discover web contents.
tags: [ActiveRecon, ContentDiscovery, Web]
alts: [Gobuster, Dirb, FeroxBuster]
website: https://github.com/ffuf/ffuf
render_with_liquid: false
---

## Content Discovery

```sh
# silent mode (-s)
ffuf -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.0.0.1/FUZZ

# Custom header (-H)
ffuf -H "Cookie: value=123" -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.0.0.1/FUZZ

# Recursion (-recursion, -recursion-depth)
ffuf -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.0.0.1/FUZZ -maxtime-job 60 -recursion -recursion-depth 2
```

<br />

## GET Parameter Fuzzing

```sh
# -fs: HTTP response size
ffuf -s -w /usr/share/wordlists/rockyou.txt -u http://vulnerable.com/?FUZZ=1 -fs 4242
```

<br />

## POST Data Fuzzing

```sh
# -fc: HTTP status code
ffuf -s -w /usr/share/wordlists/rockyou.txt -X POST -d "username=admin&password=FUZZ" -u http://vulnerable.com/login -fc 401
```