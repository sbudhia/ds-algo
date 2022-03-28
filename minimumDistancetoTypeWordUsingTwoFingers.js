// Input: word = "CAKE"
// Output: 3
// Explanation: Using two fingers, one optimal way to type "CAKE" is: 
// Finger 1 on letter 'C' -> cost = 0 
// Finger 1 on letter 'A' -> cost = Distance from letter 'C' to letter 'A' = 2 
// Finger 2 on letter 'K' -> cost = 0 
// Finger 2 on letter 'E' -> cost = Distance from letter 'K' to letter 'E' = 1 
// Total distance = 3

// https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/

/**
 * @param {string} word
 * @return {number}
 */
const map = {
  A: [0, 0],
  B: [0, 1],
  C: [0, 2],
  D: [0, 3],
  E: [0, 4],
  F: [0, 5],
  G: [1, 0],
  H: [1, 1],
  I: [1, 2],
  J: [1, 3],
  K: [1, 4],
  L: [1, 5],
  M: [2, 0],
  N: [2, 1],
  O: [2, 2],
  P: [2, 3],
  Q: [2, 4],
  R: [2, 5],
  S: [3, 0],
  T: [3, 1],
  U: [3, 2],
  V: [3, 3],
  W: [3, 4],
  X: [3, 5],
  Y: [4, 0],
  Z: [4, 1],
};

const distance = (ltr1, ltr2) =>
  Math.abs(map[ltr1][0] - map[ltr2][0]) + Math.abs(map[ltr1][1] - map[ltr2][1]);

// /**
//  * @param {string} word
//  * @return {number}
//  */
// var minimumDistance = function (word) {
//     let ans=Infinity;
//     const util = (left, right, str, cost) => {
//         if(str.length==0){
//             console.log(cost);
//             ans=Math.min(ans,cost)
//             return
//         }
//         if(left=="") {
//             util(str[0], right, str.substr(1), cost)
//         } else {
//             util(str[0], right, str.substr(1), cost + distance(str[0], left))
//         }
//         if(right=="") {
//             util(left, str[0], str.substr(1), cost)
//         } else {
//             util(left, str[0], str.substr(1), cost + distance(str[0], right))
//         }
//     }  
//     util("","",word,0) 
//     return ans
// };

/**
 * @param {string} word
 * @return {number}
 */
 var minimumDistance = function (word) {
    const chars = new Set(word.split(""));
    const cache = new Array(word.length);
    for (let i = 0; i < cache.length; i++) cache[i] = {};
  
    const dfs = (left, right, next) => {
      if (next === word.length) return 0;
      const key = left === word[next - 1] ? right : left;
      if (cache[next][key] !== undefined) return cache[next][key];
      let res = dfs(word[next], right, next + 1) + distance(left, word[next]);
      res = Math.min(
        res,
        dfs(left, word[next], next + 1) + distance(right, word[next])
      );
      return (cache[next][key] = res);
    };
    
    let min = Infinity;
    for (let char of chars) {
        
      min = Math.min(min, dfs(word[0], char, 1));
    }

    return min;
  };

console.log(minimumDistance("HAPPY"));
