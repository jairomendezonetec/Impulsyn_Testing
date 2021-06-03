package pageObject;

import framework.AppiumKeyword;

public class Buscador_P extends General_P {

	public static String[] resultado(String value) {
		String[] object = { "xpath", "//app-item-user-org-search//*[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};

	public static String[] buscador = { "xpath", "//*[@ng-reflect-name= 'search']/.." };
	public static String[] input = { "xpath", "//*[contains(@placeholder,'Search')]" };
	

	public static void accederBuscador() throws Exception {
		AppiumKeyword.pushOn(buscador);
		AppiumKeyword.waitToBePresent(input, 5);
	}
	
	public static void buscar(String busqueda) throws Exception {
		AppiumKeyword.writeInto(input, busqueda);
	}
	
	public static void accederResultado(String busqueda) throws Exception {
		AppiumKeyword.pushOn(resultado(busqueda));
	}

}
