#!/usr/bin/env checkio --domain=py check popular-words
# https://py.checkio.org/mission/popular-words/


import re

def popular_words(text: str, words: list) -> dict:
    return dict([(x, re.split(r"\s",text.lower()).count(x)) for x in words])
        