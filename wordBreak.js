// Given a string s and a dictionary of strings wordDict, return true if s can be segmented 
// into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

var wordBreak = function(s, wordDict) {
    let dp=Array(s.length + 1).fill(false);
    
    dp[0] = true; 
    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};