#!/usr/bin/env checkio --domain=py run second-index

# https://py.checkio.org/mission/second-index/

# You are given two strings and you have to find an index of the second occurrence of the second string in the first one.
# 
# Let's go through the first example where you need to find the second occurrence of "s" in a word "sims". It’s easy to find its first occurrence with a functionindexorfindwhich will point out that "s" is the first symbol in a word "sims" and therefore the index of the first occurrence is 0. But we have to find the second "s" which is 4th in a row and that means that the index of the second occurrence (and the answer to a question) is 3.
# 
# Input:Two strings.
# 
# Output:Int or None
# 
# 
# END_DESC

def second_index(text: str, symbol: str) -> [int, None]:
    return None if text.count(symbol) < 2 else text.find(symbol, text.find(symbol) + 1)