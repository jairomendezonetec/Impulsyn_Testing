package stepDefinition;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.When;
import pageObject.Post_P;

public class Post_SD {
	@When("^El usuario crea un nuevo post$")
	public void validarSignUpError(DataTable table) throws Throwable {
		Post_P.createPost(table);
	}
}