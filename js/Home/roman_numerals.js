#!/usr/bin/env checkio --domain=js run roman-numerals

// https://js.checkio.org/mission/roman-numerals/

// 罗马数字来源于古罗马编码系统。它们是基于字母表的特定字母的组合，所表示的数等于这些数字相加（或者是相减）得到的数。前十位的罗马数字是：

// I，II，III，IV，V，VI，VII，VIII，IX和X。

// 罗马记数系统不是直接的十进制为基础，它没有零。罗马数字是根据这七个符号的组合：

// 符号	值
// I	1 (unus)
// V	5 (quinque)
// X	10 (decem)
// L	50 (quinquaginta)
// C	100 (centum)
// D	500 (quingenti)
// M	1,000 (mille)
// 更多额外的关于罗马数字的信息可以参考 维基百科的文章.

// 在这个任务里，你应该返回给出指定的整数值的范围从1到3999的罗马数字。

// 输入: 一个整数 (int).
// 输出: 一个字符串形式的罗马数字 (str).

// 范例:

//   romanNumerals(6) == 'VI'
//   romanNumerals(76) == 'LXXVI'
//   romanNumerals(13) == 'XIII'
//   romanNumerals(44) == 'XLIV'
//   romanNumerals(3999) == 'MMMCMXCIX'

// 如何使用： 这是一个有教育意义的任务，它让你去探索不同的记数系统。由于罗马数字字体经常使用，它也可以被用于文本生成。建筑外表的年号和基石常写于罗马数字。这些数字在现代世界有许多其他的用途，你可以 在这 了解它......或者，也许你会遇到有一个来自古代罗马的客户;-)

// 前提: 0 < number < 4000
// END_DESC

"use strict";

function romanNumerals(number) {
    let dict = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ]
    //数字变字串 -> 切成个位 -> 查表转换 -> 拼起来
    //表是从个位十位百位排列，所以查表的时候先反过来查，查完再反回去。
    return number.toString().split("").reverse().map((n, i) => dict[i][+n]).reverse().join("");
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(romanNumerals(6), 'VI', "First");
    assert.equal(romanNumerals(76), 'LXXVI', "Second");
    assert.equal(romanNumerals(499), 'CDXCIX', "Third");
    assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
    console.log("Done! Go Check!");
}