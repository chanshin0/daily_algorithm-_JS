import re
def solution(dartResult):
    answer = 0

    # 다트점수는 숫자, 문자, (특스문자)로 이루어져있다 - 정규표현식을 쓰는게 빠를듯
    p1 = re.compile("(\d+)([a-zA-Z])")
    p2 = re.compile("(\d+)([a-zA-Z])+(\*|#)")

    # 문자를 나누면 한 세트씩 배열에 넣어 계산한다 [[점수1], [점수2], [점수3]]
    scores = p1.findall(dartResult)
    options = p2.findall(dartResult)

    # pow(숫자, 문자) * (옵션)
    result = []
    for score, bonus in scores:
        if bonus == 'S':
            bonus = 1
        elif bonus == 'D':
            bonus = 2
        else:
            bonus = 3

        result.append(pow(int(score), bonus))

    for i in range(3):
        for option in options:
            if scores[i] == (option[0], option[1]):
                #: * 옵션일 때 현재세트와 이전세트의 점수를 2배 시킨다
                if option[2] == '*':
                    # 첫번째 세트에서 *나오면 첫번째 세트만 2배
                    if i == 0:
                        result[i] *= 2
                    else:
                        result[i] *= 2
                        result[i-1] *= 2

                #: # 옵션일 때 해당 점수를 -로 바꾼다
                if option[2] == '#':
                    result[i] *= -1

    answer = sum(result)
    return answer