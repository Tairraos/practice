#!/usr/bin/env checkio --domain=py check fizz-buzz
# https://py.checkio.org/mission/fizz-buzz/


def checkio(number: int) -> str:
    return "Fizz Buzz" if number % 15 == 0 else "Fizz" if number % 3 == 0 else "Buzz" if number % 5 == 0 else str(number)
    