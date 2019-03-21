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
