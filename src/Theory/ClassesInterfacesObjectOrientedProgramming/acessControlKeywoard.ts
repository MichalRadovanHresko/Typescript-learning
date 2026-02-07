class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    currency?: number;

    constructor(id: number, owner: string, balance:  number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    getBalance(): number {
        return this._balance;   
    }
    private calculateTax() {
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