---
title: Json Injection Examples
desc: Examples of Json Injection when POST request.
tags: [Web]
alts: []
website:
render_with_liquid: false
---

```json
{ "username": "\"; pwd \"" }
{"name":"<script>alert(1)</script>", "email":"victim@vulnerable.com"}
```