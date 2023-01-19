const BankAccount = require("./bankAccount");

class StatementFormat extends BankAccount {

    add(amount, date) {
        this.setAmount(this.getAmount() + amount);
        this.gettransaction().push(date + " || " + amount.toFixed(2) + " ||        || " + this.getAmount().toFixed(2))
        return this.getAmount()
    }

    withdraw(amount, date) {
        this.setAmount(this.getAmount() - amount);
        this.gettransaction().push(date + " ||         || " + amount.toFixed(2) + " || " + this.getAmount().toFixed(2))
        return this.getAmount()
    }

    printState() {
        console.log("date       || credit  || debit  || balance");
        for (let i = this.gettransaction().length - 1; i >= 0; i--) {
            console.log(this.gettransaction()[i])
        }
    }
}

module.exports = StatementFormat;