package pageObject;

import java.util.ArrayList;
import java.util.List;

import framework.AppiumKeyword;
import io.cucumber.datatable.DataTable;

public class Profile_P extends General_P {

	public static String[] newPost = { "xpath", "//app-new-post-button/ion-button" };
	public static String[] textArea = { "xpath", "//app-create-post//textarea" };
	public static String [] delete = { "xpath", "//*[@ng-reflect-name='trash']"};

	public static String[] buttonMenuText(String value) {
		String[] object = { "xpath", "//app-user-profile//*[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};

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
			case "Experience":
			case "Education":
			case "Skills":
				selector = buttonMenuText(key);
				break;
			case "Edit":
				selector = buttonMenuText(key);
			default:
				if (key.contains("Post: "))
					selector = buttonMenuText(key.replace("Post: ", ""));
				else
					throw new Error(key + " is not valid option");
			}
			AppiumKeyword.verify(selector, 10);
		}

		if (access) {
			AppiumKeyword.pushOn(selector);
		}
	}
	
	public static void deletePost() throws Exception {
		AppiumKeyword.pushOn(delete);
		AppiumKeyword.verify(containsText("Delete publication?"), 3);
		AppiumKeyword.pushOn(containsText("Accept"));
		AppiumKeyword.waitToVanish(containsText("Accept"), 10);
	}
}
