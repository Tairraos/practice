#!/usr/bin/env checkio --domain=py check right-to-left
# https://py.checkio.org/mission/right-to-left/


def left_join(phrases):
    return ",".join([x.replace("right", "left") for x in phrases])
    