#!/usr/bin/env checkio --domain=py check sun-angle
# https://py.checkio.org/mission/sun-angle/


def sun_angle(time):
    angle = round((int(time[:2]) - 6 + int(time[3:]) / 60) * 15, 2)
    return angle if 0 <= angle <= 180 else "I don't see the sun!"
