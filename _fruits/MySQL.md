---
title: MySQL
desc:  Connect to MySQL remotely.
tags: [Linux]
alts: []
website:
render_with_liquid: false
---

## Connect (local)

```sh
mysql -u username -p
```

<br />

## Connect (remote)

```sh
# Basic
mysql -u username -p password -h 10.0.0.1 -P 3306 -D local

# Login as root without password
mysql -u root -h 10.0.0.1 -P 3306
```

<br />

## Commands

```sh
# Display databases
> show databases;

# Switch to the database
> use db_name;

# Display tables in the current database
> show tables;
# Display tables and table type
> show full tables;
# Display tables in the database
> show tables from db_name;
# Display tables which names start with 'user'
> show tables like 'user%';
# Display tables which names start with 'user' in the database
> show tables from db_name like 'user%';

# Display everything in the table
> select * from table_name;
```