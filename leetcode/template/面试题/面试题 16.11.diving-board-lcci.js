/**
 * https://leetcode-cn.com/problems/diving-board-lcci/
 * 面试题 16.11.跳水板
 * 难度：容易
 * 
 * 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
 * 返回的长度需要从小到大排列。
 * 示例：
 * 输入：
 * shorter = 1
 * longer = 2
 * k = 3
 * 输出： {3,4,5,6}
 * 
 * 提示：
 * 0 
 * 0
 */

/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(divingBoard("param"), "expect", "Case 1");
assert.deepEqual(divingBoard("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
