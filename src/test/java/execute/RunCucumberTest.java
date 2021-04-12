package execute;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(glue = "stepDefinition", 
				monochrome = true,
				features = {"classpath:features"},
				tags = {"@login_004"},
				plugin = {"pretty", "json:target/cucumber.json"})
public class RunCucumberTest {

}
