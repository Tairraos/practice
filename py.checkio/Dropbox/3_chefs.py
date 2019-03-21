#!/usr/bin/env checkio --domain=py check 3-chefs
# https://py.checkio.org/mission/3-chefs/


class AbstractCook:
    pass

class JapaneseCook(AbstractCook):
    pass

class RussianCook(AbstractCook):
    pass

class ItalianCook(AbstractCook):
    pass


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing

    client_1 = JapaneseCook()
    client_1.add_food(2, 30)
    client_1.add_drink(2, 10)

    client_2 = RussianCook()
    client_2.add_food(1, 40)
    client_2.add_drink(5, 20)

    client_3 = ItalianCook()
    client_3.add_food(2, 20)
    client_3.add_drink(2, 10)

    assert client_1.total() == "Sushi: 60, Tea: 20, Total: 80"
    assert client_2.total() == "Dumplings: 40, Compote: 100, Total: 140"
    assert client_3.total() == "Pizza: 40, Juice: 20, Total: 60"
    print("Coding complete? Let's try tests!")