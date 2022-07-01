---
title: Tmux
desc: Terminal multiplexer for Unix-like operating systems.
tags: [Linux]
alts: []
website:
render_with_liquid: false
---

## Basic Usage

```sh
# Start a session
tmux

# Attach a session
tmux a
tmux a -t <session-name>

# List all sessions in tmux
tmux list-sessions
tmux ls

# Finish the specified session
tmux kill-session -t <session-name>


# ----------------------------------------------

# On a session

# Stop s session
exit

# Detach a session
Ctrl+b d
```