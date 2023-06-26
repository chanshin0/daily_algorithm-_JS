function solution(x, y, n) {
    let obj = {
      0 : (z) => z+n,
      1 : (z) => z*2,
      2 : (z) => z*3
    }

    let queueIdx = 0
    let queue = [{x: x, times : 0}]
    let result = -1
    let used = {}

    while (queue.length > queueIdx) {
      let { x, times } = queue[queueIdx]

      if(x === y) {
        result = times
        return result
      } else if (x > y || used[x]) {
        queueIdx ++
        continue
      } else {
        used[x] = true
        Object.values(obj).forEach((func) => {
          queue.push({ x: func(x), times: times + 1 })
        })
      }
      queueIdx ++
    }

  return result
}
