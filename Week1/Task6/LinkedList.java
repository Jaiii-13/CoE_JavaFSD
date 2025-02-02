package Cycles_LinkedList;

public class LinkedList {
    // Node class
    static class Node {
        int value;
        Node next;

        Node(int value) {
            this.value = value;
            this.next = null;
        }
    }

    // Linked list class
    private Node head;

    public LinkedList() {
        head = null;
    }

    // Function to detect cycle in the linked list
    public boolean hasCycle(Node head) {
        if (head == null) return false;

        Node slow = head;
        Node fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;            // Move slow pointer by 1
            fast = fast.next.next;       // Move fast pointer by 2

            // If slow and fast meet, there's a cycle
            if (slow == fast) {
                return true;
            }
        }

        // No cycle found
        return false;
    }

    // Main method for testing
    public static void main(String[] args) {
        LinkedList ll = new LinkedList();

        // Creating a linked list: 1 -> 2 -> 3 -> 4
        ll.head = new Node(1);
        ll.head.next = new Node(2);
        ll.head.next.next = new Node(3);
        ll.head.next.next.next = new Node(4);

        // Creating a cycle: 4 -> 2
        ll.head.next.next.next.next = ll.head.next;

        // Test cycle detection
        System.out.println("Has cycle: " + ll.hasCycle(ll.head));  // Output: true
    }
}