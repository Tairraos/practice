#!/usr/bin/env checkio --domain=py run triangle-angles
# https://py.checkio.org/mission/triangle-angles/


from typing import List

def checkio(a: int, b: int, c: int) -> List[int]:

    #replace this for solution
    return [0, 0, 0]

#These "asserts" using only for self-checking and not necessary for auto-testing
if __name__ == '__main__':
    print("Example:")
    print(checkio(4, 4, 4))

    assert checkio(4, 4, 4) == [60, 60, 60], "All sides are equal"
    assert checkio(3, 4, 5) == [37, 53, 90], "Egyptian triangle"
    assert checkio(2, 2, 5) == [0, 0, 0], "It's can not be a triangle"
    print("Coding complete? Click 'Check' to earn cool rewards!")