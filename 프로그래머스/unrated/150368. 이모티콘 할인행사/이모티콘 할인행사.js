function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

function solution(users, emoticons) {
    var answer = [0, 0];
    const discount = [10, 20, 30, 40]
    const l = emoticons.length
    
    const perms = permutation(discount, l)
    for(let i=0; i<perms.length; i++) {
        const permItem = perms[i]
        // console.log(permItem)
        const newEmoticons = emoticons.map((v, idx)=>v*(100-permItem[idx])/100)
        // console.log(newEmoticons)
        const result = [0, 0] // 가입자 수, 결제금액 총액
        
        // user를 한 명씩 돌면서, 
        for (let j=0; j<users.length; j++) {
            const [per, cost] = users[j]
            let costSum = 0
            // 각 할인율의 이모티콘 구매 여부를 계산
            for (let k=0; k<permItem.length; k++) {
                const dis = permItem[k]
                // 구매 
                if (dis >= per) costSum += newEmoticons[k]
            }
            // 플러스 가입하는지, 그냥 구매하는지
            if (costSum >= cost) result[0] += 1
            else result[1] += costSum
        }
        // 모든 유저를 다 순회한 다음에,
        if (answer[0] < result[0]) answer = result // 1번 목표 충족 시 갱신
        else if (answer[0] > result[0]) continue    // 1번 목표가 동점도 안되면 cotinue
        else if (answer[1] < result[1]) answer = result // 1번 목표가 동점이면 2번 목표 최대일 때 갱신
    }
        
    return answer;
}