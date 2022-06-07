---
title: Windows PrivEsc
desc: Checklist for Privilege Escalation on Windows.
tags: [PrivEsc, Windows]
alts: [WinPEAS]
website:
render_with_liquid: false
---

## Useful Commands on Command Prompt

```sh
# Hostname
hostname
# System information
systeminfo
# Version
ver


# Current user
whoami
echo %username%

# List all users
net users
# Specific user info
net user USERNAME
# List all groups
net localgroup

# Add new user
net user /add USERNAME PASSWORD
# Add user to group
net localgroup Administrators USERNAME /add
net localgroup "Remote Managment Users" USERNAME /add
# Then you can execute "win-rm" or "xfreerdp" with credentials


# Processes and services
sc query state=all
tasklist /svc


# Network
ipconfig
ipconfig /all
print route
arp -A


# Firewall
netsh firewall show state
netsh firewall show config
netsh advfirewall show allprofiles


# Find sensitive data
findstr /si password *.txt *.xml *.ini
findstr /si cred *.txt *.xml *.ini
findstr /spin "password" *.*
findstr /spin "password" *.*
dir /s *pass* == *cred* == *vnc* == *.config*
reg query HKLM /f password /t REG_SZ /s


# Get target process info
wmic process get processid,parentprocessid,executablepath | find "<process-id>"
# Get users SID
wmic useraccount get name,sid


# Check Recycle.bin and SID Folder
cd \'$Recycle.bin'
cd \'$Recycle.bin\S-1-5-21-198...334-1001'
```

<br />

## Computer Management

You can find all local users.

```
1. Search and open "computer management".
2. Click "Local Users and Groups".

<Users>
1. Click "Users".
2. Double-click each user to get details e.g. "Member Of".

<Groups>
1. Click "Groups".
2. Double-click each group.
3. Attempt to add new user in the group. In most cases, however, it should do as administrator.
```

<br />

## Event Viewer

It lets administrators and users view the event logs on a local or remote machine.

```
1. Search and open "Event Viewer".
```

<br />

## Sysinternals

Tools that offer technical resources and utilities to manage, diagnose, troubleshoot, and monitor a Microsoft Windows environment.

```sh
# Autoruns
# It shows what programs are configured to run during system bootup or login.
autoruns.exe

# Process Explorer
# A freeware task manager and system monitor.
procexp.exe
procexp64.exe

# Process Monitor
# It monitors and displays in real-time all file system activity.
procmon.exe
procmon64.exe

# Strings
# It is same as the Linux “strings” command.
strings.exe example.exe | findstr ""
strings64.exe example.exe | findstr "sometext"
```