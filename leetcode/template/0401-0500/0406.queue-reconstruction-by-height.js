/**
 * https://leetcode-cn.com/problems/queue-reconstruction-by-height/
 * 0406.根据身高重建队列
 * 难度：中等
 * 
 * 假设有打乱顺序的一群人站成一个队列。 每个人由一个整数对(h, k)表示，其中h是这个人的身高，k是排在这个人前面且身高大于或等于h的人数。 编写一个算法来重建这个队列。
 * 
 * 注意：
 * 总人数少于1100人。
 * 
 * 示例
 * 输入：
 * [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
 * 
 * 输出：
 * [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
 */

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(reconstructQueue("param"), "expect", "Case 1");
assert.deepEqual(reconstructQueue("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
