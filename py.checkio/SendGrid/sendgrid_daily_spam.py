#!/usr/bin/env checkio --domain=py check sendgrid-daily-spam
# https://py.checkio.org/mission/sendgrid-daily-spam/


import sendgrid

API_KEY = 'Registrate your own key'

sg = sendgrid.SendGridAPIClient(apikey=API_KEY)

def how_spammed(str_date):
    return 1

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    print('You had {} spam reports in 2016-01-01'.format(how_spammed('2016-01-01')))
    print('Check your results')