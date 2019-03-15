#!/usr/bin/env checkio --domain=py run even-last

# https://py.checkio.org/mission/even-last/

# You are given an array of integers. You should find the sum of the elements with even indexes (0th, 2nd, 4th...)    then    multiply this summed number and the final element of the array together. Don't forget that the first element has an    index of 0.
# 
# For an empty array, the result will always be 0 (zero).
# 
# Input:A list of integers.
# 
# Output:The number as an integer.
# 
# Precondition:0 ≤ len(array) ≤ 20
# all(isinstance(x, int) for x in array)
# all(-100 < x < 100 for x in array)
# 
# 
# 
# END_DESC

def checkio(array):
    return sum([x for x in array[::2]]) * array[-1] if len(array)!=0 else 0