#!/usr/bin/env checkio --domain=py run the-most-frequent

# https://py.checkio.org/mission/the-most-frequent/

# You have a sequence of strings, and you’d like to determine the most frequently occurring string in the sequence.
# 
# Input:a list of strings.
# 
# Output:a string.
# 
# 
# END_DESC

def most_frequent(data: list) -> str:
    return max(data, key=lambda x:data.count(x))