/**
 * https://leetcode-cn.com/problems/new-21-game/
 * 0837.新21点
 * 难度：中等
 * 
 * 爱丽丝参与一个大致基于纸牌游戏 “21点” 规则的游戏，描述如下：
 * 爱丽丝以 0 分开始，并在她的得分少于 K 分时抽取数字。 抽取时，她从 [1, W] 的范围中随机获得一个整数作为分数进行累计，其中 W 是整数。 每次抽取都是独立的，其结果具有相同的概率。
 * 当爱丽丝获得不少于 K 分时，她就停止抽取数字。 爱丽丝的分数不超过 N 的概率是多少？
 * 
 * 示例 1：
 * 输入：N = 10, K = 1, W = 10
 * 输出：1.00000
 * 
 * 说明：爱丽丝得到一张卡，然后停止。
 * 
 * 示例 2：
 * 输入：N = 6, K = 1, W = 10
 * 输出：0.60000
 * 
 * 说明：爱丽丝得到一张卡，然后停止。
 * 在 W = 10 的 6 种可能下，她的得分不超过 N = 6 分。
 * 
 * 示例 3：
 * 输入：N = 21, K = 17, W = 10
 * 输出：0.73278
 * 提示：
 *   - 0 <= K <= N <= 10000
 *   - 1 <= W <= 10000
 *   - 如果答案与正确答案的误差不超过 10^-5，则该答案将被视为正确答案通过。
 *   - 此问题的判断限制时间已经减少。
 */

/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function(N, K, W) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(new21Game("参数"), "期望结果");
assert.deepEqual(new21Game("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
