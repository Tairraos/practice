/**
 * https://leetcode-cn.com/problems/hamming-distance/
 * 0461.汉明距离
 * 难度：容易
 * 
 * 两个整数之间的[汉明距离](https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB)指的是这两个数字对应二进制位不同的位置的数目。
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 * 
 * 注意：
 * 0 ≤ x, y < 2^31.
 * 
 * 示例：
 * 输入: x = 1, y = 4
 * 
 * 输出: 2
 * 
 * 解释：
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 * 
 * 上面的箭头指出了对应二进制位不同的位置。
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(hammingDistance("param"), "expect", "caseName");
assert.deepEqual(hammingDistance("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
