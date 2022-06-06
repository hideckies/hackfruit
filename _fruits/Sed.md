---
title: Sed
desc: Searches, finds, extracts from files.
tags: [Linux]
alts: [Cat, Less]
website:
render_with_liquid: false
---

## Examples

```sh
# Print second line from file
sed -n 2p sample.txt

# Display line numbers from 14 to 18
sed -n 14,18p example.txt
```