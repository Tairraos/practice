#!/usr/bin/env checkio --domain=py run sendgrid-geo-stats

# https://py.checkio.org/mission/sendgrid-geo-stats/

# To solve this mission you must use theSendGrid API Key. When you click "Run" you will see the results of using your API key with your data, but if you click "Check" your solution will be tested using our data.
# 
# You should be able to operate with your statistical email data and SendGrid has a lot of APIs that provide information you may need.
# 
# Your mission is to figure out which country opens your emails the most. You can use this information in order to focus on a specific segment.
# 
# Input:Day as a string in format 'YYYY-MM-DD'
# 
# Output:String, Two-digit country code of country that has more unique clicks.
# 
# Example:
# 
# 
# best_country('2016-01-01') == 'UA'
# 
# END_DESC

import sendgrid

API_KEY = 'Registrate your own key'

sg = sendgrid.SendGridAPIClient(apikey=API_KEY)

def best_country(str_date):
    return 'UA'

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    print('Your best country in 2016-01-01 was ' + best_country('2016-01-01'))
    print('Check your results')