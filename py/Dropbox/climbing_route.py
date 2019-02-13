#!/usr/bin/env checkio --domain=py run climbing-route

# https://py.checkio.org/mission/climbing-route/

# You have an elevation map and you want to know the shortest climbing route.
# 
# The map is given as a list of strings.
# 
# 0 : plain ( elevation is 0)1-9 : hill (number is elevation)"mountain" is adjacent (only 4 directions) hill group.
# 
# It consists of two or more hills.Isolated hill is not mountain.Start is top-left. Goal is bottom-right. You have to go over all the mountaintops.  You can only move vertical and horizontal. And you can only move to the same or one elevation difference. You should look for the shortest route and return Number of steps. (if mountains do not exist, You may go to the goal at the shortest from the start.)
# 
# 
# 
# Input:A elevation map as a list of strings.
# 
# Output:number of steps as Integer.
# 
# Precondition:
# elevation_map[0][0] == elevation_map[-1][-1] == '0'
# 3 ≤ len(elevation_map)
# all(3 ≤ len(row) and len(row) == len(elevation_map[0]) for row in elevation__map)
# Each mountain has only one mountaintop.
# There is no mountain that can not climb.
# 
# 
# END_DESC

def climbing_route(elevation_map):
    return 0

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert climbing_route([
        '000',
        '210',
        '000']) == 6, 'basic'
    assert climbing_route([
        '00000',
        '05670',
        '04980',
        '03210',
        '00000']) == 26, 'spiral'
    assert climbing_route([
        '000000001',
        '222322222',
        '100000000']) == 26, 'bridge'
    assert climbing_route([
        '000000002110',
        '011100002310',
        '012100002220',
        '011100000000']) == 26, 'two top'
    assert climbing_route([
        '000000120000',
        '001002432100',
        '012111211000',
        '001000000000']) == 16, 'one top'
    assert climbing_route([
        '00000000111111100',
        '00000000122222100',
        '00000000123332100',
        '00000000123432100',
        '00000000123332100',
        '00000000122222100',
        '00000000111111100',
        '00011111000000000',
        '00012221000000000',
        '00012321000000000',
        '00012221000000012',
        '00011111000000000',
        '11100000000000000',
        '12100000000000000',
        '11100000000000000']) == 52, 'pyramids'