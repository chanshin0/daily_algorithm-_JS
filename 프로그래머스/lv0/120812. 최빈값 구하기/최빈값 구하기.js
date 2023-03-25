function solution(array) {
  // [One]. Create an obj with recorded count by number
  const obj = {};
  for (let item of array) {
    obj[item] ? obj[item] += 1 : obj[item] = 1;
  }

  // [2]. Record the most frequent values and their counts through a loop
  let maxV = -Infinity; // number of appearances
  let answer = 0; // mode
  let cnt = 0; // count of modes
  for (let ele in obj) {
    const val = obj[ele];
    if (maxV < val) {
      maxV = val;
      answer = Number(ele);
      cnt = 1;
    } else if (maxV === val) {
      cnt += 1;
    }
  }

  // [3]. If there are multiple modes, return -1
  if (cnt > 1) return -1;

  // [4]. If not filtered, return the original answer
  return answer;
}
