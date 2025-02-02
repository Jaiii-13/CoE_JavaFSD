package Java_IOStreams;

class User {
    String name;
    String email;

    User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    @Override
    public String toString() {
        return name + "," + email;
    }

    // For reading from file, split the string based on comma
    public static User fromString(String data) {
        String[] parts = data.split(",");
        return new User(parts[0], parts[1]);
    }
}
