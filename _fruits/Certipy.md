---
title: Certipy
desc: Tool for Active Directory Certificate Services enumeration and abuse.
tags: [ActiveDirectory, PrivEsc, Windows]
alts: []
website: https://github.com/ly4k/Certipy
render_with_liquid: false
---

## Request Certification & Authentication

```sh
# User Template
certipy req 'vuln.local/username:password@vuln.com' -ca VULN-CA  -template User
# Machine Template
certipy req 'vuln.local/machine-name:machine-password@vuln.com' -ca VULN-CA -template Machine

# After requesting it, use the output credential when authenticating
certipy auth -pfx user.pfx
certipy auth -pfx machine.pfx
```
