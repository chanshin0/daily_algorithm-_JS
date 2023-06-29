function solution(n, left, right) {
    const answer = [];

    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);  // 몫
        const col = i % n;              // 나머지
        answer.push(Math.max(row, col) + 1);
    }

    return answer;
}
