#!/usr/bin/env checkio --domain=py run days-diff

# https://py.checkio.org/mission/days-diff/

# How old are you in number of days? It's easy to calculate - just subtract your birthday from today. We could make    this a real challenge though and count the difference between any dates.
# 
# You are given two dates as tuples with three numbers - year, month and day. For example: 19 April 1982 will be    (1982, 4, 19). You should find the difference in days between the given dates. For example between today and    tomorrow = 1 day. The difference will always be either a positive number or zero, so don't forget about absolute    value.
# 
# Input:Two dates as tuples of integers.
# 
# Output:The difference between the dates in days as an integer.
# 
# Precondition:Dates between 1 january 1 and 31 december 9999.    Dates are correct.
# 
# 
# END_DESC

import datetime


def days_diff(date1, date2):
    return abs((datetime.date(*date1) - datetime.date(*date2)).days)