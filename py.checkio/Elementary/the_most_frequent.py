#!/usr/bin/env checkio --domain=py check the-most-frequent
# https://py.checkio.org/mission/the-most-frequent/


def most_frequent(data: list) -> str:
    return max(data, key=lambda x:data.count(x))