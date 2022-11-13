---
title: PowerView
desc: A Powershell’s script to gain network situational awareness on Windows domain.
tags: [PowerShell, PowerView, Windows]
alts: [PowerShell]
render_with_liquid: false
---

## Enabling PowerView on PowerShell

```powershell
Import-Module .\PowerView.ps1
```

To start PowerView

```powershell
. .\PowerView.ps1
```

<br />

## Enumeration

```powershell
# List domain users
Get-NetUser | select cn

# List domain groups
Get-NetGroup -GroupName *admin*

# Get shared folders
Invoke-ShareFinder

# Get operating systems running
Get-NetComputer -fulldata | select operatingsystem

# Find files or directories
Get-ChildItem -r -Filter "*.txt" -Name
```
