package step_definitions;

import cucumber.api.java.bs.A;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import excel.Excel;
import excel.ExcelRead;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.AddingTeacher_Page;
import pages.PreschoolMainPage;
import utilities.Config;
import utilities.DBUtility;
import utilities.Driver;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.security.Key;
import java.util.List;
import java.util.Map;

public class AddingTeacher_Steps {

    AddingTeacher_Page addingTeacher_page = new AddingTeacher_Page();
    PreschoolMainPage preschoolMainPage = new PreschoolMainPage();

    public static String teacherId;


    @Given("User is on homepage")
    public void user_is_on_homepage() {
        Driver.getDriver().get(Config.getProperty("url"));
    }

    @When("User will click on the Teachers option from the side bar")
    public void user_will_click_on_the_Teachers_option_from_the_side_bar() throws InterruptedException {
        Thread.sleep(2000);
        preschoolMainPage.teachersSideBar.click();
    }

    @When("User will choose the All Teacher option from the side bar")
    public void user_will_choose_the_All_Teacher_option_from_the_side_bar() throws InterruptedException {
        Thread.sleep(2000);
        preschoolMainPage.allTeachersButton.click();
    }

    @When("User will click on the Add Teacher")
    public void user_will_click_on_the_Add_Teacher() throws InterruptedException{
        Thread.sleep(2000);
       preschoolMainPage.addTeacherButton.click();
    }

    @When("User will fill out the basic information and click the submit button")
    public void user_will_fill_out_the_basic_information_and_click_the_submit_button() throws Exception {


        File file = new File("src/TestData.xlsx");
        FileInputStream fileInputStream = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheet("Sheet1");


        int usedRows = sheet.getPhysicalNumberOfRows();
        int lastUsedRow = sheet.getLastRowNum();

        for (int i = 1; i < 20; i++) {
            for (int j = 0; j<10; j++) {

                addingTeacher_page.getList().get(j).sendKeys(sheet.getRow(i).getCell(j).toString());
            }
//            Thread.sleep(1000);
          addingTeacher_page.submitButton.click();
//            Thread.sleep(1000);
            preschoolMainPage.addTeacherButton.click();
        }


    }

    @Then("User should verify that the created teacher exists on the database")
    public void user_should_verify_that_the_created_teacher_exists_on_the_database() throws Exception {

        Thread.sleep(2000);
        preschoolMainPage.allTeachersButton.click();
        addingTeacher_page.teacherNameSearch.sendKeys("Elizabeth");
        Thread.sleep(1000);
        addingTeacher_page.searchClick.click();
        Thread.sleep(1000);
        addingTeacher_page.nameSearchEntry.click();
        Thread.sleep(1000);
        teacherId = addingTeacher_page.teacherId.getText();

        DBUtility.createConnection();
        List<Map<Object, Object>> mydata = DBUtility.executeQuery("select * from teacher");
        DBUtility.close();
        boolean check = true;
        for (Map<Object, Object> map : mydata) {
            if (map.get("TEACHER_ID").toString().equalsIgnoreCase(teacherId)) {
                check =true;
                break;
            }
            else{
                check = false;
            }
        }

        Assert.assertTrue("Created Teacher is Not Available in the Data Base" , check);






    }


}
