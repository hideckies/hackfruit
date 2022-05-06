---
title: Nmap
desc: Network scanner. Discovers open ports and services.
tags: [ActiveRecon, FTP, Linux, MSSQL, SMB, SQLi, Windows]
alts: [Masscan, Sqlmap]
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

## Scan techniques

```sh
# TCP SYN scan
nmap -sS 10.0.0.1

# UDP scan
nmap -sU 10.0.0.1

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
nmap -p2100-22000 10.0.0.1

# All ports
nmap -p- 10.0.0.1
nmap -p 1-65535 10.0.0.1

# Top ports
nmap --top-ports 100 10.0.0.1
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
nmap --script smb-enum-shares.nse,smb-enum-users.nse -p 139,445 10.0.0.1
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
# SQL injection
nmap -sV --script http-sql-injection 10.0.0.1

# MySQL
nmap --script mysql-enum,mysql-info -p 3306 10.0.0.1
nmap --script mysql-brute -p 3306 10.0.0.1
nmap --script mysql-databases -p 3306 10.0.0.1
nmap --script mysql-users -p 3306 10.0.0.1
nmap --script mysql* -p 3306 10.0.0.1

# Microsoft SQL server
nmap --script ms-sql-info,ms-sql-config -p 1433 10.0.0.1
nmap --script ms-sql-empty-password,ms-sql-xp-cmdshell -p 1433 10.0.0.1
nmap --script ms-sql* -p 1433 10.0.0.1

# PJL (Printer Job Language) - jetdirect
nmap --script pjl-ready-message -p 9100 10.0.0.1

# SSH
nmap --script ssh-brute -p 22 10.0.0.1
nmap --script ssh* -p 22 10.0.0.1

# LDAP
nmap --script "ldap* and not brute" 10.0.0.1
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

## Firewall bypassing

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

## Subnet scan

```sh
# -sP: skip port scan
nmap -sP 10.0.0.1/16
nmap -sP 10.0.0.1/24
```