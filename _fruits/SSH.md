---
title: SSH
desc: Connects remote server using Secure Shell protocol.
tags: [Linux, PrivEsc]
alts: [Ssh-keygen, Telnet, Ufw]
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

## Generate SSH keys and set up public key

```sh
# Generate SSH public and private keys
[attacker@machine]$ ssh-keygen
[attacker@machine]$ cat ~/.ssh/id_rsa.pub

# Copy the content of the id_rsa.pub

# Add the public key to the victim's authorized_keys
[victim@machine]$ echo 'ssh rsa ....= attacker@machine' >> authorized_keys
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

<br />

## Port forwarding, tunnel

```sh
# ex. bind_address: 3049, host port: 2049
ssh -fN -L 3049:localhost:2049 victim@10.0.0.1
```

<br />

## SSH server

```sh
# Start SSH server
/etc/init.d/ssh start
# or
systemctl start ssh

# Stop ssh server
systemctl stop ssh

----------------------

# Check SSH running
ps -e | grep ssh
```