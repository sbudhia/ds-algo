// Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

// Return all the possible results. You may return the answer in any order.

 

// Example 1:

// Input: s = "()())()"
// Output: ["(())()","()()()"]

/**
 * @param {string} s
 * @return {string[]}
 */

var removeInvalidParentheses = function(s) {
    const isValid = (str) => {
        let open=0
        for(let i=0;i<str.length;i++){
            if(str[i]=='(')
                open++
            else if(str[i]==')'){
                if(open>0)
                    open--
                else
                    return false
            }
        }
        if(open>0)
            return false
        return true
    } 
    
    if (!s || s.length === 0) return [''];
    
    const queue = [s], seen = new Set(), result = [];
    seen.add(s);
    
    let validFound = false;
    
    while (queue.length > 0) {
        let expression = queue.shift();
        
        // If expression is valid
        if (isValid(expression)) {
            result.push(expression);// Push to result
            validFound = true;
        }
        
        if (validFound) continue;// If atleast one valid string found, don't do anything
        
        for (let i = 0; i < expression.length; i++) {
            if (expression[i] !== '(' && expression[i] !== ')') {
                continue;// If expression's i-th character is anything but one of ( or ), continue
            }
            
            // Calculate next string for consideration
            // Characters 0 to i-th (not including) + Characters (i + 1)th (including) to end
            let next = expression.substring(0, i) + expression.substring(i + 1);
            if (!seen.has(next)) {
                seen.add(next);
                queue.push(next);
            }
        }
    }
    
    return result;
};