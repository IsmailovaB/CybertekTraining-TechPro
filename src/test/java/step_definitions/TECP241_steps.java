package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import pages.AddStudentPage;
import pages.PreschoolMainPage;
import utilities.Config;
import utilities.DBUtility;
import utilities.Driver;

import java.security.Key;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class TECP241_steps {

    PreschoolMainPage mainPage = new PreschoolMainPage();
    AddStudentPage addStudentPage = new AddStudentPage();


    @Given("User on the {string} page")
    public void user_on_the_page(String addStudentText) throws InterruptedException {
        Driver.getDriver().get(Config.getProperty("url"));
        mainPage.studentSideBar.click();
//        Thread.sleep(2000);
        mainPage.addStudentButton.click();
        String actualText = addStudentPage.addStudentTextDisplay.getText();
        Assert.assertTrue(actualText.equalsIgnoreCase(addStudentText));
//        Thread.sleep(2000);
    }

    @Given("user types {string} in the firstname input box")
    public void user_types_in_the_firstname_input_box(String firstName) {
        addStudentPage.firstNameInput.sendKeys(firstName);
    }

    @Given("user types {string} in the email input box")
    public void user_types_in_the_email_input_box(String email) {
        addStudentPage.emailInput.sendKeys(email);
    }

    @Given("user types {string} in the password input box")
    public void user_types_in_the_password_input_box(String password) {
    }

    @Given("user types {string} in the subject input box")
    public void user_types_in_the_subject_input_box(String subject) {
        addStudentPage.subjectInput.sendKeys(subject);
    }



    @Given("user chooses {string} from the select dropdown")
    public void user_chooses_from_the_select_dropdown(String gender) {
        Select select = new Select(addStudentPage.selectGender);
        select.selectByVisibleText(gender);
    }

    @Given("user chooses {string} from the calendar")
    public void user_chooses_from_the_calendar(String birthdate) throws InterruptedException {
        addStudentPage.birthDate.sendKeys(birthdate, Keys.ENTER);
//        Thread.sleep(2000);
    }

    @Given("user types {string} in the batch input box")
    public void user_types_in_the_batch_input_box(String batch) {
        Select select = new Select(addStudentPage.selectBatch);
        select.selectByVisibleText(batch);
    }

    @Given("user types {string} in the permanent address input box")
    public void user_types_in_the_permanent_address_input_box(String permAddress) {
        addStudentPage.permanentAddress.sendKeys(permAddress);
    }

    @Given("user types {string} in the lastname input box")
    public void user_types_in_the_lastname_input_box(String lastname) {
        addStudentPage.lastNameInput.sendKeys(lastname);
    }

    @Given("user chooses {string} from calendar")
    public void user_chooses_from_calendar(String joindate) {
        addStudentPage.joinDateInput.sendKeys(joindate, Keys.ENTER);
    }

    @Given("user types {string} to confirm the password")
    public void user_types_to_confirm_the_password(String string) {
    }

    @Given("user types {string} in the mobile number input box")
    public void user_types_in_the_mobile_number_input_box(String mobilenum) {
        addStudentPage.mobileNumInput.sendKeys(mobilenum);
    }

    @Given("user types {string} in the major input box")
    public void user_types_in_the_major_input_box(String major) {
        addStudentPage.majorInput.sendKeys(major);
    }

    @Given("user types {string} in the company name input box")
    public void user_types_in_the_company_name_input_box(String companyName) {
        addStudentPage.companyNameInput.sendKeys(companyName);
    }
    @Given("user choose {string} from calendar")
    public void user_choose_from_calendar(String startDate) throws InterruptedException {

        addStudentPage.startDateInput.sendKeys(startDate, Keys.ENTER);
//        Thread.sleep(2000);
    }

    @Given("user types {string} in the street name input box")
    public void user_types_in_the_street_name_input_box(String street) {
        addStudentPage.streetInput.sendKeys(street);
    }


    @Given("user types {string} in the state input box")
    public void user_types_in_the_state_input_box(String state) {
        addStudentPage.stateInput.sendKeys(state);
    }

    @Given("user types {string} in the title input box")
    public void user_types_in_the_title_input_box(String title) {
        addStudentPage.titleInput.sendKeys(title);
    }


    @Given("user types {string} in the city input box")
    public void user_types_in_the_city_input_box(String city) {
        addStudentPage.cityInput.sendKeys(city);
    }

    @Given("user types {string} in the zipcode input box")
    public void user_types_in_the_zipcode_input_box(String zipcode) {
        addStudentPage.zipCodeInput.sendKeys(zipcode);
    }

    @Given("user clicks sumbit button")
    public void user_clicks_sumbit_button() {
       addStudentPage.sumbitButton.click();
    }
    @Then("user sees created student on the {string} page")
    public void user_sees_created_student_on_the_page(String allStudent) {
        String actualText = addStudentPage.allStudentText.getText();
        Assert.assertTrue(actualText.equalsIgnoreCase(allStudent));
    }

    String studentId = addStudentPage.studentId.getText();

    @Given("user searches the name of the created {string}")
    public void user_searches_the_name_of_the_created(String firstName) {
       addStudentPage.studentNameSearchBox.sendKeys(firstName);
       addStudentPage.searchButton.click();
    }

    @Then("user gets the student id and compares with database")
    public void user_gets_the_student_id_and_compares_with_database() throws SQLException {

        DBUtility.createConnection();
        List<Map<Object, Object >> mydata = DBUtility.executeQuery("select * from student");
        DBUtility.close();
        for(Map <Object, Object> map: mydata) {
            System.out.println(map);
            if (map.get("student_id").toString().equalsIgnoreCase(studentId)){
                System.out.println("PASSED");
            }else {
                System.out.println("FAILED");
            }
        }

        Driver.quitDriver();

    }


}
