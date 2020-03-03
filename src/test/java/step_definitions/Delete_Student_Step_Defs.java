package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.Delete_Student_Page;
import utilities.Driver;

public class Delete_Student_Step_Defs {

    Delete_Student_Page deleteStudentObject = new Delete_Student_Page();
    /*
    @Given("User goes to data base and checks the specific student information for testing")
    public void user_goes_to_data_base_and_checks_the_specific_student_information_for_testing() {

    }
     */

    @Given("User should go url user should be navigate the page")
    public void user_should_go_url_user_should_be_navigate_the_page() {
        Driver.getDriver().get("url");

    }

    @Given("User clicks student section")
    public void user_clicks_student_section() {


    }

    @Given("User clicks All student section")
    public void user_clicks_All_student_section() {

    }

    @Given("User clicks to student entry that was checked before from database")
    public void user_clicks_to_student_entry_that_was_checked_before_from_database() {
        deleteStudentObject.sampleStudent.click();
        String studentIDString = deleteStudentObject.studentID.getText();
        String studentNameString = deleteStudentObject.studentName.getText();


    }

    @Given("User navigate.back")
    public void user_navigate_back() {
        Driver.getDriver().navigate().back();

    }

    @Given("User deletes the student")
    public void user_deletes_the_student() {
     deleteStudentObject.actionIcon.click();
     deleteStudentObject.deleteFunction.click();
     deleteStudentObject.deleteButton.click();

    }

    @Then("The information should be deleted from data")
    public void the_information_should_be_deleted_from_data() {


    }
}
