package pages.bankcustomer;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.time.LocalDateTime;
import java.util.List;

import static org.testng.AssertJUnit.assertEquals;

public class TransactionPage {
    WebDriver webDriver;

    @FindBy(xpath = "//button[contains(text(),'Transactions')]")
    WebElement transactionsTab;

    @FindBy(xpath = "//table[@class='table table-bordered table-striped']")
    WebElement transactionTable;

    public TransactionPage(WebDriver webDriver){
        this.webDriver=webDriver;
    }

   public void clickTransactionTab(){
        this.transactionsTab.click();
   }

   public void verifyTransactionSuccessfully(String depositAmount, String withdrawalAmount, LocalDateTime depositTime){
       List<WebElement> rows = transactionTable.findElements(By.tagName("tr"));
       boolean check = false;
       System.out.println(depositAmount);
       System.out.println(depositTime);

       for (int i = 1; i < rows.size(); i++) {
           List<WebElement> cols = rows.get(i).findElements(By.tagName("td"));
           System.out.println(cols.get(0).getText());
           if (cols.get(0).getText().equals(depositTime) && cols.get(1).getText().equals(depositAmount)) {
               check = true;
           }
       }
       System.out.println(check);
       if (check == false)
           assertEquals(0, 1);
       else
           assertEquals(1, 1);
   }
}
