function solution(n) {
    var answer = 0;
    const visited = Array.from({ length: n }, () => false);

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (visited[i] === col || Math.abs(visited[i] - col) === Math.abs(i - row)) {
                return false;
            }
        }
        return true;
    }

    function dfs(row) {
        if (row === n) {
            answer++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                visited[row] = col;
                dfs(row + 1);
                visited[row] = false;
            }
        }
    }

    dfs(0);
    return answer;
}
