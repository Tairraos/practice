#!/usr/bin/env checkio --domain=py check pawn-brotherhood
# https://py.checkio.org/mission/pawn-brotherhood/


#https://py.checkio.org/mission/pawn-brotherhood
def safe_pawns(pawns: set) -> int:
    cols = dict(zip("abcdefgh", zip(".abcdefg", "bcdefgh.")))
    rows = dict(zip("12345678", ".1234567"))
    return [cols[c[0]][0] + rows[c[1]] in pawns or cols[c[0]][1] + rows[c[1]] in pawns for c in pawns].count(True)
