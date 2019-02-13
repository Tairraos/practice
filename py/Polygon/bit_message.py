#!/usr/bin/env checkio --domain=py run bit-message

# https://py.checkio.org/mission/bit-message/

# TheBit Messageis a message that is hidden within the lines of an octet    stream and it is represented as a hexadecimal string which has maximum length    of 149 octets. The first 9 octets of the message contain theheaderfor the message and the rest comprise thecontent. The header contains 1 type octet,    7 timestamp octets, and 1 message length octet.    The content contains a maximum of 140 octets and could be    packed with either 7 bit, 8 bit or 16 bit. 7 bit packed messages    have a length of 160 characters, 8 bit packed messages have    a length of 140 characters, and 16 bit packed messages will    only have a length of 70 characters.
# 
# Here are some details on the structure of a bit message:
# 
# 
# BIT MESSAGE FORMAT
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# Bit76543210
# 
# Octet-nth
# 
# 
# 
# 
# 
# 
# 
# 
# 
# HEADER
# 
# 
# 
# 
# 
# 
# 
# TYPE
# 
# 
# 
# 
# 
# 
# 
# 
# YEAR
# 
# 
# 
# 
# 
# 
# 
# 
# MONTH
# 
# 
# 
# 
# 
# 
# 
# 
# DAY
# 
# 
# 
# 
# 
# 
# 
# 
# HOUR
# 
# 
# 
# 
# 
# 
# 
# 
# MINUTE
# 
# 
# 
# 
# 
# 
# 
# 
# SECOND
# 
# 
# 
# 
# 
# 
# 
# 
# TIMEZONE
# 
# 
# 
# 
# 
# 
# 
# 
# LENGTH
# CONTENT
# 
# 
# 
# 
# 
# 
# 
# Octet-1
# ...
# 
# 
# 
# 
# 
# 
# 
# ...
# 
# 
# 
# 
# 
# 
# 
# 
# 
# Octet-140
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 7-BIT PACKED MESSAGE
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# Bit76543210
# 
# Octet-nth
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 10b6b5b4b3b2b1b0
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 8-BIT PACKED MESSAGE
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# Bit76543210
# 
# Octet-nth
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 1b7b6b5b4b3b2b1b0
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 16-BIT PACKED MESSAGE
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# Bit76543210
# 
# Octet-nth
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 1b7b6b5b4b3b2b1b0
# 
# 2b15b14b13b12b11b10b9b8
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# HEADER# OCTETDESCRIPTION
# 
# 
# 
# 
# 
# 
# 
# TYPE1contains specific flag for specific format identifier
# 
# 
# 
# 
# 
# 
# 
# 
# DETAIL
# 
# 
# 
# 
# 
# Bit 0-1 :reserved message class meaning
# 
# Bit 2-3 :message encoding
# 
# 
# Bit 3Bit 2Pack
# 
# 
# 
# 007 bit
# 
# 
# 
# 018 bit
# 
# 
# 
# 1016 bit
# 
# 
# 
# 11reserved
# 
# 
# 
# 
# 
# 
# 
# 
# Bit 4   :reserved flag message class meaning
# 
# Bit 5   :reserved message is compressed or uncompressed
# Bit 6-7 :reserved general data coding
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# TIMESTAMP7contains specificswapped nibblesfor specific format identifier
# 
# 
# 
# 
# 
# 
# DETAIL
# 
# 
# 
# 
# 
# Octet 1YEARe.g. 10 for 2001
# 
# Octet 2MONTHe.g. 10 for Jan
# 
# Octet 3DAYe.g. 10 for 01
# 
# 
# 
# 
# 
# 
# 
# 
# Octet 4HOURe.g. 10 for 01
# 
# Octet 5MINUTEe.g. 10 for 01
# 
# Octet 6SECONDe.g. 10 for 01
# 
# 
# 
# 
# 
# 
# 
# 
# Octet 7TIMEZONEe.g. 80 for 08 x 15 / 60 = +2
# 
# 
# The Time Zone is GMT format, expressed in quarters of an hour. In the first of the two semi-octets, the first bit represents the algebraic sign of this difference (0 : positive, 1 : negative)
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# LENGTH1maximum characters allowed is 160, 140 or 70 characters depends on message packed format
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# Input data:A hexadecimal string that is a bit message (unicode).
# 
# Output data:A list containing the timestamp, length of message and the message itself. The message is unicode.
# 
# 
# END_DESC

def checkio(data):
    #replace this for solution
    return []


#These "asserts" using only for self-checking and not necessary for auto-testing
if __name__ == '__main__':
    assert (checkio('002080629173148007EDF27C1E3E9701') ==
            ['26 Aug 2002 19:37:41 GMT +2', 7, 'message']), "First Test"

    assert (checkio('00317050201171820FD3323BDC0ED341C4303DEC3E8700') ==
            ['05 Jul 2013 02:11:17 GMT +7', 15, 'Selamat Datang!']), "Second Test, 7 bit"

    assert (checkio('000130925161956915C8729E054A82C26D50DA0D7296EFA0EC5BBE06') ==
            ['29 Mar 2010 15:16:59 GMT -4', 21, 'Hey, I am in New York']), "Third Test, negative timezone"

    assert (checkio('08071010101010611F04180441043A043B044E04470435043D043804350020043F043E04340442043204350440043604340430043504420020043F0440043004320438043B043E') ==
            ['01 Jan 1970 01:01:01 GMT +4', 31,
             'Исключение подтверждает правило']), "Fourth Test, simulate 32-bit signed integer real life problem"

    assert (checkio('088310913041804C23805E4E0D82E5805E4E4B002C805E4E4B4E0D82E5898B4E4B002C898B4E4B4E0D82E577E54E4B002C77E54E4B4E0D82E5884C4E4B002C5B7881F365BC884C4E4B800C6B6277E3 ') ==
            ['19 Jan 2038 03:14:08 GMT -11', 35, '聞不若聞之,聞之不若見之,見之不若知之,知之不若行之,學至於行之而止矣']), "But, we pass Y2K38 problem"