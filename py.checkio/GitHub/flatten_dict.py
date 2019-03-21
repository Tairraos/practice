#!/usr/bin/env checkio --domain=py check flatten-dict
# https://py.checkio.org/mission/flatten-dict/


def flatten(dictionary):
    result = {}
    flat = lambda d: [
        result.update({i: d[i]}) if type(d[i]) == str else
        result.update({i: ""}) if d[i] == {} else
        flat({i + "/" + k: d[i][k] for k in d[i]}) for i in d
    ]
    flat(dictionary)
    return result
