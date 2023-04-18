function solution(people, limit) {
    var answer = 0;

    people.sort((a, b) => a - b);

    let l = 0;
    let r = people.length - 1;

    while (l <= r) {
        const totalWeight = people[l] + people[r];

        if (totalWeight <= limit) {
            l++;
        }
        r--;
        answer++;
    }

    return answer;
}
