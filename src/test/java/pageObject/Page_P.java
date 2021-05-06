package pageObject;

import java.util.ArrayList;
import java.util.List;

import framework.AppiumKeyword;
import io.cucumber.datatable.DataTable;

public class Page_P extends General_P {

	public static String[] newPost = { "xpath", "//app-new-post-button/ion-button" };
	public static String[] websiteInput = { "xpath", "//*[text()='Website']/.././/input" };

	public static String[] delete(String value) {
		String[] object = { "xpath", "//*[text()='$$']/../..//*[@aria-label='trash']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};
	
	public static String[] checkbox(String value) {
		String[] object = { "xpath", "//*[text()='$$']/..//ion-checkbox" };
		object[1] = object[1].replace("$$", value);
		return object;
	};
	
	public static String[] select(String value) {
		String[] object = { "xpath", "//*[text()='$$']/..//ion-select" };
		object[1] = object[1].replace("$$", value);
		return object;
	};
	
	public static String[] option(String value) {
		String[] object = { "xpath", "//button//*[text()=' $$']/.." };
		object[1] = object[1].replace("$$", value);
		return object;
	};
	
	public static String[] divText(String value) {
		String[] object = { "xpath", "//div//*[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};
	
	public static String[] button(String page, String value) {
		String[] object = { "xpath", "//%%//*[text()='$$']" };
		object[1] = object[1].replace("$$", value).replace("%%", page);
		return object;
	};

	public static void createPage(DataTable table) throws Exception {
		List<List<String>> data = table.asLists();

		// select page type
		AppiumKeyword.pushOn(text(data.get(0).get(1)));

		// select organization type
		AppiumKeyword.pushOn(select(data.get(1).get(0)));
		AppiumKeyword.pushOn(option(data.get(1).get(1)));

		AppiumKeyword.pushOn(button("*", "Next"));

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
		AppiumKeyword.pushOn(button("app-name-organization","Next"));

		AppiumKeyword.pushOn(text("Skip"));

	}

	public static void eliminarPagina(String page) throws Exception {
		AppiumKeyword.pushOn(ariaLabel("app-organization-profile", "settings outline"));
		AppiumKeyword.pushOn(text(" Delete page "));
		AppiumKeyword.pushOn(text("Accept"));
		AppiumKeyword.waitToVanish(text("Accept"), 5);
		AppiumKeyword.isNotPresent(ariaLabel("app-organization-profile", "settings outline"));
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
	
	public static void createOpportunity(DataTable table) throws Exception {

		AppiumKeyword.pushOn(button("app-organization-profile", "Post"));

		List<List<String>> data = table.asLists();
		for (int i = 0; i < data.size(); i++) {
			String key = data.get(i).get(0);
			String value = data.get(i).get(1);
		      
			switch (key) {
			case "Title":
				AppiumKeyword.dragToFind(input(key), "UP", 5);
				AppiumKeyword.writeInto(input(key), value);
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
			case "Redirect the candidate to an external webpage":
				AppiumKeyword.dragToFind(checkbox(key), "UP", 3);
				if(value.equals("true"))
					AppiumKeyword.pushOn(checkbox(key));
				break;
			case "Website":
				AppiumKeyword.dragToFind(websiteInput, "UP", 5);
				AppiumKeyword.writeInto(websiteInput, value);
				AppiumKeyword.closeKeyboard();
				
			default:
				break;
			}			
		}
		AppiumKeyword.pushOn(button("app-opportunity", "Post"));
		
	}
	
	public static void deleteOpportunity(String opportunity) throws Exception {
	
		AppiumKeyword.pushOn(delete(opportunity));
		AppiumKeyword.pushOn(text("Accept"));
		AppiumKeyword.waitToVanish(text("Accept"), 5);
		AppiumKeyword.verify(containsText("Post your job opportunities to recruit the best talent"), 5);
	}
}
