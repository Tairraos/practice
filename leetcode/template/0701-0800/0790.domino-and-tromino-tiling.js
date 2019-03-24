/**
 * https://leetcode-cn.com/problems/domino-and-tromino-tiling/
 * 0790.多米诺和托米诺平铺
 * 难度：中等
 * 
 * 有两种形状的瓷砖：一种是 2x1 的多米诺形，另一种是形如 "L" 的托米诺形。两种形状都可以旋转。
 * XX  <- 多米诺
 * 
 * XX  <- "L" 托米诺
 * X
 * 
 * 给定 N 的值，有多少种方法可以平铺 2 x N 的面板？返回值 mod 10^9 + 7。
 * （平铺指的是每个正方形都必须有瓷砖覆盖。两个平铺不同，当且仅当面板上有四个方向上的相邻单元中的两个，使得恰好有一个平铺有一个瓷砖占据两个正方形。）
 * 示例：
 * 输入: 3
 * 输出: 5
 * 解释：
 * 下面列出了五种不同的方法，不同字母代表不同瓷砖：
 * XYZ XXZ XYY XXY XYY
 * XYZ YYZ XZZ XYY XXY
 * 提示：
 *   - N  的范围是 [1, 1000]
 */

/**
 * @param {number} N
 * @return {number}
 */
var numTilings = function(N) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(numTilings("参数"), "期望结果");
assert.deepEqual(numTilings("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
