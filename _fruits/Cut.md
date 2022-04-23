---
title: Cut
desc: Prints selected parts of lines.
tags: [Linux]
alts: []
website:
render_with_liquid: false
---

```sh
# Print 'Hello'
echo 'Hello World' | cut -d ' ' -f 1

# Print 'my name is Adam'
echo 'Hi, my name is Adam' | cut -d ',' -f 2
```