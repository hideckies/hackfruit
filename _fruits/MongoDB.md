---
title: MongoDB
desc: Connect to MongoDB.
tags: [Database, Linux]
alts: []
website:
render_with_liquid: false
---

## Connect (local)

```sh
# Basic (default port: 27017)
mongo

# Specify port
mongo --port 27117
```

<br />

## Connect (remote)

```sh
mongo --host 10.0.0.1 --port 27017 -u username -p password
mongo "mongodb://10.0.0.1:27017"
```

<br />

## Shell commands

```sh
# All databases
> show dbs
# Current database
> db
# Switch database
> use db_name
# Collections
> show collections
# Run javascript file
> load("example.js")

# List users in the current database
> show users
> db.admin.find()

# Add data
> db.admin.insert()
# Update data
> db.admin.update({"_id": ObjectId("e75...")}, {$set: {"name": "Michael"}})

# Create
> db.<collection_name>.insertOne({"name": "michael"})
# Read
> db.<collection_name>.find()
> db.<collection_name>.findOne({"username":"michael"})
# Update
> db.<collection_name>.update({"_id": 1}, {"age": 28})
# Delete
> db.<collection_name>.remove({"name": "Micael"})
```