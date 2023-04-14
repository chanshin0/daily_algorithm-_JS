function solution(board, skill) {
    var answer = 0;
    
    const row = board.length;
    const col = board[0].length;
    const prefixSum = Array.from({ length: row + 1 }, () => Array(col + 1).fill(0));

    for (let k = 0; k < skill.length; k++) {
        let [type, r1, c1, r2, c2, degree] = skill[k];
        let value = type === 1 ? -degree : degree;

        prefixSum[r1][c1] += value;
        if (c2 + 1 < col) prefixSum[r1][c2 + 1] -= value;
        if (r2 + 1 < row) {
            prefixSum[r2 + 1][c1] -= value;
            if (c2 + 1 < col) prefixSum[r2 + 1][c2 + 1] += value;
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i > 0) {
                prefixSum[i][j] += prefixSum[i - 1][j];
            }
            if (j > 0) {
                prefixSum[i][j] += prefixSum[i][j - 1];
            }
            if (i > 0 && j > 0) {
                prefixSum[i][j] -= prefixSum[i - 1][j - 1];
            }
            board[i][j] += prefixSum[i][j];
            if (board[i][j] > 0) answer++;
        }
    }

    return answer;
}
