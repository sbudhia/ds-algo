// You are given an integer array nums that is sorted in non-decreasing order.

// Determine if it is possible to split nums into one or more subsequences such that both of the following conditions are true:

// Each subsequence is a consecutive increasing sequence (i.e. each integer is exactly one more than the previous integer).
// All subsequences have a length of 3 or more.
// Return true if you can split nums according to the above conditions, or false otherwise.

// A subsequence of an array is a new array that is formed from the original array by deleting some (can be none) of the elements without disturbing the relative positions of the remaining elements. (i.e., [1,3,5] is a subsequence of [1,2,3,4,5] while [1,3,2] is not).

 

// Example 1:

// Input: nums = [1,2,3,3,4,5]
// Output: true
// Explanation: nums can be split into the following subsequences:
// [1,2,3,3,4,5] --> 1, 2, 3
// [1,2,3,3,4,5] --> 3, 4, 5

var isPossible = function(nums) {
    let f_map = {}, h_map = {}
    for(let num of nums){
        f_map[num] = f_map[num] ? f_map[num] + 1 : 1
    }
    console.log(f_map)
    for(let num of nums) {
        let tmp = num, count = 0
        if(f_map[tmp] === 0) {
            continue
        }
        else if(h_map[tmp] > 0) {
            f_map[tmp]-=1
            h_map[tmp]-=1
            h_map[tmp+1] = h_map[tmp+1] ? h_map[tmp+1] + 1 : 1
        } else if (f_map[tmp] > 0) {
            while(f_map[tmp] > 0 && count < 3) {
                f_map[tmp]-=1
                tmp++
                count++
            }
            if(count !== 3)
                return false
            h_map[tmp] = h_map[tmp] ? h_map[tmp] + 1 : 1
        } else {
            return false
        }
    }
    return true
};