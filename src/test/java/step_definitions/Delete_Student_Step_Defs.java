package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import pages.Delete_Student_Page;
import pages.PreschoolMainPage;
import utilities.Config;
import utilities.DBUtility;
import utilities.Driver;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class Delete_Student_Step_Defs {

    Delete_Student_Page deleteStudentObject = new Delete_Student_Page();
    PreschoolMainPage preschoolMainPage = new PreschoolMainPage();
    public static String studentIDString;


    @Given("User should go url user should be navigate the page")
    public void user_should_go_url_user_should_be_navigate_the_page() {
        Driver.getDriver().get(Config.getProperty("url"));
    }
    @And("User clicks student section")
    public void user_clicks_student_section() {

        preschoolMainPage.studentSideBar.click();
    }

    @And("User clicks All student section")
    public void user_clicks_All_student_section() {

        preschoolMainPage.allStudentsButton.click();
    }

    @And("User clicks to student entry that was checked before from database")
    public void user_clicks_to_student_entry_that_was_checked_before_from_database() throws InterruptedException {
        Thread.sleep(3000);
        deleteStudentObject.sampleStudent.click();
        studentIDString = deleteStudentObject.studentID.getText();

    }

    @Given("User checks if the student stored in data base or not")
    public void user_checks_if_the_student_stored_in_data_base_or_not() throws SQLException {

        DBUtility.createConnection();
        List<Map<Object, Object>> mydata = DBUtility.executeQuery("select * from student");
        DBUtility.close();
         boolean check = true;
        for (Map<Object, Object> map : mydata) {
            if (map.get("STUDENT_ID").toString().equalsIgnoreCase(studentIDString)) {
                check =true;
                break;
            }
            else{
                check = false;

            }
        }
        if(check==true){
            System.out.println(studentIDString+ " ID student is in Data Base");
        }
        else{
            System.out.println(studentIDString+ " ID student IS NOT in Data Base");
        }
    }


    @And("User navigate.back")
    public void user_navigate_back() {
        Driver.getDriver().navigate().back();
    }

    @Then("User deletes the student")
    public void user_deletes_the_student() {
        deleteStudentObject.actionIcon.click();
        deleteStudentObject.deleteFunction.click();
        deleteStudentObject.deleteButton.click();


    }

    @Then("The information should be deleted from data")
    public void the_information_should_be_deleted_from_data() throws SQLException {
        DBUtility.createConnection();
        List<Map<Object, Object>> mydata = DBUtility.executeQuery("select * from student");
        DBUtility.close();
          boolean check=true;
        for (Map<Object, Object> map : mydata) {
            if (map.get("STUDENT_ID").toString().equalsIgnoreCase(studentIDString )) {
                check= false;
            }
            else{
                check = true;
            }
        }
        Assert.assertTrue("To delete student test verification has been failed", check);

    }



}
