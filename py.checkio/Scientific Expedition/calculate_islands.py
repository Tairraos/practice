#!/usr/bin/env checkio --domain=py run calculate-islands

# https://py.checkio.org/mission/calculate-islands/

# The Robots have found a chain of islands in the middle of the Ocean.    They would like to explore these islands and have asked for your help calculating the areas of each island.    They have given you a map of the territory. The map is a 2D array, where 0 is water, 1 is land.    An island is a group of land cells surround by water.    Cells are connected by their edges and corners.    You should calculate the areas for each of the islands and return a list of sizes (quantity of cells) in    ascending order.    All of the cells outside the map are considered to be water.
# 
# 
# 
# Input:A map as a list of lists with 1 or 0.
# 
# Output:The sizes of island as a list of integers.
# 
# Precondition:0 < len(land_map) < 10
# all(len(land_map[0]) == len(row) for row in land_map)
# any(any(row) for row in land_map)
# 
# 
# END_DESC

from typing import List

def checkio(land_map: List[List[int]]) -> List[int]:

    return [1]

#These "asserts" using only for self-checking and not necessary for auto-testing
if __name__ == '__main__':
    print("Example:")
    print(checkio([[0, 0, 0, 0, 0],
                   [0, 0, 1, 1, 0],
                   [0, 0, 0, 1, 0],
                   [0, 1, 0, 0, 0],
                   [0, 0, 0, 0, 0]]))

    assert checkio([[0, 0, 0, 0, 0],
                    [0, 0, 1, 1, 0],
                    [0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0]]) == [1, 3], "1st example"
    assert checkio([[0, 0, 0, 0, 0],
                    [0, 0, 1, 1, 0],
                    [0, 0, 0, 1, 0],
                    [0, 1, 1, 0, 0]]) == [5], "2nd example"
    assert checkio([[0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 1, 1, 1],
                    [1, 0, 0, 0, 0, 0],
                    [0, 0, 1, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0]]) == [2, 3, 3, 4], "3rd example"
    print("Coding complete? Click 'Check' to earn cool rewards!")