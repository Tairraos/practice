#!/usr/bin/env checkio --domain=py run completely-empty

# https://py.checkio.org/mission/completely-empty/

# You need to figure if a wellfounded and wellsized iterable is completely empty.
# 
# An iterablex0is wellfounded if there is no infinite sequencex1,x2,x3...such that... in x3 in x2 in x1 in x0(whereinis meant iteratively,x(n+1)will be encountered while iterating throughxn).
# 
# A wellfounded iterable is wellsized if it has only finitely many iterable elements, and all of them are wellsized.
# 
# A wellfounded iterable is completely empty when all its elements are completely empty.
# 
# Some consequences of the above definitions:
# 
# any empty iterable is completely emptya non-iterable is never completely emptythe only wellfounded string is'', and it is completely emptybytes, and (possibly nested) tuples/frozensets of them are always wellfounded and wellsized{'': 'Nonempty'}is a wellfounded and completely empty iterableafterc=[];c.append(c), c is a non-wellfounded iterableitertools.repeat(())is wellfounded but not wellsizeditertools.repeat(5)is wellfounded and wellsizedInput:A wellfounded and wellsized iterable.
# 
# Output:A bool.
# 
# 
# END_DESC

def completely_empty(val):
    return True

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert completely_empty([]) == True, "First"
    assert completely_empty([1]) == False, "Second"
    assert completely_empty([[]]) == True, "Third"
    assert completely_empty([[],[]]) == True, "Forth"
    assert completely_empty([[[]]]) == True, "Fifth"
    assert completely_empty([[],[1]]) == False, "Sixth"
    assert completely_empty([0]) == False, "[0]"
    assert completely_empty(['']) == True
    assert completely_empty([[],[{'':'No WAY'}]]) == True
    print('Done')