#!/usr/bin/env checkio --domain=py run median

# https://py.checkio.org/mission/median/

# A median is a numerical value separating the upper half of asortedarray of numbers from the lower half.    In a list where there are an odd number of entities, the median is the number found in the middle of the array.    If the array contains an even number of entities, then there is no single middle value, instead the median becomes    the average of the two numbers found in the middle.    For this mission, you are given a non-empty array of natural numbers (X). With it, you must separate the upper half of    the numbers from the lower half and find the median.
# 
# Input:An array as a list of integers.
# 
# Output:The median as a float or an integer.
# 
# 
# Precondition:
# 1 < len(data) ≤ 1000
# all(0 ≤ x<10 ** 6 for x in data)
# 
# 
# END_DESC

from typing import List


def checkio(data: List[int]) -> [int, float]:
    data.sort()
    l = int(len(data) / 2)

    return data[l] if len(data) % 2 else (data[l] + data[l - 1]) / 2