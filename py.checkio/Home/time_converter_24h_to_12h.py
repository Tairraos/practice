#!/usr/bin/env checkio --domain=py check time-converter-24h-to-12h
# https://py.checkio.org/mission/time-converter-24h-to-12h/


def time_converter(time):
    #replace this for solution
    return time

if __name__ == '__main__':
    print("Example:")
    print(time_converter('12:30'))

    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert time_converter('12:30') == '12:30 p.m.'
    assert time_converter('09:00') == '9:00 a.m.'
    assert time_converter('23:15') == '11:15 p.m.'
    print("Coding complete? Click 'Check' to earn cool rewards!")