---
title: PowerShell
desc: Run “pwsh” to use it on Linux.
tags: [ActiveDirectory, PostExploitation, Windows, WinRM]
alts: [PowerView]
website:
render_with_liquid: false
---

## Basic Commands

```shell
PS> $PSVersionTable
```

<br />

## PowerShell on Linux

```sh
pwsh
```

<br />

## PowerShell on Windows

```powershell
# Start and bypass the PowerShell execution policy (enable to run scripts)
C:\Users\Administrator> powershell -ep bypass

# Show hidden files and folders 
PS C:\Users\Administrator> dir -Force

# Display the content of the file
PS C:\Users\Administrator> Get-Content sample.txt

# Bloodhound data collection
PS C:\Users\Administrator> Invoke-BloodHound -CollectionMethod All -Domain sample.domain -ZipFileName sample.zip
```