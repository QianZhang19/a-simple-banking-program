const BankAccount = require("./bankAccount");

class TranAction extends BankAccount {

    add(amount, date) {
        this.setAmount(this.getAmount() + amount);
        return this.getAmount()
    }

    withdraw(amount, date) {
        this.setAmount(this.getAmount() - amount);
        return this.getAmount()
    }
}

module.exports = TranAction;