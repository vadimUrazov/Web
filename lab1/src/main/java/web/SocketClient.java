package web;

import java.io.*;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

public class SocketClient {

    public  void send(String[] hostAndResource )  {

        String host = hostAndResource[0];
        String resource = "/";
        if (hostAndResource.length == 2)
            resource += hostAndResource[1];


        try (Socket socket = new Socket(host, 80)) {
            socket.getOutputStream().write((
                    "GET " + resource + " HTTP/1.1\n" +
                            "Host: " + host + ":80\n" +
                            "User-Agent: Mozilla/5.0 (Ubuntu; Intel Linux OS X 20.4) " +
                            "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15\n\n"
            ).getBytes());

            try (BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()))) {
                int remainingContentLength = -1;
                System.out.println("Headers:");
                String line;
                while (!(line = reader.readLine()).isEmpty()) {
                    if (line.toLowerCase().startsWith("content-length"))
                        remainingContentLength = Integer.parseInt(line.split(" ")[1]);

                    System.out.println(line);
                }

                try (BufferedWriter writer = new BufferedWriter(new FileWriter("socket.txt", StandardCharsets.UTF_8))) {
                    while (remainingContentLength > 0) {
                        writer.write(reader.read());
                        remainingContentLength--;
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

    }


    public static void main(String[] args)  {
        SocketClient socketClient = new SocketClient();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the address");
        String[] hostAndResource = scanner.next().split("/", 2);

        socketClient.send(hostAndResource);
    }
}