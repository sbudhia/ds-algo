function DFS(M, i, j, ROW, COL) {
  if (i < 0 || j < 0 || i > ROW - 1 || j > COL - 1 || M[i][j] != 1) {
    return;
  }

  if (M[i][j] == 1) {
    M[i][j] = 0;
    DFS(M, i + 1, j, ROW, COL); //right side traversal
    DFS(M, i - 1, j, ROW, COL); //left side traversal
    DFS(M, i, j + 1, ROW, COL); //upward side traversal
    DFS(M, i, j - 1, ROW, COL); //downward side traversal
  }
}
var numIslands = function (M) {
  let ROW = M.length;
  let COL = M[0].length;
  let count = 0;
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (M[i][j] == 1) {
        M[i][j] = 0;
        count++;
        DFS(M, i + 1, j, ROW, COL); //right side traversal
        DFS(M, i - 1, j, ROW, COL); //left side traversal
        DFS(M, i, j + 1, ROW, COL); //upward side traversal
        DFS(M, i, j - 1, ROW, COL); //downward side traversal
      }
    }
  }
  return count;
};
