package Custom_Collection;
import java.util.PriorityQueue;

class TaskManager {
    private PriorityQueue<Task> taskQueue;

    public TaskManager() {
        taskQueue = new PriorityQueue<>();
    }

    // Adds a new task to the queue
    public void addTask(String id, String description, int priority) {
        Task newTask = new Task(id, description, priority);
        taskQueue.add(newTask);
    }

    // Removes a task by its ID
    public void removeTask(String id) {
        taskQueue.removeIf(task -> task.getId().equals(id));
    }

    // Retrieves the task with the highest priority without removing it
    public Task getHighestPriorityTask() {
        return taskQueue.peek();
    }

    // For testing purposes: display all tasks in the queue
    public void displayTasks() {
        taskQueue.forEach(System.out::println);
    }
}