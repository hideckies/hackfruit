---
title: Nmap
desc: Network scanner. Discovers open ports and services.
tags: [ActiveRecon, FTP, Linux, MSSQL, Network, SMB, SNMP, SQLi, Windows]
alts: [Masscan, Sqlmap]
website:
render_with_liquid: false
---

## Host Discovery

```sh
# No DNS resolution
nmap -n 10.0.0.1

# Skip host discovery
nmap -Pn 10.0.0.1

# Identify hostname
nmap -sL 10.0.0.1
nmap -sL 10.0.0.1/24
```

<br />

## Scan Techniques

```sh
# TCP SYN scan
nmap -sS 10.0.0.1

# UDP Scan
nmap -sU 10.0.0.1
nmap -sU --top-ports 25 10.0.0.1

# FIN scan
nmap -sF 10.0.0.1

# Xmas scan
nmap -sX 10.0.0.1

# Custom scan type
nmap --scanflags SYNFIN 10.0.0.1
nmap -sS --scanflags SYNFIN 10.0.0.1
nmap --scanflags PSH 10.0.0.1
nmap -sF --scanflags PSH 10.0.0.1
```

<br />

## Port

```sh
# Range
nmap -p 2100-22000 10.0.0.1

# All ports
nmap -p- 10.0.0.1
nmap -p 1-65535 10.0.0.1

# First 10000 ports
nmap -p-10000 10.0.0.1

# Top ports
nmap --top-ports 100 10.0.0.1
```

<br />

## Scripts (Nmap Scripting Engine)

```sh
# --script=default
nmap -sC 10.0.0.1

# Port 21: FTP
nmap --script ftp-anon -p 21 10.0.0.1
nmap --script ftp-vuln* -p 21 10.0.0.1
nmap --script ftp* -p 21 10.0.0.1

# Port 22: SSH
nmap --script ssh-brute -p 22 10.0.0.1
nmap --script ssh* -p 22 10.0.0.1
nmap --script ssh-auth-methods --script-args="ssh.user=username" -p 22 10.0.0.1

# Port 25, 465, 587: SMTP, SMTPS, SMTPS
nmap --script smtp-brute -p 25,465,587 10.0.0.1
nmap --script smtp-commands -p 25,465,587 10.0.0.1
nmap --script smtp-enum-users -p 25,465,587 10.0.0.1
nmap --script smtp-ntlm-info --script-args smtp-ntlm-info.domain=example.com -p 25,465,587 10.0.0.1
nmap --script smtp-vuln-cve2011-1764 -p 25,465,587 10.0.0.1

# Port 53, 5353: DNS
nmap --script dns-nsec-enum --script-args dns-nsec-enum.domains vulnerable.com -p 53 10.0.0.1
nmap --script dns-random-srcport -p 53 10.0.0.1
nmap --script dns-recursion -p 53 10.0.0.1
nmap --script dns-service-discovery -p 53 10.0.0.1
nmap --script dns* -p 53 10.0.0.1

# Port 67, 68: DHCP (Server), DHCP (Client)
nmap -sU --script broadcast-dhcp-discover -p 67,68 10.0.0.1

# Port 69: TFTP (Trivial File Transfer Protocol)
nmap -sU --script tftp-enum -p 69 10.0.0.1

# Port 80, 443: HTTP, HTTPS
nmap --script http-devframework -p 80 10.0.0.1
nmap --script http-enum -p 80 10.0.0.1
nmap --script http-methods -p 80 10.0.0.1
nmap --script http-sql-injection -p 80 10.0.0.1

# Port 88: Kerberos
nmap --script krb5-enum-users --script-args krb5-enum-users.realm='example.local'-p 88 10.0.0.1

# Port 111, 2049: Network File System (NFS)
nmap --script=nfs-ls,nfs-statfs,nfs-showmount -p 111 10.0.0.1

# Port 123: NTP (Network Time Protocol)
nmap -sU --script ntp-info -p 123 10.0.0.1
nmap -sU --script ntp-monlist -p 123 10.0.0.1
nmap -sU --script ntp* -p 123 10.0.0.1

# Port 135: MSRPC
nmap --script msrpc-enum -p 135 10.0.0.1

# Port 139,445: SMB
nmap --script smb-brute -p 445 10.0.0.1
nmap --script smb-enum-shares.nse,smb-enum-users.nse -p 445 10.0.0.1
nmap --script smb-enum* -p 445 10.0.0.1
nmap --script smb-protocols -p 445 10.0.0.1
nmap --script smb-vuln* -p 445 10.0.0.1

# Port 161: SNMP (Simple Network Management Protocol)
nmap -sU --script snmp-info -p 161 10.0.0.1
nmap -sU --script snmp-interfaces -p 161 10.0.0.1
nmap -sU --script snmp-processes -p 161 10.0.0.1
nmap -sU --script snmp-sysdescr -p 161 10.0.0.1
nmap -sU --script snmp* -p 161 10.0.0.1

# Port 389: LDAP
nmap --script ldap-brute --script-args ldap.base='"cn=users,dc=cqure,dc=net"' -p 389 10.0.0.1
nmap --script ldap-search -p 389 10.0.0.1
nmap --script ldap* -p 389 10.0.0.1
nmap --script "ldap* and not brute" -p 389 10.0.0.1

# Port 1433: Microsoft SQL Server
nmap --script ms-sql-info -p 1433 10.0.0.1
nmap --script ms-sql-config -p 1433 10.0.0.1
nmap --script ms-sql-empty-password,ms-sql-xp-cmdshell -p 1433 10.0.0.1
nmap --script ms-sql* -p 1433 10.0.0.1

# Port 3306: MySQL
nmap --script mysql-info -p 3306 10.0.0.1
nmap --script mysql-enum -p 3306 10.0.0.1
nmap --script mysql-brute -p 3306 10.0.0.1
nmap --script mysql-databases -p 3306 10.0.0.1
nmap --script mysql-users -p 3306 10.0.0.1
nmap --script mysql* -p 3306 10.0.0.1

# Port 3389:  Remote Desktop Protocol (RDP)
nmap --script rdp-enum-encryption -p 3389 10.0.0.1
nmap --script rdp-ntlm-info -p 3389 10.0.0.1
nmap --script rdp* -p 3389 10.0.0.1

# Port 6379: Redis
nmap --script redis-info -p 6379 10.0.0.1
nmap --script redis-brute -p 6379 10.0.0.1

# Port 8009: Apache JServ Protocol (AJP)
nmap --script ajp-auth -p 8009 10.0.0.1
nmap --script ajp-auth --script-args ajp-auth.path=/login -p 8009 10.0.0.1
nmap --script ajp-brute -p 8009 10.0.0.1
nmap --script ajp-headers -p 8009 10.0.0.1
nmap --script ajp-methods -p 8009 10.0.0.1
nmap --script ajp-request -p 8009 10.0.0.1

# Port 8080: Web Proxy (HTTP), Apache Tomcat
nmap --script http-* -p 8080 10.0.0.1
nmap --script http-open-proxy -p 8080 10.0.0.1
nmap --script http-proxy-brute -p 8080 10.0.0.1

# Port 9100: PJL (Printer Job Language)
nmap --script pjl-ready-message -p 9100 10.0.0.1

# Vulnerabilities
nmap --script vuln 10.0.0.1
```

<br />

## OS Detection

```sh
nmap -O 10.0.0.1
```

<br />

## Searvice/Version Info

```sh
nmap -sV 10.0.0.1
```

<br />

## Timing (0-5. Higher is Faster)

```sh
nmap -T4 10.0.0.1
```

<br />

## Verbose Mode

```sh
nmap -v 10.0.0.1

# More verbose
nmap -vv 10.0.0.1
```

<br />

## Enable OS Detection, Version Detection, Script Scanning, Traceroute

```sh
nmap -A 10.0.0.1
```

<br />

## Firewall Bypass

```sh
# Fragmented packets
nmap -f 10.0.0.1

# Specify MTU (Maximum Transmission Unit)
nmap --mtu 16 10.0.0.1
nmap --mtu 24 10.0.0.1

# Decoy
nmap -D RND:3 10.0.0.1
```

<br />

## Network Ranges

```sh
nmap 10.0.0.1-255
```

<br />

## Subnet Scan

```sh
# -sP: skip port scan
nmap -sP 10.0.0.1/16
nmap -sP 10.0.0.1/24
```