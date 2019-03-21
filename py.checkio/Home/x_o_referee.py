#!/usr/bin/env checkio --domain=py check x-o-referee
# https://py.checkio.org/mission/x-o-referee/


from typing import List


def checkio(r: List[str]) -> str:
    return r[0][0] if r[0][0] == r[0][1] == r[0][2] != "." \
        else r[0][0] if r[0][0] == r[1][0] == r[2][0] != "." \
        else r[0][0] if r[0][0] == r[1][1] == r[2][2] != "." \
        else r[0][1] if r[0][1] == r[1][1] == r[2][1] != "." \
        else r[0][2] if r[0][2] == r[1][2] == r[2][2] != "." \
        else r[0][2] if r[0][2] == r[1][1] == r[2][0] != "." \
        else r[1][0] if r[1][0] == r[1][1] == r[1][2] != "." \
        else r[2][0] if r[2][0] == r[2][1] == r[2][2] != "." \
        else "D"


if __name__ == '__main__':
    print("Example:")
    print(checkio(["X.O",
                   "XX.",
                   "XOO"]))

    # These "asserts" using only for self-checking and not necessary for auto-testing
    assert checkio([
        "X.O",
        "XX.",
        "XOO"]) == "X", "Xs wins"
    assert checkio([
        "OO.",
        "XOX",
        "XOX"]) == "O", "Os wins"
    assert checkio([
        "OOX",
        "XXO",
        "OXX"]) == "D", "Draw"
    assert checkio([
        "O.X",
        "XX.",
        "XOO"]) == "X", "Xs wins again"
    print("Coding complete? Click 'Check' to review your tests and earn cool rewards!")