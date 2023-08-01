function solution(a, b, n) {

    function check (bottle, cnt) {
        if (bottle < 2 || bottle < a) return cnt
            
        // 이번에 받는 병의 개수
        const quot = ~~(bottle/a) * b
        // 남은 병의 개수
        const rest = bottle % a
  
        return check(quot+rest, cnt+quot)
    }

    return check(n, 0);
}
