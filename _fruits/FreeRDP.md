---
title: FreeRDP
desc: Connect to Windows server via Remote Desktop (RDP). The command is 'xfreerdp'.
tags: [RDP, Windows]
alts: [Remmina, Rdesktop]
website:
render_with_liquid: false
---

## Connect

```sh
# Basic
xfreerdp /u:username /v:10.0.0.1:3389
xfreerdp /u:username /p:password /cert:ignore /v:10.0.0.1 /workarea

# Create a shared drive (/drive:LOCAL_DIR,SHARE_NAME)
xfreerdp /u:username /p:password /drive:.,share /v:10.0.0.1

# Useful command for exploit
xfreerdp /v:10.0.0.1 /u:username /p:password +clipboard /dynamic-resolution /drive:/usr/share/windows-resources,share
```

<br />

## Access Shared Directory

```sh
# On Remote Windows
# Open cmd or powershell

\\tsclient\\~share\
```