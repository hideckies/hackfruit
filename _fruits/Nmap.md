---
title: Nmap
desc: Port scanner.
tags: [ActiveRecon, Linux, SQLi]
alts: [Sqlmap]
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
nmap --script=smb-enum-shares.nse,smb-enum-users.nse 10.0.0.1
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