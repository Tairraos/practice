#!/usr/bin/env checkio --domain=py run sendgrid-sendone

# https://py.checkio.org/mission/sendgrid-sendone/

# To solve this mission you must use theSendGrid API Key(this video will explainhow to create your own API Key). Check out thesePython examples.
# 
# It all starts with your first email. Let’s try to send one.
# 
# Your mission is to create a function that sends a welcome email to a user. The function gets two arguments: email and the name of the user.
# 
# Subject of the email should be "Welcome" and body simply "Hi, {name}" ({name} should be replaced by a user's name)
# 
# Input:Two arguments: email and a username.
# 
# Output:None. You should send an email. You don’t need to return anything.
# 
# 
# send_email('a.lyabah@checkio.org', 'oduvan')
# send_email('somebody@gmail.com', 'Some Body')
# 
# END_DESC

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