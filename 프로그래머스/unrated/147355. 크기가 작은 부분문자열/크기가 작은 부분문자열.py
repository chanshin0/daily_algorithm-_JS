def solution(t, p):
    answer = 0

    numbers = list(map(int, list(t)))
    compares = list(map(int, list(p)))
    len_compares = len(compares)

    for i in range(len(t) - len_compares + 1):
        l = 0
        while l < len_compares:
            if numbers[i + l] > compares[l]:
                break
            elif numbers[i + l] == compares[l]:
                l += 1
            else:  # numbers[i + l] < compares[l]
                l = len_compares  # go to the next sequence
                
        if l == len_compares:
            answer += 1

    return answer
