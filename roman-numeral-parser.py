"""
FCC Daily Challenge 07/09/2025
Problem: Given a string representing a Roman numeral, return its integer value.
"""

def parse_roman_numeral(numeral):
    digits = {
        "i" : 1,
        "v" : 5,
        "x" : 10,
        "l" : 50,
        "c" : 100,
        "d" : 500,
        "m" : 1000
    }
    number = 0
    numeral = list(numeral)
    eqv_digits = list(map(lambda x : digits[x.lower()],numeral))

    for i in range(len(eqv_digits)):

        if i+1 < len(eqv_digits) and eqv_digits[i] < eqv_digits[i+1]: number = number - eqv_digits[i]

        else: number = number + eqv_digits[i]
    
    return number

if __name__ == "__main__":
    assert parse_roman_numeral("XCIX") == 99
    assert parse_roman_numeral("CDLX") == 460
    assert parse_roman_numeral("DIV") == 504
    assert parse_roman_numeral("MMXXV") == 2025
