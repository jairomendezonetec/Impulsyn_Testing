package pageObject;

import framework.AppiumKeyword;

public class Buscador_P extends General_P {

    public static String[] resultado(String search, String value) {
        String[] object = {"xpath", "//app-search//%%//*[text()='$$']"};
        object[1] = object[1].replace("$$", value).replace("%%", search);
        return object;
    }

    ;

    public static String[] button(String page, String value) {
        String[] object = {"xpath", "//%%//*[text()='$$']"};
        object[1] = object[1].replace("$$", value).replace("%%", page);
        return object;
    }

    ;

    public static String[] buscador = {"xpath", "//*[@aria-label= 'search']/.."};
    public static String[] input = {"xpath", "//*[contains(@placeholder,'Search')]"};


    public static void accederBuscador() throws Exception {
        AppiumKeyword.pushOn(buscador);
        AppiumKeyword.waitToBePresent(input, 5);
    }

    public static void buscar(String busqueda) throws Exception {
        AppiumKeyword.writeInto(input, busqueda);
    }

    public static void accederResultado(String busqueda) throws Exception {
        AppiumKeyword.pushOn(resultado("app-item-user-org-search", busqueda));
    }

    public static void accederResultadoOpportunities(String busqueda) throws Exception {
    	int i = 0;
        while (!AppiumKeyword.exists(resultado("app-opportunity-item", busqueda), 5) && i<3) {
            buscar(busqueda);
            i++;
        }
        AppiumKeyword.pushOn(resultado("app-opportunity-item", busqueda));
    }

    public static void accederResultadoAcademics(String busqueda) throws Exception {
    	int i = 0;
        while (!AppiumKeyword.exists(resultado("app-academic-item", busqueda), 5) && i<3) {
            buscar(busqueda);
            i++;
        }
        AppiumKeyword.pushOn(resultado("app-academic-item", busqueda));
    }
}
