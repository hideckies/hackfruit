---
title: Getopts
desc: Retrieve arguments.
tags: [Linux]
alts: []
website:
render_with_liquid: false
---

## Basic Usage

Create “my_opt.sh”.

```sh
#!/bin/bash

getopts c cmd
echo $cmd
```

Run

```sh
./my_opt.sh -cwhoami
# kali
```

<br />

## While Getopts

Create “my_while_opt.sh”.

```sh
while getopts ab: flag
do
    case "${flag}" in
        a) command1=${OPTARG};;
        b) command2=${OPTARG};;
    esac
done

cmd1=$($command1)
echo $cmd1
cmd2=$($command2)
echo $cmd2
```

Run

```sh
./my_while_opt.sh -awhoami -btime
# kali
# real  1111.11s ...
```