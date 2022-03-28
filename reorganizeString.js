// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

// Return any possible rearrangement of s or return "" if not possible.

 

// Example 1:

// Input: s = "aab"
// Output: "aba"

var reorganizeString = function(s) {
    if(s==='')
        return ''
    let hash={}, max=0, idx=0, max_ch='', ans=[]    
    for(let ch of s){
        hash[ch] = hash[ch] ? hash[ch] + 1 : 1
        if(max<hash[ch]){
            max=hash[ch]
            max_ch=ch
        }
    }
    if(max>(s.length+1)/2)
        return ''
    while(hash[max_ch]!=0){
        ans[idx]=max_ch
        hash[max_ch]-=1
        idx+=2
    }
    Object.keys(hash).forEach((key) => {
        while(hash[key]>0){
            idx=idx>=s.length?1:idx
            ans[idx]=key
            hash[key]-=1
            idx+=2
        }
    })
    return ans.join('')
};

console.log(reorganizeString('aab'))