package Martix_Multiplication;

public class MatrixMultiplication {
    // Method to perform matrix multiplication
    public static int[][] multiplyMatrices(int[][] matrixA, int[][] matrixB) {
        int rowsA = matrixA.length;
        int colsA = matrixA[0].length;
        int colsB = matrixB[0].length;
        
        // Check if multiplication is possible
        if (colsA != matrixB.length) {
            throw new IllegalArgumentException("Matrix dimensions do not match for multiplication.");
        }

        // Resultant matrix
        int[][] result = new int[rowsA][colsB];

        // Creating a thread for each cell in the resulting matrix
        Thread[] threads = new Thread[rowsA * colsB];
        int threadIndex = 0;
        
        for (int i = 0; i < rowsA; i++) {
            for (int j = 0; j < colsB; j++) {
                final int row = i;
                final int col = j;
                threads[threadIndex] = new Thread(() -> {
                    int sum = 0;
                    for (int k = 0; k < colsA; k++) {
                        sum += matrixA[row][k] * matrixB[k][col];
                    }
                    result[row][col] = sum;
                });
                threads[threadIndex].start();
                threadIndex++;
            }
        }

        // Wait for all threads to finish
        for (Thread t : threads) {
            try {
                t.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        return result;
    }

    // Method to print matrix
    public static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] matrixA = {{1, 2}, {3, 4}};
        int[][] matrixB = {{2, 0}, {1, 2}};
        
        int[][] result = multiplyMatrices(matrixA, matrixB);
        
        System.out.println("Result of the multiplication:");
        printMatrix(result);
    }
}