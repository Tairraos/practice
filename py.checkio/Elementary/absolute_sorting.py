#!/usr/bin/env checkio --domain=py run absolute-sorting
# https://py.checkio.org/mission/absolute-sorting/


def checkio(numbers_array: tuple) -> list:
    return sorted(numbers_array, key=lambda x: x if x>0 else -x)