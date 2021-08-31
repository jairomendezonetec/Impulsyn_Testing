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
        reportTargetDir = "build/Android",
        environmentInfo = "browser=Android; project_info=Impulsyn",
        cucumberOptions = @CucumberOptions(
                features = "src/test/resources/features",
                glue = "stepDefinition",
                tags = {"@complete"},
                publish = true,
                plugin = {
                        "pretty",
                        "json:build/firefox/cucumber-report/cucumber.json",
                        "html:build/firefox/cucumber-report/cucumber.html"}
        ))
public class RunComplete {
}