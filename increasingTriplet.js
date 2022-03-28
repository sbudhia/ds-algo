// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k 
// and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.

var increasingTriplet = function(nums) {    
      let one = Infinity;
      let two = Infinity;

      for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= one) {
          one = nums[i];
        } else if (nums[i] <= two) {
          two = nums[i];
        } else {
          return true;
        }
      }

      return false;
};