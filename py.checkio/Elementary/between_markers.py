#!/usr/bin/env checkio --domain=py check between-markers
# https://py.checkio.org/mission/between-markers/


def between_markers(text: str, begin: str, end: str) -> str:
    start = 0 if text.find(begin) < 0 else text.find(begin) + len(begin)
    stop = text.find(end)
    return text[start:stop] if stop != -1 else text[start:]
    