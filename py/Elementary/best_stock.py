#!/usr/bin/env checkio --domain=py run best-stock

# https://py.checkio.org/mission/best-stock/

# You are given the current stock prices. You have to find out which stocks cost more.
# 
# Input:The dictionary where the market identifier code is a key and the value is a stock price.
# 
# Output:A string and the market identifier code.
# 
# Preconditions:All the prices are unique.
# 
# 
# END_DESC

def best_stock(data):
    return max(data, key=lambda v:data[v])