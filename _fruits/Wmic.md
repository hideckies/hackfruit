---
title: Wmic
desc: The Windows Management Instrumentation Command line (WMIC).
tags: [Windows]
alts: []
website: 
render_with_liquid: false
---

```sh
# Find the target process
wmic process get processid,parentprocessid,executablepath | find "<process-id>"
```