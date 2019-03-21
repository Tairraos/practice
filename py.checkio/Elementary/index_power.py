#!/usr/bin/env checkio --domain=py check index-power
# https://py.checkio.org/mission/index-power/


def index_power(array: list, n: int) -> int:
    return -1 if len(array)<n+1 else array[n]**n
    