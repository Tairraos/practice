#!/usr/bin/env checkio --domain=py check monkey-typing
# https://py.checkio.org/mission/monkey-typing/


import re


def count_words(text: str, words: set) -> int:
    return len([x for x in words if re.search(x, text, re.I)])
