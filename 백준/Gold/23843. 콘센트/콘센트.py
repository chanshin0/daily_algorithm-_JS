# 콘센트
N, M = map(int, input().split())
arr = sorted(list(map(int, input().split())))
# print(N, M)
# print(arr)

time = 0
concent = []

while True:

    while arr:
        while len(concent) < M and len(arr)>0:
            concent.append(arr.pop())
        concent = sorted(concent, reverse=True)

        # print(time, concent, arr)

        fast = concent[-1]
        time += fast

        tagetId = -1
        for i in range(len(concent)-1, -1, -1):
            concent[i] -= fast
            if concent[i] == 0:
                tagetId = i

        concent = concent[:tagetId]

    if (concent):
        arr = concent
        concent = []
    else:
        break

print(time)

