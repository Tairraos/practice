#!/usr/bin/env checkio --domain=py run right-to-left

# https://py.checkio.org/mission/right-to-left/

# "For centuries, left-handers have suffered unfair discrimination in a world designed for right-handers."
# Santrock, John W. (2008). Motor, Sensory, and Perceptual Development.
# 
# "Most humans (say 70 percent to 95 percent) are right-handed, a minority (say 5 percent to 30 percent)        are left-handed, and an indeterminate number of people are probably best described as ambidextrous."
# Scientific American. www.scientificamerican.com
# 
# One of the robots is charged with a simple task:    to join a sequence of strings into one sentence to produce instructions    on how to get around the ship.    But this robot is left-handed and has a tendency to joke around and confuse its right-handed friends.
# 
# You are given a sequence of strings.    You should join these strings into chunk of text where the initial strings are separated by commas.    As a joke on the right handed robots, you should replace all cases of the words "right" with the word "left",    even if it's a part of another word. All strings are given in lowercase.
# 
# Input:A sequence of strings as a tuple of strings (unicode).
# 
# Output:The text as a string.
# 
# Precondition:
# 0 < len(phrases) < 42
# 
# 
# 
# END_DESC

def left_join(phrases):
    return ",".join([x.replace("right", "left") for x in phrases])