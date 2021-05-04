package pageObject;

import java.util.List;

import framework.AppiumKeyword;
import io.cucumber.datatable.DataTable;

public class Page_P extends General_P {

	public static String[] newPost = { "xpath", "//app-new-post-button/ion-button" };
	public static String[] organizationSelect = { "xpath", "//*[text()='Organization type']/..//ion-select" };
	public static String[] organizationOption = { "xpath", "//button//*[text()=' Club']/.." };

	public static String[] buttonMenuText(String value) {
		String[] object = { "xpath", "//button//*[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};
	
	public static String[] next(String page, String value) {
		String[] object = { "xpath", "//%%//*[text()='$$']" };
		object[1] = object[1].replace("$$", value).replace("%%", page);
		return object;
	};

	public static void createPage(DataTable table) throws Exception {
		List<List<String>> data = table.asLists();

		// select page type
		AppiumKeyword.pushOn(text(data.get(0).get(1)));

		// select organization type
		AppiumKeyword.pushOn(organizationSelect);
		AppiumKeyword.pushOn(organizationOption);

		AppiumKeyword.pushOn(next("*", "Next"));

		System.out.println("%%%%%%%%%%%%%% = " + data.size());
		for (int i = 2; i < data.size(); i++) {
			String key = data.get(i).get(0);
			String value = data.get(i).get(1);

			switch (key) {
			case "Name":
			case "Tagline":
			case "Website":
				AppiumKeyword.writeInto(input(key), value);
				AppiumKeyword.closeKeyboard();
				break;
			default:
				break;
			}
		}
		AppiumKeyword.pushOn(next("app-name-organization","Next"));

		AppiumKeyword.pushOn(text("Skip"));

	}

	public static void eliminarPagina(String page) throws Exception {
		AppiumKeyword.pushOn(ariaLabel("app-organization-profile", "settings outline"));
		AppiumKeyword.pushOn(text(" Delete page "));
	}
}
