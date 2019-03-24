/**
 * https://leetcode-cn.com/problems/decode-ways-ii/
 * 0639.解码方法 2
 * 难度：困难
 * 
 * 一条包含字母 A-Z 的消息通过以下的方式进行了编码：
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 除了上述的条件以外，现在加密字符串可以包含字符 '*'了，字符'*'可以被当做1到9当中的任意一个数字。
 * 给定一条包含数字和字符'*'的加密信息，请确定解码方法的总数。
 * 同时，由于结果值可能会相当的大，所以你应当对10^9 + 7取模。（翻译者标注：此处取模主要是为了防止溢出）
 * 
 * 示例 1：
 * 输入: "*"
 * 输出: 9
 * 解释: 加密的信息可以被解密为: "A", "B", "C", "D", "E", "F", "G", "H", "I".
 * 
 * 示例 2：
 * 输入: "1*"
 * 输出: 9 + 9 = 18（翻译者标注：这里1*可以分解为1,* 或者当做1*来处理，所以结果是9+9=18）
 * 
 * 说明：
 *   - 输入的字符串长度范围是 [1, 10^5]。
 *   - 输入的字符串只会包含字符 '*' 和 数字'0' - '9'。
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(numDecodings("参数"), "期望结果");
assert.deepEqual(numDecodings("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
