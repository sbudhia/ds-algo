const maxHistogramArea = (arr) => {
  console.log(arr);
  const stack = [0];
  let max_area = 0,
    area = 0,
    i = 0;

  const calculateArea = () => {
    let idx = stack.pop();
    if (stack.length === 0) area = arr[idx] * i;
    else area = arr[idx] * (i - stack[stack.length - 1] - 1);

    max_area = Math.max(area, max_area);
  };

  for (; i < arr.length; i++) {
    if (stack.length === 0 || arr[i] > arr[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      while (stack.length !== 0 && arr[i] < arr[stack[stack.length - 1]]) {
        calculateArea();
      }
      stack.push(i);
    }
  }
  while (stack.length !== 0) {
    calculateArea();
  }

  return max_area;
};

var maximalRectangle = function (matrix) {
  let max_area = maxHistogramArea(matrix[0]);
  console.log(max_area);
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] !== "0")
        matrix[i][j] = parseInt(matrix[i][j]) + parseInt(matrix[i - 1][j]);
    }
    max_area = Math.max(max_area, maxHistogramArea(matrix[i]));
    console.log(max_area);
  }
  console.log(max_area);
};

maximalRectangle([
  ["0", "1"],
  ["1", "0"],
]);
