package execute;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(glue = "stepDefinition", 
				monochrome = true,
				features = {"classpath:features"},
<<<<<<< HEAD
				tags = {"@complete"},
				plugin = {"pretty", "json:target/cucumber.json", "html:target/cucumber-reports"})
=======
				tags = {"@login_002"},
				plugin = {"pretty", "html:target/cucumber-report-html", "json:target/cucumber.json"})
>>>>>>> develop
public class RunCucumberTest {

}
