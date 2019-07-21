/**
 * https://leetcode-cn.com/problems/sort-colors/
 * 0075.颜色分类
 * 难度：中等
 * 
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)对它们
 * 进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 注意：
 * 不能使用代码库中的排序函数来解决这道题。
 * 
 * 示例：
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 * 
 * 进阶：
 *   - 一个直观的解决方案是使用计数排序的两趟扫描算法。
 *     首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 *   - 你能想出一个仅使用常数空间的一趟扫描算法吗？
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let [index, times] = [0, nums.length];
    while (times--)
        //遍历数组，index为指针。，指针不动。如果值不等于0就移动指针。
        nums[index] === 0 ? nums.unshift(nums.splice(index++, 1)[0]) : //如果值为 0 就移到开头
        nums[index] === 2 ? nums.push(nums.splice(index, 1)[0]) : //如果值为 2 就移到末尾
        index++; //值为 1 仅仅移动指针
};

// Local test                                                 
let assert = require("assert"),
    testArr;
console.time("Time cost");

testArr = [2, 0, 2, 1, 1, 0];
sortColors(testArr);
assert.deepEqual(testArr, [0, 0, 1, 1, 2, 2], "case 0");
testArr = [0, 0, 0, 0, 0, 0, 0, 0];
sortColors(testArr);
assert.deepEqual(testArr, [0, 0, 0, 0, 0, 0, 0, 0], "case 1");
testArr = [1, 1, 1, 0, 0, 0];
sortColors(testArr);
assert.deepEqual(testArr, [0, 0, 0, 1, 1, 1], "case 2");


console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");