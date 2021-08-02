package stepDefinition;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.When;
import pageObject.Buscador_P;
import pageObject.Networking_P;
import pageObject.Page_P;

public class Page_SD {
    @When("^El usuario crea una nueva página con los siguientes datos:$")
    public void validarSignUpError(DataTable table) throws Throwable {
        Page_P.createPage(table);
    }

    @When("^El usuario elimina la página$")
    public void verificarPagina() throws Throwable {
        Page_P.eliminarPagina();
    }

    @When("^El usuario verifica la página \"(.*?)\" ha sido borrada$")
    public void verificarPaginaBorrada(String page) throws Throwable {
        Page_P.verificarPaginaBorrada(page);
    }

    @When("^El accede a \"(.*?)\" desde Page$")
    public void acccessTo(String tab) throws Throwable {
        Page_P.accessTo(tab);
    }
}