#!/usr/bin/env checkio --domain=py run sendgrid-sendone
# https://py.checkio.org/mission/sendgrid-sendone/


import sendgrid
from sendgrid.helpers.mail import Email,  Mail, Content

API_KEY = 'Registrate your own key'
SUBJECT = 'Welcome'
BODY = 'Hi {}'

sg = sendgrid.SendGridAPIClient(apikey=API_KEY)

def send_email(email, name):
    pass

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    send_email('somebody@gmail.com', 'Some Body')
    print('Done')