var lengthOfLIS = function(nums) {
    let res=[1], max_val=1
    for(let i=1;i< nums.length;i++) {
        let val = 1
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j])
            val = Math.max(val,res[j] + 1)
        }
        max_val = Math.max(val,max_val)
        res.push(val)
    }
    return max_val
};