// Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

 

// Example 1:

// Input: arr = [3,1,2,4]
// Output: 17
// Explanation: 
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.

// Efficient Approach: The general intuition for solution to the problem is to find sum(A[i] * f(i)), where f(i) is the number of subarrays in which A[i] is the minimum.
// In order to find f[i], we need to find out: 
// left[i], the length of strictly larger numbers on the left of A[i], 
// right[i], the length of larger numbers on the right of A[i].
// We make two arrays left[ ] and right[ ] such that: 
// left[i] + 1 equals to the number of subarrays ending with A[i], and A[i] is only single minimum. 
// Similarly, right[i] + 1 equals to the number of subarrays starting with A[i], and A[i] is first minimum.
// Finally, f(i) = (left[i]) * (right[i]), where f[i] equals total number of subarrays in which A[i] is minimum.

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const left=getMinimumLengthtoLeft(arr)
    const right=getMinimumLengthtoRight([...arr])
    let ans=0
    for(let i=0;i<arr.length;i++){
        ans+=((arr[i]*left[i]*right[i]) % (Math.pow(10,9)+7))
    }
    return (ans % (Math.pow(10,9)+7))
};

const getMinimumLengthtoLeft = (arr) => {
    let stack=[], ans=[]
    for(let i=0;i<arr.length;i++){
        let cnt=1
        while(stack.length!==0 && stack[stack.length-1][0] > arr[i]){
            cnt+=stack[stack.length-1][1]
            stack.pop()
        }
        stack.push([arr[i], cnt])
        ans[i]=cnt
    }
    return ans
}

const getMinimumLengthtoRight = (arr) => {
    arr.reverse()
    let stack=[], ans=[]
    for(let i=0;i<arr.length;i++){
        let cnt=1
        while(stack.length!==0 && stack[stack.length-1][0] >= arr[i]){
            cnt+=stack[stack.length-1][1]
            stack.pop()
        }
        stack.push([arr[i], cnt])
        ans[i]=cnt
    }
    return ans.reverse()
}