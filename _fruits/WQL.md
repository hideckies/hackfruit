---
title: WQL
desc: Windows Management Instrumentation Query Language. 
tags: [Windows]
alts: []
website:
render_with_liquid: false
---

## Commands

```sh
# Start process - Process Explorer
SELECT * FROM Win32_ProcessStartTrace WHERE ProcessName = 'procexp64.exe'
```