/**
 * https://leetcode-cn.com/problems/complement-of-base-10-integer/
 * 1009.十进制整数的反码
 * 难度：容易
 * 
 * 每个非负整数 N 都有其二进制表示。例如， 5 可以被表示为二进制 "101"，11 可以用二进制 "1011" 表示，依此类推。注意，除 N = 0 外，任何二进制表示中都不含前导零。
 * 
 * 二进制的反码表示是将每个 1 改为 0 且每个 0 变为 1。例如，二进制数 "101" 的二进制反码为 "010"。
 * 
 * 给定十进制数 N，返回其二进制表示的反码所对应的十进制整数。
 * 
 * 示例 1：
 * 输入：5
 * 输出：2
 * 解释：5 的二进制表示为 "101"，其二进制反码为 "010"，也就是十进制中的 2 。
 * 
 * 示例 2：
 * 输入：7
 * 输出：0
 * 解释：7 的二进制表示为 "111"，其二进制反码为 "000"，也就是十进制中的 0 。
 * 
 * 示例 3：
 * 输入：10
 * 输出：5
 * 解释：10 的二进制表示为 "1010"，其二进制反码为 "0101"，也就是十进制中的 5 。
 * 
 * 提示：
 * 0 <= N < 10^9
 */

/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
    return parseInt(N.toString(2).replace(/./g, i => +!(+i)), 2);
};




// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(bitwiseComplement(5), 2);
assert.deepEqual(bitwiseComplement(7), 0);
assert.deepEqual(bitwiseComplement(10), 5);
assert.deepEqual(bitwiseComplement(0), 1);
assert.deepEqual(bitwiseComplement(10**9), 73741823);

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");