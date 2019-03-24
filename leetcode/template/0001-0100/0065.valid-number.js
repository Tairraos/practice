/**
 * https://leetcode-cn.com/problems/valid-number/
 * 0065.有效数字
 * 难度：困难
 * 
 * 验证给定的字符串是否为数字。
 * 
 * 例如：
 * "0" => true
 * " 0.1 " => true
 * "abc" => false
 * "1 a" => false
 * "2e10" => true
 * 
 * 说明: 我们有意将问题陈述地比较模糊。在实现代码之前，你应当事先思考所有可能的情况。
 * 更新于 2015-02-10：
 * C++函数的形式已经更新了。如果你仍然看见你的函数接收 const char * 类型的参数，请点击重载按钮重置你的代码。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(isNumber("参数"), "期望结果");
assert.deepEqual(isNumber("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
