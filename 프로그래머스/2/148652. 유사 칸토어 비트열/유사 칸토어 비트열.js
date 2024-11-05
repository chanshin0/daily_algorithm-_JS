function solution(n, l, r) {
    return countOnesInRange(n, l - 1, r - 1);
}

function countOnesInRange(level, left, right) {
    if (level === 0) return 1; // 0번째 칸토어 비트는 항상 "1"

    const length = Math.pow(5, level - 1); // 현재 단계의 구간 길이
    const leftPart = Math.floor(left / length) % 5;
    const rightPart = Math.floor(right / length) % 5;

    // 같은 부분에 있는 경우, 다음 레벨로 들어가 범위를 좁힘
    if (leftPart === rightPart) {
        if (leftPart === 2) return 0; // 가운데 구간(00000)은 "0"이므로 바로 반환
        return countOnesInRange(level - 1, left % length, right % length);
    }

    // 구간을 나누어 각각 계산
    let count = 0;
    for (let part = leftPart; part <= rightPart; part++) {
        if (part === 2) continue; // 가운데 구간은 "0"이므로 건너뜀

        const partLeft = part === leftPart ? left % length : 0;
        const partRight = part === rightPart ? right % length : length - 1;

        count += countOnesInRange(level - 1, partLeft, partRight);
    }

    return count;
}
