#!/usr/bin/env checkio --domain=py check periodic-table
# https://py.checkio.org/mission/periodic-table/


def checkio(element):
    """
        string of element arguments
    """
    return ["", u"", ""]


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert (checkio('H') == ["1", u"1s¹", "1"]), "First Test - 1s¹"
    assert (checkio('He') == ["2", u"1s²", "2"]), "Second Test - 1s²"
    assert (checkio('Al') == ["13", u"[Ne] 3s² 3p¹", "2 2 222 2 100"]), "Third Test - 1s² 2s² 2p⁶ 3s² 3p¹"
    assert (checkio('O') == ["8", u"[He] 2s² 2p⁴", "2 2 211"]), "Fourth Test - 1s² 2s² 2p⁴"
    assert (checkio('Li') == ["3", u"[He] 2s¹", "2 1"]), "Fifth Test - 1s² 2s¹"

    print('All done!')