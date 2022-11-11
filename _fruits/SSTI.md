---
title: Server-Side Template Injection (SSTI)
desc: 
tags: [Injection, Server, SSTI, Template, Web]
alts: []
render_with_liquid: false
---

## Automation

- **Tplmap**

    **[Tplmap](https://github.com/epinna/tplmap){:target="_blank"}{:rel="noopener"}** is a program for Server-Side Template Injection and Code Injection.

    ```sh
    ./tplmap.py -u http://vulnerable.com/?name=test
    ```

<br />

## Identify the Template Engine

```
a{*comment*}b       -> Smarty
${"z".join("ab")}   -> Mako or ???
{{ '7'*7 }}         -> Jinja2 or Twig or ???
```