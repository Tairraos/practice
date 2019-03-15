#!/usr/bin/env checkio --domain=py run stressful-subject

# https://py.checkio.org/mission/stressful-subject/

# 
# END_DESC

def is_stressful(subj):
    """
        recoognise stressful subject
    """
    return False

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert is_stressful("Hi") == False, "First"
    assert is_stressful("I neeed HELP") == True, "Second"
    print('Done! Go Check it!')