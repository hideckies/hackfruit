---
title: Nmap
desc: Network scanner. Discovers open ports and services.
tags: [ActiveRecon, FTP, Linux, SMB, SQLi, Windows]
alts: [Sqlmap]
website:
render_with_liquid: false
---

## Host discovery

```sh
# No DNS resolution
nmap -n 10.0.0.1

# Skip host discovery
nmap -Pn 10.0.0.1
```

<br />

## Scan technics

```sh
# TCP SYN scan
nmap -sS 10.0.0.1

# UDP scan
nmap -sU 10.0.0.1

# FIN scan
nmap -sF 10.0.0.1
```

<br />

## Port

```sh
# Range
nmap -p2100-22000 10.0.0.1

# All ports
nmap -p- 10.0.0.1
nmap -p 1-65535 10.0.0.1
```

<br />

## Scripts (Nmap Scripting Engine)

```sh
# --script=default
nmap -sC 10.0.0.1

# Finds vulnerabilities
nmap --script vuln 10.0.0.1

# Detect SMB protocols and version
nmap --script smb-protocols -p 139 10.0.0.1
nmap --script smb-protocols -p 445 10.0.0.1
# Enumerate SMB shares (SMB Port is 139 and 445)
nmap --script=smb-enum-shares.nse,smb-enum-users.nse -p 139,445 10.0.0.1
nmap --script smb-enum* 10.0.0.1 -p 139,445
# Check vulnerabilities of SMB
nmap --script smb-vuln* -p 139,445 10.0.0.1
# Smb bruteforce
nmap --script smb-brute -p 445 10.0.0.1

# Enumerate the network file system
nmap --script=nfs-ls,nfs-statfs,nfs-showmount -p 111 10.0.0.1

# FTP anonymous
nmap --script ftp-anon -p 21 10.0.0.1

# HTTP enumeration
nmap --script http-enum -p 80 10.0.0.1

# Look for URLs containing queries vulnerable to an SQL injection
nmap -sV --script=http-sql-injection 10.0.0.1

# MySQL
nmap --script mysql-enum,mysql-info -p 3306 10.0.0.1
nmap --script mysql-brute -p 3306 10.0.0.1
nmap --script mysql-databases -p 3306 10.0.0.1
nmap --script mysql-users -p 3306 10.0.0.1
nmap --script mysql* -p 3306 10.0.0.1

# PJL (Printer Job Language) - jetdirect
nmap --script pjl-ready-message -p 9100 10.0.0.1
```

<br />

## OS detection

```sh
nmap -O 10.0.0.1
```

<br />

## Searvice/Version info

```sh
nmap -sV 10.0.0.1
```

<br />

## Timing (0-5. higher is faster)

```sh
nmap -T4 10.0.0.1
```

<br />

## Verbose mode

```sh
nmap -v 10.0.0.1

# More verbose
nmap -vv 10.0.0.1
```

<br />

## Enable OS detection, version detection, script scanning, traceroute

```sh
nmap -A 10.0.0.1
```

<br />

## Bypass Firewall

```sh
# Fragmented packets
nmap -f 10.0.0.1

# Specify MTU
nmap -mtu 24 10.0.0.1
```