function uniquePathInMatrix(r, c) {
  let matrix = Array.from(Array(r), () => new Array(c));
  for (let i = 0; i < r; i++) matrix[i][0] = 1;
  for (let i = 0; i < c; i++) matrix[0][i] = 1;
  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }
  return matrix[r - 1][c - 1];
}
