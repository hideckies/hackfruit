---
title: FTP
desc: Connect to FTP server.
tags: [FTP, Linux]
alts: []
website:
---

## Basic

```sh
ftp username@10.0.0.1

# Anonymous login
ftp 10.0.0.1 
username: anonymous
password: anonymous
```

## Commands in ftp

```sh
# List files in current directory
ftp> ls

# Transfer files to the local machine.
ftp> get sample.txt
```