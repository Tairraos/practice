#!/usr/bin/env checkio --domain=py run easy-unpack

# https://py.checkio.org/mission/easy-unpack/

# Your mission here is to create a function that gets an tuple and returns a tuple with 3 elements - first, third and second to the last for the given array
# 
# Input:A tuple, at least 3 elements long.
# 
# Output:A tuple.
# 
# 
# END_DESC

# https://py.checkio.org/mission/easy-unpack

def easy_unpack(elements: tuple) -> tuple:
    return elements[0], elements[2], elements[-2]


if __name__ == '__main__':
    # These "asserts" using only for self-checking and not necessary for auto-testing
    assert easy_unpack((1, 2, 3, 4, 5, 6, 7, 9)) == (1, 3, 7)
    assert easy_unpack((1, 1, 1, 1)) == (1, 1, 1)
    assert easy_unpack((6, 3, 7)) == (6, 7, 3)
    print('Done! Go Check!')