package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.edge.EdgeDriverInfo;
import pages.DetailedPageOfTeacher;
import pages.EditTeacherPage;
import pages.PreschoolMainPage;
import pages.TeachersPage;
import utilities.Config;
import utilities.DBUtility;
import utilities.Driver;
import utilities.TemporaryStrorage;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class UpdatingTeacherInformation_StepDefs {

    PreschoolMainPage preschoolMainPage = new PreschoolMainPage();
    TeachersPage teachersPage = new TeachersPage();
    EditTeacherPage editTeacherPage = new EditTeacherPage();
    DetailedPageOfTeacher detailedPageOfTeacher = new DetailedPageOfTeacher();


    @Given("User is on main \\(dashboard) page.")
    public void user_is_on_main_dashboard_page() {
        Driver.getDriver().get(Config.getProperty("url"));
    }

    @When("User clicks on Teachers tab.")
    public void user_clicks_on_Teachers_tab() throws InterruptedException {
       preschoolMainPage.teachersSideBar.click();
       Thread.sleep(2000);
    }

    @Then("It should display All Teacher sub tabs.")
    public void it_should_display_All_Teacher_sub_tabs() {
        Assert.assertTrue("It is not displayed, FAILED",preschoolMainPage.teachersSideBar.isDisplayed());
    }

    @When("User click on All Teacher sub tab.")
    public void user_click_on_All_Teacher_sub_tab() throws InterruptedException {
       preschoolMainPage.allTeachersButton.click();
    }

    @Then("It will navigate to the All Teacher page.")
    public void it_will_navigate_to_the_All_Teacher_page() {
      Assert.assertTrue("It is not teacher page!!!",teachersPage.headerOfTeacherPage.getText().equals("TEACHERS"));

    }

    @When("User clicks on three dots of the user then clicks Edit.")
    public void user_clicks_on_three_dots_of_the_user_then_clicks_Edit() throws InterruptedException {
        Thread.sleep(1500);
        Driver.getDriver().findElement(By.xpath("(//div[@class='row staff-grid-row']//div//div//h4//a)[1]")).click();
//      teachersPage.firstTeacher.click();
        String str = detailedPageOfTeacher.idNumber.getText();

        TemporaryStrorage.storeData("id", str);
        System.out.println(TemporaryStrorage.getData("id"));
        Driver.getDriver().navigate().back();

        Thread.sleep(2000);
    teachersPage.threeDotsButton.click();
    Thread.sleep(2000);
    teachersPage.editButton.click();
    }

    @Then("I should navigate to editing page of that user.")
    public void i_should_navigate_to_editing_page_of_that_user() {
        Assert.assertTrue("It is not on correct page, FAILED!!",editTeacherPage.editTeacherPageHeader.getText().equals("EDIT TEACHER"));
    }

    @When("User changes email addresss {string} of the user.")
    public void user_changes_email_addresss_of_the_user(String emailAddress) {
        editTeacherPage.emailAddressInputBox.clear();
        editTeacherPage.emailAddressInputBox.sendKeys(emailAddress);
    }

    @When("User changes mobile number {string} of the user.")
    public void user_changes_mobile_number_of_the_user(String mobileNumber) {
        editTeacherPage.mobileNumInputBox.clear();
        editTeacherPage.mobileNumInputBox.sendKeys(mobileNumber);
    }

    @When("User changes present address {string} of the user.")
    public void user_changes_present_address_of_the_user(String presentAddress) {
        editTeacherPage.presentAddressInputBox.clear();
        editTeacherPage.presentAddressInputBox.sendKeys(presentAddress);
    }

    @When("User clicks on Submit button.")
    public void user_clicks_on_Submit_button() {
        editTeacherPage.submitButton.click();
    }

    @Then("Verify that {string} should match email address in database.")
    public void verify_that_should_match_email_address_in_database(String emailAddress) throws SQLException {


        DBUtility.createConnection();
        System.out.println((DBUtility.executeQuery("select * from teacher where teacher_id = " + TemporaryStrorage.getData("id") )));
       Assert.assertEquals("They are not equal. Verification of email address changes FAILED!!!",((DBUtility.executeQuery("select * from teacher where teacher_id = " + TemporaryStrorage.getData("id") )).get(0).get("EMAIL_ADDRESS")), emailAddress);



    }

    @Then("Verify that {string} should match mobile number in database.")
    public void verify_that_should_match_mobile_number_in_database(String mobileNumber) throws SQLException {

        DBUtility.createConnection();
        Assert.assertEquals("They are not equal. Verification of phone number changes FAILED!!!",((DBUtility.executeQuery("select * from teacher where teacher_id = " + TemporaryStrorage.getData("id") + "")).get(0).get("PHONE")), mobileNumber);

    }

    @Then("Verify that {string} should match present address in database.")
    public void verify_that_should_match_present_address_in_database(String presentAddress) throws SQLException {

        DBUtility.createConnection();
        Assert.assertEquals("They are not equal. Verification of address changes FAILED!!!",((DBUtility.executeQuery("select * from teacher where teacher_id = " + TemporaryStrorage.getData("id") + "")).get(0).get("PREMANENT_ADDRESS")), presentAddress);

    }


}
