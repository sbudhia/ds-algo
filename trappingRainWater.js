var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
     
    let l_max = 0;
    let r_max = 0;
     
    let result = 0;
    while (left <= right)
    {
        if(r_max <= l_max)
        {        
            result += Math.max(0, r_max - height[right]);
            r_max = Math.max(r_max, height[right]);
            right -= 1;
        }
        else
        {
            result += Math.max(0, l_max - height[left]);
            l_max = Math.max(l_max, height[left]);
            left += 1;
        }
        console.log({left,right, l_max, r_max, result})
    }
    return result;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])