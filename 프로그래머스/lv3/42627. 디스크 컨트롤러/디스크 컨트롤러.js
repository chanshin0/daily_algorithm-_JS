function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]);

    let answer = 0;
    const l = jobs.length;

    const pq = [];
    let time = 0;
    let i = 0;
    while (i < jobs.length || pq.length > 0) {
        if (i < jobs.length && jobs[i][0] <= time) {
            pq.push(jobs[i++]);
            pq.sort((a, b) => a[1] - b[1]);
            continue;
        }

        if (pq.length === 0) {
            time = jobs[i][0];
        } else {
            const [start, work] = pq.shift();
            answer += time + work - start;
            time += work;
        }
    }

    return Math.floor(answer / l);
}
