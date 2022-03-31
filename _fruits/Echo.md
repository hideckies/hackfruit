---
title: Echo
desc: Outputs strings.
tags: [Linux, PrivEsc]
alts: []
website:
---

## Directories specified by PATH

```sh
echo $PATH
```

## Add text to file

```sh
# Add text
echo "Hello World" >> sample.txt

# Overwrite (original contents disappears)
echo "Hello World" > sample.txt

# Enable escape
echo -e "Hello\nWorld" > sample.txt
```