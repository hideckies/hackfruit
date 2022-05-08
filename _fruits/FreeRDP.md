---
title: FreeRDP
desc: Connect to Windows server via Remote Desktop (RDP). The command is 'xfreerdp'.
tags: [Linux, Windows]
alts: [Rdesktop]
website:
render_with_liquid: false
---

```sh
xfreerdp /u:username /v:10.0.0.1:3389
xfreerdp /u:username /p:password /cert:ignore /v:10.0.0.1 /workarea
```