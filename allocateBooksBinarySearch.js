function books(A, B){

    const isValid = (sum) => {
        let student_count = 1,curr_sum = 0
        for(let i=0;i<A.length;i++) {
            if(curr_sum+A[i]>sum) {
                student_count++;
                if(student_count > B)
                    return false
                curr_sum = A[i]
            } else {
                curr_sum += A[i]
            }
        }
        return true
    }

    const allocateBooks = () => {
        if(A.length < B)
            return -1
        let l = 0, r = 0, ans = Number.POSITIVE_INFINITY
        for(let i=0;i<A.length;i++) {
            if(A[i]>l)
                l = A[i]
            r+=A[i]
        }
        while(l <= r) {
            let mid = Math.floor((r + l)/2)
            if(isValid(mid)) {
                ans = Math.min(ans, mid)
                r=mid-1
            } else {
                l=mid+1
            }
        }
        return ans
    }
    return allocateBooks()
}

console.log(books([ 97, 26, 12, 67, 10, 33, 79, 49, 79, 21, 67, 72, 93, 36, 85, 45, 28, 91, 94, 57, 1, 53, 8, 44, 68, 90, 24 ], 26))