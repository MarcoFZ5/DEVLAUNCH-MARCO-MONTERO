
function bankAccount(id, name, balance = 0) {
    this.id = id
    this.name = name
    this.balance = balance

    this.deposit = (amount) => {
        this.balance += amount
    }

    this.withdraw = (amount) => {
        if (this.balance >= amount) {
            this.balance -= amount
            return amount
        }
        return null
    }

    this.transfer = (toAccount, amount) => {
        const cash = this.withdraw(amount)
        if (cash) {
            toAccount.deposit(cash)
            return toAccount
        }
        return null
    }
    return this
}

const account1 = new bankAccount(1, 'Marco', 10000)

const account2 = new bankAccount(2, 'Felipe', 500)

account1.deposit(500)

account1.transfer(account2, 500)

console.log(account1)
console.log(account2)