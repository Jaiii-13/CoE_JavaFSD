package Serialize_Deserialize;

import java.util.*;

public class BinaryTreeSerializer {

    // Serialize the binary tree to a string
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeHelper(root, sb);
        return sb.toString();
    }

    private void serializeHelper(TreeNode root, StringBuilder sb) {
        if (root == null) {
            sb.append("null,");
        } else {
            sb.append(root.val).append(",");
            serializeHelper(root.left, sb);
            serializeHelper(root.right, sb);
        }
    }

    // Deserialize the string back to a binary tree
    public TreeNode deserialize(String data) {
        Queue<String> nodes = new LinkedList<>(Arrays.asList(data.split(",")));
        return deserializeHelper(nodes);
    }

    private TreeNode deserializeHelper(Queue<String> nodes) {
        String value = nodes.poll();
        if (value.equals("null")) {
            return null;
        } else {
            TreeNode node = new TreeNode(Integer.parseInt(value));
            node.left = deserializeHelper(nodes);
            node.right = deserializeHelper(nodes);
            return node;
        }
    }

    // Test the serialize and deserialize methods
    public static void main(String[] args) {
        BinaryTreeSerializer serializer = new BinaryTreeSerializer();
        
        // Create a simple binary tree
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        // Serialize the tree
        String serialized = serializer.serialize(root);
        System.out.println("Serialized tree: " + serialized);
        
        // Deserialize the tree
        TreeNode deserializedRoot = serializer.deserialize(serialized);
        String serializedAgain = serializer.serialize(deserializedRoot);
        System.out.println("Serialized again after deserialization: " + serializedAgain);
    }
}