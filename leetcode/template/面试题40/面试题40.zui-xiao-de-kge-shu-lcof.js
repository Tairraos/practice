/**
 * https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 * 面试题40.最小的k个数
 * 难度：容易
 * 
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 * 
 * 示例 1：
 * 输入：arr = [3,2,1], k = 2
 * 输出：[1,2] 或者 [2,1]
 * 
 * 示例 2：
 * 输入：arr = [0,1,2,1], k = 1
 * 输出：[0]
 * 
 * 限制：
 * 
 * 0 <= k <= arr.length <= 10000
 * 0 <= arr[i] <= 10000
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(getLeastNumbers("param"), "expect", "Case 1");
assert.deepEqual(getLeastNumbers("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
