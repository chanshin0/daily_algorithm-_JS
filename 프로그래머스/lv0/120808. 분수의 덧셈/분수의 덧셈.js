function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
  let modNumerSum = numer1 * denom2 + numer2 * denom1;
  let modDenom = denom1 * denom2;
  let gcdValue = gcd(modNumerSum, modDenom); // 최대 공약수

  return [modNumerSum / gcdValue, modDenom / gcdValue];
}