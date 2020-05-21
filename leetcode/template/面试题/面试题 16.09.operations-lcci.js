/**
 * https://leetcode-cn.com/problems/operations-lcci/
 * 面试题 16.09.运算
 * 难度：中等
 * 
 * 请实现整数数字的乘法、减法和除法运算，运算结果均为整数数字，程序中只允许使用加法运算符和逻辑运算符，允许程序中出现正负常数，不允许使用位运算。
 * 你的实现应该支持如下操作：
 * 
 * Operations() 构造函数
 * minus(a, b) 减法，返回a - b
 * multiply(a, b) 乘法，返回a * b
 * divide(a, b) 除法，返回a / b
 * 
 * 示例：
 * Operations operations = new Operations();
 * operations.minus(1, 2); //返回-1
 * operations.multiply(3, 4); //返回12
 * operations.divide(5, -2); //返回-2
 * 
 * 提示：
 * 你可以假设函数输入一定是有效的，例如不会出现除法分母为0的情况
 * 单个用例的函数调用次数不会超过1000次
 */


var Operations = function() {

};

/** 
 * @param {number} a 
 * @param {number} b
 * @return {number}
 */
Operations.prototype.minus = function(a, b) {

};

/** 
 * @param {number} a 
 * @param {number} b
 * @return {number}
 */
Operations.prototype.multiply = function(a, b) {

};

/** 
 * @param {number} a 
 * @param {number} b
 * @return {number}
 */
Operations.prototype.divide = function(a, b) {

};

/**
 * Your Operations object will be instantiated and called as such:
 * var obj = new Operations()
 * var param_1 = obj.minus(a,b)
 * var param_2 = obj.multiply(a,b)
 * var param_3 = obj.divide(a,b)
 */

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(Operations("param"), "expect", "Case 1");
assert.deepEqual(Operations("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
