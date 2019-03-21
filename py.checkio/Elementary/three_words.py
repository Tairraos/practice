#!/usr/bin/env checkio --domain=py check three-words
# https://py.checkio.org/mission/three-words/


import re

def checkio(words: str) -> bool:
    return bool(re.search("111", "".join([("0" if re.search("[0-9]", x) else "1") for x in words.split(" ")])))