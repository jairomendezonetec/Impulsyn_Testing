package stepDefinition;

import io.cucumber.java.en.When;
import pageObject.Profile_P;

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



