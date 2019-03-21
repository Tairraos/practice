#!/usr/bin/env checkio --domain=py check most-numbers
# https://py.checkio.org/mission/most-numbers/


def checkio(*args):
    return max(args)-min(args) if len(args) else 0