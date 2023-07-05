import heapq

def solution(n, works):
    answer = 0
    max_heap = []

    for work in works:
        heapq.heappush(max_heap, -work)

    while n > 0:
        max_work = -heapq.heappop(max_heap)
        if max_work == 0:
            return 0

        max_work -= 1
        n -= 1

        heapq.heappush(max_heap, -max_work)

    while max_heap:
        work = -heapq.heappop(max_heap)
        answer += work ** 2

    return answer
