---
title: Remmina
desc: A remote desktop client for POSIX-based computer operating systems.
tags: [RDP, SSH, VNC, Windows]
alts: [FreeRDP, Rdesktop]
website:
render_with_liquid: false
---

## Connect

```sh
remmina

# RDP
remmina -c rdp://username@vulnerable.com
remmina -c rdp://domain\\username@vulnerable.com
remmina -c rdp://username:password@vulnerable.com
# SSH
remmina -c ssh://username@vulnerable.com
# VNC
remmina -c vnc://username@vulnerable.com
remmina -c vnc:vulnerable.com?VncUsername=username
remmina -c vnc://username:password@vulnerable.com
remmina -c vnc://vulnerable.com?VncUsername=username\&VncPassword=password
```

<br />

## Settings

```sh
# Keyboard mapping
1. On Remmina client window, click menu icon and move to "Preferences".
2. Navigate to "RDP" tab and check "Use client keyboard mapping".
3. Reboot Remmina
```