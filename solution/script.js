window.onload = function() {

  var prompt = document.getElementById('prompt');
  var log = document.getElementById('log');

  prompt.addEventListener('keypress', function(event){
    event.stopPropagation();

    if (event.key == "Enter") {
      var userLi = document.createElement('li');
      var output = handleInput(prompt.value);
      var botLi = document.createElement('li');

      userLi.innerHTML = prompt.value;
      userLi.setAttribute('class', 'prompt');

      log.appendChild(userLi);
      botLi.setAttribute('class', 'emote');
      botLi.innerHTML = output;
      log.appendChild(botLi);

      prompt.value = '';
    }
  })
}

function handleInput(input){
  var args = input.split(' ');
  switch(args[0]){
    case 'purse':
      return loanBot.purse();
      break;
    case 'loan':
      return loanBot.loan(args[1], Number(args[2]));
      break;
    case 'ledger':
      return loanBot.ledger();
      break;
    case 'collect':
      if(args[1] === 'interest'){
        return loanBot.accrue();
      } else {
        return loanBot.collect(args[4], Number(args[1]));
      }
      break;
    case 'set':
      return loanBot.setInterest(Number.parseFloat(args[4].match(/[0-9]+/))/100);
      break;
    default:
      return 'Command not recognized';
      break;
  }
}

var loanBot = {
  bank: 10000,
  accounts: {},
  rate: 0.35,

  purse: function() {
    return `LoanBot has ${this.bank} dollars`;
  },

  loan: function(person, amount) {
    if (amount > this.bank) {
      return 'Transaction denied. Insufficient funds';

    } else {
      if (this.accounts[person]) {
        this.accounts[person] += amount;
      } else {
        this.accounts[person] = amount;
      }

      this.bank -= amount;

      return `LoanBot gives ${person} ${amount} dollars`
    }
  },

  ledger: function() {
    for (var account in this.accounts) {
      return `${account} owes you ${this.accounts[account]} dollars <br>`
    }
  },

  accrue: function() {
    for (var account in this.accounts) {
      this.accounts[account] = this.accounts[account] * (1 + this.rate);
    }

    return `LoanBot collects interest at ${this.rate * 100}% <br> ${ this.ledger() }`
  },

  setInterest: function(newRate) {
    var oldRate = this.rate;
    this.rate = newRate;

    return `LoanBot adjusts interest rate from ${oldRate*100}% to ${newRate*100}% <br>`;
  },

  collect: function(person, ammount) {
    if (!this.accounts[person]) {
      return `${person} does not have an account with LoanBot`
    } else {
      this.accounts[person] -= ammount;
      this.bank += ammount;

      return `LoanBot collects ${ammount} dollars of ${person}'s debt`
    }
  }
};
