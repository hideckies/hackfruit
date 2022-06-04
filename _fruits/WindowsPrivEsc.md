---
title: Windows PrivEsc
desc: Checklist for Privilege Escalation on Windows.
tags: [PrivEsc, Windows]
alts: [WinPEAS]
website:
render_with_liquid: false
---

## Basic Commands

```sh
# Hostname
hostname
# System information
systeminfo
# Current user
whoami
```

<br />

## Find String

```sh
findstr sometext *.txt
```

<br />

## Interesting Files/Directries

```powershell
# Check SID Folder
cd \'$Recycle.bin'
cd \'$Recycle.bin\S-1-5-21-198...334-1001'
```

<br />

## Add New Users

```sh
net user USERNAME PASSWORD /add

# Check the user's status
net user USERNAME
```

<br />

## Add User to Group

```sh
net localgroup Administrators USERNAME /add
net localgroup "Remote Managment Users" USERNAME /add

# Then you can execute "win-rm" or "xfreerdp" with credentials
```