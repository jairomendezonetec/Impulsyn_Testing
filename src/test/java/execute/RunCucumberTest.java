package execute;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(glue = "stepDefinition", 
				monochrome = true,
				features = {"classpath:features"},
				tags = {"@page_002"},
				plugin = {"pretty", "html:target/cucumber-report-html", "json:target/cucumber.json"})
public class RunCucumberTest {

}
