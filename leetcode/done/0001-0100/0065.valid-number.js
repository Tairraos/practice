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
 * " -90e3   " => true
 * " 1e" => false
 * "e3" => false
 * " 6e-1" => true
 * " 99e2.5 " => false
 * "53.5e93" => true
 * " --6 " => false
 * "-+3" => false
 * "95a54e53" => false
 * 
 * 说明: 我们有意将问题陈述地比较模糊。在实现代码之前，你应当事先思考所有可能的情况。
 * 下面是一些允许的条件：
 * 数字 0-9
 * 指数 - "e"
 * 正/负号 - "+"/"-"
 * 小数点 - "."。
 * 当然, 这些字符的上下文也很重要。
 * 
 * 更新于 2015-02-10：
 * C++函数的形式已经更新了。如果你仍然看见你的函数接收 const char * 类型的参数，请点击重载按钮重置你的代码。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return /^\s*[+-]?((\d*\.\d+)|\d+\.?)(e[+-]?\d+)?\s*$/.test(s);
    //或者利用js转数值方法来检查: return !(isNaN(+s) && /^\s*$/.test(s));
};

// Local test
let assert = require("assert");
console.time("leetcode");
assert.deepEqual(isNumber("3."), true, "3.");
assert.deepEqual(isNumber("0"), true, "0");
assert.deepEqual(isNumber("1e-5"), true, "1e-5");
assert.deepEqual(isNumber("2e+5"), true, "2e+5");
assert.deepEqual(isNumber(""), false, "empty");
assert.deepEqual(isNumber(".1"), true, ".1");
assert.deepEqual(isNumber(" 0.1 "), true, " 0.1 ");
assert.deepEqual(isNumber("abc"), false, "abc");
assert.deepEqual(isNumber(  ), false, "empty");
assert.deepEqual(isNumber(" "), false, "empty");
assert.deepEqual(isNumber("2e10"), true, "2e10");
assert.deepEqual(isNumber(" -90e3   "), true, " -90e3   ");
assert.deepEqual(isNumber(" 1e"), false, " 1e");
assert.deepEqual(isNumber("e3"), false, "e3");
assert.deepEqual(isNumber(" 6e-1"), true, " 6e-1");
assert.deepEqual(isNumber(" 99e2.5 "), false, " 99e2.5 ");
assert.deepEqual(isNumber("53.5e93"), true, "53.5e93");
assert.deepEqual(isNumber(" --6 "), false, " --6 ");
assert.deepEqual(isNumber("-+3"), false, "-+3");
assert.deepEqual(isNumber("95a54e53"), false, "95a54e53");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
