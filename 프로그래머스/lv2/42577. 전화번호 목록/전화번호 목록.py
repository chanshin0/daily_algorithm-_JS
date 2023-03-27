def solution(phone_book):

    phone_book.sort(key=lambda x:(x,len(x)))
    for i in range(len(phone_book)-1):
        l = len(phone_book[i])
        if phone_book[i] == phone_book[i+1][:l]:
            return False
    return True

# 1. 이중 포문사용해서 모든 번호를 서로 비교
# 2. 폰번호를 슬라이싱한 뒤에 비교
# 2-1. 같으면 리턴 false
# 3. 반복문 끝날때까지 없으면 리턴 true