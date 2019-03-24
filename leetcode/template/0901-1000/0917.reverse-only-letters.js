/**
 * https://leetcode-cn.com/problems/reverse-only-letters/
 * 0917.仅仅反转字母
 * 难度：容易
 * 
 * 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
 * 
 * 示例 1：
 * 输入："ab-cd"
 * 输出："dc-ba"
 * 
 * 示例 2：
 * 输入："a-bC-dEf-ghIj"
 * 输出："j-Ih-gfE-dCba"
 * 
 * 示例 3：
 * 输入："Test1ng-Leet=code-Q!"
 * 输出："Qedo1ct-eeLg=ntse-T!"
 * 提示：
 *   - S.length <= 100
 *   - 33 <= S[i].ASCIIcode <= 122
 *   - S 中不包含 \ or "
 */

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(reverseOnlyLetters("参数"), "期望结果");
assert.deepEqual(reverseOnlyLetters("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
