#!/usr/bin/env checkio --domain=py check even-last
# https://py.checkio.org/mission/even-last/


def checkio(array):
    return sum([x for x in array[::2]]) * array[-1] if len(array)!=0 else 0
    