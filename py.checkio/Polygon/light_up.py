#!/usr/bin/env checkio --domain=py run light-up
# https://py.checkio.org/mission/light-up/


from typing import Tuple, Iterable  # or List, Set...


def light_up(grid: Tuple[str]) -> Iterable[Tuple[int]]:
    pass


if __name__ == '__main__':
    def checker(function, grid):
        result = function(grid)
        # Check it...
        *WALLS, LIGHT, LIT, DARK = '01234XL. '
        grid = list(map(list, grid))
        nb_rows, nb_cols = len(grid), len(grid[0])
        # Check types and transform result into a Set[Tuple[int]].
        user_lights = set()
        for elem in result:
            if not (isinstance(elem, (tuple, list)) and len(elem) == 2
                    and all(isinstance(n, int) for n in elem)):
                print("Your iterable result should contain "
                      "tuples/lists of 2 ints.")
                return False
            i, j = light = tuple(elem)
            if light in user_lights:  # Duplicates are not allowed.
                print(f"You can't put two lights at the same place {light}.")
                return False
            if not (0 <= i < nb_rows and 0 <= j < nb_cols):
                print("You can't put a light outside the grid "
                      f"like at {light}.")
                return False
            user_lights.add(light)
        # Check if the result respect numbers in the grid.
        digits = ((i, j, int(cell))
                  for i, row in enumerate(grid)
                  for j, cell in enumerate(row) if cell.isdigit())
        for i, j, nb_lights in digits:
            nb_user_lights = len({(i - 1, j), (i, j - 1),
                                  (i + 1, j), (i, j + 1)} & user_lights)
            if nb_user_lights != nb_lights:
                print(f"The cell {(i, j)} should have {nb_lights} "
                      f"neighboring lights, not {nb_user_lights}.")
                return False
        # Put user lights on the grid, check if it's possible.
        for i, j in user_lights:
            if grid[i][j] == LIT:  # LIGHTS CONFLICT!
                print(f"Light at {(i, j)} is wrongly lit by another.")
                return False
            if grid[i][j] in WALLS:
                print(f"You can't put a light in the wall at {(i, j)}.")
                return False
            grid[i][j] = LIGHT  # Put a light in DARKness.
            for di, dj in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                ni, nj = i + di, j + dj
                while (0 <= ni < nb_rows and 0 <= nj < nb_cols
                       and grid[ni][nj] not in WALLS):
                    grid[ni][nj] = LIT
                    ni, nj = ni + di, nj + dj
        # Finally, check if the all grid is lit.
        nb_dark = sum(row.count(DARK) for row in grid)
        if nb_dark:
            print(f"There are still {nb_dark} cell(s) in the dark.")
            return False
        return True

    GRIDS = (('    1  ',
              '   0X  ',
              'X2     ',
              ' 0   0 ',
              '     11',
              '  X0   ',
              '  1    '),

             ('    X X',
              '  X    ',
              ' 2     ',
              '   4   ',
              '  X   X',
              '0   2  ',
              '   3   ',
              '     2 ',
              '    X  ',
              '1 0    '),

             ('        2 ',
              '   1      ',
              '1     2  X',
              '1  1   3  ',
              ' XX 1 3   ',
              '   1 2 X0 ',
              '  1   X  X',
              '1  1     0',
              '      0   ',
              ' X        '),

             ('   3  1   ',
              ' 0        ',
              ' X  X X1  ',
              '          ',
              '2 X 0  1X ',
              ' X0  1 X X',
              '          ',
              '  1X 0  X ',
              '        0 ',
              '   0  1   '))

    for n, grid in enumerate(GRIDS, 1):
        assert checker(light_up, grid), f'You failed the test #{n}.'

    print('The local tests are done. Click on "Check" for more real tests.')