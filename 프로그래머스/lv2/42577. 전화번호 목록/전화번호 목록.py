def solution(phone_book):
    phone_map = {}
    
    # Create a hash map with phone numbers as keys and set all values to 1
    for phone in phone_book:
        phone_map[phone] = 1
    
    # Check if any phone number is a prefix of another
    for phone in phone_book:
        for i in range(1, len(phone)):
            if phone[:i] in phone_map:
                return False
    return True
