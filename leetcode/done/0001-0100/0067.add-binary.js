/**
 * https://leetcode-cn.com/problems/add-binary/
 * 0067.二进制求和
 * 难度：容易
 * 
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1：
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2：
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let [aa, ab, result] = [a.split(""), b.split(""), [0]]; //变成数组方便从右向左遍历
    while (aa.length || ab.length) {
        let sum = +(aa.pop() | 0) + +(ab.pop() | 0) + result.shift(); //按位加，把进位也加上
        result.unshift(+(sum > 1), sum % 2); // 最前面一位是进位
    }
    return result.join("").replace(/^0+(\d)/,"$1"); //去除开头的0
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(addBinary("0", "0"), "0", "case 1");
assert.deepEqual(addBinary("11", "1"), "100", "case 1");
assert.deepEqual(addBinary("1010", "1011"), "10101", "case 2");
assert.deepEqual(addBinary("0000001010", "1011"), "10101", "case 2");
assert.deepEqual(addBinary(
        "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"),
    "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110", "case 3");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");