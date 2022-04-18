---
title: Wfuzz
desc: Brute force HTTP GET, POST request in web application.
tags: [BruteForce, Linux, Password]
alts: [Hydra]
website:
---

## POST request

```sh
# Hide response with specific content
# --hh 42 (hide when the chars of content (Content-Length) is 42)
wfuzz -X POST -H "User-Agent: Bypass" -d '{"username":"marco","password":"FUZZ"}' -w /path/to/wordlist -u http://10.0.0.1/login --hh 42
```