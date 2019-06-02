/**
 * https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal/
 * 0405.数字转换为十六进制数
 * 难度：容易
 * 
 * 给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用 [补码运算](https://baike.baidu.com/item/%E8%A1%A5%E7%A0%81) 方法。
 * 
 * 注意：
 *   - 十六进制中所有字母(a-f)都必须是小写。
 *   - 十六进制字符串中不能包含多余的前导零。如果要转化的数为0，那么以单个字符'0'来表示；对于其他情况，十六进制字符串中的第一个字符将不会是0字符。
 *   - 给定的数确保在32位有符号整数范围内。
 *   - 不能使用任何由库提供的将数字直接转换或格式化为十六进制的方法。
 * 
 * 示例 1：
 * 输入：
 * 26
 * 
 * 输出：
 * "1a"
 * 
 * 示例 2：
 * 输入：
 * -1
 * 
 * 输出：
 * "ffffffff"
 */

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(toHex("param"), "expect", "caseName");
assert.deepEqual(toHex("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
