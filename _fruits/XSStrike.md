---
title: XSStrike
desc: XSS scanner.
tags: [Web, XSS]
alts: [BurpSuite, OwaspZap]
website: https://github.com/s0md3v/XSStrike
render_with_liquid: false
---

## Get request

```sh
python xsstrike.py -u http://vulnerable.com/?param=test
```

<br />

## Post request

```sh
python xsstrike.py -u http://vulnerable.com/post --data "username=test&email=test&comment=test"

# data as JSON
python xsstrike.py -u http://vulnerable.com/comment --data '{"comment": "test"}' --json
```