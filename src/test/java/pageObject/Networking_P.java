package pageObject;

import java.util.ArrayList;
import java.util.List;

import framework.AppiumKeyword;

public class Networking_P extends General_P {

    public static String[] connect = {"xpath", "//*[@class='profile-content']//ion-button[contains(text(),'Connect')]"};
    public static String[] aceptarSolicitud = {"xpath", "//ion-button[contains(@class,'accept')]"};
    public static String[] message = {"xpath", "//textarea[@name='message']"};
    public static String[] sendMessage = {"xpath", "//*[@name='send-outline']"};
    public static String[] notificationMessage = {"xpath", "//ion-button//*[@aria-label='mail outline']/.."};

    public static String[] contact(String value) {
        String[] object = {"xpath", "//*[text()='Contacts']/../../..//*[text()='$$']"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] buttonMessage(String value) {
        String[] object = {"xpath", "//*[text()='Contacts']/../../..//*[text()='$$']/../..//ion-button"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] buttonMenuText(String value) {
        String[] object = {"xpath", "//app-user-profile//*[text()='$$']"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] buttonDeleteContact(String value) {
        String[] object = {"xpath", "//ion-title[text()='$$']/..//ion-buttons[@slot='end']"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] volverButton(String value) {
        String[] object = {"xpath", "//$$//*[@name='chevron-back-outline']/.."};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static void conectar() throws Exception {
        AppiumKeyword.waitSec(5);
        AppiumKeyword.pushOn(connect);
        AppiumKeyword.waitSec(3);
        AppiumKeyword.waitToBePresent(text("Request sent"), 5);
        AppiumKeyword.pushOn(volverButton("app-user-profile"));
        waitToSpinner();
        AppiumKeyword.pushOn(volverButton("app-search"));
        waitToSpinner();
    }

    public static void accederNotificacion(String notification) throws Exception {
        AppiumKeyword.pushOn(text(notification));
        AppiumKeyword.waitToVanish(text(notification), 5);
    }

    public static void aceptarSolicitud() throws Exception {
        AppiumKeyword.pushOn(aceptarSolicitud);
        AppiumKeyword.waitToVanish(text("Accepted"), 5);
    }

    public static void verificarContacto(String contacto) throws Exception {
        AppiumKeyword.waitToBePresent(contact(contacto), 10);
    }

    public static void verificarContactoBorrado(String contacto) throws Exception {
        if (AppiumKeyword.exists(contact(contacto), 2)) {
            eliminarContacto(contacto);
            AppiumKeyword.pushOn(volverButton("app-my-network"));
        } else {
            AppiumKeyword.pushOn(volverButton("app-my-network"));
        }
    }

    public static void eliminarContacto(String contacto) throws Exception {
        AppiumKeyword.pushOn(contact(contacto));
        AppiumKeyword.pushOn(buttonDeleteContact(contacto));
        AppiumKeyword.pushOn(General_P.containsText("Delete contact"));
        AppiumKeyword.pushOn(General_P.text("Accept"));
        waitToSpinner();
    }

    public static void accederA(String option) throws Exception {
        List<String> optionList = new ArrayList<String>();
        optionList.add(option);

        List<List<String>> data = new ArrayList<List<String>>();
        data.add(optionList);
        verifyAndAccess(data, true);
    }

    public static void verifyAndAccess(List<List<String>> data, boolean access) throws Exception {
        String[] selector = null;

        System.out.println(data);
        for (int i = 0; i < data.size(); i++) {
            String key = data.get(i).get(0);

            switch (key) {
                case "Manage my network":
                case "Connection suggestion":
                case "My opportunities":
                case "My programs":
                    selector = text(key);
                    break;
                default:
                    throw new Error(key + " is not valid option");
            }
            AppiumKeyword.verify(selector, 1);
        }

        if (access) {
            AppiumKeyword.waitToBeClickable(selector, 10);
            AppiumKeyword.pushOn(selector);
            waitToSpinner();
        }
    }

    public static void enviarMensajeContacto(String contacto) throws Exception {
        AppiumKeyword.pushOn(buttonMessage(contacto));
        String chatMessage = System.currentTimeMillis() + " Prueba automatizada Network_002";
        AppiumKeyword.setData("chatMessage", chatMessage);
        AppiumKeyword.writeInto(message, chatMessage);
        AppiumKeyword.closeKeyboard();
        AppiumKeyword.pushOn(sendMessage);
        AppiumKeyword.pushOn(volverButton("app-chat-detail"));
    }

    public static void verificaMensaje() throws Exception {
        AppiumKeyword.pushOn(notificationMessage);
        String message = AppiumKeyword.getData("chatMessage");
        AppiumKeyword.waitToBePresent(General_P.text(message), 2);
        AppiumKeyword.pushOn(volverButton("app-chats"));

    }
}
