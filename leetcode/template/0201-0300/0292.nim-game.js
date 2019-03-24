/**
 * https://leetcode-cn.com/problems/nim-game/
 * 0292.Nim游戏
 * 难度：容易
 * 
 * 你和你的朋友，两个人一起玩 [Nim游戏](https://baike.baidu.com/item/Nim%E6%B8%B8%E6%88%8F)：桌子上有一堆石头，每次你们轮流拿掉 1 - 3 块石头。 拿掉最后一块石头的人就是获胜者。你作为先手。
 * 你们是聪明人，每一步都是最优解。 编写一个函数，来判断你是否可以在给定石头数量的情况下赢得游戏。
 * 
 * 示例：
 * 输入: 4
 * 输出: false
 * 解释: 如果堆中有 4 块石头，那么你永远不会赢得比赛；
 *      因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(canWinNim("参数"), "期望结果");
assert.deepEqual(canWinNim("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
