package execute;


import org.junit.runner.RunWith;

import courgette.api.CourgetteOptions;
import courgette.api.CourgetteRunLevel;
import courgette.api.CucumberOptions;
import courgette.api.junit.Courgette;

@RunWith(Courgette.class)
@CourgetteOptions(
        threads = 1,
        runLevel = CourgetteRunLevel.SCENARIO,
        rerunFailedScenarios = true,
        showTestOutput = true,
        reportTargetDir = "build/chrome",
        environmentInfo = "browser=chrome; project_info=Courgette-JVM is awesome!",
        cucumberOptions = @CucumberOptions(
                features = "src/test/resources/features",
                glue = "stepDefinition",
                tags = {"@post_001 or @home_001"},
                publish = true,
                plugin = {
                        "pretty",
                        "json:build/firefox/cucumber-report/cucumber.json",
                        "html:build/firefox/cucumber-report/cucumber.html"}
        ))
public class RunCourgetteTest {
}