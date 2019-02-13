#!/usr/bin/env checkio --domain=py run most-numbers

# https://py.checkio.org/mission/most-numbers/

# Let's work with numbers.
# 
# You are given an array of numbers (floats). You should find the difference between the maximum and minimum element.    Your function should be able to handle an undefined amount of arguments. For an empty argument list, the function    should    return 0.
# 
# Floating-point numbers are represented in computer hardware as base 2 (binary) fractions.    So we should check the result with ±0.001 precision.
# Think about how to work with    an arbitrary number of arguments.
# 
# Input:An arbitrary number of arguments as numbers (int, float).
# 
# Output:The difference between maximum and minimum as a number (int, float).
# 
# Precondition:0 ≤ len(args) ≤ 20
# all(-100 < x < 100 for x in args)
# all(isinstance(x, (int, float)) for x in args)
# 
# 
# END_DESC

def checkio(*args):
    return max(args)-min(args) if len(args) else 0