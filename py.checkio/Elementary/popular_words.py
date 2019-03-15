#!/usr/bin/env checkio --domain=py run popular-words

# https://py.checkio.org/mission/popular-words/

# In this mission your task is to determine the popularity of certain words in the text.
# 
# At the input of your function are given 2 arguments: the text and the array of words the popularity of which you need to determine.
# 
# When solving this task pay attention to the following points:
# 
# The words should be sought in all registers. This means that if you need to find a word "one" then words like "one", "One", "oNe", "ONE" etc. will do.The search words are always indicated in the lowercase.If the word wasn’t found even once, it has to be returned in the dictionary with  0 (zero) value.Input:The text and the search words array.
# 
# Output:The dictionary where the search words are the keys and values are the number of times when those words are occurring in a given text.
# 
# Precondition:
# The input text will consists of English letters in uppercase and lowercase and whitespaces.
# 
# 
# END_DESC

import re

def popular_words(text: str, words: list) -> dict:
    return dict([(x, re.split(r"\s",text.lower()).count(x)) for x in words])