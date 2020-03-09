package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/cucumber-reports", "json:target/cucesreport.json"},
        features = "src/test/resources/features",
        glue = "step_definitions",
        dryRun = false,
        tags = " @TECP-235, @TECP-239, @TECP-249"
)
public class TeacherParallelRunner {

}
