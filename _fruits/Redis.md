---
title: Redis
desc: In-Memory Database. The command line utility is “redis-cli”.
tags: [Database]
alts: []
website:
render_with_liquid: false
---

## Connect (Remote)

```sh
redis-cli -h 10.0.0.1 -p 6379

# with password
redis-cli -h 10.0.0.1 -p 6379 -a password
```

<br />

## Commands

```sh
# Information on the Redis server
> info
> info keyspace

# All the keys
> keys *
# Get key value
> get <key_name>

# List all databases
> config get databases

# Select the database ('select <index>')
> select 0
> select 1
> select 12
```