// Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. 
// Tasks could be done in any order. Each task is done in one unit of time. 
// For each unit of time, the CPU could complete either one task or just be idle.

// However, there is a non-negative integer n that represents 
// the cooldown period between two same tasks (the same letter in the array), 
// that is that there must be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all the given tasks.

 

// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: 
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.

//https://medium.com/@swgarciab/task-scheduler-leetcode-problem-a74acadf0e22

const leastInterval = (tasks, n) => {
  const newMap = tasks.reduce((map, obj) => {
    map[obj] = map[obj] + 1 || 1;
    return map;
  }, {});

  const array = Object.values(newMap);
  const maximumRows = Math.max(...array);
  const lastRowLength = array.filter((x) => x === maximumRows).length;
  return Math.max(tasks.length, (maximumRows - 1) * (n + 1) + lastRowLength);
};
