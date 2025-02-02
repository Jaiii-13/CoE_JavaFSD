package Custom_Collection;



class Task implements Comparable<Task> {
    String id;
    String description;
    int priority;

    // Constructor
    public Task(String id, String description, int priority) {
        this.id = id;
        this.description = description;
        this.priority = priority;
    }

    // Getters for task details
    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public int getPriority() {
        return priority;
    }

    @Override
    public int compareTo(Task other) {
        // Compare based on priority in descending order (highest priority first)
        return Integer.compare(other.priority, this.priority); // Reverse order for highest priority first
    }

    @Override
    public String toString() {
        return "Task ID: " + id + ", Description: " + description + ", Priority: " + priority;
    }
}

