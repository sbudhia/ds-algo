var longestSubarray = function (nums, limit) {
  let maxLen = 0,
    begin = 0,
    len = nums.length;
  let curr_max = nums[0],
    curr_min = nums[0];
  let start = 0,
    end = 0;
  while (end < len) {
    if (nums[end] > curr_max) {
      curr_max = nums[end];
    } else if (nums[end] < curr_min) {
      curr_min = nums[end];
    }
    if (curr_max - curr_min <= limit) {
      if (end - start + 1 > maxLen) {
        maxLen = end - start + 1;
        begin = start;
      }
    } else {
      while (start < end && curr_max - curr_min > limit) {
        start++;
        curr_max = Math.max(...nums.slice(start, end + 1));
        curr_min = Math.min(...nums.slice(start, end + 1));
      }
    }
    end++;
  }
  return nums.slice(begin, begin + maxLen);
};

var longestSubarray = function (nums, limit) {
  let count = 0;
  let result = 0;
  let current = [];
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < nums.length; index++) {
    current.push(nums[index]);

    if (current.length < result) {
      continue;
    }

    min = Math.min(min, nums[index]);
    max = Math.max(max, nums[index]);

    let diff = Math.abs(max - min);

    if (diff <= limit) {
      count = current.length;
    } else {
      let ele = current.shift();

      if (ele === min) {
        min = Math.min(...current);
      } else if (ele === max) {
        max = Math.max(...current);
      }
    }

    result = Math.max(result, count);
  }

  return result;
};

console.log(longestSubarray((nums = [10, 1, 2, 4, 7, 2]), (limit = 5)));
