package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.sl.In;
import org.junit.Assert;
import org.openqa.selenium.By;
import pages.PreschoolMainPage;
import pages.RemoveTeacherPage;
import utilities.Config;
import utilities.DBUtility;
import utilities.Driver;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.function.Predicate;

public class RemoveTeacherSteps {
    PreschoolMainPage preschoolMainPage = new PreschoolMainPage();
    RemoveTeacherPage removeTeacherPage = new RemoveTeacherPage();
    public static String teacherID ;

    @Given("User is on Dashboard page")
    public void user_is_on_Dashboard_page() {
        Driver.getDriver().get(Config.getProperty("url"));


    }

    @Given("User clicks on Teacher module")
    public void user_clicks_on_Teacher_module() {
        preschoolMainPage.teachersSideBar.click();

    }

    @Given("User clicks on All Teacher option")
    public void user_clicks_on_All_Teacher_option() throws InterruptedException {
        Thread.sleep(2000);

        preschoolMainPage.allTeachersButton.click();

    }

    @Given("User clicks on one teacher")
    public void user_clicks_on_one_teacher() throws InterruptedException {
        Thread.sleep(2000);
        removeTeacherPage.teacher.click();


    }

    @Given("User takes teacher id")
    public void user_takes_teacher_id() throws InterruptedException{
        Thread.sleep(1000);

        teacherID = removeTeacherPage.teacherID.getText();
        //String teacherIDDB =

    }

    @Given("User check teacher is stored in the DB")
    public void user_check_teacher_is_stored_in_the_DB() throws SQLException{
        teacherID = removeTeacherPage.teacherID.getText();

        DBUtility.createConnection();
        List<Map<Object, Object>> mydata = DBUtility.executeQuery("select * from teacher");
        DBUtility.close();
        boolean check = true;
        for (Map<Object, Object> map : mydata) {
            if (map.get("TEACHER_ID").toString().equalsIgnoreCase(teacherID)) {
                check =true;
                break;
            }
            else{
                check = false;
            }
            System.out.println(map.get("TEACHER_ID"));
        }
        if(check==true){
            System.out.println(teacherID+ " ID teacher is in Data Base");
        }
        else{
            System.out.println(teacherID+ " ID teacher IS NOT in Data Base");
        }

    }




    @Given("User go back to the teacher page")
    public void user_go_back_to_the_teacher_page() {
        Driver.getDriver().navigate().back();

    }

    @Given("User clickes on three dot")
    public void user_clickes_on_three_dot() throws InterruptedException {
        Thread.sleep(2000);
        removeTeacherPage.threeDotsInTeacher.click();

    }

    @When("User clicks on delete teacher button")
    public void user_clicks_on_delete_teacher_button() throws InterruptedException {
        Thread.sleep(2000);
        removeTeacherPage.deleteButton.click();


    }

    @Then("User should see delete verification pop up")
    public void user_should_see_delete_verification_pop_up() {

        String actual = removeTeacherPage.verificationOfDelete.getText();
        String expected = "Are you sure want to delete this?";
        // removeTeacherPage.popUpDeleteButton.click();
        Assert.assertTrue(actual.equalsIgnoreCase(expected));

    }

    @Then("User Click on delete pop up")
    public void user_Click_on_delete_pop_up() throws InterruptedException {
        Thread.sleep(2000);
        removeTeacherPage.popUpDeleteButton.click();
    }

    @Then("teacher should be able to  deleted")
    public void teacher_should_be_able_to_deleted() throws SQLException {
        DBUtility.createConnection();

        DBUtility.executeQuery("select * from teacher");

        List<Map<Object, Object>> mydata = DBUtility.executeQuery("select * from teacher");
        DBUtility.close();
        boolean check = true;
        for (Map<Object, Object> map : mydata) {
            if (!map.get("TEACHER_ID").toString().equalsIgnoreCase(teacherID)) {
                check =true;
            }
            else{
                check = false;
            }
            System.out.println(map.get("TEACHER_ID"));
        }
//        if(check!=true){
//            System.out.println(teacherID+ " ID teacher is not in Data Base");
//        }
//        else{
//            System.out.println(teacherID+ " ID teacher IS  in Data Base");
//        }

       // Assert.assertFalse(check!=true);

        Assert.assertEquals("Teacher still in DB",check, true);


    }
}
