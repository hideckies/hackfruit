---
title: Yara
desc: Checks if files are malicious by identifying patterns. It recommended to use automation tools like LOKI, yarGen.
tags: [Linux, Malware]
alts: [VirusTotal]
website: https://github.com/virustotal/yara
render_with_liquid: false
---

## Basic Commands

```sh
yara rule.yar ./somedir
# Print only number of matches
yara -c rule.yar ./somedir
# Print only not satisfied rules 
yara -n rule.yar ./somedir
# Print metadata
yara -m rule.yar ./somedir
```

<br />

## Rules

rule.yar

```
rule rule_name {
    meta:
        author = "pentester"
        description = "test rule"
        created = "6/20/2022 00:00"
    strings:
        $hello = "Hello"
        $text_file = ".txt"
    condition:
        $hello and $text_file
}
```

<br />

## Loki - Yara automation tool

<a href="https://github.com/Neo23x0/Loki" target="_blank" rel="noopener noreferrer">
    https://github.com/Neo23x0/Loki
</a>

```sh
# Update first, then will add `signature-base` directory
python ~/Loki/loki.py --update

# Run
python ~/Loki/loki.py -p ./suspicious_files_dir

# Run & output a log file
python loki.py -p ./suspicious_files_dir -l log.txt
```

<br />

## yarGen - Yara rules generator

<a href="https://github.com/Neo23x0/yarGen" target="_blank" rel="noopener noreferrer">
    https://github.com/Neo23x0/yarGen
</a>

```sh
# Update first
python ~/yarGen/yarGen.py --update

# Generate Yara ruls for specific file
python ~/yarGen/yarGen.py -m ./suspicious_files_dir --excludegood -o ./suspicious_files_dir/rule.yar

# Check if the file flagged
yara ./suspicious_files_dir/rule.yar ./suspicious_files_dir/somefile.php

# If flagged, copy this ruls to Loki's signature yara directory
cp ./suspicious_files_dir/rule.yar ~/Loki/signature-base/yara

# Then run Loki
# ...
```