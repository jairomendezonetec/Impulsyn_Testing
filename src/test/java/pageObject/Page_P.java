package pageObject;

import java.util.ArrayList;
import java.util.List;

import framework.AppiumKeyword;
import io.cucumber.datatable.DataTable;

import static pageObject.Buscador_P.button;
import static pageObject.Opportunity_P.*;
import static pageObject.Opportunity_P.checkbox;

public class Page_P extends General_P {

    public static String[] emailInput = {"xpath", "//app-academic-program//ion-input[@type='email']//input"};

    public static String[] delete(String value) {
        String[] object = {"xpath", "//*[text()='$$']/../..//*[@aria-label='trash']"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] select(String value) {
        String[] object = {"xpath", "//*[text()='$$']/..//ion-select"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] option(String value) {
        String[] object = {"xpath", "//button//*[contains(text(),' $$')]/.."};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] divText(String value) {
        String[] object = {"xpath", "//div//*[text()='$$']"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] resultado(String value) {
        String[] object = {"xpath", "//app-search//app-opportunity-item//*[text()='$$']"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] dateTime(String value) {
        String[] object = {"xpath", "//*[text()='$$']/..//ion-datetime"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;


    public static void createPage(DataTable table) throws Exception {
        List<List<String>> data = table.asLists();

        // select page type
        AppiumKeyword.pushOn(text(data.get(0).get(1)));

        // select organization type
        AppiumKeyword.pushOn(select(data.get(1).get(0)));
        AppiumKeyword.pushOn(option(data.get(1).get(1)));

        AppiumKeyword.pushOn(button("*", "Next"));

        for (int i = 2; i < data.size(); i++) {
            String key = data.get(i).get(0);
            String value = data.get(i).get(1);

            switch (key) {
                case "Name":
                case "Tagline":
                case "Website":
                    AppiumKeyword.writeInto(input(key), value);
                    AppiumKeyword.waitSec(5);
                    AppiumKeyword.closeKeyboard();
                    break;
                default:
                    break;
            }
        }
        AppiumKeyword.pushOn(button("app-name-organization", "Next"));

        AppiumKeyword.pushOn(text("Skip"));

        waitToSpinner();

    }

    public static void eliminarPagina() throws Exception {
    	waitToSpinner();
        AppiumKeyword.pushOn(ariaLabel("app-organization-profile", "settings outline"));
        AppiumKeyword.pushOn(containsText("Delete page"));
        AppiumKeyword.pushOn(containsText("Accept", "ion-alert"));
        AppiumKeyword.waitToVanish(containsText("Accept", "ion-alert"), 5);
        AppiumKeyword.isNotPresent(ariaLabel("app-organization-profile", "settings outline"));
    }

    public static void verificarPaginaBorrada(String page) throws Exception {
        if (AppiumKeyword.exists(Menu_P.buttonMenuText(page), 2)) {
            AppiumKeyword.pushOn(Menu_P.buttonMenuText(page));
            eliminarPagina();
        }
    }

    public static void accessTo(String option) throws Exception {
        List<String> optionList = new ArrayList<String>();
        optionList.add(option);

        List<List<String>> data = new ArrayList<List<String>>();
        data.add(optionList);
        verifyAndAccess(data, true);
    }

    public static void verifyScreen(DataTable table) throws Exception {
        List<List<String>> data = table.asLists();
        verifyAndAccess(data, false);

    }

    public static void verifyAndAccess(List<List<String>> data, boolean access) throws Exception {
        String[] selector = null;

        System.out.println(data);
        for (int i = 0; i < data.size(); i++) {
            String key = data.get(i).get(0);

            switch (key) {
                case "Highlights":
                case "About":
                case "Opportunities":
                case "Post":
                case "Programs":
                    selector = divText(key);
                    break;
                case "Edit":
                    selector = ariaLabel(key);
                default:
                    if (key.contains("Post: "))
                        selector = text(key.replace("Post: ", ""));
                    else
                        throw new Error(key + " is not valid option");
            }
            AppiumKeyword.verify(selector, 10);
        }

        if (access) {
            AppiumKeyword.pushOn(selector);
        }
    }

    public static void createProgram(DataTable table) throws Exception {

        AppiumKeyword.pushOn(button("app-organization-profile", "Post"));

        List<List<String>> data = table.asLists();
        for (int i = 0; i < data.size(); i++) {
            String key = data.get(i).get(0);
            String value = data.get(i).get(1);

            switch (key) {
                case "Title":
                    AppiumKeyword.dragToFind(General_P.input(key), "UP", 5);
                    AppiumKeyword.writeInto(General_P.input(key), value);
                    AppiumKeyword.closeKeyboard();
                    break;
                case "Description":
                    AppiumKeyword.dragToFind(textArea(key), "UP", 5);
                    AppiumKeyword.writeInto(textArea(key), value);
                    AppiumKeyword.closeKeyboard();
                    break;
                case "Type of program":
                case "Area of study":
                case "Modality":
                case "Language":
                    AppiumKeyword.dragToFind(select(key), "UP", 5);
                    AppiumKeyword.pushOn(select(key));
                    AppiumKeyword.pushOn(option(value));
                    break;
                case "VIA EMAIL":
                    AppiumKeyword.dragToFind(checkbox(key), "UP", 3);
                    if (value.equals("true"))
                        AppiumKeyword.pushOn(checkbox(key));
                    break;
                case "Email":
                    AppiumKeyword.dragToFind(emailInput, "UP", 5);
                    AppiumKeyword.writeInto(emailInput, value);
                    AppiumKeyword.closeKeyboard();
                    break;
                case "Start date":
                case "End date":
                    AppiumKeyword.dragToFind(Page_P.dateTime(key), "UP", 5);
                    AppiumKeyword.pushOn(Page_P.dateTime(key));
                    AppiumKeyword.pushOn(General_P.text("Accept"));
                    break;
                default:
                    break;
            }
        }
        AppiumKeyword.pushOn(button("app-academic-program", "Post"));
    }

    public static void requestAcademic() throws Exception {
        AppiumKeyword.pushOn(applyOpportunity("Request info"));
        AppiumKeyword.waitSec(3);
        AppiumKeyword.pushOn(applyOpportunity("Request information"));
        AppiumKeyword.waitSec(10);
        AppiumKeyword.pushOn(Networking_P.volverButton("app-academic-program-detail"));
    }

    public static void verificaFormación(String academic) throws Exception {
        AppiumKeyword.pushOn(requestedOpportunity);
        AppiumKeyword.waitToBePresent(text(academic), 10);
        AppiumKeyword.pushOn(Networking_P.volverButton("app-my-academics"));
    }

}
