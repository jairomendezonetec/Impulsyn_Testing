package stepDefinition;

import io.cucumber.java.en.Then;
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

    @When("^El usuario acepta la notificación$")
    public void aceptarSolicitud() throws Throwable {
        Networking_P.aceptarSolicitud();
    }

    @When("^El usuario accede a \"(.*?)\"$")
    public void accederA(String opcion) throws Throwable {
        Networking_P.accederA(opcion);
    }

    @When("^El usuario verifica el contacto \"(.*?)\"$")
    public void verificaContacto(String contact) throws Throwable {
        Networking_P.verificarContacto(contact);
    }

    @When("^El usuario verifica el contacto \"(.*?)\" ha sido borrado$")
    public void verificaContactoBorrado(String contact) throws Throwable {
        Networking_P.verificarContactoBorrado(contact);
    }

    @When("^El usuario elimina el contacto \"(.*?)\"$")
    public void eliminaContacto(String contact) throws Throwable {
        Networking_P.eliminarContacto(contact);
    }

    @When("^El usuario envía un mensaje al contacto \"(.*?)\"$")
    public void enviarMensajeContacto(String contact) throws Throwable {
        Networking_P.enviarMensajeContacto(contact);
    }

    @When("^El usuario verifica que ha recibido el mensaje correctamente$")
    public void verificaMensaje() throws Throwable {
        Networking_P.verificaMensaje();
    }
}