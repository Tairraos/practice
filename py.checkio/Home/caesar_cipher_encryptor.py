#!/usr/bin/env checkio --domain=py check caesar-cipher-encryptor
# https://py.checkio.org/mission/caesar-cipher-encryptor/


def to_encrypt(text, delta):
    alpha = "abcdefghijklmnopqrstuvwxyz"
    table = dict(zip(alpha, alpha[delta:] + alpha[:delta]))
    return "".join(map(lambda c:table[c] if c in alpha else c, text))
