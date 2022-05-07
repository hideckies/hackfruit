---
title: John The Ripper
desc: Hash password cracker. ssh2john for the SSH private key. zip2john for the zip’s password. rar2john for the rar’s password.
tags: [BruteForce, Cryptography, Linux, Password, SSH, Wordlists]
alts: [CeWL, Hashcat, HashesCom, Hydra, Unshadow]
website:
render_with_liquid: false
---

## Basic

```sh
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt

# MD5
john --format=raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt hash.txt

# SHA256
john --format=raw-sha256 --wordlist=/usr/share/wordlists/rockyou.txt hash.txt

# SHA512
john --format=raw-sha512 --wordlist=/usr/share/wordlist/rockyou.txt hash.txt

# NTLM
john --format=nt --wordlist=/usr/share/wordlists/rockyou.txt hash.txt

# NTLMv2
john --format=netntlmv2 --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

<br />

## Formats

```sh
# List formats
john --list=formats
```

<br />

## Crack SSH private key

```sh
# Transforms private key to hash
ssh2john private_key.txt > hash.txt

john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

<br />

## Crack PGP passphrase

```sh
# Transform
gpg2john sample.gpg > hash.txt

john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

<br />

## Crack RAR password

```sh
rar2john example.rar > hash.txt

john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

<br />

## Crack ZIP password

```sh
zip2john example.zip > hash.txt

john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

<br />

## Crack PKCS#12 (.pfx, .p12) password

```sh
pfx2john example.pfx > hash.txt

john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

<br />

## Crack PEM

```sh
pem2john example.pem > hash.txt

john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

<br />

## Salted hashes

```sh
# SHA512
PASS='39a57a8f090d4a56a238af02e47d44ee5489de34810ef6240280857ec69712a3e5e370b8a41899d0196ade16c0d54327c5654019292cbfe0b5e98ad1fec71bed'
SALT='72b5bc59adf3f9045bc2fe05f2002a05'
echo -n $PASS > hash_and_salt.txt
echo -n '$' >> hash_and_salt.txt
echo -n $SALT >> hash_and_salt.txt
john --format=dynamic='sha512($p.$s)' --wordlist=/usr/share/wordlists/rockyou.txt hash_and_salt.txt
```

<br />

## Generate custom wordlist from wordlist

```sh
# Add custom rules to the /etc/john/john.conf
[List.Rules:Custom]
Az"[0-9][0-9][!?#$%&/()=]"

# ----------------------------------------------------

# Generate
john --wordlist=/path/to/wordlist --rules:Custom --stdout > generated_wordlist.txt
```

<br />

## Force to crack again (remove john.pot)

```sh
rm ~/.john/john.pot
```