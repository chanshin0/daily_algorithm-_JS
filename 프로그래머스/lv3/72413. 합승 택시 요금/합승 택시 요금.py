def dijk(s, N, visited, costs, INF, adjM):

    # [pyjune의 전술노트 복습]
    costs[s] = 0                                        # 1. 시작정점의 최소비용은 0

    for _ in range(N - 1):                              # 2. 이미 최소비용이 결정된 시작정점을 제외한 나머지 N-1개의 정점에 대한 최소비용을 구할 것이다.
        u = 0                                               # 2-1. 최소비용이 확정된 정점 u를 찾을 것이다.
        minV = INF
        for i in range(1, N + 1):                           # 2-2. 모든 정점을 돌면서
            if costs[i] < minV and not visited[i]:          # 2-3. 이전 for문에 갱신된 최소비용이 가장 작은 u를 선택
                u = i
                minV = costs[i]

        visited[u] = 1                                  # 3. 다음 for문에 얘 또 고르지 않게 방문 처리

        for i in range(1, N + 1):
            if adjM[u][i] != 0 and not visited[i]:                         # 4. 정점 u와 i 사이에 간선이 있을 때
                if costs[i] > costs[u] + adjM[u][i]:        # 4-1. 정점 i의 최소비용 갱신시도
                    costs[i] = costs[u] + adjM[u][i]


def solution(n, s, a, b, fares):
    INF = 100000*n
    adjM = [[0]*(n+1) for _ in range(n+1)]
    
    for start,e,c in fares:
        adjM[start][e] = c
        adjM[e][start] = c
        
    costs = [INF]*(n+1)
    visited = [0]*(n+1)
    dijk(s, n,visited,costs, INF, adjM)
    print(costs)
    
    costs_a = [INF]*(n+1)
    visited_a = [0]*(n+1)
    dijk(a,n,visited_a,costs_a, INF, adjM)

    costs_b = [INF]*(n+1)
    visited_b = [0]*(n+1)
    dijk(b,n,visited_b,costs_b, INF, adjM)
    
    print(costs_a)
    print(costs_b)
    
    answer = INF
    for i in range(1, n+1):
        if i != s and costs[i] != INF:
            temp = costs[i] + costs_b[i]+costs_a[i]
            if temp < answer:
                answer = temp
    

    if costs[a] + costs[b] < answer:
        answer = costs[a]+costs[b]
    
    return answer