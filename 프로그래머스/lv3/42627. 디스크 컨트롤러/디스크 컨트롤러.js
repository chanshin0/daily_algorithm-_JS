function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]);

    let answer = 0;
    const l = jobs.length;

    const stack = [];
    let time = 0;
    while (jobs.length > 0 || stack.length > 0) {
        if (jobs.length > 0 && jobs[0][0] <= time) {
            const [s, e] = jobs.shift();
            stack.push([s, e]);
            stack.sort((a, b) => b[1] - a[1]);
        } else if (stack.length > 0) {
            const [ns, ne] = stack.pop();
            answer += ne + (time - ns);
            time += ne;
        } else {
            const [s, e] = jobs.shift();
            stack.push([s, e]);
            time = s;
        }
    }

    return Math.floor(answer / l);
}
