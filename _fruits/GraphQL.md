---
title: GraphQL
desc: An open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.
tags: [Web]
alts: []
website:
render_with_liquid: false
---

## Access

```
https://vulnerable.com/graphql
https://vulnerable.com/graphiql
https://vulnerable.com/graphql.php
https://vulnerable.com/graphql/console
```

<br />

## Basic Query

```graphql
query {
	user {
		id
		username
	}
}
```

<br />

## Basic Enumeration

```graphql
query {
  __schema {
    types {
      enumValues {
        name
      }
      name
      kind
      ofType {
        name
        kind
      }
      fields {
        name
        description
      }
    }
  }
	__type(name: "admin") {
		name
	}
}
```

<br />

## Mutation

Modify server-side data.

```graphql
mutation {
  modifyBug(id: 2, private: false) {
    ok
  }
}
```