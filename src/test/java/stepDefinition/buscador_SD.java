package stepDefinition;

import io.cucumber.java.en.When;
import pageObject.Buscador_P;
import pageObject.Page_P;

public class buscador_SD {
	@When("^El usuario busca \"(.*?)\"$")
	public void validarSignUpError(String busqueda) throws Throwable {
		Buscador_P.accederBuscador();
		Buscador_P.buscar(busqueda);
		Buscador_P.accederResultado(busqueda);
	}

    @When("^El usuario busca \"(.*?)\" en Opportunities$")
    public void buscadorOpportunities(String busqueda) throws Throwable {
        Buscador_P.accederBuscador();
        Buscador_P.buscar(busqueda);
        Buscador_P.accederResultadoOpportunities(busqueda);
    }

    @When("^El usuario busca \"(.*?)\" en Academics")
    public void accederResultadoAcademics(String busqueda) throws Throwable {
        Buscador_P.accederBuscador();
        Buscador_P.buscar(busqueda);
        Buscador_P.accederResultadoAcademics(busqueda);
    }

}