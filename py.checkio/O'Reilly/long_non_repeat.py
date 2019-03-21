#!/usr/bin/env checkio --domain=py check long-non-repeat
# https://py.checkio.org/mission/long-non-repeat/


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