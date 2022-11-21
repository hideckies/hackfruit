# Hackfruit

An easy search tool that finds hacking tools, commands and cheat sheets. It helps cybersecurity learing and trainings, CTFs, bug bounty, ethical hacking, etc.

[https://hackfruit.hdks.org/](https://hackfruit.hdks.org/)

## Status (11/22/2022)

Hackfruit is now **[Exploit Notes](https://exploit-notes.hdks.org/)**.  
The reason is that I wanted to change the static site generator (Jekyll -> Lume on Deno), and change the overall direction or design.

<br />

<br />

## Development

To install dependencies from the Gemfile:

```sh
bundle install
```

To start local server, run one of the following commands.

```sh
chmod +x server.sh
./server.sh

# or

bundle exec jekyll serve --livereload
```