package Multithreading_Synchronization;

public class BankApplication {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);
        
        Thread t1 = new Thread(new BankTransaction(account, true, 500), "User1");
        Thread t2 = new Thread(new BankTransaction(account, false, 700), "User2");
        Thread t3 = new Thread(new BankTransaction(account, false, 300), "User3");
        Thread t4 = new Thread(new BankTransaction(account, true, 400), "User4");
        
        t1.start();
        t2.start();
        t3.start();
        t4.start();
    }
}

