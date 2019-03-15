#!/usr/bin/env checkio --domain=py run between-markers

# https://py.checkio.org/mission/between-markers/

# You are given a string and two markers (the initial and final). You have to find a substring enclosed between these two markers. But there are a few important conditions:
# 
# The initial and final markers are always different.If there is no initial marker then the beginning should be considered as the beginning of a string.If there is no final marker then the ending should be considered as the ending of a string.If the initial and final markers are missing then simply return the whole string.If the final marker is standing in front of the initial one then return an empty string.Input:Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
# 
# Output:A string.
# 
# Precondition:can't be more than one final marker and can't be more than one initial
# 
# 
# END_DESC

def between_markers(text: str, begin: str, end: str) -> str:
    start = 0 if text.find(begin) < 0 else text.find(begin) + len(begin)
    stop = text.find(end)
    return text[start:stop] if stop != -1 else text[start:]