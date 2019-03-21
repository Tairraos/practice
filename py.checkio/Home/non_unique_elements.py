#!/usr/bin/env checkio --domain=py check non-unique-elements
# https://py.checkio.org/mission/non-unique-elements/


def checkio(data: list) -> list:
    return [x for x in data if data.count(x) > 1]
