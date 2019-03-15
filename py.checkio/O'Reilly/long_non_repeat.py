#!/usr/bin/env checkio --domain=py run long-non-repeat

# https://py.checkio.org/mission/long-non-repeat/

# There are four substring missionsthat were born all in one day and you shouldn’t be needed more than one day to solve them. All of those mission can be simply solved by brute force, but is it always the best way to go? (you might not have access to all of those missions yet, but they are going to be available with more opened islands on the map).
# 
# A very similar to the first is the second mission of the series with only one distinction is that you should look in a completely different way. You need to find the first longest substring with all unique letters. For example, in substring "abca" we have two substrings with unique letters "abc" and "bca", but we should take the first one, so the answer is "abc".
# 
# Input:String.Output:String.
# 
# 
# END_DESC

import re
import itertools


def non_repeat(line):
    return line if len(line) < 2 else max(
        [line[d[0]:d[1]] if not re.search(r"(.).*\1", line[d[0]:d[1]]) else "" for d in
         itertools.product(range(len(line)), range(len(line) + 1))], key=lambda s: len(s))


def non_repeat_old(line):
    r = []
    for i in range(len(line)):
        for j in range(i, len(line) + 1):
            if not re.search(r"(.).*\1", line[i:j]):
                r.append(line[i:j])

    return line if len(line) < 2 else max(r, key=lambda s: len(s))