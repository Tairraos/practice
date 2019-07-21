/**
 * https://leetcode-cn.com/problems/plus-one/
 * 0066.加一
 * 难度：容易
 * 
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1：
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 示例 2：
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let result = [], c = 1, //待加数
        //如果 n + c === 10，返回0, c不变，否则返回c+n, c变成0
        calc = (n) => n + c > 9 ? 0 : (c === 1 ? c-- : 0) + n;
    while (digits.length) result.unshift(calc(digits.pop()));
    return c ? [1, ...result] : result;
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(plusOne([1, 2, 3]), [1, 2, 4], "case 1");
assert.deepEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2], "case 2");
assert.deepEqual(plusOne([9, 9, 9, 9]), [1, 0, 0, 0, 0], "case 3");
assert.deepEqual(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]), [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4], "case 4");
assert.deepEqual(plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "case 5");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");