package stepDefinition;

import io.cucumber.java.en.When;
import pageObject.Networking_P;

public class networking_SD {
	@When("^El usuario conecta con el contacto$")
	public void conectar() throws Throwable {
		Networking_P.conectar();
	}
	
	@When("^El usuario accede a la notificación \"(.*?)\"$")
	public void accederNotificacion(String notificacion) throws Throwable {
		Networking_P.accederNotificacion(notificacion);
	}
	
	@When("^El usuario accede a \"(.*?)\"$")
	public void accederA(String opcion) throws Throwable {
		Networking_P.accederA(opcion);
	}
	
	@When("^El usuario verifica el contacto \"(.*?)\"$")
	public void verificaContacto(String contact) throws Throwable {
		Networking_P.verificarContacto(contact);
	}	
	
}