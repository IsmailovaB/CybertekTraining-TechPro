package step_definitions;

import cucumber.api.java.en.When;
import utilities.Driver;

public class google {
    @When("user goes to google")
    public void user_goes_to_google() {
        // Write code here that turns the phrase above into concrete actions
        Driver.getDriver().get("http://google.com");
    }
}
