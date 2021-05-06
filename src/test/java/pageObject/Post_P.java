package pageObject;

import java.util.List;

import framework.AppiumKeyword;
import io.cucumber.datatable.DataTable;

public class Post_P extends General_P {

	public static String[] newPost = { "xpath", "//*[@class='ion-page can-go-back']//app-new-post-button/ion-button" };
	public static String[] textArea = { "xpath", "//app-create-post//textarea" };
	public static String[] post = { "xpath", "//app-create-post//*[contains(text(),'Post')]" };

	public static String[] buttonMenuText(String value) {
		String[] object = { "xpath", "//ion-menu//*[text()='$$']" };
		object[1] = object[1].replace("$$", value);
		return object;
	};

	public static void createPost(DataTable table) throws Exception {

		AppiumKeyword.pushOn(newPost);

		List<List<String>> data = table.asLists();
		for (int i = 0; i < data.size(); i++) {
			String key = data.get(i).get(0);
			String value = data.get(i).get(1);

			switch (key) {
			case "Texto":
				AppiumKeyword.writeInto(textArea, value);
				break;

			default:
				break;
			}

			AppiumKeyword.pushOn(post);
			
			AppiumKeyword.waitSec(4);
		}

	}
}
