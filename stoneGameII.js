// Alice and Bob continue their games with piles of stones.  
// There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].  
// The objective of the game is to end with the most stones. 

// Alice and Bob take turns, with Alice starting first.  Initially, M = 1.

// On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M.  
// Then, we set M = max(M, X).

// The game continues until all the stones have been taken.

// Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.

 

// Example 1:

// Input: piles = [2,7,9,4,4]
// Output: 10
// Explanation:  If Alice takes one pile at the beginning, Bob takes two piles, 
// then Alice takes 2 piles again. Alice can get 2 + 4 + 4 = 10 piles in total. 
// If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, 
// Alice get 2 + 7 = 9 piles in total. So we return 10 since it's larger. 

var stoneGameII = function(piles) {
    let presum =  [...piles]
    for (let i = presum.length - 2; i >= 0; i--) presum[i] += presum[i + 1];
    const memo = Array.from(Array(piles.length), () => new Array(piles.length)) 
    return dfs(presum, 1, 0, memo);
}
const dfs = (presum, m, p, memo) => {
    if (p + 2 * m >= presum.length) { // last player takes all
        return presum[p];
    }

    if (memo[p][m] > 0) return memo[p][m];
    let res = 0, take = 0;
    for (let i = 1; i <= 2 * m; i++) {
        // current take
        take = presum[p] - presum[p + i];
        // take max of current + what lefts from other player max take
        res = Math.max(res, take + presum[p + i] - dfs(presum, Math.max(i, m), p + i, memo));
    }
    memo[p][m] = res;
    return res;
}

console.log(stoneGameII([2,7,9,4,4]));