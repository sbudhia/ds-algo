// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

// Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

// Example 1:

// Input: root = [3,2,3,null,3,null,1]
// Output: 7
// Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.

var rob = function (root) {
  const util = (root) => {
    if (root === null) return [0, 0];
    let res = [0, 0];
    let left = util(root.left);
    let right = util(root.right);
    res[0] = root.val + left[1] + right[1];
    res[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return res;
  };
  let ans = util(root);
  return Math.max(ans[0], ans[1]);
};
