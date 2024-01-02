function solution(n) {
    let answer = 0;
    const queens = [];

    function isPossible(row, i) {
        for (const [x, y] of queens) {
            if (row === x || i === y) return false;
            if (Math.abs(x - row) === Math.abs(y - i)) return false;
        }
        return true;
    }

    function backtrack(row) {
        if (row === n) {
            answer++;
        }
        for (let i = 0; i < n; i++) {
            if (!isPossible(row, i)) continue;
            queens.push([row, i]);
            backtrack(row + 1);
            queens.pop();
        }


    }
    backtrack(0);
    return answer;
}