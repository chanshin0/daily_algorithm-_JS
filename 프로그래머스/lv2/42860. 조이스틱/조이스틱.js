function solution(name) {
    let answer = 0;
    const l = name.length;
    let min_move = l - 1;

    for (let i = 0; i < l; i++) {
        answer += Math.min(name[i].charCodeAt() - 'A'.charCodeAt(), 'Z'.charCodeAt() - name[i].charCodeAt() + 1);

        let next_i = i + 1;
        while (next_i < l && name[next_i] === 'A') {
            next_i++;
        }

        min_move = Math.min(min_move, i + l - next_i + Math.min(i, l - next_i));
    }

    answer += min_move;
    return answer;
}
