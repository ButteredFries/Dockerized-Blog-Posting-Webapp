package ca.utoronto.utm.mcs;

import java.io.IOException;
import java.util.Arrays;
import java.net.InetSocketAddress;
import com.sun.net.httpserver.HttpServer;

import ca.utoronto.utm.mcs.post.Get;
import ca.utoronto.utm.mcs.post.Send;
import ca.utoronto.utm.mcs.post.Delete;
import dagger.Module;
import dagger.Provides;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

@Module
public class DaggerModule {
	
	private static MongoClient db = MongoClients.create(System.getenv("MONGODB_CONNSTRING"));
	private static HttpServer server;
	
    @Provides public MongoClient provideMongoClient() {
    	return db;
    }

    @Provides public HttpServer provideHttpServer() {
    	try {
			server = HttpServer.create(new InetSocketAddress("0.0.0.0", App.port), 0);
			
	        server.createContext("/api/v1/post/get", new Get(db));
			server.createContext("/api/v1/post/send", new Send(db));
			server.createContext("/api/v1/post/delete", new Delete(db));
			
	        return server;
		} 
    	catch (IOException e) {
			System.out.println("ERROR: "+e);
			e.printStackTrace();
		}
        
        return null;
    }
}
