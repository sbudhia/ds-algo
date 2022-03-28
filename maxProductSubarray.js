var maxProduct = function(nums) {
    let curr_max=1, curr_min=1, res=Math.max(...nums)
    for(let num of nums){
        let tmp=curr_max*num
        curr_max=Math.max(tmp, num*curr_min, num)
        curr_min=Math.min(tmp, num*curr_min, num)
        res=Math.max(res,curr_max)
    }
    return res
};

console.log(maxProduct([-4,-3,-2]))