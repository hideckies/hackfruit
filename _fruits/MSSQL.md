---
title: MSSQL
desc: Microsoft SQL Server (MSQL). It is a relational database management system developed by Microsoft.
tags: [Database, MSSQL, Windows]
alts: [Impacket, WindowsPrivEsc]
website:
render_with_liquid: false
---

## Connect

```sh
# Using impacket (See "Impacket" page for details)
impacket-mssqlclient -port 1433 DOMAIN/username:password@10.0.0.1
impacket-mssqlclient -port 1433 DOMAIN/username:password@10.0.0.1 -windows-auth

# Using sqsh
sqsh -S 10.0.0.1 -U username -P password
sqsh -S 10.0.0.1 -U username -P password -D database
```

<br />

## Commands

```sh
# Get databases
> SELECT * FROM master.dbo.sysdatabases

# Get table content
> SELECT * FROM <database_name>.dbo.<table_name>
```

<br />

## xp_cmdshell

```powershell
# Using impacket, enable and disable xp_cmdshell
> enable_xp_cmdshell
> disable_xp_cmdshell

# -------------------------------------------------

# Get current user
> xp_cmdshell whoami

# Show files and directories
> xp_cmdshell dir
> xp_cmdshell dir \Users
# Show hidden files
> xp_cmdshell dir /a

# Get current directory
> xp_cmdshell cd

# Get contents of file
> xp_cmdshell more \Users\Administrator\example.txt
> xp_cmdshell type \Users\Administrator\example.txt
```