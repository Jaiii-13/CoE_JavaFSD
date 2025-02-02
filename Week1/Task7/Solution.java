package Anagram;

import java.util.*;

public class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> result = new ArrayList<>();
        
        // Edge case: If s or p is null or if s is smaller than p
        if (s == null || p == null || s.length() < p.length()) {
            return result;
        }
        
        // Frequency array for string p
        int[] pCount = new int[26];
        for (char c : p.toCharArray()) {
            pCount[c - 'a']++;
        }
        
        // Sliding window frequency array for string s
        int[] windowCount = new int[26];
        
        // Start sliding the window over string s
        for (int i = 0; i < s.length(); i++) {
            // Add current character to the window
            windowCount[s.charAt(i) - 'a']++;
            
            // If we have reached a window of size equal to p's length, we check if it matches
            if (i >= p.length()) {
                // Remove character that is going out of the window
                windowCount[s.charAt(i - p.length()) - 'a']--;
            }
            
            // If the two frequency arrays are equal, we found an anagram
            if (Arrays.equals(pCount, windowCount)) {
                result.add(i - p.length() + 1);
            }
        }
        
        return result;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String s = "cbaebabacd";
        String p = "abc";
        List<Integer> result = solution.findAnagrams(s, p);
        System.out.println(result); // Output: [0, 6]
    }
}