#!/usr/bin/env checkio --domain=py check most-wanted-letter
# https://py.checkio.org/mission/most-wanted-letter/


import re


def checkio(text: str) -> str:
    source = list(re.sub(r'[^a-zA-Z]', '', text.lower()))
    source.sort()
    result = {}
    for letter in source:
        result[letter] = result[letter] + 1 if letter in result else 1

    return sorted(result.items(), key=lambda item: item[1], reverse=True)[0][0]
