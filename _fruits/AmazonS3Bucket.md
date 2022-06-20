---
title: Amazon S3 Bucket
desc: A public cloud storage resource available in Amazon Web Services (AWS) Simple Storage Service (S3), an object storage offering.
tags: [AWS, OSINT, Web]
alts: [AWSCLI]
website:
render_with_liquid: false
---

## Get S3 URL

If you find images in target website, open the images new tab and check the URLs if they're stored in Amazon S3.

<br />

## S3 Bucket Examples

Accesss to the specific URL in browser. If the S3 bucket is accessible, you may be able to get interesting information.

```sh
http://example-assets.s3.amazonaws.com
http://s3.amazonaws.com/example-assets/

http://example-www.s3.amazonaws.com
http://s3.amazonaws.com/example-www/

http://example-public.s3.amazonaws.com
http://s3.amazonaws.com/example-public/

http://example-private.s3.amazonaws.com
http://s3.amazonaws.com/example-private/

http://example-bucket-zero.s3.amazonaws.com
http://s3.amazonaws.com/example-bucket-zero/

http://example-bucket-one.s3.amazonaws.com
http://s3.amazonaws.com/example-bucket-one/

http://example-bucket-two.s3.amazonaws.com
http://s3.amazonaws.com/example-bucket-two/

# ---------------------------------------------------------

# Example of content of XML in page.

...
<Contents>
<Key>creds.txt</Key>
...

Access to https://vulnerable-assets.s3.amazonaws.com/creds.txt
```