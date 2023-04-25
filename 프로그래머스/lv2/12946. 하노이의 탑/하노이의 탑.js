function solution(n) {

    var answer = [];

  function move (cur, next, sub, weight) {
    if(weight === 1) {                                      // 가장 작은 원판 (Weight = 1)을 옮길 때는 바로 옮길 수 있다.
      answer.push([cur, next]);
    } else {                                                            // 2개 이상의 원판을 옮겨야 될 경우
      move(cur, sub, next, weight-1);           // 옮겨야 되는 원판의 그룹 중에서 가장 밑 원판을 제외한 원판 그룹을 먼저 여분의 위치로 보낸다.
      answer.push([cur, next]);                     // 그리고 가장 아래 있는 원판을 목표 위치로 이동 시킨다.
      move(sub, next, cur, weight-1);           // 여분의 위치로 옮겨 놓았던 원판 그룹을 다시 목표 위치로 옮겨서 전체 이동을 마무리 짓는다.
    }
  }

  move(1,3,2,n); // 시작, 1에 있는 n개의 원판을 3으로 보내고 여분의 공간은 2이다.

    return answer;
}