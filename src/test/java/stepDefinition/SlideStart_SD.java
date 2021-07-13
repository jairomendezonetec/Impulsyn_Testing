package stepDefinition;

import io.cucumber.java.en.When;
import pageObject.SlidesStart_P;

public class SlideStart_SD {
	@When("^El usuario accede a SignUp$")
	public void validarSignUp() throws Throwable {
		SlidesStart_P.accessTo("Sign up");
	}
	
	@When("^El usuario accede a Log In$")
	public void validarLogin() throws Throwable {
		SlidesStart_P.accessTo("Log in");
	}
}