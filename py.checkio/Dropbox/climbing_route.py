#!/usr/bin/env checkio --domain=py run climbing-route
# https://py.checkio.org/mission/climbing-route/


def climbing_route(elevation_map):
    return 0

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert climbing_route([
        '000',
        '210',
        '000']) == 6, 'basic'
    assert climbing_route([
        '00000',
        '05670',
        '04980',
        '03210',
        '00000']) == 26, 'spiral'
    assert climbing_route([
        '000000001',
        '222322222',
        '100000000']) == 26, 'bridge'
    assert climbing_route([
        '000000002110',
        '011100002310',
        '012100002220',
        '011100000000']) == 26, 'two top'
    assert climbing_route([
        '000000120000',
        '001002432100',
        '012111211000',
        '001000000000']) == 16, 'one top'
    assert climbing_route([
        '00000000111111100',
        '00000000122222100',
        '00000000123332100',
        '00000000123432100',
        '00000000123332100',
        '00000000122222100',
        '00000000111111100',
        '00011111000000000',
        '00012221000000000',
        '00012321000000000',
        '00012221000000012',
        '00011111000000000',
        '11100000000000000',
        '12100000000000000',
        '11100000000000000']) == 52, 'pyramids'