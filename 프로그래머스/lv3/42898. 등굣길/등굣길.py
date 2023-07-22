def solution(m, n, puddles):
    area = [[0]*(m+1) for _ in range(n+1)]
    area[1][1] = 1
    
    for i in range(1, n+1):
        for j in range(1, m+1):
            if [j, i] in puddles:
                continue
            
            # 오른쪽과 아래로만 움직일 수 있다 => 왼쪽칸 최단경로 + 위쪽칸의 최단경로 = 현재칸 최단경로
            
            # 위칸 왼쪽칸 둘다 존재
            if j-1 > 0 and i-1 > 0:
                area[i][j] = area[i-1][j] + area[i][j-1]
            elif j-1 > 0:   # 왼쪽칸만 존재
                area[i][j] = area[i][j-1] 
            elif i-1 > 0:   # 위쪽칸만 존재
                area[i][j] = area[i-1][j]
    
    return area[n][m] % 1000000007