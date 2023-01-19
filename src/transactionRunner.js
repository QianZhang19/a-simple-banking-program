const StatementFormat = require("./statementPrint");

const statementFormat = new StatementFormat()

statementFormat.add(1000, "10/01/2012")

statementFormat.add(2000, "13/01/2012")

statementFormat.withdraw(500, "14/01/2012")

statementFormat.printState();


