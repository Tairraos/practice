#!/usr/bin/env checkio --domain=py check long-repeat
# https://py.checkio.org/mission/long-repeat/


import re


def long_repeat(line):
    return 0 if line == "" else max(map(lambda a:len("".join(a)), re.findall(r"(.)(\1*)", line)))
