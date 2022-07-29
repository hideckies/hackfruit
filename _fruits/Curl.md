---
title: Curl
desc: It enables data transfer over various network protocols.
tags: [Network, Web]
alts: [Web, Wget]
website:
render_with_liquid: false
---

## Basic Commands

```sh
curl example.com

# Verbose
curl example.com -v
curl example.com -vvv

# Silent
curl -s example.com

# Response header
curl example.com -I

# Download contents
curl example.com/index.html -O
curl example.com/index.html -O ./example.html

# Authentication
curl -u usernaem:password example.com
curl http://username:password@example.com

# Set header
curl -H 'Cookie: name=value' example.com
# Set multiple headers
curl -H 'Cookie: name=value' -H 'Content-Type: application/json' example.com

# Set User-Agent
curl -A 'Mozilla/5.0' example.com

# Set cookie (--cookie, -b)
curl -b 'PHPSESSID=c1ns...' example.com
# Output Set-Cookie's value in response header (--cookie-jar, -c)
curl -c ./cookie.txt example.com

# Skip the invalid SSL certificate
curl -k https://example.com
```

<br />

## Request Methods

```sh
# GET
curl -X GET https://example.com/?q=hello

# POST
curl -X POST https://example.com/comment -d "comment=hello"
```

<br />

## API CRUD

```sh
# Create
curl -X POST http://example.com/api/animal/ -d '{"name": "Lion", "age": 4}' -H 'Content-Type: application/json'


# Read
curl http://example.com/api/animal/
curl http://example.com/api/animal/Lion
# JSON format
curl -s http://example.com/api/animal/Lion | jq


# Update
curl -X PUT http://example.com/api/animal/Lion -d '{"name": "Lion", "age": 5}' -H 'Content-Type: application/json'


# Delete
curl -X DELETE http://example.com/api/animal/Lion
```