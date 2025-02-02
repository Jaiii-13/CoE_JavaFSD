package Java_IOStreams;
import java.io.*;
import java.util.ArrayList;
import java.util.List;


public class UserManager {

    private List<User> users;

    public UserManager() {
        users = new ArrayList<>();
    }

    // Adds a user to the system
    public void addUser(String name, String email) {
        users.add(new User(name, email));
    }

    // Saves all user details to a file
    public void saveUsersToFile(String filename) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filename))) {
            for (User user : users) {
                writer.write(user.toString());
                writer.newLine();
            }
            System.out.println("Users saved to file: " + filename);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Loads user details from a file
    public void loadUsersFromFile(String filename) {
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = reader.readLine()) != null) {
                users.add(User.fromString(line));
            }
            System.out.println("Users loaded from file: " + filename);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Display all users
    public void displayUsers() {
        for (User user : users) {
            System.out.println("Name: " + user.name + ", Email: " + user.email);
        }
    }

    public static void main(String[] args) {
        UserManager manager = new UserManager();

        // Add some users
        manager.addUser("Alice", "alice@example.com");
        manager.addUser("Bob", "bob@example.com");

        // Save users to a file
        manager.saveUsersToFile("users.txt");

        // Create a new manager instance and load users from the file
        UserManager newManager = new UserManager();
        newManager.loadUsersFromFile("users.txt");

        // Display loaded users
        newManager.displayUsers();
    }
}