/**                                                 
 * https://leetcode-cn.com/problems/move-zeroes/                                                 
 * 0283.移动零                                                 
 * 难度：容易                                                 
 *                                                  
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。                                                 
 *                                                  
 * 示例：                                                 
 * 输入: [0,1,0,3,12]                                                 
 * 输出: [1,3,12,0,0]                                                 
 *                                                  
 * 说明：                                                 
 *   - 必须在原数组上操作，不能拷贝额外的数组。                                                 
 *   - 尽量减少操作次数。                                                 
 */

/**                                                 
 * @param {number[]} nums                                                 
 * @return {void} Do not return anything, modify nums in-place instead.                                                 
 */
var moveZeroes = function (nums) {
    let [index, times] = [0, nums.length];
    //遍历数组，index为指针。如果值为 0 就移到末尾，指针不动。如果值不等于0就移动指针。
    while (times--) nums[index] ? index++ : nums.push(nums.splice(index, 1)[0]);
};




// Local test                                                 
let assert = require("assert"),
    testArr;
console.time("leetcode");

testArr = [0, 0, 0, 0];
moveZeroes(testArr);
assert.deepEqual(testArr, [0, 0, 0, 0], "case 0");
testArr = [0, 0, 0, 1];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 0, 0, 0], "case 1");
testArr = [0, 0, 1, 0];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 0, 0, 0], "case 2");
testArr = [0, 0, 1, 1];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 1, 0, 0], "case 3");
testArr = [0, 1, 0, 0];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 0, 0, 0], "case 4");
testArr = [0, 1, 0, 1];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 1, 0, 0], "case 5");
testArr = [0, 1, 1, 0];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 1, 0, 0], "case 6");
testArr = [0, 1, 1, 1];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 1, 1, 0], "case 7");
testArr = [1, 0, 0, 0];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 0, 0, 0], "case 8");
testArr = [1, 0, 0, 1];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 1, 0, 0], "case 9");
testArr = [1, 0, 1, 0];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 1, 0, 0], "case 10");
testArr = [1, 0, 1, 1];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 1, 1, 0], "case 11");
testArr = [1, 1, 0, 0];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 1, 0, 0], "case 12");
testArr = [1, 1, 0, 1];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 1, 1, 0], "case 13");
testArr = [1, 1, 1, 0];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 1, 1, 0], "case 14");
testArr = [1, 1, 1, 1];
moveZeroes(testArr);
assert.deepEqual(testArr, [1, 1, 1, 1], "case 15");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");