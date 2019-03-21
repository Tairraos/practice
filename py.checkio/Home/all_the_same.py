#!/usr/bin/env checkio --domain=py check all-the-same
# https://py.checkio.org/mission/all-the-same/


from typing import List, Any

def all_the_same(elements: List[Any]) -> bool:
    return len(elements) == 0 or elements.count(elements[0]) == len(elements)
