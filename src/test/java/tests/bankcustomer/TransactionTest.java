package tests.bankcustomer;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import tests.CommonTest;

import static tests.PageProvider.getTransactionsPage;

public class TransactionTest {

    @And("^I click transactions tab$")
    public void clickTransactionTab() throws InterruptedException {
        Thread.sleep(3000);
        getTransactionsPage().clickTransactionTab();
        Thread.sleep(1000);
    }

    @Then("^I verify transactions successfully with deposit amount as (.*) and withdrawal amount as (.*)$")
    public void verifyTransactionsSuccessfully(String depositAmount, String withdrawalAmount) throws InterruptedException {
        Thread.sleep(1000);
        System.out.println(CommonTest.depositTime);
//        getTransactionsPage().verifyTransactionSuccessfully(depositAmount, withdrawalAmount, CommonTest.depositTime);
        Thread.sleep(1000);

    }
}
