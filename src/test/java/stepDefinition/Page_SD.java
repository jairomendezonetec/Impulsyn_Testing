package stepDefinition;

import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import pageObject.Home_P;
import pageObject.Menu_P;
import pageObject.Page_P;

public class Page_SD {
	@When("^El usuario crea una nueva página con los siguientes datos:$")
	public void validarSignUpError(DataTable table) throws Throwable {
		Page_P.createPage(table);
	}

	@When("^El usuario elimina la página \"(.*?)\"$")
	public void verificarPagina(String page) throws Throwable {
		Page_P.eliminarPagina(page);
	}
	
	@When("^El accede a \"(.*?)\" desde Page$")
	public void acccessTo(String tab) throws Throwable {
		Page_P.accessTo(tab);
	}
	
	@When("^El usuario crea una opportunidad:$")
	public void acccessTo(DataTable data) throws Throwable {
		Page_P.createOpportunity(data);
	}
	
	@When("^El usuario elimina la oportunidad \"(.*?)\"$")
	public void deleteOpportunity(String opportunity) throws Throwable {
		Page_P.deleteOpportunity(opportunity);
	}
	
	
	
	

}