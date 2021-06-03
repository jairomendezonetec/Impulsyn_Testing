package pageObject;

import java.util.ArrayList;
import java.util.List;

import framework.AppiumKeyword;

public class Networking_P extends General_P {

	public static String[] connect = { "xpath", "//*[text()='Connect ']" };
	public static String [] aceptarSolicitud = { "xpath", "//*[@ng-reflect-name='checkmark-outline']/.."};
	public static String [] volver =  { "xpath", "//app-search//*[@ng-reflect-name='chevron-back-outline']/.."};
	

	public static String[] contact(String value) {
		String[] object = { "xpath", "//*[text()='Contacts']/../../..//*[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};
	
	public static String[] buttonMenuText(String value) {
		String[] object = { "xpath", "//app-user-profile//*[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};

	public static void conectar() throws Exception {
		AppiumKeyword.pushOn(connect);
		AppiumKeyword.waitToBePresent(text("Request sent"), 5);
		AppiumKeyword.pushOn(volver);
		waitToSpinner();
		AppiumKeyword.pushOn(volver);
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
	
	public static void	verificarContacto(String contacto) throws Exception {
		AppiumKeyword.waitToBePresent(contact(contacto), 10);
	}	
	
	public static void accederA(String option) throws Exception {
		List<String> optionList = new ArrayList<String>();
		optionList.add(option);
				
		List<List<String>> data= new ArrayList<List<String>>();
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
}
