#!/usr/bin/env checkio --domain=py run three-words

# https://py.checkio.org/mission/three-words/

# Let's teach the Robots to distinguish words and numbers.
# 
# You are given a string with words and numbers separated by whitespaces (one space).    The words contains only letters.    You should check if the string contains three words insuccession.    For example, the string "start 5one two three7 end" contains three words in succession.
# 
# Input:A string with words.
# 
# Output:The answer as a boolean.
# 
# Precondition:The input contains words and/or numbers. There are no mixed words (letters and digits combined).
# 0 < len(words) < 100
# 
# 
# END_DESC

import re

def checkio(words: str) -> bool:
    return bool(re.search("111", "".join([("0" if re.search("[0-9]", x) else "1") for x in words.split(" ")])))