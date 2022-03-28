const leastInterval = (tasks, n) => {
    const newMap = tasks.reduce((map, obj) => {
      map[obj] = map[obj] + 1 || 1;
      return map;
    }, {});
  
    const array = Object.values(newMap);
    const maximumRows = Math.max(...array);
    console.log(maximumRows)
    const lastRowLength = array.filter((x) => x === maximumRows).length;
    console.log(lastRowLength)
    return Math.max(tasks.length, (maximumRows - 1) * (n + 1) + lastRowLength);
  };

  leastInterval(tasks = ["A","A","A","B","B","B","C","C","C","D","D","E"], n = 2)