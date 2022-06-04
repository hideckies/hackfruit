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
curl 10.0.0.1/example.txt -o ./output.txt
```

<br />

## HTTP Request

```sh
# GET
curl -X GET https://vulnerable.com

# POST
curl -X POST https://vulnerable.com/comment -d "comment=hello"
```