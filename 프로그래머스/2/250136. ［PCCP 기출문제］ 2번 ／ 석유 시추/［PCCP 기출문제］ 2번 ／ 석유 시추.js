function solution(land) {
    var answer = 0;
    const rowLen = land.length;
    const colLen = land[0].length;
    const visited = Array.from({ length: rowLen }, () =>
        Array.from({ length: colLen }, () => 0)
    );
    const obj = {};

    // 전체 돌면서 석유 정보를 obj에 저장
    let num = 1;
    land.forEach((row, r) => {
        row.forEach((col, c) => {
            if (col === 1 && visited[r][c] === 0) {
                check(r, c);
                num++;
            }
        });
    });

    
    for (let j = 0; j < colLen; j++) {
        let maxV = 0;
        let seenGroups = new Set(); // 이미 본 그룹을 저장하는 집합
        for (let i = 0; i < rowLen; i++) {
            if (visited[i][j] === 0) continue;
            const groupNum = visited[i][j];
            if (seenGroups.has(groupNum)) continue;

            seenGroups.add(groupNum);
            maxV += obj[groupNum];
        }

        answer = Math.max(answer, maxV);
    }

    function check(i, j) {
        const delta = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];

        let cnt = 1;
        const que = [[i, j]];
        visited[i][j] = num;
        while (que.length) {
            const [si, sj] = que.pop();

            for (const [di, dj] of delta) {
                const [ni, nj] = [si + di, sj + dj];

                if (
                    ni >= 0 &&
                    ni < rowLen &&
                    nj >= 0 &&
                    nj < colLen &&
                    visited[ni][nj] === 0 &&
                    land[ni][nj] === 1
                ) {
                    visited[ni][nj] = num;
                    que.push([ni, nj]);
                    cnt++;
                }
            }
        }

        obj[num] = cnt;
    }

    return answer;
}
