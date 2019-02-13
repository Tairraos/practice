#!/usr/bin/env checkio --domain=py run all-the-same

# https://py.checkio.org/mission/all-the-same/

# In this mission you should check if all elements in the given list are equal.
# 
# Input:List.
# 
# Output:Bool.
# 
# The idea for this mission was found onPython Tricks series by Dan Bader
# 
# Precondition:all elements of the input list are hashable
# 
# 
# END_DESC

# https://py.checkio.org/mission/all-the-same

from typing import List, Any

def all_the_same(elements: List[Any]) -> bool:
    return len(elements) == 0 or elements.count(elements[0]) == len(elements)



if __name__ == '__main__':
    print("Example:")
    print(all_the_same([1, 1, 1]))
    
    # These "asserts" are used for self-checking and not for an auto-testing
    assert all_the_same([1, 1, 1]) == True
    assert all_the_same([1, 2, 1]) == False
    assert all_the_same(['a', 'a', 'a']) == True
    assert all_the_same([]) == True
    assert all_the_same([1]) == True
    print("Coding complete? Click 'Check' to earn cool rewards!")