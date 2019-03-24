/**
 * https://leetcode-cn.com/problems/daily-temperatures/
 * 0739.每日温度
 * 难度：中等
 * 
 * 根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高的天数。如果之后都不会升高，请输入 0 来代替。
 * 
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的都是 [30, 100] 范围内的整数。
 */

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(dailyTemperatures("参数"), "期望结果");
assert.deepEqual(dailyTemperatures("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
