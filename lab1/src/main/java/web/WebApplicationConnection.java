package web;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class WebApplicationConnection {
    private PrintWriter out;
    private BufferedReader in;
    private URLConnection clientConnection;

    public void startConnection(String url) throws IOException {
        clientConnection = new URL(url).openConnection();
        out = new PrintWriter(new FileOutputStream("UrlConn.txt"), true);
        in = new BufferedReader(new InputStreamReader(clientConnection.getInputStream()));

    }

    public void send() throws IOException {
        String inputLine;
        while ((inputLine = in.readLine()) != null) {


            if (".".equals(inputLine)) {
                break;
            }

            out.println(inputLine);

        }
    }
    public void print(URL url ) throws IOException {
        HttpURLConnection conn = (HttpURLConnection)url.openConnection();
        conn.setRequestMethod("GET");
        conn.connect();
        Map<String, List<String>> headerFields = conn.getHeaderFields();
        System.out.println(headerFields.toString());
        conn.disconnect();
    }



    public void stopConnection() throws IOException {
        in.close();
        out.close();

    }


    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter url:");
        String url = scanner.next();
        WebApplicationConnection webApplicationConnection = new WebApplicationConnection();
        webApplicationConnection.startConnection(url);
        webApplicationConnection.send();
        webApplicationConnection.print(new URL(url));
        webApplicationConnection.stopConnection();
    }
}
