/**
 * https://leetcode-cn.com/problems/zigzag-conversion/
 * 0006.Z 字形变换
 * 难度：中等
 * 
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * 请你实现这个将字符串进行指定行数变换的函数：
 * string convert(string s, int numRows);
 * 
 * 示例 1：
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 * 
 * 示例 2：
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释：
 * 
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows < 2) return s; //不需要折返的情形
    let r = Array(numRows).fill(""), //初始化numRows个字串
        c = (numRows - 1) * 2; //Z字单个循环长度
    //按z字折返规律把每个字符组装到对应的行里
    s.split("").forEach((l, i) => r[i % c < numRows ? i % c : c - i % c] += l);
    //拼合所有行
    return r.join("");
};

// 执行用时 : 248 ms, 在ZigZag Conversion的JavaScript提交中击败了21.42% 的用户
// 内存消耗 : 38.6 MB, 在ZigZag Conversion的JavaScript提交中击败了2.31% 的用户
