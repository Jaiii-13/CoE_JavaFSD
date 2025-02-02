package LogFile_Analyzer;

import java.io.*;
import java.util.*;

public class LogFileAnalyzer {

    // Function to analyze the log file
    public void analyzeLogFile(String inputFile, String outputFile) {
        // List of keywords to search for in the log file
        List<String> keywords = Arrays.asList("ERROR", "WARNING"); // Keywords can be easily modified

        // Map to store the count of each keyword
        Map<String, Integer> keywordCount = new HashMap<>();
        for (String keyword : keywords) {
            keywordCount.put(keyword, 0);
        }

        try (BufferedReader reader = new BufferedReader(new FileReader(inputFile))) {
            String line;
            while ((line = reader.readLine()) != null) {
                // For each line, check if it contains any of the keywords
                for (String keyword : keywords) {
                    if (line.contains(keyword)) {
                        keywordCount.put(keyword, keywordCount.get(keyword) + 1);
                    }
                }
            }
        } catch (IOException e) {
            System.out.println("Error reading the input file: " + e.getMessage());
        }

        // Writing the result to the output file
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile))) {
            writer.write("Log Analysis Report\n");
            writer.write("-----------------------\n");

            for (String keyword : keywords) {
                writer.write(keyword + ": " + keywordCount.get(keyword) + " occurrences\n");
            }

            writer.write("\nAnalysis Complete.\n");

        } catch (IOException e) {
            System.out.println("Error writing to the output file: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        // Example usage of the program
        LogFileAnalyzer analyzer = new LogFileAnalyzer();
        analyzer.analyzeLogFile("input.log", "output_report.txt");
    }
}