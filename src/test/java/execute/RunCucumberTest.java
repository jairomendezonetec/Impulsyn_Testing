package execute;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(glue = "stepDefinition", 
				monochrome = true,
				features = {"classpath:features"},
				tags = {"@complete"},
				plugin = {"pretty", "json:target/cucumber.json", "html:target/cucumber-reports"})
public class RunCucumberTest {

}
