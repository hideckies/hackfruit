---
title: Evil-WinRM
desc: Windows Remote Management shell for pentesting. It's also used for Pass The Hash.
tags: [ActiveDirectory, PassTheHash, Windows, WinRM]
alts: [CrackMapExec]
website: https://github.com/Hackplayers/evil-winrm
render_with_liquid: false
---

## Connect

```sh
evil-winrm -i 10.0.0.1 -P 5985 -u username -p password

# Pass The Hash (-H)
evil-winrm -i 10.0.0.1 -P 5985 -u username -H 0e0363213e37b94221497260b0bcb4fc

# PowerShell Local Path (-s)
evil-winrm -i 10.0.0.1 -u username -p password -s /opt/scripts
```

<br />

## Useful Commands After Connecting...

```powershell
# Upload a local file to Windows machine
PS> upload ./example.bat c:\\Users\Administrator\Desktop\exploit.bat

# Download a file to Local
PS> download c:\\Users\Administrator\Desktop\example.txt ./example.txt
```