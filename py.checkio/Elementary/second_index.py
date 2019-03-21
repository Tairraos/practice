#!/usr/bin/env checkio --domain=py check second-index
# https://py.checkio.org/mission/second-index/


def second_index(text: str, symbol: str) -> [int, None]:
    return None if text.count(symbol) < 2 else text.find(symbol, text.find(symbol) + 1)