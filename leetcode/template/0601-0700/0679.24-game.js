/**
 * https://leetcode-cn.com/problems/24-game/
 * 0679.24点游戏
 * 难度：困难
 * 
 * 你有 4 张写有 1 到 9 数字的牌。你需要判断是否能通过 *，/，+，-，(，) 的运算得到 24。
 * 
 * 示例 1：
 * 输入: [4, 1, 8, 7]
 * 输出: True
 * 解释: (8-4) * (7-1) = 24
 * 
 * 示例 2：
 * 输入: [1, 2, 1, 2]
 * 输出: False
 * 
 * 注意：
 *   - 除法运算符 / 表示实数除法，而不是整数除法。例如 4 / (1 - 2/3) = 12 。
 *   - 每个运算符对两个数进行运算。特别是我们不能用 - 作为一元运算符。例如，[1, 1, 1, 1] 作为输入时，表达式 -1 - 1 - 1 - 1 是不允许的。
 *   - 你不能将数字连接在一起。例如，输入为 [1, 2, 1, 2] 时，不能写成 12 + 12 。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(judgePoint24("参数"), "期望结果");
assert.deepEqual(judgePoint24("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
