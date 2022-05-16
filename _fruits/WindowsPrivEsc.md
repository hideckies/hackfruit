---
title: Windows PrivEsc
desc: Checklist for Privilege Escalation on Windows.
tags: [PrivEsc, Windows]
alts: [WinPEAS]
website:
render_with_liquid: false
---

## Find String

```sh
findstr sometext *.txt
```

<br />

## Recycle Bin

```powershell
cd \'$Recycle.bin'

# Check SID Folder
cd \'$Recycle.bin\S-1-5-21-198...334-1001'
```