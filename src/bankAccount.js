class BankAccount {
    #ttlAmount = 0;
    #transactions = [];

    setAmount(ttlAmount) {
        this.#ttlAmount = ttlAmount;
    }

    getAmount() {
        return this.#ttlAmount;
    }

    gettransaction() {
        return this.#transactions
    }

    add(amount, date) { }

    withdraw(amount, date) { }

    printState() { }


}

module.exports = BankAccount;
