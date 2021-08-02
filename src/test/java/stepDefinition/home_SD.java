package stepDefinition;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.When;
import pageObject.Home_P;

public class home_SD {
	@When("^El usuario tiene las siguientes acciones en la home:$")
	public void verifyScreen(DataTable table) throws Throwable {
		Home_P.verifyScreen(table);
	}
	
	@When("^El usuario accede a \"(.*?)\" desde Home$")
	public void accederA(String option) throws Throwable {
		Home_P.accessTo(option);
	}
	
	@When("^El usuario accede a la home$")
	public void isAt() throws Throwable {
		Thread.sleep(10000);
		Home_P.isAt();
	}

	@When("^El usuario vuelve a la home \"(.*?)\"$")
	public void backAt(String appType) throws Throwable {
//		Thread.sleep(10000);
		Home_P.backAt(appType);
	}
	
}