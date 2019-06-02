/**
 * https://leetcode-cn.com/problems/merge-sorted-array/
 * 0088.合并两个有序数组
 * 难度：容易
 * 
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 
 * 说明：
 *   - 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 *   - 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 示例：
 * 输入：
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let index = 0; //nums1的指针
    nums1.splice(m), nums2.splice(n); //修剪数组多余尾部元素防止干扰
    while (nums2.length) //如果nums1指针位置的值比nums2[0]要大，或者指针已经到尾部，则把nums2[0]插在指针位置
        nums1[index] >= nums2[0] || index >= nums1.length ? nums1.splice(index++, 0, nums2.shift()) : index++;
}


// Local test
let assert = require("assert"),
    testArr;
console.time("leetcode");

testArr = [1, 2, 3, 0, 0, 0];
merge(testArr, 3, [2, 5, 6], 3);
assert.deepEqual(testArr, [1, 2, 2, 3, 5, 6], "case 1");
testArr = [1, 2, 3];
merge(testArr, 3, [4, 5, 6], 3);
assert.deepEqual(testArr, [1, 2, 3, 4, 5, 6], "case 2");
testArr = [4, 5, 6];
merge(testArr, 3, [1, 2, 3], 3);
assert.deepEqual(testArr, [1, 2, 3, 4, 5, 6], "case 3");
testArr = [2, 3, 4];
merge(testArr, 3, [1, 5, 6], 3);
assert.deepEqual(testArr, [1, 2, 3, 4, 5, 6], "case 4");
testArr = [2, 3, 4];
merge(testArr, 3, [1, 5, 6], 3);
assert.deepEqual(testArr, [1, 2, 3, 4, 5, 6], "case 5");
testArr = [1, 5, 6];
merge(testArr, 3, [2, 3, 4], 3);
assert.deepEqual(testArr, [1, 2, 3, 4, 5, 6], "case 6");
testArr = [1, 4, 5];
merge(testArr, 3, [2, 3, 6], 3);
assert.deepEqual(testArr, [1, 2, 3, 4, 5, 6], "case 7");
testArr = [2, 4, 5];
merge(testArr, 3, [1, 3, 6], 3);
assert.deepEqual(testArr, [1, 2, 3, 4, 5, 6], "case 8");
testArr = [2, 4, 6];
merge(testArr, 3, [1, 3, 5], 3);
assert.deepEqual(testArr, [1, 2, 3, 4, 5, 6], "case 9");
testArr = [1, 3, 5];
merge(testArr, 3, [2, 4, 6], 3);
assert.deepEqual(testArr, [1, 2, 3, 4, 5, 6], "case 10");
testArr = [1, 3, 5];
merge(testArr, 3, [1, 3, 5], 3);
assert.deepEqual(testArr, [1, 1, 3, 3, 5, 5], "case 11");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");