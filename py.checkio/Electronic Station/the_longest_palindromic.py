#!/usr/bin/env checkio --domain=py check the-longest-palindromic
# https://py.checkio.org/mission/the-longest-palindromic/


def longest_palindromic(text):
    return text

if __name__ == '__main__':
    assert longest_palindromic("artrartrt") == "rtrartr", "The Longest"
    assert longest_palindromic("abacada") == "aba", "The First"
    assert longest_palindromic("aaaa") == "aaaa", "The A"