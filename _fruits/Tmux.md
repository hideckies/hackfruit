---
title: Tmux
desc: Terminal multiplexer for Unix-like operating systems.
tags: [Linux]
alts: []
website:
render_with_liquid: false
---

## Basic Commands

```sh
tmux
```

<br />

## Operations

```sh
# Common

# Activate scrolling
Ctrl+b -> [
# Deactivate Scrolling
q

# Exit
Ctrl+b -> x
exit

# --------------------------------------------------

# Window

# Create new window
Ctrl+b -> c
# Change window for specifying the number
Ctrl+b -> 0
Ctrl+b -> 1
# List all windows
Ctrl+b -> w
# Change the window name
Ctrl+b -> ,
# Change the window number
Ctrl+b -> .

# -------------------------------------------------

# Pane

# Split with up and down
Ctrl+b "                                                                                         "
# Split with left and right
Ctrl+b %
# Move between panes
Ctrl+b <arrow>
# Change pane to window
Ctrl+b !
```
