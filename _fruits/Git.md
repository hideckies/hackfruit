---
title: Git
desc: A software for tracking changes in any sets of files. It’s also used with GitHub usually.
tags: [Linux, SSH]
alts: []
website:
render_with_liquid: false
---

## Back to the previous commit

```sh
# You can get the "commit-id" by 'git log'
git checkout <commit-id>

# Return the recent commit
git checkout master
git checkout main
```

<br />

## Branch

```sh
# Get all branches
git branch -a

# Create a new branch
git branch new-branch
```

<br />

## Clone repository

```sh
# GitHub
git clone https://github.com/username/repo.git

# via SSH
git clone ssh://git-user@10.0.0.1/path/to/repo
git clone ssh://git-user@10.0.0.1/path/to/repo.git
```

<br />

## Push

```sh
# Add the changes of the current directory to index
git add .
# For a single file (-f: force)
git add -f example.txt

# Commit with comment
git commit -m "Comment"

# Push
git push origin master
```

<br />

## Tag

```sh
# List tags
git tag
git tag -l

# Show the contents of the specific tag
git show <tag-name>
```

<br />

## View the info

```sh
# Basic information
git show
git show <branch-name>
git show <commit-id>
git show <tag-name>

# Configuration
git config --list

# Commit history
git log
git log --stat

# Compare the two commits
git diff
git diff --staged
git diff --cached

# Working tree status
git status
```