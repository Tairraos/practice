#!/usr/bin/env checkio --domain=py run sun-angle
# https://py.checkio.org/mission/sun-angle/


def sun_angle(time):
    angle = round((int(time[:2]) - 6 + int(time[3:]) / 60) * 15, 2)
    return angle if 0 <= angle <= 180 else "I don't see the sun!"


if __name__ == '__main__':
    print("Example:")
    print(sun_angle("07:00"))

    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert sun_angle("07:00") == 15
    assert sun_angle("01:23") == "I don't see the sun!"
    print("Coding complete? Click 'Check' to earn cool rewards!")