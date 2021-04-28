package stepDefinition;

import java.util.ArrayList;
import java.util.List;

import cucumber.api.java.en.When;
import framework.AppiumKeyword;
import io.cucumber.datatable.DataTable;
import pageObject.Menu_P;
import pageObject.Post_P;
import pageObject.Profile_P;
import pageObject.Settings_P;

public class Profile_SD {
	@When("^El usuario accede a \"(.*?)\" desde Profile$")
	public void accessTo(String accessValue) throws Throwable {
		Profile_P.accessTo(accessValue);
	}
	
	@When("^El usuario elimina el post$")
	public void deletePost() throws Throwable {
		Profile_P.deletePost();
	}
	
}



