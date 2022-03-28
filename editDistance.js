// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

var minDistance = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;
  
    let dp = Array.from(Array(len2+1), () => new Array(len1+1)) 
    for(let i = 0; i <= len1; i++)
        dp[0][i] = i;  
    
    for(let i=1;i<=len2;i++){
        for(let j=0;j<=len1;j++){
            if(j === 0)
                dp[i][j] = i 
            else if(word1[j-1] === word2[i-1])
                dp[i][j] = dp[i-1][j-1]
            else
                dp[i][j] = 1 + Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j])
        }
    }
    return dp[len2][len1];
};

console.log(minDistance("intention","execution"))