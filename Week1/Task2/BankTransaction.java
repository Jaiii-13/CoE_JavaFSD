package Multithreading_Synchronization;

class BankTransaction implements Runnable {
    private BankAccount account;
    private boolean deposit;
    private double amount;
    
    public BankTransaction(BankAccount account, boolean deposit, double amount) {
        this.account = account;
        this.deposit = deposit;
        this.amount = amount;
    }
    
    @Override
    public void run() {
        if (deposit) {
            account.deposit(amount);
        } else {
            account.withdraw(amount);
        }
    }
}