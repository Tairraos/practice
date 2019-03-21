#!/usr/bin/env checkio --domain=py run first-word
# https://py.checkio.org/mission/first-word/


import re
def first_word(text: str) -> str:
    return re.sub(r"^[^a-zA-Z']*([a-zA-Z']+).*$","\\1",text)