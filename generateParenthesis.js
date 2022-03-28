// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]


var generateParenthesis = function(n) {
    const ans = []
    _generateParenthesis(n,0,0,"",ans)
    return ans
    
};

const _generateParenthesis = (n,open,close,s,ans) => {
    if(open==n && close==n){
        ans.push(s);
        return;
    } 
    if(open<n){
        _generateParenthesis(n, open+1, close, s+"(", ans);
    }
    if(close<open){
        _generateParenthesis(n, open, close+1, s+")", ans);
    }
       
}