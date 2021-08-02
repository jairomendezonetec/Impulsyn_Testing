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

    public static void accederResultado(String busqueda, boolean opportunitie) throws Exception {
        if (opportunitie) {
            while (!AppiumKeyword.exists(resultado("app-opportunity-item", busqueda), 5)) {
                buscar(busqueda);
            }
            AppiumKeyword.pushOn(resultado("app-opportunity-item", busqueda));
        } else
            AppiumKeyword.pushOn(resultado("app-item-user-org-search", busqueda));
    }
}
