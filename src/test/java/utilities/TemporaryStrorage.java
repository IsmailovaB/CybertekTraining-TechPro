package utilities;

import cucumber.api.java.it.Ma;

import java.util.HashMap;
import java.util.Map;

public class TemporaryStrorage {

    private static Map<String, String> data = new HashMap<>();


    public static String getData(String key){
        return data.get(key);
    }

    public static void storeData(String key, String value){
        data.put(key,value);
    }
}
