#!/usr/bin/env checkio --domain=py run secret-message
# https://py.checkio.org/mission/secret-message/


def find_message(text: str) -> str:
    return "".join([x for x in text if x in "ABCDEFGHIJKLMNOPQRSTUVWXYZ"])