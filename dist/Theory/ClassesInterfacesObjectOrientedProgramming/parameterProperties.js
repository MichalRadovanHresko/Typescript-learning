"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    owner;
    _balance;
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    currency;
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
    calculateTax() {
        if (this._balance > 10000)
            return 0.25;
        else
            return 0.17;
    }
}
const user = new Account(0, 'John', 12434);
user.deposit(250);
console.log(user);
console.log(user instanceof Account);
console.log(user.getBalance());
//# sourceMappingURL=parameterProperties.js.map