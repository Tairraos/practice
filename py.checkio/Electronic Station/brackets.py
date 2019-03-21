#!/usr/bin/env checkio --domain=py check brackets
# https://py.checkio.org/mission/brackets/


def checkio(expression):
    stack = []
    pair = dict(zip("([{", ")]}"))
    for c in expression:
        if c in "([{":
            stack.append(c)
        elif c in "}])":
            if not stack or pair[stack.pop()] != c:
                return False

    return not stack
