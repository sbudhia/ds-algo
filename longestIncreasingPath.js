// Given an m x n integers matrix, return the length of the longest increasing path in matrix.

// From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

 

// Example 1:


// Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].

var longestIncreasingPath = function(matrix) {

    if(matrix.length === 0) return 0;
    
    let max = 0;
	
    const map = new Map(); // key, value => i|j, count
    
    const isOutside = (i, j) => i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length;
    
    const helper = (i, j, prev) => {
        
        const key = `${i}|${j}`;
        
        if(isOutside(i, j) || matrix[i][j] <= prev) return 0;
        if(map.has(key)) return map.get(key);
        
        const num = matrix[i][j];
        
        const l = helper(i, j - 1, num);
        const r = helper(i, j + 1, num);
        const t = helper(i - 1, j, num);
        const d = helper(i + 1, j, num);

        map.set(key, Math.max(l, r, t, d) + 1);
        max = Math.max(max, map.get(key));
        
        return map.get(key);
        
    };
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            const key = `${i}|${j}`;
            if(!map.has(key)) helper(i, j, -Number.MAX_VALUE);
        }
    }
    
    return max;
};