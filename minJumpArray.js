// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

var jump = function(nums) {
    if(nums.length === 1)
            return 0
    if(nums[0] < 1){
        return -1
    }
    let res = -1, max_idx_reach = 0, jump = 0,curr_max=0
    for(let i=0;i<nums.length;i++) {
        if(i+nums[i] >= nums.length-1) {
            res = res===-1 ? jump+1 : Math.min(res, jump+1)
        }
        curr_max = Math.max(curr_max, i+ nums[i])
        if(max_idx_reach === i){
            max_idx_reach = curr_max
            jump++
        }
    }
    return res
};

console.log(jump([2,3,1,1,4]))