---
title: Kiterunner
desc: Contextual content discovery tool.
tags: [API, BruteForce, ContentDiscovery, Web]
alts: [Ffuf]
website: https://github.com/assetnote/kiterunner
render_with_liquid: false
---

## Basic Usage

```sh
# -A: wordlist type (ex. first 20000 words)
# -x: max connection per host (default: 3)
# --fail-status-codes: blacklist status codes
kr scan vulnerable.com -A=apiroutes-210328:20000 -x 20 --fail-status-codes 400,404

kr brute https://vulnerable.com/dashboard -A=aspx-210328:20000 -x 20 --fail-status-codes 401,404
```

<br />

## API Scunning

```sh
kr scan https://vulnerable.com/api -A=apiroutes-210228:20000 -x 10 --fail-status-codes 401,404
kr scan https://vulnerable.com:8443/api -A=apiroutes-210228:20000 -x 10

# Multiple targets
kr scan targets.txt -w wordlist.txt -A=apiroutes-210228:20000 -x 10
```