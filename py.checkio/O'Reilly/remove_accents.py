#!/usr/bin/env checkio --domain=py run remove-accents
# https://py.checkio.org/mission/remove-accents/


import unicodedata


def checkio(in_string):
    return ''.join(c for c in unicodedata.normalize('NFD', in_string) if unicodedata.category(c) != 'Mn')


if __name__ == '__main__':
    assert checkio(u"préfèrent") == u"preferent"
    assert checkio(u"loài trăn lớn") == u"loai tran lon"
    print('Done')