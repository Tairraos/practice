#!/usr/bin/env checkio --domain=py check best-stock
# https://py.checkio.org/mission/best-stock/


def best_stock(data):
    return max(data, key=lambda v:data[v])
    