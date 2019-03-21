#!/usr/bin/env checkio --domain=py check long-repeat
# https://py.checkio.org/mission/long-repeat/


import re


def long_repeat(line):
    return 0 if line == "" else max(map(lambda a:len("".join(a)), re.findall(r"(.)(\1*)", line)))


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert long_repeat('sdsffffse') == 4, "First"
    assert long_repeat('ddvvrwwwrggg') == 3, "Second"
    assert long_repeat('abababaab') == 2, "Third"
    assert long_repeat('') == 0, "Empty"
    print('"Run" is good. How is "Check"?')