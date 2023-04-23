function solution(queue1, queue2) {
  var answer = 0;
  const sum1 = queue1.reduce((acc, curr) => acc + curr, 0);
  const sum2 = queue2.reduce((acc, curr) => acc + curr, 0);
  const half = (sum1 + sum2) / 2;

  const list = [...queue1, ...queue2];
  let left = 0;
  let right = queue1.length - 1;

  let sum = sum1;
  while (true) {
    if (answer >= queue1.length * 3) return -1;

    if (sum === half) break;
    else if (sum < half) {
      right++;
      sum += list[right];
    } else {
      left++;
      sum -= list[left - 1];
    }
    answer++;
  }

  return answer;
}
