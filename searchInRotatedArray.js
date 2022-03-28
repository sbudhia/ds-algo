// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4


var searchInRotatedArray = function(nums, target) {
    const idx = getBreakPoint(nums);
    const lIdx = binarySearch(nums.slice(0,idx+1), target)
    let rIdx = binarySearch(nums.slice(idx+1), target)
    rIdx = rIdx !== -1 ? rIdx + idx+1 : rIdx
    return (lIdx === -1) ? rIdx : lIdx
};
    
const binarySearch = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == x) return mid;
    if (arr[mid] > x) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
};
    
const getBreakPoint = (nums) => {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    if (nums[l] < nums[r]) break;
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[l]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  if (r < l) return l;
  if (r === nums.length - 1) {
    return l - 1;
  } else {
    if (l !== 0 && nums[l - 1] > nums[l]) {
      return l - 1;
    }
    return r;
  }
};