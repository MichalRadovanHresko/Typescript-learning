class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance:  number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}

const user = new Account(0, 'John', 12434);
user.deposit(250);
console.log(user);
console.log(user instanceof Account);