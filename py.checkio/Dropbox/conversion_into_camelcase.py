#!/usr/bin/env checkio --domain=py check conversion-into-camelcase
# https://py.checkio.org/mission/conversion-into-camelcase/

import re

def to_camel_case(name):
    return re.sub("(^.|_.)", lambda s: s.group()[-1].upper(), name)