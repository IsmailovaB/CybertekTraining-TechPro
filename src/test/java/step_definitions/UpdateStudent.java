package step_definitions;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import pages.PreschoolMainPage;
import pages.StudentEdit;
import utilities.Config;
import utilities.DBUtility;
import utilities.Driver;
import utilities.TempStorage;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class UpdateStudent {
    PreschoolMainPage preschoolMainPage = new PreschoolMainPage();
    StudentEdit studentEdit = new StudentEdit();

    @Given("User on Preschool main page login as Student")
    public void user_on_Preschool_main_page_login_as_Student()
    {
        Driver.getDriver().get(Config.getProperty("url"));
    }

    @Given("User goes to Student module and press All Students")
    public void user_goes_to_Student_module_and_press_All_Students() throws InterruptedException {
        preschoolMainPage.studentSideBar.click();
        preschoolMainPage.allStudentsButton.click();
        preschoolMainPage.firstStudent.click();
        Thread.sleep(2000);
        TempStorage.addData("first", preschoolMainPage.studentID.getText());
        Driver.getDriver().navigate().back();
    }

    @Given("User choose Student from the datatable and click on it")
    public void user_choose_Student_from_the_datatable_and_click_on_it() throws InterruptedException {
     Thread.sleep(1000);
        preschoolMainPage.studentEditDots.click();
     Thread.sleep(1000);
     preschoolMainPage.studentEdit.click();
    }

    @Given("User changes {string} of the student")
    public void user_changes_of_the_student(String firstname) {
    studentEdit.studentFirstName.clear();
    studentEdit.studentFirstName.sendKeys(firstname);
    }

    @Given("User changes value of {string} of the student")
    public void user_changes_value_of_of_the_student(String lastname) {
        studentEdit.studentLastName.clear();
        studentEdit.studentLastName.sendKeys(lastname);
    }

    @Given("User click submit button")
    public void user_click_submit_button() {
Actions actions = new Actions(Driver.getDriver());
actions.moveToElement(studentEdit.submitStudent).click().perform();

    }

    @Given("User find udated student in the table")
    public void user_find_udated_student_in_the_table() throws InterruptedException {
        preschoolMainPage.searchID.sendKeys(TempStorage.getData("first"));
        preschoolMainPage.searchButton.click();
        Thread.sleep(1000);
        preschoolMainPage.firstStudent.click();
    }

    @Then("Verify first and last name from UI matches {string}{string}")
    public void verify_first_and_last_name_from_UI_matches(String firstNmae, String lastName) {

     Assert.assertEquals(preschoolMainPage.studentFullName.getText(),firstNmae+" "+lastName);
    }

    @Then("Verify first name from database matches {string}")
    public void verify_first_name_from_database_matches(String string) throws SQLException {
        DBUtility.createConnection();
        List<Map<Object, Object>> mydata = DBUtility.executeQuery("select * from Student where student_id = "+TempStorage.getData("first"));
            Assert.assertTrue((mydata.get(0).get("FIRST_NAME")).toString().equals(string));
    }

    @Then("Verify last name from database matches {string}")
    public void verify_last_name_from_database_matches(String string) throws SQLException {
        DBUtility.createConnection();
        List<Map<Object, Object>> mydata = DBUtility.executeQuery("select * from Student where student_id = "+TempStorage.getData("first"));
        Assert.assertTrue((mydata.get(0).get("LAST_NAME")).toString().equals(string));
    }
}
