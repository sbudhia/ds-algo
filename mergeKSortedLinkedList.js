/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = []
   const getPosition = (num) => {
       if(arr.length === 0)
           return 0
        let l=0,r=arr.length-1
        while(l<r) {
            let mid = Math.floor((l+r)/2)
            if(arr[mid].val === num)
                return mid
            if(arr[mid].val < num)
                l=mid+1
            else
                r=mid-1
        }
        return num>arr[l].val ? l+1 : l
    } 
   
   for(let i=0;i<lists.length;i++) {
       if(lists[i]) {
           let idx = getPosition(lists[i].val)
            arr.splice(idx, 0, lists[i])
       }
   }
    let head = null, temp
    console.log(arr)
    while(arr.length !== 0){
        let n
        do{
            n = arr.shift()
        }while(!n && arr.length);
        if(n) {
            if(head===null){
                head = n
                temp=head
            }
            else{
                temp.next = n
                temp = temp.next
            }
            n = n.next
            if(n)
                arr.splice(getPosition(n.val), 0, n)        
        }
    }
    return head
};