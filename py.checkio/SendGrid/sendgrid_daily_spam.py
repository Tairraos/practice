#!/usr/bin/env checkio --domain=py run sendgrid-daily-spam

# https://py.checkio.org/mission/sendgrid-daily-spam/

# To solve this mission you must use theSendGrid API Key. When you click "Run" you will see the results of using your API key with your data, but if you click "Check" your solution will be tested using our data.
# 
# You are massively sending thousands and thousands emails every day, meanwhile experimenting with subject lines and the message itself.SendGridallows you to see statistics of your spam reports.
# 
# Your mission is to figure out how many spam reports you receive on a specific day.
# 
# Input:Day as a string in format 'YYYY-MM-DD'
# 
# Output:Int. The amount of spam reports
# 
# 
# END_DESC

import sendgrid

API_KEY = 'Registrate your own key'

sg = sendgrid.SendGridAPIClient(apikey=API_KEY)

def how_spammed(str_date):
    return 1

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    print('You had {} spam reports in 2016-01-01'.format(how_spammed('2016-01-01')))
    print('Check your results')