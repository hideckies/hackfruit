---
title: MySQL
desc:  Connect to MySQL remotely.
tags: [Database, PrivEsc]
alts: []
website:
render_with_liquid: false
---

## Connect (Local)

```sh
# No password
mysql -u username
# With Password
mysql -u username -p


# Specity database name
mysql -u username -p database_name
```

<br />

## Connect (Remote)

```sh
# Basic
mysql -u username -p -h 10.0.0.1 -P 3306

# Without password (remove -p)
mysql -u username -h 10.0.0.1 -P 3306

# Specify database (-D)
mysql -u username -p -h 10.0.0.1 -D database_name

# Default credential (username: root, no password)
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

# Create new table
> create table table_name(column_name column_type);
> create table table_name(user_id int, user_name varchar(40));

# Create an user-defined function
> create function func_name(param1, param2) returns datatype;
> create function new_fund(age integer) returns integer;

# Use a function
> select func_name(param1, param2);

# Insert new record to the table
> insert into table_name values(value1, value2);
```