/**
 * https://leetcode-cn.com/problems/largest-time-for-given-digits/
 * 0949.给定数字能组成的最大时间
 * 难度：容易
 * 
 * 给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。
 * 最小的 24 小时制时间是 00:00，而最大的是 23:59。从 00:00 （午夜）开始算起，过得越久，时间越大。
 * 以长度为 5 的字符串返回答案。如果不能确定有效时间，则返回空字符串。
 * 
 * 示例 1：
 * 输入：[1,2,3,4]
 * 输出："23:41"
 * 
 * 示例 2：
 * 输入：[5,5,5,5]
 * 输出：""
 * 提示：
 *   - A.length == 4
 *   - 0 <= A[i] <= 9
 */

/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(largestTimeFromDigits("param"), "expect", "caseName");
assert.deepEqual(largestTimeFromDigits("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
