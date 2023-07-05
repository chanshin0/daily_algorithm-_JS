function solution(n, works) {
    const sorted_works = [...works].sort((a, b) => b - a)
    let max_work = sorted_works[0]
    while(n > 0) {
        for (let i = 0; i < sorted_works.length; i++) {
            if (max_work === sorted_works[i]) {
                sorted_works[i] -= sorted_works[i] > 0 ? 1 : 0
                n--
            }
            if (!n) break
        }
        max_work--
        if (!max_work) break
    }
    return sorted_works.reduce((acc, curr) => acc + Math.pow(curr, 2), 0)
}