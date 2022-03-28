// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

var subarraysDivByK = function (nums, k) {
  let mod = new Array(k).fill(0);
  let res = 0;
  let n = nums.length;

  let currsum = 0;
  for (let i = 0; i < n; i++) {
    currsum += nums[i];
    mod[((currsum % k) + k) % k]++;
  }
  for (let i = 0; i < k; i++) {
    if (mod[i] > 1) res += parseInt((mod[i] * (mod[i] - 1)) / 2, 10);
  }
  res += mod[0];
  return res;
};
