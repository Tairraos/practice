#!/usr/bin/env checkio --domain=py check bigger-price
# https://py.checkio.org/mission/bigger-price/


def bigger_price(limit: int, data: list) -> list:
    return sorted(data, key=lambda x: x["price"], reverse=True)[:limit]