---
title: Yara
desc: Checks if files are malicious due by identifying patterns.
tags: [Linux, Malware]
alts: []
website: https://github.com/virustotal/yara
---

```sh
yara rule.yar ./somedir
```

<br />

## Rules

rule.yar

```
rule hello_checker {
    strings:
        $hello = "Hello"
        $text_file = ".txt"
    condition:
        $hello and $text_file
}
```

<br />

## Loki - Yara rules automation tool

<a href="https://github.com/Neo23x0/Loki" target="_blank" rel="noopener noreferrer">
    https://github.com/Neo23x0/Loki
</a>