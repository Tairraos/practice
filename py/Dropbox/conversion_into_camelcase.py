#!/usr/bin/env checkio --domain=py run conversion-into-camelcase

# https://py.checkio.org/mission/conversion-into-camelcase/

# Your mission is to convert the name of a function (a string) from the Python format (for example "my_function_name") into CamelCase ("MyFunctionName"), where the first char of every word is in uppercase and all words are concatenated without any intervening characters.
# 
# Input:A function name as a string.
# 
# Output:The same string, but in CamelCase.
# 
# Precondition:
# 0<len(string)<= 100
# Input data won't contain any numbers.
# 
# 
# 
# END_DESC

import re


def to_camel_case(name):
    return re.sub("(^.|_.)", lambda s: s.group()[-1].upper(), name)