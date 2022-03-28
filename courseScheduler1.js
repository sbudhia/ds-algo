var canFinish = function(numCourses, prerequisites) {
    let adjList={}
    for(let i=0;i<numCourses;i++)
        adjList[i] = []
    for(let preReq of prerequisites)
        adjList[preReq[0]].push(preReq[1])
    let visited = new Array(numCourses).fill(false)
    let hash={}

    const dfs = (course) => {
        if(hash[course])
            return true
        else if(visited[course] == true)
            return false
        visited[course] = true        
        hash[course] = true
        for(let preReq of adjList[course]){
            const isCyclic = dfs(preReq)
            if(isCyclic)
                return true
        }
        hash[course] = false
        return false
    }

    for(let i=0;i<numCourses;i++){
        if(visited[i]==false) {
            hash={}
            const isCyclic = dfs(i)
            if(isCyclic)
                return false
        }
    }
    return true
};


console.log(canFinish(3, [[0,1],[0,2],[1,2]]))