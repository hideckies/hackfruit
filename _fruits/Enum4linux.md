---
title: Enum4linux
desc: Enumerating Windows and Samba system.
tags: [ActiveDirectory, ActiveRecon, Linux, SMB, Windows]
alts: [Smbclient, Smbget, Smbmap]
website:
---

## Basic

```sh
enum4linux 10.0.0.1
```

<br />

## Get users

```sh
enum4linux -U 10.0.0.1
```

<br />

## Get shares

```sh
enum4linux -S 10.0.0.1
```

<br />

## All enumeration

```sh
# equivalent to -U -S -G -P -r -o -n -i
enum4linux -a 10.0.0.1
```

<br />

## Verbose

```sh
enum4linux -v 10.0.0.1
```