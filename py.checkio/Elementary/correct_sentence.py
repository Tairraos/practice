#!/usr/bin/env checkio --domain=py run correct-sentence
# https://py.checkio.org/mission/correct-sentence/


import string
def correct_sentence(text: str) -> str:
    return text[0].capitalize() + text[1:] + ("." if text[-1] in string.ascii_lowercase else "")