function solution(strings, n) {
    // 사전 순 정렬 후, 인덱스 n의 문자로 한번 더 정렬
    strings.sort().sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());

    return strings;
}
