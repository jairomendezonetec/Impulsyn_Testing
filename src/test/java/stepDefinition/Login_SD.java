package stepDefinition;

import framework.Keywords;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.When;
import pageObject.Home_P;
import pageObject.Login_Page;
import pageObject.Menu_P;
import pageObject.Settings_P;
import pageObject.SlidesStart_P;

import java.security.Key;


public class Login_SD {
	@When("^El usuario valida Log in con errores$")
	public void validarSignUpError(DataTable table) throws Throwable {
		Login_Page.logIn(table, true);
	}

	@When("^El usuario valida Log in$")
	public void validarSignUp(DataTable table) throws Throwable {
		Login_Page.logIn(table, false);
	}

	@When("^El usuario hace Log In$")
	public void login(DataTable table) throws Throwable {
		SlidesStart_P.accessTo("Log in");
		Login_Page.logIn(table, false);
	}

	@When("^El usuario hace Log out$")
	public void logout() throws Throwable {
		Home_P.accessTo("Menu");
		Menu_P.accessTo("Settings");
		Settings_P.accessTo("Log out");
	}

	@When("^El usuario cierra e inicia la app$")
	public void cerrarYAbrir() throws Throwable {
		Login_Page.cerrarYAbrir();
	}
	
	@When("^El usuario valida que no recuerda el usuario$")
	public void nORecuerdaUsuario() throws Throwable {
		Login_Page.noRecuerdaUsuario();
	}
	
	@When("^El usuario pulsa sobre login sin rellenar los campos$")
	public void loginSinRellenar() throws Throwable {
		Keywords.waitToBeClickable(Login_Page.button("Log in"), 10);
		Keywords.pushOn(Login_Page.button("Log in"));
		Keywords.waitSec(5);
	}
	
	
}