---
title: PowerView
desc: Powershell script to gain network situational awareness on Windows domain.
tags: [ActiveDirectory, PostExploitation, Windows]
alts: [PowerShell]
website:
---

Cheat Sheet:
<a href="https://gist.github.com/HarmJ0y/184f9822b195c52dd50c379ed3117993" target="_blank" rel="noopener noreferrer">
    https://gist.github.com/HarmJ0y/184f9822b195c52dd50c379ed3117993
</a>

<br />

## Examples

```powershell
# Start in PowerShell
PS C:\Users\Administrator> . .\PowerView.ps1

# Enumerate the domain users
PS C:\Users\Administrator> Get-NetUser | select cn

# Enumerate the domain groups
PS C:\Users\Administrator> Get-NetGroup -GroupName *admin*

# Get shared folders
PS C:\Users\Administrator> Invoke-ShareFinder

# Get operating systems running
PS C:\Users\Administrator> Get-NetComputer -fulldata | select operatingsystem

# Find files or directories
PS C:\Users\Administrator> Get-ChildItem -r -Filter "*.txt" -Name
```