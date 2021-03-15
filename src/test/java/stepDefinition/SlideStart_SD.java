package stepDefinition;

import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import pageObject.Signup_P;
import pageObject.SlidesStart_P;

public class SlideStart_SD {
	@When("^El usuario accede a SignUp$")
	public void validarSignUp() throws Throwable {
		SlidesStart_P.Signup();
	}
	
	
}