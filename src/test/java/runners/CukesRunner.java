package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = "html:target/cucumber-reports",
        features = "src/test/resources/features/student.feature",
        glue= "step_definitions",
        dryRun = false,
        tags = "@TECP-251"
)



public class CukesRunner {

}
