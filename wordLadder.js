function wordLadder(A, B, C) {
    const fromIdx = C.indexOf(A)
    const toIdx = C.indexOf(B)
    if(fromIdx != -1) {
        C.splice(fromIdx, 1)
    }
    C.unshift(A)
    if(toIdx != -1) {
        C.splice(toIdx, 1)
    }
    C.push(B)
    let adjList = {}, visited={}

    const isTransformation = (w1, w2) => {
        if(w1.length === w2.length){
            let cnt=1
            for(let i=0;i<w1.length;i++){
                if(w1[i]!=w2[i])
                    cnt--
                if(cnt<0)
                    return false
            }
            return true
        }
        return false
    }

    for(let i=0;i<C.length;i++){
        adjList[C[i]] = []
        visited[C[i]] = false
    }
    for(let i=0;i<C.length-1;i++){
        for(let j=i+1;j<C.length;j++){
            if(isTransformation(C[i], C[j])){
                adjList[C[i]].push(C[j])
                adjList[C[j]].push(C[i])
            }
        }
    }
    console.log(adjList)
    let ans=C.length+1
    
    const dfs = (currNode, currDist) => {
        if(visited[currNode])
            return false
        if(currNode == B) {
            ans=Math.min(ans,currDist)
            return true
        }
        visited[currNode] = true
        for(let i=0;i<adjList[currNode].length;i++){
            if(visited[adjList[currNode][i]] == false) {
                dfs(adjList[currNode][i], currDist+1)
            }
        }
        visited[currNode] = false
    }
    dfs(A,1)
    if(ans == C.length+1)
        return 0
    return ans
}

console.log(wordLadder(
    A="sgtra",
    B="plvgf",
    C=[ "pjvgf", "pgtra", "pglga", "pgwra", "pgggf", "pglra", "ppggf", "ppvgf", "pggga", "sgtra", "plvgf" ]))