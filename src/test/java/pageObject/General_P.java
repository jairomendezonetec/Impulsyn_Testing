package pageObject;

import java.util.List;

import framework.AppiumKeyword;
import framework.DriverManager;
import framework.Keywords;
import io.appium.java_client.TouchAction;
import io.cucumber.datatable.DataTable;

import static io.appium.java_client.touch.offset.PointOption.point;

public class General_P {

    public static String[] spinner = {"xpath", "//app-spinner"};

    public static String[] input(String value) {
        String[] object = {"xpath", "//*[text()='$$']/../..//input"};
        object[1] = object[1].replace("$$", value);
        return object;
    };
    
    public static String[] name(String value) {
        String[] object = {"xpath", "//*[@name='$$']"};
        object[1] = object[1].replace("$$", value);
        return object;
    };

    public static String[] textArea(String value) {
        String[] object = {"xpath", "//*[text()='$$']/../..//textarea"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] errorField(String value) {
        String[] object = {"xpath", "//*[text()='$$']/../..//*[@class='form-error-message']"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] ariaLabel(String value) {
        String[] object = {"xpath", "//*[@aria-label='$$']"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] ariaLabel(String page, String value) {
        String[] object = {"xpath", "//%%//*[@aria-label='$$']/.."};
        object[1] = object[1].replace("$$", value).replace("%%", page);
        return object;
    }

    ;

    public static String[] text(String value) {
        String[] object = {"xpath", "//*[text()='$$']"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] containsText(String value) {
        String[] object = {"xpath", "//*[contains(text(),'$$')]"};
        object[1] = object[1].replace("$$", value);
        return object;
    }

    ;

    public static String[] containsText(String value, String page) {
        String[] object = {"xpath", "//%%//*[contains(text(),'$$')]"};
        object[1] = object[1].replace("$$", value).replace("%%", page);
        return object;
    }

    ;

    public static void validarErroresCampos(DataTable table) throws Exception {
        List<List<String>> data = table.asLists();

        for (int i = 0; i < data.size(); i++) {
            String field = data.get(i).get(0);
            String value = data.get(i).get(1);
            System.out.println(value);
            if (value != null && value.contains("error"))
                AppiumKeyword.verify(errorField(field), 10);
            else
                AppiumKeyword.isNotPresent(errorField(field));
        }
    }


    public static void waitToSpinner() throws Exception {
        try {
            AppiumKeyword.waitToVanish(spinner, 20);
        } catch (Exception e) {
            System.out.println("Spinner is not present");
        }
    }

    public static void closeKeyboard() throws Exception {
        if (DriverManager.getGlobals().DRIVER.contains("ios")) {
            System.out.println("Closing iOS keyword...");
            TouchAction touchAction=new TouchAction(DriverManager.getAppiumDriver());
            touchAction.tap(point(195, 55)).perform();
        }
        else
            AppiumKeyword.closeKeyboard();
    }
}
