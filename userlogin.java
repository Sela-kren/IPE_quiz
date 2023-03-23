import java.util.Scanner;
public class userlogin{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name;
        String password;
        System.out.println("This is the login page");
        System.out.println("Enter your name : ");
        name = sc.nextLine();
        System.out.println("Enter your password");
        password = sc.nextLine();
        System.out.println("Login successful");

    }
}