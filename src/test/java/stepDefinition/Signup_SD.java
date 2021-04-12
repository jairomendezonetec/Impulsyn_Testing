package stepDefinition;

import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import pageObject.Signup_P;
import pageObject.SlidesStart_P;

public class Signup_SD {
	@When("^El usuario valida Sign up con errores$")
	public void validarSignUpError(DataTable table) throws Throwable {
		Signup_P.signUp(table, true);
	}
	@When("^El usuario valida Sign up$")
	public void validarSignUp(DataTable table) throws Throwable {
		Signup_P.signUp(table, false);
	}
	
	@When("^El usuario valida error en los siguientes campos:$")
	public void validarErroresSignUp(DataTable table) throws Throwable {
		Signup_P.validarErroresCampos(table);
	}
	
}