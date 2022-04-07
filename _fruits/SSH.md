---
title: SSH
desc: Connects remote server using Secure Shell protocol.
tags: [Linux, PrivEsc]
alts: [ssh-keygen, Telnet]
website:
---

## Basic

```sh
ssh username@10.0.0.1

# If you got the error message "...no matching host key type found. Their offer: ssh-rsa",
ssh -oHostKeyAlgorithms=+ssh-rsa username@10.0.0.1
```

<br />

## Port number

```sh
ssh username@10.0.0.1 -p 2200
```

<br />

## Using private key

```sh
# Change permissions
chmod 600 private_key.txt

# Connect
ssh -i private_key.txt username@10.0.0.1
```

<br />

## Run command after connecting

```sh
ssh username@10.0.0.1 'ls -l'
```