// Given an array arr[], find the maximum j – i such that arr[j] > arr[i].

// Examples : 

//   Input: {34, 8, 10, 3, 2, 80, 30, 33, 1}
//   Output: 6  (j = 7, i = 1)

function maxIndexDiff(arr, n)
{
    var leftMin = new Array(n).fill(0);;
    leftMin[0] = arr[0];
    for(var i = 1; i < n; i++){
        leftMin[i] = Math.min(leftMin[i-1] , arr[i]);
    }
     
    // leftMin[i] = min{ arr[i...(n-1] }
    var maxDist = Number.MIN_VALUE;
    var i = n-1;
    var j = n-1;
    while(i >= 0 && j >= 0)
    {
        if(arr[j] >= leftMin[i])
        {
            maxDist = Math.max( maxDist, j-i );
            i--;
        }
        else // if(rightMax[j] < leftMin[i])
        {    j--;
        }
     }
     return maxDist;   
}