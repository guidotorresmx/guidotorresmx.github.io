---
title: Github Copilot
date: 2021-11-10 14:48:57
id: 1636573737
tags:
  - github
  - vscode
categories:
  - github
  - tools
---

# Getting started

So, I've recently received my github copilot preview access and I wanted to use it ASAP, unfortunately, I didn't have the opportunity to test it up until now, for which I feel very exited about, so I wanted to write a hands-on post on the topic.

# Have you got the preview access?

Once copilot is out, it will be available for everybody for a cheap price ~~selling your soul to the microsoft which I'd say is a reasonable price for the experience~~, or maybe for free ~~if nobody pays for it~~, but we'll have to wait up until then.
fortunately I've already got my preview access approved, which can be confirmed by looking at the next screenshot, so I decided to make a guide on how to set everything up and add it to my tools repertory at once.

![preview approval](preview-approval.png)

# Setting everything up

## Getting the sauce
The installation process is quite straight forward, and it's available for the most popular IDEs __aka VSCODE, JetBrains and Neovim__ ~~this has to be a joke, where is atom???~~ which have demonstrated their value to the community in every occasion. Because I'm ~~not a soulless being~~ used to __VSCODE__, I'll just set a new workspace in there. So first step is getting to the extensions page within VSCODE and look up for "Github Copilot Extension".

![copilot extension](copilot-extension.png)

### Signing in
The extension will show a pop up in the bottom right side of your VSCODE window, where you'll have to sign in with github, just click accept to everything that could come up after that and you'll be okay.

![sign-in pop up](sign-in.png)
![authorization](authorization.png)

### First usage
The only thing left for you to do is to create a testing file. I'll go by creating a ```test.js``` file and then start typing a function prototype, if everything works, a drop down suggestions attachment is going to show, there you'll have to press `tab` to accept the suggestion.

![firs suggestion](first-suggestion.png)
![accept suggestion](accept-suggestion.png)

### Alternatives
If the first suggestion doesn't fit your needs, you can press `Alt + ]` or `Alt + [` to navigate trough some more options or you can press `Ctrl + Enter` to open up a new panel where you can inspect all suggestions at once. You can Also add comments before your function declaration and copilot will take that into consideration in order to provide more accurate results

### Beyond JS
Even tho copilot could be a great tool, it could not help anybody if the supported languages are limited to the top 3 most used languages ~~aka JS, Python and Matlab, amerite?~~. So I tried to get a curated list of the supported file extensions for this preview stage and I could not find anything ~~Even tho I googled it once, seriously?~~ so I'll dig deeper in a future article, but for the sake of demonstration, I created a bash file and OMG it actually worked.

![bash file](bash-file.png)

## Wrapping Up
So copilot is actually working, but I'll have to test it extensively before throwing up my opinion about its usability and possibilities. but I want to add that some people are quite worried because of this type of tool and the possibility of ~~everybody getting fired~~ reducing the amount of hours a programmer can actually work, but the thing is that the programmers daytime is not actually 100% programming, it is in fact mostly reading, debugging, setting up tools, coming up with ideas, communicate them; so for the time being I wouldn't be worried because of this, specially because there are a hell lot more of important problems out there to worry about, such as: global warming, war, hunger and the sharknado's saga. bye!
