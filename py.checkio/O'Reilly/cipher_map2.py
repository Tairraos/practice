#!/usr/bin/env checkio --domain=py run cipher-map2
# https://py.checkio.org/mission/cipher-map2/


def recall_password(c, p):
    #transfer the matrix 90 deg
    c1 = c
    c2 = ["".join(l) for l in list(zip(c1[3], c1[2], c1[1], c1[0]))]
    c3 = ["".join(l) for l in list(zip(c2[3], c2[2], c2[1], c2[0]))]
    c4 = ["".join(l) for l in list(zip(c3[3], c3[2], c3[1], c3[0]))]

    # merge password and decode table to tuple pair
    sp = "".join(p)
    ss  = list(zip("".join(c1), sp))
    ss += list(zip("".join(c2), sp))
    ss += list(zip("".join(c3), sp))
    ss += list(zip("".join(c4), sp))
    
    # if tuple start with X, the follower should be plain text
    return "".join([x[1] if x[0] == "X" else "" for x in ss])