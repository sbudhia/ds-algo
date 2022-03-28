// Given a matrix and a target, return the number of non-empty submatrices that sum to target.

// A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.

// Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different: for example, if x1 != x1'.

 

// Example 1:


// Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
// Output: 4
// Explanation: The four 1x1 submatrices that only contain 0.

var numSubmatrixSumTarget = function(matrix, target) {
    const m = matrix.length,n=matrix[0].length;
        
    for(let row =0;row<m;row++){
        for(let col=1;col<n;col++){
            matrix[row][col]+=matrix[row][col-1];
        }
    }
        
    let count=0;
        
    for(let c1=0;c1<n;c1++){
        for(let c2=c1;c2<n;c2++){
            
            let map={}
            map[0]=1
            let sum=0;
            
            for(let row=0;row<m;row++){
                sum += matrix[row][c2] - (c1>0 ? matrix[row][c1-1] : 0);
                count += (map[sum-target] ?? 0);
                map[sum] = (map[sum] ?? 0) + 1;
            }
            console.log(map)
        }
    }    
    return count;
};

numSubmatrixSumTarget(matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0)