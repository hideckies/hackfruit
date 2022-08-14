---
title: Amazon Web Services (AWS) Pentesting
desc: It provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. 
tags: [Amazon, AWS, Cloud, S3, Web]
alts: []
render_with_liquid: false
---

## 1. Amazon Resource Names (ARNs)

```sh
# Format
arn:aws:<service>:<region>:<account_id>:<resource_type>/<resource_name>
```

<br />

## 2. Identify and Access Management (IAM)

```sh
# Add credentials
# This will add entries to .aws/config or .aws/credentials in user's home directory.
# <profile-name> is arbitrary.
aws configure --profile <profile-name>

# List credentials
aws configure list --profile <profile-name>



# Find the account id belonging to an access key (access key starts with "AKIA")
aws sts get-access-key-info --access-key-id AKIAQ31B...

# Determin the username the access key you're using belogns to
aws sts get-caller-identity --profile <profile-name>

# List all EC2 instances running in an account
aws ec2 describe-instances --output text --profile <profile-name>

# List all EC2 instances running in an account in a dirrerent region
aws ec2 describe-instances --output text --region us-east-1 --profile <profile-name>
```

<br />

## 3. Amazon S3

A public cloud storage resource available in Amazon Web Services (AWS) Simple Storage Service (S3), an object storage offering.

1. **S3 Bucket URLs Commonly Used**

    If you find images in target website, open the images new tab and check the URLs if they're stored in Amazon S3.  
    The following URLs templates are often used.

    ```
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
    ```

2. **XML Content Discovery**

    Accessing the S3 Bucket URL, if the contents of XML,

    ```xml

    ...
    <Contents>
    <Key>creds.txt</Key>
    ...

    ```

    Retrieve the content by accessing to URL like https://vulnerable-assets.s3.amazonaws.com/creds.txt.

3. AWS CLI

    ```sh
    # List contents of a bucket
    # http://<bucket-name>.s3.amazonaws.com
    aws s3 ls s3://<bucket-name>/ --no-sign-request

    # Download objects
    aws s3 cp s3://<bucket-name>/201101319349101615.xml . --no-sign-request

    # List all S3 buckets in the AWS account you've added.
    aws s3 ls --profile PROFILENAME
    ```

<br />

## 4. Secrets Manager

```sh
# List secrets
aws secretsmanager list-secrets --profile <profile-name>

# Get secret value
# "secret-id" is the Name of the SecretList when run 'list-secrets'.
aws secretsmanager get-secret-value --secret-id <secret-id> --profile <profile-name>


# Help
aws secretsmanager help
```

<br />

## 5. Get Access Keys From Files

```sh
# Access Key ID starts with "AKIA"
grep -e AKIA ./*
```