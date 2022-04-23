---
title: SSH
desc: Connects remote server using Secure Shell protocol.
tags: [Linux, PrivEsc, SSH]
alts: [Ssh-keygen, Telnet, Ufw]
website:
render_with_liquid: false
---

## Basic

```sh
# Basic
ssh username@10.0.0.1

# Without username
ssh 10.0.0.1

# If you got the error message "...no matching host key type found. Their offer: ssh-rsa",
ssh -o HostKeyAlgorithms=+ssh-rsa username@10.0.0.1
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
# Basic
ssh -L 3000:localhost:3000 username@10.0.0.1

# Background
ssh -fN -L 3000:localhost:3000 username@10.0.0.1
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