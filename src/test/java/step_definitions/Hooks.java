package step_definitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;
import utilities.ExtentReport;
import utilities.Log;
import utilities.TempStorage;

public class Hooks {

    @Before
    public void setup(Scenario scenario){
        //Anything that you want to run before each Scenario
        TempStorage.TempStorageclear();
        Log.start(scenario.getName());
        ExtentReport.startTest(scenario.getName());
    }

    //For Hooks @After must come from cucucmber!!!! not Junit!!!
    // We want to run it after every scenario, not after each test

    @After
    public void tearDown(Scenario scenario){

        //checking if our Scenario is failed
        if(scenario.isFailed()){

            //takes screenshot
            byte [] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);

            // attach the scenario to the report
            scenario.embed(screenshot,"image/png");
            ExtentReport.fail();
        }else {
            ExtentReport.pass();
        }
        Driver.quitDriver();
    }
}
