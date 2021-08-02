package stepDefinition;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.When;
import pageObject.Networking_P;
import pageObject.Opportunity_P;
import pageObject.Page_P;

public class Opportunity_SD {
    @When("^El usuario crea una oportunidad:$")
    public void acccessTo(DataTable data) throws Throwable {
        Opportunity_P.createOpportunity(data);
    }

    @When("^El usuario elimina la oportunidad \"(.*?)\"$")
    public void deleteOpportunity(String opportunity) throws Throwable {
        Opportunity_P.deleteOpportunity(opportunity);
    }

    @When("^El usuario solicita la oportunidad$")
    public void applyOpportunity() throws Throwable {
        Opportunity_P.applyOpportunity();
    }

    @When("^El usuario verifica la oportunidad \"(.*?)\"$")
    public void verificaOportunidad(String opportunity) throws Throwable {
        Opportunity_P.verificarOportunidad(opportunity);
    }
}
