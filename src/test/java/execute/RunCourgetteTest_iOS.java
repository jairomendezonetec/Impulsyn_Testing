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
        rerunAttempts = 2,
        reportTargetDir = "build/Android",
        environmentInfo = "browser=Android; project_info=Impulsyn",
        cucumberOptions = @CucumberOptions(
                features = "src/test/resources/features",
                glue = "stepDefinition",
                tags = {"@network_002"},
                publish = true,
                plugin = {
                        "pretty",
                        "json:build/iOS/cucumber-report/cucumber.json",
                        "html:build/iOS/cucumber-report/cucumber.html"}
        ))
public class RunCourgetteTest_iOS {
}