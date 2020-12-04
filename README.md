# FlashCards

## Overview

Flashcards is a simple multiple choice test that can be played in the CLI (Command-Line-Interface).

## Setup

Clone down the repo. 
 - ```git clone git@github.com:DrewBradley/flashcards-starter.git```

Once you have cloned the repo, change into the directory 
 - ```cd flashcards```

Install the library dependencies. 
 - ```npm install```

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```
Node server running on port 3000
Welcome to FlashCards! You are playing with 30 cards.
```

## Technologies

Flashcards is built using JavaScript, and runs in the Command Line Interface.

## Architecture

The program is initialized by running the ```index.js``` file in the CLI. 
 - This instantiates a new ```Game``` class, and runs ```Game.start()```. 
 - This function creates new instances of ```Card``` class by iterating through ```data.js``` and pushing them into an array that is then made into an instance of ```Deck``` class.  
 - ```Game.start()``` also creates a new ```Round``` instance, which is passed into the ```printMessage()``` function which prints a message indicating the start of a new game!. 

 ## Wins/Challenges

 Wins:
 - Getting the game to run in Terminal!
 - Learning how to write concise tests that test the correct thing.
 
 Challenges:
 - I struggled at the beginning of the project to understand what the rubric was asking for.
 - Building an application that I could not see was working, until it did.

## Images

![flash cards example gif](https://media.giphy.com/media/N1b12vhNosmnfOSErl/giphy.gif)

---

