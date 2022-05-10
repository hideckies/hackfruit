---
title: Wpscan
desc: WordPress security scanner.
tags: [CMS, Web, WordPress]
alts: [WordPressPentesting]
website: https://github.com/wpscanteam/wpscan
render_with_liquid: false
---

```sh
wpscan --rua -e ap,at,tt,cb,dbe,u,m --url https://vulnerable.com -P /usr/share/wordlists/rockyou.txt

# Specifify username (-U)
wpscan --rua -e ap,at,tt,cb,dbe,u,m --url https://vulnerable.com -U username -P /usr/share/wordlists/rockyou.txt
```