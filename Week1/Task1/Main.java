package Custom_Collection;

public class Main {
    public static void main(String[] args) {
        TaskManager taskManager = new TaskManager();
        
        // Adding tasks
        taskManager.addTask("T1", "Complete homework", 3);
        taskManager.addTask("T2", "Pay bills", 5);
        taskManager.addTask("T3", "Do laundry", 2);
        
        // Display tasks
        System.out.println("All tasks in the task manager:");
        taskManager.displayTasks();

        // Get the highest priority task
        Task highestPriorityTask = taskManager.getHighestPriorityTask();
        System.out.println("\nHighest priority task: " + highestPriorityTask);

        // Remove a task
        taskManager.removeTask("T2");

        // Display tasks after removal
        System.out.println("\nTasks after removing T2:");
        taskManager.displayTasks();
    }
}