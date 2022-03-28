// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]

var findDuplicates = function(nums) {
    let size = nums.length, ans = []
    for(let i=0;i<size;i++){
        nums[nums[i] % size] = nums[nums[i] % size] + size
    }
    for(let i=0;i<size;i++){
        if(nums[i] > (size*2)){
            ans.push(i===0 ? size : i)
        }
    }
    return ans
};