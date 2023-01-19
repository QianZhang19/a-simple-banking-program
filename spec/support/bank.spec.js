const TranAction = require('../../src/tranAction.js');
const StatementFormat = require("../../src/statementPrint.js")

describe("bankStatement", () => {
    it("Create a bank account and makes a deposit of 1000", () => {
        // Arrange
        const tranAction = new TranAction();
        const expected = 1000;
        // Act/Assert
        tranAction.add(1000, "10/01/2012");
        const actual = tranAction.getAmount();
        // expect 
        expect(actual).toBe(expected);
    });

    it("Deposit 2000", () => {
        // Arrange
        const tranAction = new TranAction();
        const expected = 2000;
        // Act/Assert
        tranAction.add(2000, "13/01/2012");
        const actual = tranAction.getAmount();
        // expect 
        expect(actual).toBe(expected);
    });

    it("Withdraw 500", () => {
        // Arrange
        const tranAction = new TranAction();
        tranAction.setAmount(3000)
        const expected = 2500;
        // Act/Assert
        tranAction.withdraw(500, "14/01/2012");
        const actual = tranAction.getAmount();
        // expect 
        expect(actual).toBe(expected);
    });

    it("Print the transaction", () => {
        // Arrange
        const statementFormat = new StatementFormat();
        // Act/Assert
        statementFormat.printState();
    })

    it("see the balance on the account", () => {
        // Arrange
        const statementFormat = new StatementFormat();
        const expected = 2500;
        // Act/Assert
        statementFormat.add(1000, "10/01/2012 ");
        statementFormat.add(2000, "13/01/2012 ");
        statementFormat.withdraw(500, "14/01/2012 ");
        const actual = statementFormat.getAmount()
        // expect 
        expect(actual).toBe(expected);
    })

})





