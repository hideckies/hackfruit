---
title: Curl
desc: It enables data transfer over various network protocols.
tags: [Linux]
alts: [Web, Wget]
website:
render_with_liquid: false
---

## Download Files

```sh
curl http://10.0.0.1/example.txt -o ./output.txt

# Authentication
curl -u username:password http://10.0.0.1/example.txt -o ./example.txt
```

<br />

## HTTP Request

```sh
# GET
curl -X GET https://vulnerable.com

# POST
curl -X POST https://vulnerable.com/comment -d "comment=hello"

# Set User-Agent
curl -A "test" https://vulnerable.com/
curl -H "User-Agent: test" https://vulnerable.com/
```