---
title: Wireshark
desc: Network protocol analyzer. It uses the pcapng file format.
tags: [PassiveRecon]
alts: []
website:
render_with_liquid: false
---

## Find Sensitive Information

```
1. In Wireshark, open example.pcapng.
2. Right click -> Follow -> TCP Stream
3. Open another window.
4. Find the sensitive information by clicking the arrow on the right of "Stream *".
```

<br />

## Filters

```
"http"
```