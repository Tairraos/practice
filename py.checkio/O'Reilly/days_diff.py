#!/usr/bin/env checkio --domain=py run days-diff
# https://py.checkio.org/mission/days-diff/


import datetime


def days_diff(date1, date2):
    return abs((datetime.date(*date1) - datetime.date(*date2)).days)