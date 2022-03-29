---
title: SSH
desc: Connects remote server using Secure Shell protocol.
tags: [Linux]
alts: [PrivEsc, Telnet]
website:
---

## Basic

```sh
ssh username@10.0.0.1
```

## Port number

```sh
ssh username@10.0.0.1 -p 2200
```

## Using private key

```sh
ssh username@10.0.0.1 -i ~/.ssh/private_key.txt
```

## Run command after connecting

```sh
ssh username@10.0.0.1 'ls -l'
```