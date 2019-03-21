#!/usr/bin/env checkio --domain=py check create-intervals-generator-version
# https://py.checkio.org/mission/create-intervals-generator-version/


def create_intervals(data):
    """
        Create a list of intervals out of set of ints.
    """
    # your code here
    return None

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert create_intervals({1, 2, 3, 4, 5, 7, 8, 12}) == [(1, 5), (7, 8), (12, 12)], "First"
    assert create_intervals({1, 2, 3, 6, 7, 8, 4, 5}) == [(1, 8)], "Second"
    print('Almost done! The only thing left to do is to Check it!')