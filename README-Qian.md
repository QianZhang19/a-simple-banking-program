# Bank Challenge

The software is used to make deposits withdrawals, check balances and print transaction statements at the bank

## User Stories

```
As a client
When I made a deposit of 1000 on 10-01-2012
I want it to be stored so that it can be printed on a statement

As a client
When I made a deposit of 2000 on 13-01-2012
I want it to be stored so that it can be printed on a statement

As a client
When I make a withdrawal of 500
I want it to be stored so that it can be printed on a statement

As a user
So that I can see activity on my account
I want my transactions to be printed as a statement

As a user 
So that I know how much money was left
I want to see the balance on my account when the statement is printed 
```

## Domain Models

### User Story 1

```
As a client
When I made a deposit of 1000 on 10-01-2012
I want it to be stored so that it can be printed on a statement
```

#### Domain Model

| Objects     | Properties                      | Messages          | Output |
| ----------- | ------------------------------- | ----------------- | ------ |
| BankAccount | BankAccount@Array[@transaction] | add(@transaction) | @void  |
| Transaction | Transaction@transaction         | add()             | @int   |

#### Tests
1. Test if deposit 1000 is made, and the amount and the date are printed on the statement 

---

### User Story 2

```
As a client
When I made a deposit of 2000 on 13-01-2012
I want it to be stored so that it can be printed on a statement
```

#### Domain Model

| Objects     | Properties                      | Messages          | Output |
| ----------- | ------------------------------- | ----------------- | ------ |
| BankAccount | BankAccount@Array[@transaction] | add(@transaction) | @void  |
| Transaction | Transaction@transaction         | add()             | @int   |

#### Tests
1. Test if deposit 2000 is made, and the amount and the date are printed on the statement 

---

### User Story 3

```
As a client
When I make a withdrawal of 500
I want it to be stored so that it can be printed on a statement
```

#### Domain Model

| Objects     | Properties                      | Messages               | Output |
| ----------- | ------------------------------- | ---------------------- | ------ |
| BankAccount | BankAccount@Array[@transaction] | withdraw(@transaction) | @void  |
| Transaction | Transaction@transaction         | withdraw()             | @int   |

#### Tests
1. Test if withdrawal 500 is made, and the amount and the date are printed on the statement 

---

### User Story 4

```
As a user
So that I can see activity on my account
I want my transactions to be printed as a statement
```

#### Domain Model

| Objects     | Properties                      | Messages                 | Output  |
| ----------- | ------------------------------- | ------------------------ | ------- |
| BankAccount | BankAccount@Array[@transaction] | printState(@transaction) | @Array  |
| Transaction | Transaction@transaction         | printState()             | @String |

#### Tests
1. Test if transactions are printed out

---

### User Story 5

```
As a user 
So that I know how much money was left
I want to see the balance on my account when the statement is printed 
```

#### Domain Model

| Objects     | Properties                      | Messages                | Output |
| ----------- | ------------------------------- | ----------------------- | ------ |
| BankAccount | BankAccount@Array[@transaction] | getAmount(@transaction) | @int   |
| Transaction | Transaction@transaction         | getAmount()             | @int   |

#### Tests
1. Test if the balance is figured out

---
## Executing program

### Steps

How to run the tests:
* Setting up an npm project with Jasmine
* Develop Domain Model by User Stories
* Create a test specification file containing tests
* Create a property file to pass tests
* Write messages in the property file
* Encapsulates Transaction data in a class - `#ttlAmount`, `#transactions`
* Encapsulates adding and storing Transactions in a class - `tranAction` contains `add` and `withdraw` methods
* Encapsulates Statement formatting in a class - `statementFormat` is used to record transaction activities and print them out with `printState` method
* please run `node transactionRunner.js` in `src` to see the print result
* please run `npm test` to pass tests

### Methods

How you approached the problem:
* setAmount() - access and set encapsulated balance data
* getAmount() - access and get encapsulated balance data
* gettransaction() - access and get encapsulated transaction activities
* add() - make a deposit
* withdraw() - make a withdrawal
* printState() - print a transaction statement
  
### Error examples
1. 'First test error'
![Alt text](errors/first-test-fails.png)

2. 'Test error'
![Alt text](errors/testError.png)

3. 'Call super() error'
![Alt text](errors/error-must_call_super().png)

## Authors

Qian Zhang






