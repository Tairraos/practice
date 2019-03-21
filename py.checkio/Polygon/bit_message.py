#!/usr/bin/env checkio --domain=py check bit-message
# https://py.checkio.org/mission/bit-message/

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