#!/usr/bin/env checkio --domain=py check house-password
# https://py.checkio.org/mission/house-password/


import re


def checkio(data: str) -> bool:
    return bool(re.match(r"(?=[a-zA-Z\d]{10,64})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])", data))
