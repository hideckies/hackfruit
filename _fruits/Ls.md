---
title: Ls
desc: Lists files in directories.
tags: [Linux, PrivEsc]
alts: [Cat]
website:
render_with_liquid: false
---

## Find SSH keys

```sh
ls -la /home /root /etc/ssh /home/*/.ssh/; locate id_rsa; locate id_dsa; find / -name id_rsa 2> /dev/null; find / -name id_dsa 2> /dev/null; find / -name authorized_keys 2> /dev/null; cat /home/*/.ssh/id_rsa; cat /home/*/.ssh/id_dsa
```

<br />

## Root folder of web server

```sh
ls /var/www/
```
