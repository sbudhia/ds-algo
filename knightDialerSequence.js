const neighbors = {
  0: [4, 6],
  1: [6, 8],
  2: [7, 9],
  3: [4, 8],
  4: [0, 3, 9],
  5: [],
  6: [0, 1, 7],
  7: [2, 6],
  8: [1, 3],
  9: [2, 4],
};

const count_sequences = (num_hops) => {
  if (num_hops === 1) return 10;
  num_hops -= 1;
  let prior_case = new Array(10).fill(1);
  let current_num_hops = 1;
  let current_case = [];

  while (current_num_hops <= num_hops) {
    current_case = new Array(10).fill(0);
    current_num_hops += 1;
    for (let i = 0; i <= 9; i++) {
      for (let neighbor of neighbors[i])
        current_case[i] += prior_case[neighbor];
    }
    prior_case = current_case;
  }
  return current_case.reduce((a, b) => a + b, 0) % (Math.pow(10, 9) + 7);
};
console.log(count_sequences(1));
