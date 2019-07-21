/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/
 * 0080.删除排序数组中的重复项 II
 * 难度：中等
 * 
 * 给定一个排序数组，你需要在[原地](http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)删除重复出现的元素，
 * 使得每个元素最多出现两次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)修改输入数组
 * 并在使用 O(1) 额外空间的条件下完成。
 * 
 * 示例 1：
 * 给定 nums = [1,1,1,2,2,3],
 * 
 * 函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例 2：
 * 给定 nums = [0,0,1,1,1,1,2,3,3],
 * 
 * 函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 说明：
 * 为什么返回数值是整数，但输出的答案是数组呢?
 * 请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 * 你可以想象内部操作如下：
 * // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
 * int len = removeDuplicates(nums);
 * 
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
 * for (int i = 0; i < len; i++) {
 *     print(nums[i]);
 * }
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let [index, times] = [0, nums.length];
    //同第26题。如果（值===前2个值）就移除，指针不动。如果值不等于就移动指针。
    while (times--) nums[index] === nums[index - 2] ? nums.splice(index, 1) : index++;
    return nums.length;
};

// Local test                                                 
let assert = require("assert"),
    testArr;
console.time("Time cost");

testArr = [1, 1, 1, 2, 2, 3];
assert.deepEqual(removeDuplicates(testArr), 5, "case 0.1");
assert.deepEqual(testArr, [1, 1, 2, 2, 3], "case 0.2");

testArr = [0, 0, 1, 1, 1, 1, 2, 3, 3];
assert.deepEqual(removeDuplicates(testArr), 7, "case 1.1");
assert.deepEqual(testArr, [0, 0, 1, 1, 2, 3, 3], "case 1.2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");