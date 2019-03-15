#!/usr/bin/env checkio --domain=py run say-history

# https://py.checkio.org/mission/say-history/

# In this mission you should write a function that introduce a person with a given parameters in attributes.
# 
# Input:Two arguments. String and positive integer.
# 
# Output:String.
# 
# 
# END_DESC

def say_hi(name: str, age: int) -> str:
    return "Hi. My name is " + name + " and I'm " + str(age) + " years old"