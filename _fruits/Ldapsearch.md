---
title: Ldapsearch
desc: Search tool for LDAP.
tags: [LDAP]
alts: [LdapDomainDump]
website:
render_with_liquid: false
---

## Examples

```sh
# Basic
ldapsearch -x -H ldap://10.0.0.1 -b "dc=example,dc=com"

# As admin
ldapsearch -x -H ldap://10.0.0.1 -b "dc=example,dc=com" -D "cn=admin,dc=example,dc=com" -w password
ldapsearch -x -H ldap://10.0.0.1 -b "dc=example,dc=com" -D "cn=admin,dc=example,dc=com" -W
```