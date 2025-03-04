// Ranija konvencija medju developerima je bila da se privatna svojstva i metodi
// obelezavaju sa donjom crtom ispred imena(_balance,_transactions,_processDeposit()...)
// njima je mogao pristupiti bez problema ali se postovalo to pravilo
class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log("Not enough funds");
      return;
    }

    this._processWithdraw(amount);
    this._balance -= amount;
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this._transactions.push({
      type: "deposit",
      amount,
    });
  }

  _processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this._transactions.push({
      type: "withdraw",
      amount,
    });
  }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance);

// Ali sa novom verzijom JS-a (ES2022) to je promenjeno pa imamo privatna svojstva
// kojima moe da se pristupi samo unutar klasa
// obelezavaju se sa '#'znakom ispred imena,stavljaju se obicno na pocetku klase
//  i nije potreban constructor
//Ono sto ne zelimo da je privatno,pisemo normalno

class Wallet2 {
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Not enough funds");
      return;
    }

    this.#processWithdraw(amount);
    this.#balance -= amount;
  }

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this.#transactions.push({
      type: "deposit",
      amount,
    });
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this.#transactions.push({
      type: "withdraw",
      amount,
    });
  }

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }
}
const wallet1 = new Wallet2();
wallet1.deposit(400);
wallet1.withdraw(50);
console.log(wallet1.balance);
console.log(wallet1.transactions);
// ako hocemo da pozovemo preivatno svojstvo,javlja nam se greska u kodu.
// console.log(wallet1.#balance);
