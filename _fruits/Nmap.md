---
title: Nmap
desc: Network scanner. Discovers open ports and services.
tags: [ActiveRecon, FTP, Linux, SMB, SQLi, Windows]
alts: [Sqlmap]
website:
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
```

<br />

## Port

```sh
# Range
nmap -p2100-22000 10.0.0.1

# All ports
nmap -p- 10.0.0.1
```

<br />

## Scripts (Nmap Scripting Engine)

```sh
# --script=default
nmap -sC 10.0.0.1

# Finds vulnerabilities
nmap --script vuln 10.0.0.1

# Detect SMB protocols and version
nmap --script smb-protocols 10.0.0.1 -p 139
nmap --script smb-protocols 10.0.0.1 -p 445
# Enumerate SMB shares (SMB Port is 139 and 445)
nmap --script=smb-enum-shares.nse,smb-enum-users.nse 10.0.0.1 -p 139,445
nmap --script smb-enum* 10.0.0.1 -p 139,445
# Check vulnerabilities of SMB
nmap --script smb-vuln* 10.0.0.1 -p 139,445

# Enumerate the network file system
nmap --script=nfs-ls,nfs-statfs,nfs-showmount 10.0.0.1 -p 111

# FTP anonymous
nmap --script ftp-anon -p 21 10.0.0.1

# Look for URLs containing queries vulnerable to an SQL injection
nmap -sV --script=http-sql-injection 10.0.0.1

# PJL (Printer Job Language) - jetdirect
nmap --script pjl-ready-message 10.0.0.1 -p 9100
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