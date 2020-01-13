$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/bankcustomer/transactions.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Customer transaction",
  "description": "",
  "id": "customer-transaction",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Customer transaction successfully",
  "description": "",
  "id": "customer-transaction;customer-transaction-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as \u003cdepositamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as \u003cwithdrawalamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify transactions successfully with deposit amount as \u003cdepositamount\u003e and withdrawal amount as \u003cwithdrawalamount\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "customer-transaction;customer-transaction-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "depositamount",
        "withdrawalamount"
      ],
      "line": 17,
      "id": "customer-transaction;customer-transaction-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "4000",
        "2000"
      ],
      "line": 18,
      "id": "customer-transaction;customer-transaction-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 13770743699,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Customer transaction successfully",
  "description": "",
  "id": "customer-transaction;customer-transaction-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as 4000",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as 2000",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify transactions successfully with deposit amount as 4000 and withdrawal amount as 2000",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 6396654901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 38
    }
  ],
  "location": "CommonTest.depositSuccessfully(String)"
});
formatter.result({
  "duration": 7280362700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 41
    }
  ],
  "location": "CommonTest.withdrawalSucessfully(String)"
});
formatter.result({
  "duration": 15481600500,
  "status": "passed"
});
formatter.match({
  "location": "TransactionTest.clickTransactionTab()"
});
formatter.result({
  "duration": 4119908100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 58
    },
    {
      "val": "2000",
      "offset": 88
    }
  ],
  "location": "TransactionTest.verifyTransactionsSuccessfully(String,String)"
});
formatter.result({
  "duration": 2000368200,
  "status": "passed"
});
});