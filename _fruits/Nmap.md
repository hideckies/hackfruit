---
title: Nmap
desc: Network scanner. Discovers open ports and services.
tags: [ActiveRecon, Linux, SMB, SQLi, Windows]
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

## Scan technics

```sh
# TCP SYN scan
nmap -sS 10.0.0.1

# UDP scan
nmap -sU 10.0.0.1
```

## Port

```sh
# Range
nmap -p2100-22000 10.0.0.1

# All ports
nmap -p- 10.0.0.1
```

## Scripts (Nmap Scripting Engine)

```sh
# Enumerate SMB shares (SMB Port is 139 and 445)
nmap --script=smb-enum-shares.nse,smb-enum-users.nse 10.0.0.1 -p 139,445
nmap --script smb-enum* 10.0.0.1 -p 139,445
# Check vulnerabilities of SMB
nmap --script smb-vuln* 10.0.0.1 -p 139,445

# Enumerate the network file system
nmap --script=nfs-ls,nfs-statfs,nfs-showmount 10.0.0.1 -p 111

# Look for URLs containing queries vulnerable to an SQL injection
nmap -sV --script=http-sql-injection 10.0.0.1
```

## OS detection

```sh
nmap -O 10.0.0.1
```

## Searvice/Version info

```sh
nmap -sV 10.0.0.1
```

## Verbose mode

```sh
nmap -v 10.0.0.1
```

## Enable OS detection, version detection, script scanning, traceroute

```sh
nmap -A 10.0.0.1
```