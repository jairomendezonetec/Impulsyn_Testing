package pageObject;

import java.util.List;

import framework.AppiumKeyword;
import io.cucumber.datatable.DataTable;

import static pageObject.General_P.text;
import static pageObject.General_P.textArea;
import static pageObject.Page_P.*;

public class Opportunity_P {
    public static String[] emailInput = {"xpath", "//app-opportunity//ion-input[@type='email']//input"};
    public static String[] requestedOpportunity = {"xpath", "//*[@value='requested']"};

    public static String[] input(String value) {
        String[] object = {"xpath", "//app-opportunity//*[text()='$$']/.././/input"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] checkbox(String value) {
        String[] object = {"xpath", "//*[contains(text(),'$$')]/..//ion-checkbox"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] applyOpportunity(String value) {
        String[] object = {"xpath", "//ion-button[text()='$$']"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static void createOpportunity(DataTable table) throws Exception {

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
                case "Responsibilities":
                case "Requirements":
                    AppiumKeyword.dragToFind(textArea(key), "UP", 5);
                    AppiumKeyword.writeInto(textArea(key), value);
                    AppiumKeyword.closeKeyboard();
                    break;
                case "Area":
                case "Opportunity type":
                    AppiumKeyword.dragToFind(select(key), "UP", 5);
                    AppiumKeyword.pushOn(select(key));
                    AppiumKeyword.pushOn(option(value));
                    break;
                case "Let the candidates apply through Impulsyn.":
                case "Redirect the candidate to an external webpage.":
                    AppiumKeyword.dragToFind(checkbox(key), "UP", 3);
                    if (value.equals("true"))
                        AppiumKeyword.pushOn(checkbox(key));
                    break;
                case "Email":
                    AppiumKeyword.dragToFind(emailInput, "UP", 5);
                    AppiumKeyword.writeInto(emailInput, value);
                    AppiumKeyword.closeKeyboard();
                    break;
                case "Website":
                    AppiumKeyword.dragToFind(Opportunity_P.input(key), "UP", 5);
                    AppiumKeyword.writeInto(Opportunity_P.input(key), value);
                    AppiumKeyword.closeKeyboard();
                    break;
                default:
                    break;
            }
        }
        AppiumKeyword.pushOn(button("app-opportunity", "Post"));
    }

    public static void deleteOpportunity(String opportunity) throws Exception {

        AppiumKeyword.pushOn(delete(opportunity));
        AppiumKeyword.pushOn(containsText("Accept", "ion-alert"));
        AppiumKeyword.waitToVanish(containsText("Accept", "ion-alert"), 5);
        waitToSpinner();
        AppiumKeyword.verify(containsText("Post your job opportunities to recruit the best talent", "app-organization-profile"), 5);
    }

    public static void applyOpportunity() throws Exception {
        AppiumKeyword.pushOn(applyOpportunity("Apply"));
        AppiumKeyword.waitSec(3);
        AppiumKeyword.pushOn(applyOpportunity("Send application"));
        AppiumKeyword.waitSec(10);
        AppiumKeyword.pushOn(Networking_P.volverButton("app-opportunity-detail"));
    }

    public static void verificarOportunidad(String opportunity) throws Exception {
        AppiumKeyword.pushOn(requestedOpportunity);
        AppiumKeyword.waitToBePresent(text(opportunity), 10);
        AppiumKeyword.pushOn(Networking_P.volverButton("app-my-opportunities"));
    }

}
