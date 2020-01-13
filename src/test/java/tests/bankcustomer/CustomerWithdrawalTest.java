package tests.bankcustomer;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static tests.PageProvider.getCustomerDepositPage;
import static tests.PageProvider.getCustomerWithdrawalPage;

public class CustomerWithdrawalTest {
    String amountBeforeAdd="";


    @And("^I click withdrawal tab$")
    public void clickWithdrawTab() throws InterruptedException {
        Thread.sleep(2000);
        getCustomerWithdrawalPage().clickWithdrawTab();
        Thread.sleep(2000);
        amountBeforeAdd = getCustomerWithdrawalPage().getBalance();
        Thread.sleep(2000);
    }

    @And("^I type withdrawal amount as (.*)$")
    public void setWithdrawalAmount(String amount) throws InterruptedException {
        Thread.sleep(2000);
        getCustomerWithdrawalPage().setWithdrawAmount(amount);
        Thread.sleep(2000);
    }

    @And("^I click withdraw button$")
    public void clickDepositButton() throws InterruptedException {
        Thread.sleep(2000);
        getCustomerWithdrawalPage().clickWithdrawButton();
        Thread.sleep(2000);
    }

    @Then("^I verify withdrawal successfully with amount as (.*)$")
    public void verifyAddWithdrawalSuccessfully(String amount) throws InterruptedException {
        Thread.sleep(2000);
       getCustomerWithdrawalPage().verifyAddWithdrawalAmountSuccessfully(amountBeforeAdd,amount);
        Thread.sleep(2000);
    }
}
