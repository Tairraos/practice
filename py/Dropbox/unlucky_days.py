#!/usr/bin/env checkio --domain=py run unlucky-days

# https://py.checkio.org/mission/unlucky-days/

# Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
# 
# Find the number of Friday 13th in the given year.
# 
# Input:Year as an integer.
# 
# Output:Number of Black Fridays in the year as an integer.
# 
# Precondition:1000<|year|<3000
# 
# 
# END_DESC

def checkio(year):
    return 0

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert checkio(2015) == 3, "First - 2015"
    assert checkio(1986) == 1, "Second - 1986"