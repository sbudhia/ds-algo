// Input: k = 7
// Output: 2 
// Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ... 
// For k = 7 we can use 2 + 5 = 7.

const getFibonacci = (n) => {
    let arr=[0,1]
    while(arr[arr.length-1] < n) {
        arr.push(arr[arr.length-1] + arr[arr.length-2])
    }
    if(arr[arr.length-1] > n)
        arr.pop()
    arr.shift()
    return arr
}

var findMinFibonacciNumbers = function(k) {
    let fiboTerms=getFibonacci(k)
    console.log(fiboTerms)
    let count=0, j = fiboTerms.length - 1;
    while (k > 0)
    {
        count += parseInt(k / fiboTerms[j]);
        k %= (fiboTerms[j]); 
        j--;
    }
    return count
};

console.log(findMinFibonacciNumbers(3670636))