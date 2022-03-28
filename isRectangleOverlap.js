class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

var isRectangleOverlap = function (rec1, rec2) {
  let l1 = new Point(rec1[0], rec1[3]);
  let r1 = new Point(rec1[2], rec1[1]);
  let l2 = new Point(rec2[0], rec2[3]);
  let r2 = new Point(rec2[2], rec2[1]);
  if (l1.x == r1.x || l1.y == r1.y || l2.x == r2.x || l2.y == r2.y) {
    return false;
  }

  if (l1.x >= r2.x || l2.x >= r1.x) {
    return false;
  }
  if (r1.y >= l2.y || r2.y >= l1.y) {
    return false;
  }

  return true;
};

console.log(isRectangleOverlap([2, 17, 6, 20], [3, 8, 6, 20]));
