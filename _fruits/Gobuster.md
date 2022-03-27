---
title: Gobuster
desc: Scans web contents.
tags: [Linux, DirectoryDiscovery, Recon]
alts: [Dirb]
---

## Using SecLists

```sh
gobuster dir -u http://10.0.0.1:80 -w /usr/share/seclists/Discovery/Web-Content/common.txt
```

Reference:
<a href="https://github.com/danielmiessler/SecLists" target="_blank" rel="noopener noreferrer">
    https://github.com/danielmiessler/SecLists
</a>