let ROW,COL

const waterFlow = (region) => {
    ROW=region.length, COL=region[0].length
    let blueSea={},redSea={}
    const dfs = (i, j, prevHeight, sea) => {
        if(i<0 || j<0 || i>=ROW || j>=COL || region[i][j]<prevHeight || visited[i][j])
            return
        sea[i.toString() + j.toString()]=true
        visited[i][j]=true
        dfs(i+1,j,region[i][j],sea)
        dfs(i-1,j,region[i][j], sea)
        dfs(i,j+1,region[i][j], sea)
        dfs(i,j-1,region[i][j], sea)
    }

    let visited = Array.from(Array(ROW), () => new Array(COL).fill(false)) 
    for(let i=0;i<ROW;i++){
        dfs(i,0,region[i][0] ,blueSea)
    }
    visited = Array.from(Array(ROW), () => new Array(COL).fill(false)) 
    for(let j=0;j<COL;j++){
        dfs(0,j,region[0][j] ,blueSea)
    }

    visited = Array.from(Array(ROW), () => new Array(COL).fill(false)) 
    for(let i=0;i<ROW;i++){
        dfs(i,COL-1,region[i][COL-1], redSea)
    }
    visited = Array.from(Array(ROW), () => new Array(COL).fill(false)) 
    for(let j=0;j<COL;j++){
        dfs(ROW-1,j,region[ROW-1][j] ,redSea)
    }
    console.log(redSea)
    let count=0
    Object.keys(blueSea).forEach(key => {
        if(redSea[key]){
            count++
        }
    })
    return count
};

console.log(
  waterFlow(
    [
        [15, 1, 10],
        [5, 19, 19],
        [3, 5, 6],
        [6, 2, 8],
        [2, 12, 16],
        [3, 8, 17],
        [12, 5, 3],
        [14, 13, 3],
        [2, 17, 19],
        [16, 8, 7],
        [12, 19, 10],
        [13, 8, 20]
      ]
  )
);
