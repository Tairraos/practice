#!/usr/bin/env checkio --domain=py check number-radix
# https://py.checkio.org/mission/number-radix/


def checkio(str_number: str, radix: int) -> int:
    try: return int(str_number, radix)
    except ValueError: return -1

