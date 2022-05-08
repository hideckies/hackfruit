---
title: Manual Content Discovery
desc: Web content discovery manually.
tags: [ActiveRecon, ContentDiscovery, Web]
alts: [Dirb, Ffuf, Gobuster]
website:
render_with_liquid: false
---

## Interesting files

```
/robots.txt
/security.txt
/sitemap.xml
/sitemaps.xml
```

<br />

## Favicon

Get the information of the used framework.

```sh
curl https://vulnerable.com/images/favicon.ico | md5sum
```

Then check what is the framework used in the website with the
<a href="https://wiki.owasp.org/index.php/OWASP_favicon_database">
    OWASP Favicon Database
</a>.