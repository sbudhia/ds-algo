function swap(a, i, j) {
  let temp;
  let charArray = a.split("");
  temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

let res = [];
const permute = (str, l, r) => {
  if (l === r) {
    res.push(str);
  } else {
    for (let i = l; i <= r; i++)
    {
        str = swap(str, l, i);
        console.log(str)
        // if(str[0]<="7")
        permute(str, l + 1, r);
        str = swap(str, l, i);
        console.log(str)
    }
  }
};
s = "7805"
permute(s, 0, s.length-1);
console.log(res, res.length);
// console.log(swap("abcdfr",2,4))
