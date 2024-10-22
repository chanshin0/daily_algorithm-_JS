function solution(points, routes) {
  var answer = 0;
  
  let map = new Map();
  let timePos = [];
  for(let i = 0; i<points.length; i++){
    map.set(i + 1, [points[i][0], points[i][1]]);
  }

  function calcDanger(route){

    let time = 0;
    let last = [0,0];

    for(let i = 0; i<route.length - 1; i++){
      let [startX, startY] = map.get(route[i]);
      let [destX, destY] = map.get(route[i + 1]);

      while(startX !== destX || startY !== destY){

        if(!timePos[time]) timePos[time] = {};
        if(!timePos[time][startX]) timePos[time][startX] = {};
        timePos[time][startX][startY] = (timePos[time][startX][startY] || 0 ) + 1;

        if(timePos[time][startX][startY] === 2) answer++;

        if(startX < destX) startX++;
        else if(startX > destX) startX--
        else if(startY < destY) startY++;
        else if(startY > destY) startY--;
        last = [startX, startY];

        time++;
      }
    }

    if(!timePos[time]) timePos[time] = {};
    if(!timePos[time][last[0]]) timePos[time][last[0]] = {};
    timePos[time][last[0]][last[1]] = (timePos[time][last[0]][last[1]] || 0) + 1;
    if(timePos[time][last[0]][last[1]] === 2) answer++;
  }

  for(let r of routes){
    calcDanger([...r]);
  }
 
  return answer;
}