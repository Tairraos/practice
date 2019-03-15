#!/usr/bin/env checkio --domain=py run correct-sentence

# https://py.checkio.org/mission/correct-sentence/

# For the input of your function will be given one sentence. You have to return its fixed copy in a way so it’s always starts with a capital letter and ends with a dot.
# 
# Pay attention to the fact that not all of the fixes is necessary. If a sentence already ends with a dot then adding another one will be a mistake.
# 
# Input:A string.
# 
# Output:A string.
# 
# Precondition:No leading and trailing spaces, text contains only spaces, a-z A-Z , and .
# 
# 
# END_DESC

import string
def correct_sentence(text: str) -> str:
    return text[0].capitalize() + text[1:] + ("." if text[-1] in string.ascii_lowercase else "")