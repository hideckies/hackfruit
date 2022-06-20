---
title: AWS CLI
desc: The AWS Command Line Interface (AWS CLI) is a unified tool to manage AWS services.
tags: [AWS, OSINT, Web]
alts: [AmazonS3Bucket]
website:
---

## AWS ARNs

```sh
# Format
arn:aws:<service>:<region>:<account_id>:<resource_type>/<resource_name>
```

<br />

## Useful Commands (IAM)

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

## Useful Commands (S3)

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

## Usefule Commands (Secrets Manager)

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

## Get Access Keys From Files

```sh
# Access Key ID starts with "AKIA"
grep -e AKIA ./*
```