package stepDefinition;

import io.cucumber.java.en.When;
import pageObject.Buscador_P;
import pageObject.Page_P;

public class buscador_SD {
	@When("^El usuario busca \"(.*?)\"$")
	public void validarSignUpError(String busqueda) throws Throwable {
		Buscador_P.accederBuscador();
		Buscador_P.buscar(busqueda);
		Buscador_P.accederResultado(busqueda, false);
	}

    @When("^El usuario busca \"(.*?)\" en Opportunities$")
    public void buscadorOpportunities(String busqueda) throws Throwable {
        Buscador_P.accederBuscador();
        Buscador_P.buscar(busqueda);
        Buscador_P.accederResultado(busqueda, true);
    }

}