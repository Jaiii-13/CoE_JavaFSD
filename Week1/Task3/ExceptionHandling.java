package Exception_Handling;

import java.util.Scanner;

public class ExceptionHandling {
    public static void processInput() {
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.print("Enter a number: ");
            double num = scanner.nextDouble();
            double reciprocal = 1 / num;
            System.out.println("The reciprocal of " + num + " is " + reciprocal);
        } catch (java.util.InputMismatchException e) {
            System.out.println("Invalid input! Please enter a numerical value.");
        } catch (ArithmeticException e) {
            System.out.println("Error! Division by zero is not allowed.");
        } catch (Exception e) {
            System.out.println("An unexpected error occurred: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }

    public static void main(String[] args) {
        processInput();
    }
}
