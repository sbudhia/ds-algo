class Heap {
    constructor(val) {
        this.list=[val]
    }

    isEmpty() {
        return this.list.length > 0 ? false : true
    }

    getTop(){
        return this.list.shift()
    }

    getPosition(val) {
        let l=0,r=this.list.length-1
        while(l<r) {
            let mid = Math.floor((l+r)/2)
            console.log(this.list[mid])
            if(this.list[mid].cost < val)
                l=mid+1
            else
                r=mid-1
        }
        return val>this.list[l]?.cost ? l+1 : l
    }

    insert(val) {
        const idx=this.getPosition(val.cost)
        this.list.splice(idx,0,val)
    }
}