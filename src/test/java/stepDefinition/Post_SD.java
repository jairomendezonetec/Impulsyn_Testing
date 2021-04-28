package stepDefinition;

import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import pageObject.Menu_P;
import pageObject.Post_P;
import pageObject.Settings_P;

public class Post_SD {
	@When("^El usuario crea un nuevo post$")
	public void validarSignUpError(DataTable table) throws Throwable {
		Post_P.createPost(table);
	}
}