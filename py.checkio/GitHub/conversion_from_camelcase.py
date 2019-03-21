#!/usr/bin/env checkio --domain=py check conversion-from-camelcase
# https://py.checkio.org/mission/conversion-from-camelcase/


import re


def from_camel_case(name):
    return re.sub("(?P<U>[A-Z])", lambda s: "_" + s.group("U").lower(), name).strip("_")
