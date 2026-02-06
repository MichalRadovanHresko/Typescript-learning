"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    owner;
    balance;
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}
const user = new Account(0, 'John', 12434);
console.log(user);
//# sourceMappingURL=Classes.js.map