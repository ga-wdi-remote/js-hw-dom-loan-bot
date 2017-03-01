# LoanBot
The year is 2025 and the entire banking system has been delegated to robots. You are forced to deal with your new loan officer aptly named **LoanBot**.

![Robot Banker](http://www.vintagecomputing.com/wp-content/images/radioshack/robotic_banker_small_large.jpg)

## Introduction 
Your homework is to create an interactive ChatBot lending program called LoanBot.

## Setup
You will be doing all of your work inside of the `homework` directory. We have provided the `index.html`, `script.js`, and `style.css` for you already.

## User Interface
Whenever the user types in the `prompt` field and presses the `return/enter` key, append a `<li>` with the value of the text value of the `prompt` to the `ul#log`, and then reset the value of the `prompt`. LoanBot's response should be appended as `<li>` tags beneath the `prompt` in the `ul#log`. Create each `<li>` with three possible classes:
  - `prompt`: command from the `prompt`
  - `.emote`: _Indicates a LoanBot action_
  - `loanBot`: For LoanBot's replies

  (_Hint: You will be using an event listener to capture the keystrokes_)

## Commands
#### How to read the examples:
> This is the command you type

- This is LoanBot's response

#### 1
 LoanBot starts off with `$10,000`.
> purse

- LoanBot has 10000 dollars

#### 2
LoanBot should be able to loan money.
> loan Bobby 50 dollars

- LoanBot gives Bobby 50 dollars
_Be sure to update the purse_

#### 3
LoanBot keeps track of his debts
> ledger

-_LoanBot pulls out ledger_
- Bobby owes you 50 dollars
- Jaden owes you 30 dollars

#### 4
LoanBot can collect interest on debts and set interest rate
> collect interest

- _LoanBot collects interest at 35%_
- Bobby now owes me 67.50 dollars
- Jaden now owes me 40.50 dollars

> set interest rate at 15%

- Loanbot adjusts interest rate from 35% to 15%

#### 5
LoanBot can collect debts
> collect 50 dollars from Bobby

- _LoanBot opens his purse and collects Bobby's 50 dollars of Bobby's debt_
