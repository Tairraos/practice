/*
 * https://leetcode-cn.com/problems/palindrome-number
 * 0009.回文数
 * 
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 输入: 121
 * 输出: true
 * 
 * 示例 2:
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 示例 3:
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 进阶:
 * 你能不将整数转为字符串来解决这个问题吗？
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    //转字串，折成数组，逆排，拼合成字串，转成数字 === 输入数字
    return +("" + x).split("").reverse().join("") === x;
};

//进阶
var isPalindrome_advance = function (x) {
// for (let i=)

};