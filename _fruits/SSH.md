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


# Test the connection
ssh -T username@10.0.0.1
ssh -T username@10.0.0.1 -vvv
```

<br />

## Port Number

```sh
ssh username@10.0.0.1 -p 2200
```

<br />

## Generate SSH Keys and Set Up Public Key

```sh
# Generate SSH public and private keys
[attacker@machine]$ ssh-keygen
[attacker@machine]$ cat ~/.ssh/id_rsa.pub

# Copy the content of the id_rsa.pub

# Add the public key to the victim's authorized_keys
[victim@machine]$ echo 'ssh rsa ....= attacker@machine' >> ~/.ssh/authorized_keys
```

<br />

## Using Private Key

```sh
# Change permissions
chmod 600 private_key.txt

# Connect
ssh -i private_key.txt username@10.0.0.1
```

<br />

## Run Command After Connecting

```sh
ssh username@10.0.0.1 'ls -l'
```

<br />

## Port Forwarding (Tunnel)

Run the following commands on the attackers’s local machine.

### 1. Local Forwarding

```sh
# 4444 -> port for the attacker's machine
# 10.0.0.2:8080 -> ip/port for the victim's machine
ssh -L 4444:10.0.0.2:8080 victim@10.0.0.1

# ---------------------------------------------

In the attaker local machine, you can access http://localhost:4444.
```

### 2. Remote Forwarding

```sh
# 8080 -> port for the victim's machine
# localhost:80 -> ip/port for the attacker's machine
ssh -R 8080:localhost:80 victim@10.0.0.1
```

<br />

## SSH Server

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