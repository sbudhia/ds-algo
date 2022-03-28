var longestPalindromeSubsequenceLength = function(s) {
    let len = s.length, dp = [...Array(len+1)].map(e => Array(len+1));
    for(let i=0;i<=len;i++)
        dp[0][i]=0
    for(let i=1;i<=len;i++){
        for(let j=0;j<=len;j++) {
            if(j===0)
                dp[i][j] = 0
            else if(s[j-1]===s[len-i])
                dp[i][j] = 1 + dp[i-1][j-1]
            else
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
        }
    }
    return dp[len][len]
};

longestPalindromeLength("aacabdkacaa")