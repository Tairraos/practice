#!/usr/bin/env checkio --domain=py check time-converter-12h-to-24h
# https://py.checkio.org/mission/time-converter-12h-to-24h/


def time_converter(time):
    #replace this for solution
    return time

if __name__ == '__main__':
    print("Example:")
    print(time_converter('12:30 p.m.'))

    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert time_converter('12:30 p.m.') == '12:30'
    assert time_converter('9:00 a.m.') == '09:00'
    assert time_converter('11:15 p.m.') == '23:15'
    print("Coding complete? Click 'Check' to earn cool rewards!")