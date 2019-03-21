#!/usr/bin/env checkio --domain=py check caesar-cipher-encryptor
# https://py.checkio.org/mission/caesar-cipher-encryptor/


def to_encrypt(text, delta):
    alpha = "abcdefghijklmnopqrstuvwxyz"
    table = dict(zip(alpha, alpha[delta:] + alpha[:delta]))
    return "".join(map(lambda c:table[c] if c in alpha else c, text))


if __name__ == '__main__':
    print("Example:")
    print(to_encrypt('abc', 10))

    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert to_encrypt("a b c", 3) == "d e f"
    assert to_encrypt("a b c", -3) == "x y z"
    assert to_encrypt("simple text", 16) == "iycfbu junj"
    assert to_encrypt("important text", 10) == "swzybdkxd dohd"
    assert to_encrypt("state secret", -13) == "fgngr frperg"
    print("Coding complete? Click 'Check' to earn cool rewards!")