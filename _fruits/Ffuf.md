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
ffuf -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://vulnerable.com/FUZZ

# Custom header (-H)
ffuf -H "Cookie: value=123" -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://vulnerable.com/FUZZ

# Recursion (-recursion, -recursion-depth)
ffuf -s -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://vulnerable.com/FUZZ -maxtime-job 60 -recursion -recursion-depth 2

# -mc: Match HTTP statuc code
ffuf -s -w /usr/share/wordlists/rockyou.txt -u http://vulnerable.com/FUZZ -mc 200
# -ms: Match HTTP response size
ffuf -s -w /usr/share/wordlists/rockyou.txt -u http://vulnerable.com/FUZZ -ms 1234
ffuf -s -w /usr/share/wordlists/rockyou.txt -u http://vulnerable.com/FUZZ -ms 50-300

# -fc: Filter HTTP statuc code
ffuf -s -w /usr/share/wordlists/rockyou.txt -u http://vulnerable.com/FUZZ -fc 302
# -fs: Filter HTTP response size
ffuf -s -w /usr/share/wordlists/rockyou.txt -u http://vulnerable.com/FUZZ -fs 1234
ffuf -s -w /usr/share/wordlists/rockyou.txt -u http://vulnerable.com/FUZZ -fs 50-300
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