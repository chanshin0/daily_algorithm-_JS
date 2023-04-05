function isAlpha(str) {
  return /^[A-Za-z]+$/.test(str);
}

function createObj(str) {
  const obj = {};
    
  for (let i = 0; i < str.length - 1; i++) {
    const checkStr = (str[i] + str[i + 1]).toLowerCase();
      
    if (!isAlpha(checkStr)) continue;
    obj[checkStr] = (obj[checkStr] || 0) + 1;
      
  }
    
  return obj;
}

function solution(str1, str2) {
  let answer = 0;

  const obj1 = createObj(str1);
  const obj2 = createObj(str2);

  let shared = 0;
  let sumSet = 0;

  for (const key in obj1) {
    if (obj2[key]) {
      shared += Math.min(obj1[key], obj2[key]);
      sumSet += Math.max(obj1[key], obj2[key]);
    } else {
      sumSet += obj1[key];
    }
  }
  for (const key in obj2) {
    if (!obj1[key]) {
      sumSet += obj2[key];
    }
  }

  if (shared === 0 && sumSet === 0) {
    answer = 65536;
  } else {
    answer = (shared / sumSet) * 65536;
  }

  return Math.floor(answer);
}
