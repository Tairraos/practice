#!/usr/bin/env checkio --domain=py run the-warriors

# https://py.checkio.org/mission/the-warriors/

# 
# END_DESC

class Warrior:
    pass

class Knight(Warrior):
    pass

def fight(unit_1, unit_2):
    return 0

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing

    chuck = Warrior()
    bruce = Warrior()
    carl = Knight()
    dave = Warrior()
    mark = Warrior()

    assert fight(chuck, bruce) == True
    assert fight(dave, carl) == False
    assert chuck.is_alive == True
    assert bruce.is_alive == False
    assert carl.is_alive == True
    assert dave.is_alive == False
    assert fight(carl, mark) == False
    assert carl.is_alive == False

    print("Coding complete? Let's try tests!")