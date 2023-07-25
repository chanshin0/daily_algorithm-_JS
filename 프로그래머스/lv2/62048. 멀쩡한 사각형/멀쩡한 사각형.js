function gcd(a, b) { // 최대공약수를 구하는 함수
    while(b != 0){
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function solution(W, H) {
    let totalSquare = W * H; // 전체 정사각형의 개수
    let unavailableSquare = W + H - gcd(W, H); // 사용할 수 없는 정사각형의 개수
    return totalSquare - unavailableSquare; // 사용할 수 있는 정사각형의 개수
}
