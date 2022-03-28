// Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)

// The solution set must not contain duplicate triplets.

// For example, given array S = {-1 0 1 2 -1 -4},

// A solution set is:

//   (-1, 0, 1)

//   (-1, -1, 2)

function tripletSumZero(A){
    A = A.sort((a,b) => {
        return a > b ? 1: -1
    })
    console.log(A)
    let ans = [], hash ={}
    for(let i=0;i<A.length-2;i++) {
        let l=i+1,r=A.length-1
        while(l<r) {
            if(A[l] + A[r] + A[i] === 0) {
                if(!hash[`${A[i]}${A[l]}${A[r]}`]) {
                    hash[`${A[i]}${A[l]}${A[r]}`] = true
                    ans.push([A[i], A[l], A[r]])
                }
                l++
                r--
            } else if(A[l] + A[r] + A[i]<0) {
                l++
            } else {
                r--
            }
        }
    }
    return ans
}

console.log(tripletSumZero([ 1, -4, 0, 0, 5, -5, 1, 0, -2, 4, -4, 1, -1, -4, 3, 4, -1, -1, -3 ]))