
interface bankAccount {
    id: number,
    name: string,
    balance: number
    deposit: (amount: number) => void,
    withdraw: (amount: number) => number | null
    transfer: (toAccount: bankAccount, amount: number) => bankAccount | null
}

const account = function bankAccount(id: number, name: string, balance: number = 0): bankAccount {
    this.id = id
    this.name = name
    this.balance = balance

    this.deposit = (amount: number) => {
        this.balance += amount
    }

    this.withdraw = (amount: number) => {
        if (this.balance >= amount) {
            this.balance -= amount
            return amount
        }
        return null
    }

    this.transfer = (toAccount: bankAccount, amount: number) => {
        const cash = this.withdraw(amount)
        if (cash) {
            toAccount.deposit(cash)
            return toAccount
        }
        return null
    }
    return this
}

const account1: bankAccount = new (account as any)(1, "Marco", 100)

const account2: bankAccount = new (account as any)(2, 'Felipe', 500)

account1.deposit(500)

account1.transfer(account2, 500)

console.log(account1)
console.log(account2) 