#!/usr/bin/env checkio --domain=py run digits-multiplication
# https://py.checkio.org/mission/digits-multiplication/


def checkio(number: int) -> int:
    return eval("*".join([x for x in str(number).replace("0","")]))