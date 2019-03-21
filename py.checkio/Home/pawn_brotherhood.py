#!/usr/bin/env checkio --domain=py check pawn-brotherhood
# https://py.checkio.org/mission/pawn-brotherhood/


#https://py.checkio.org/mission/pawn-brotherhood
def safe_pawns(pawns: set) -> int:
    cols = dict(zip("abcdefgh", zip(".abcdefg", "bcdefgh.")))
    rows = dict(zip("12345678", ".1234567"))
    return [cols[c[0]][0] + rows[c[1]] in pawns or cols[c[0]][1] + rows[c[1]] in pawns for c in pawns].count(True)


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert safe_pawns({"b4", "d4", "f4", "c3", "e3", "g5", "d2"}) == 6
    assert safe_pawns({"b4", "c4", "d4", "e4", "f4", "g4", "e5"}) == 1
    print("Coding complete? Click 'Check' to review your tests and earn cool rewards!")