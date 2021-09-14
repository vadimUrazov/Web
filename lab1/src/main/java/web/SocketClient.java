package web;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.Socket;
import java.net.URL;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class SocketClient {
    private Socket clientSocket;
    private PrintWriter out;
    private BufferedReader in;

    public void startConnection(String url, int port) throws IOException {
        clientSocket = new Socket(url, port);
        out = new PrintWriter(new FileOutputStream("socket.txt"), true);
        in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));

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

    public void print(URL url) throws IOException {
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.connect();
        Map<String, List<String>> headerFields = conn.getHeaderFields();
        System.out.println(headerFields.toString());
        conn.disconnect();
    }

    public void stopConnection() throws IOException {
        in.close();
        out.close();
        clientSocket.close();
    }
/**
 * http port - 80
 * https port - 443
 * **/
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter url:");
        String inputUrl = scanner.next();
        URL url = new URL(inputUrl);

        SocketClient socketClient = new SocketClient();
        socketClient.startConnection(url.getHost(), 80);

        socketClient.send();
        socketClient.print(url);
        socketClient.stopConnection();
    }
}
