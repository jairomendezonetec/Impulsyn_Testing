package stepDefinition;

import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import pageObject.Menu_P;
import pageObject.Settings_P;

public class Menu_SD {
	@When("^El usuario tiene las siguientes acciones en el Menu:$")
	public void validarSignUpError(DataTable table) throws Throwable {
		Menu_P.verifyScreen(table);
	}
	
	@When("^El usuario accede a \"(.*?)\" desde Menu$")
	public void accederA(String option) throws Throwable {
		Menu_P.accessTo(option);
	}
	
	@When("^El usuario tiene las siguientes acciones en Settings:$")
	public void opcionesSettings(DataTable table) throws Throwable {
		Settings_P.verifyScreen(table);
	}
}