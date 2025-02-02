package StringHandling;

public class StringProcessor {

    // Method to reverse the string
    public static String reverseString(String str) {
        StringBuilder reversed = new StringBuilder(str);
        return reversed.reverse().toString();
    }

    // Method to count occurrences of a substring
    public static int countOccurrences(String text, String sub) {
        int count = 0;
        int index = 0;
        while ((index = text.indexOf(sub, index)) != -1) {
            count++;
            index += sub.length();
        }
        return count;
    }

    // Method to split the string by spaces and capitalize each word
    public static String splitAndCapitalize(String str) {
        String[] words = str.split(" ");
        StringBuilder result = new StringBuilder();
        for (String word : words) {
            result.append(word.substring(0, 1).toUpperCase())
                  .append(word.substring(1).toLowerCase())
                  .append(" ");
        }
        return result.toString().trim();
    }

    // Main method for testing
    public static void main(String[] args) {
        String text = "hello world from java";

        // Reverse string
        System.out.println(reverseString(text));  // Output: "avaj from dlrow olleh"

        // Count occurrences of a substring
        System.out.println(countOccurrences("hello hello hello", "hello"));  // Output: 3

        // Split and capitalize words
        System.out.println(splitAndCapitalize(text));  // Output: "Hello World From Java"
    }
}