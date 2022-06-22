---
title: PowerShell
desc: Run “pwsh” to use it on Linux.
tags: [ActiveDirectory, PostExploitation, Windows, WinRM]
alts: [PowerView, WindowsPrivEsc]
website:
render_with_liquid: false
---

## Start PowerShell

```sh
# Linux
pwsh

# Windows
powershell
```

<br />

## Basic Commands

```sh
# Version info
$PSVersionInfo

# 'ls' in Linux
Get-ChildIteme -File -Hidden
Get-ChildItem -File -Hidden -ErrorAction SilentlyContinue
Get-ChildItem -Directory -Hidden
Get-ChildItem -Path .\Desktop
Get-ChildItem -Recurse

# View ADS
Get-Item -Path file.exe -Stream *

# 'cd' in Linux
Set-Location -Path c:\Users\Administrator\Desktop

# 'cat' in Linux
Get-Content -Path example.txt
# 'cat | wc -l' in Linux
Get-Content -Path example.txt | Measure-Object -Word
# 
(Get-Content -Path example.txt)[318]

# 'echo hello > example.txt' in Linux
Set-Content -Path .\example.txt -Value hello

# 'find' in Linux
Select-String -Path 'c:\Users\Administrator\Desktop' -Pattern '*.txt'

# 'wget' in Linux
Invoke-WebRequest -Uri http://10.0.0.1:8000/example.exe -OutFile .\example.exe

# 'md5sum' in Linux
Get-FileHash -Algorithm MD5 example.txt

# 'strings' in Linux
.\Strings.exe -accepteula example.exe

# 'useradd' in Linux
New-LocalUser -Name "username" -Description "My first account" -NoPassword
# with password
$Password = Read-Host -AsSecureString
New-LocalUser -Name "username" -Password $Password -FullName "New User" -Description "My first account"


# 'man' or '--help' in Linux
Get-Help Get-ChildItem
Get-Help Invoke-WebRequest
```

<br />

## PowerView

PowerView is a Powershell’s script to gain network situational awareness on Windows domain.

```sh
# Start in PowerShell
. .\PowerView.ps1

# Enumerate the domain users
Get-NetUser | select cn

# Enumerate the domain groups
Get-NetGroup -GroupName *admin*

# Get shared folders
Invoke-ShareFinder

# Get operating systems running
Get-NetComputer -fulldata | select operatingsystem

# Find files or directories
Get-ChildItem -r -Filter "*.txt" -Name
```