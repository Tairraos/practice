#!/usr/bin/env checkio --domain=py run most-wanted-letter
# https://py.checkio.org/mission/most-wanted-letter/


import re


def checkio(text: str) -> str:
    source = list(re.sub(r'[^a-zA-Z]', '', text.lower()))
    source.sort()
    result = {}
    for letter in source:
        result[letter] = result[letter] + 1 if letter in result else 1

    return sorted(result.items(), key=lambda item: item[1], reverse=True)[0][0]


if __name__ == '__main__':
    print("Example:")
    print(checkio("Hello World!"))

    # These "asserts" using only for self-checking and not necessary for auto-testing
    assert checkio("Hello World!") == "l", "Hello test"
    assert checkio("How do you do?") == "o", "O is most wanted"
    assert checkio("One") == "e", "All letter only once."
    assert checkio("Oops!") == "o", "Don't forget about lower case."
    assert checkio("AAaooo!!!!") == "a", "Only letters."
    assert checkio("abe") == "a", "The First."
    print("Start the long test")
    assert checkio("a" * 9000 + "b" * 1000) == "a", "Long."
    print("The local tests are done.")