class SegmentTree {
    constructor(arr) {
        this.arr=arr
        this.segmentArr=[]
        this.constructSegmentTreeUtil(this.arr)
    }

    constructSegmentTreeUtil(arr,idx=0) {
        if(arr.length<=0)
            return
        const l=0,r=arr.length-1
        if(l==r){
            this.segmentArr[idx]=arr[l]
            return arr[l]
        }
        const mid=Math.floor((l+r)/2)+1
        const left = this.constructSegmentTreeUtil(arr.slice(0,mid),2*idx+1)
        const right = this.constructSegmentTreeUtil(arr.slice(mid),2*idx+2)
        this.segmentArr[idx]=left+right
        return left+right
    }

    getSum(left, right, idx=0, arrLeft=0, arrRight=this.arr.length-1) {
        if(left<=arrLeft && right>=arrRight) {
            return this.segmentArr[idx] // Total Overlap
        }
        if (arrRight<left || arrLeft > right) {
            return 0 // No overlap
        }
        const mid=Math.floor((arrLeft+arrRight)/2)
        return this.getSum(left, right, 2*idx+1, arrLeft, mid) + this.getSum(left, right, 2*idx+2, mid+1, arrRight)
    }

    update(pos, value){
        if(pos<0 || pos>=this.arr.length-1) return
        const diff=value-this.arr[pos]
        this.arr[pos]=value
        
        const updateSegmentTree = (idx=0, arrLeft=0, arrRight=this.arr.length-1) => {
            if(arrLeft>pos || arrRight<pos || arrLeft>arrRight)
                return
            this.segmentArr[idx]+=diff
            if(arrLeft != arrRight){
                const mid=Math.floor((arrLeft+arrRight)/2)
                updateSegmentTree(2*idx+1, arrLeft, mid)
                updateSegmentTree(2*idx+2, mid+1, arrRight)    
            }
        }
        updateSegmentTree()
    }

    display() {
        console.log(this.segmentArr)
    }

}

const nums=[1,2,3,4,5,6]
const segmentTree = new SegmentTree(nums)
segmentTree.display()
console.log(segmentTree.getSum(1,2))
segmentTree.update(1,8)
segmentTree.display()