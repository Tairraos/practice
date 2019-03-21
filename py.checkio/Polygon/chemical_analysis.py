#!/usr/bin/env checkio --domain=py check chemical-analysis
# https://py.checkio.org/mission/chemical-analysis/


def atoms(formula, limit):
    #replace this for solution
    return 0

if __name__ == '__main__':
    print("Example:")
    print(atoms('C2H5OH', 2))

    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert atoms('C2H5OH', 2) == ['C', 'H']
    assert atoms('H2O', 2) == ['H']
    assert atoms('Mg(OH)2', 1) == ['H', 'Mg', 'O']
    assert atoms('K4[ON(SO3)2]2', 4) == ['K', 'O', 'S']
    print("Coding complete? Click 'Check' to earn cool rewards!")