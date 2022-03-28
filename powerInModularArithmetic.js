// Given three numbers x, y and p, compute (xy) % p. 

// Examples : 

// Input:  x = 2, y = 3, p = 5
// Output: 3
// Explanation: 2^3 % 5 = 8 % 5 = 3.

function power(x, y, p)
{
    // Initialize result
    let res = 1;
 
    // Update x if it is more
    // than or equal to p
    x = x % p;
 
    if (x == 0)
        return 0;
 
    while (y > 0)
    {
        // If y is odd, multiply
        // x with result
        if (y & 1)
            res = (res * x) % p;
 
        // y must be even now
         
        // y = $y/2
        y = y >> 1;
        x = (x * x) % p;
    }
    return res;
}