#!/usr/bin/env checkio --domain=py check median
# https://py.checkio.org/mission/median/


from typing import List


def checkio(data: List[int]) -> [int, float]:
    data.sort()
    l = int(len(data) / 2)

    return data[l] if len(data) % 2 else (data[l] + data[l - 1]) / 2