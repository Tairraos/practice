#!/usr/bin/env checkio --domain=py run ore-in-the-desert

# https://py.checkio.org/mission/ore-in-the-desert/

# During their adventure, the Robo-trio came across a desert, and the ships sensors have registered ore in the region.    The desert has a size of10x10cells and can be represented as a 2D array.    The ship hasfourprobes which can be used to help us find the ore.    At each step you will need to return the coordinates of a cell (as [row, column]) for the probe to travel to.     If the cell contains ore, then you can finish;    else the probe will give a distance to the location of the ore cell    (it will be the Euclidean distance between cells' centers).    The perception of probe is not very good and it will give you a result rounded to the closest integer (1.41 ≈ 1; 2.83 ≈ 3).    At each step you receive information from the previous probes as a list of list.    Each list will be in the following format: [row, column, distance].    At the beginning of the mission, you will only receive an empty list.
# 
# 
# 
# Input:Information of the previous probes as a list of lists. Each list contains three integers.
# 
# Output:The coordinate of the next probe as a list of two integers.
# 
# Precondition:
# len(desert) == 10
# all(len(row) == 10 for row in desert)
# There is always exist an ore cell in the desert.
# 
# 
# END_DESC

def checkio(previous):
    return [0, 0]


if __name__ == '__main__':
    #This part is using only for self-testing.
    def check_solution(func, ore):
        recent_data = []
        for step in range(4):
            row, col = func([d[:] for d in recent_data])  # copy the list
            if row < 0 or row > 9 or col < 0 or col > 9:
                print("Where is our probe?")
                return False
            if (row, col) == ore:
                return True
            dist = round(((row - ore[0]) ** 2 + (col - ore[1]) ** 2) ** 0.5)
            recent_data.append([row, col, dist])
        print("It was the last probe.")
        return False

    assert check_solution(checkio, (1, 1)), "Example"
    assert check_solution(checkio, (9, 9)), "Bottom right"
    assert check_solution(checkio, (6, 6)), "Center"