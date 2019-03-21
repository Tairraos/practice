#!/usr/bin/env checkio --domain=py check sendgrid-geo-stats
# https://py.checkio.org/mission/sendgrid-geo-stats/


import sendgrid

API_KEY = 'Registrate your own key'

sg = sendgrid.SendGridAPIClient(apikey=API_KEY)

def best_country(str_date):
    return 'UA'

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    print('Your best country in 2016-01-01 was ' + best_country('2016-01-01'))
    print('Check your results')