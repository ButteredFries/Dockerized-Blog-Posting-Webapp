package ca.utoronto.utm.mcs.post;

import java.io.IOException;
import java.io.OutputStream;

import org.json.*;

import com.mongodb.client.MongoClient;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

public class Get implements HttpHandler
{
    private static MongoClient db;

    public Get(MongoClient db) {
        Get.db = db;
    }

    public void handle(HttpExchange r) throws IOException {
        try {
            r.getResponseHeaders().add("Access-Control-Allow-Origin", "*");

            if (r.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
                handleOptions(r);
            }
            else if (r.getRequestMethod().equalsIgnoreCase("GET") || r.getRequestMethod().equalsIgnoreCase("POST")) {
                handleGet(r);
            }
            else {
                //405 METHOD NOT ALLOWED - called with something other than GET, PUT, DELETE
                String response = "";
                r.sendResponseHeaders(405, response.length());
                OutputStream os = r.getResponseBody();
                os.write(response.getBytes());
                os.close();
            }
        } catch (JSONException e) {
            //400 BAD REQUEST - Improperly formatted JSON
            String response = "";
            r.sendResponseHeaders(400, response.length());
            OutputStream os = r.getResponseBody();
            os.write(response.getBytes());
            os.close();
        } catch (Exception e) {
            //500 INTERNAL SERVER ERROR
            String response = "";
            r.sendResponseHeaders(500, response.length());
            OutputStream os = r.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
    
    private void handleGet(HttpExchange r) throws IOException, JSONException, Exception {
        Handle.handleGet(r, db.getDatabase("content").getCollection("posts"));
    }
    private void handleOptions(HttpExchange r) throws IOException, JSONException, Exception {
        Handle.handleOptions(r);
    }
    
}
