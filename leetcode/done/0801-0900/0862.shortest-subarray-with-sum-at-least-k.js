/**
 * https://leetcode-cn.com/problems/shortest-subarray-with-sum-at-least-k/
 * 0862.和至少为 K 的最短子数组
 * 难度：困难
 * 
 * 返回 A 的最短的非空连续子数组的长度，该子数组的和至少为 K 。
 * 如果没有和至少为 K 的非空子数组，返回 -1 。
 * 
 * 示例 1：
 * 输入：A = [1], K = 1
 * 输出：1
 * 
 * 示例 2：
 * 输入：A = [1,2], K = 4
 * 输出：-1
 * 
 * 示例 3：
 * 输入：A = [2,-1,2], K = 3
 * 输出：3
 * 
 * 提示：
 *   - 1 <= A.length <= 50000
 *   - -10 ^ 5 <= A[i] <= 10 ^ 5
 *   - 1 <= K <= 10 ^ 9
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) { //本题思路是从评论区抄来的，实在是太妙了。
    let sum = 0,
        start = 0,
        result = 50001; //设置一个大于 A.length 的数为初始值
    return A.some((v, i) => { //start 为起始指针，i为当前扫描指针
        if (v >= K) return true; //如果某元素>=K，终止some，用三元表达式输出1
        if ((sum += v) < 1) { //sum+v之后如果小于1了，就从下一个元素开始重计数
            start = i + 1; //指针下移
            return sum = 0; //终止本次循环，初始化sum
        }
        for (let j = i; A[j] < 0; j--) { //负数可以抵消左侧若干正数
            A[j - 1] = A[j] + A[j - 1]; //左侧的值和负数相加，结果存在左侧
            A[j] = 0; //当前值归零
        }
        if (sum >= K) { //sum 等于 A.slice(start, i) 子集的和
            while (sum - A[start] >= K) sum -= A[start++]; //如果去掉子集中n个值后sum仍然大于K则去掉它们
            result = Math.min(result, i - start + 1); //把较小的结果留下
        }
    }) ? 1 : result === 50001 ? -1 : result; //提前结果，则为1, resule没有被更新，则为-1
};

// 执行用时 : 156 ms, 在Shortest Subarray with Sum at Least K的JavaScript提交中击败了84.62% 的用户
// 内存消耗 : 44.7 MB, 在Shortest Subarray with Sum at Least K的JavaScript提交中击败了18.75% 的用户

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(shortestSubarray([1], 1), 1);
assert.deepEqual(shortestSubarray([1, 2], 4), -1);
assert.deepEqual(shortestSubarray([2, -1, 2], 3), 3);
assert.deepEqual(shortestSubarray([1, 1, 9, -1, 10, 1, 1, 1, 1, 1, 10, -1, 2], 18), 3);
assert.deepEqual(shortestSubarray([1, 1, 9, -1, 10, 1, 1, 1, 1, 1, 10, -1, 2], 18), 3);
assert.deepEqual(shortestSubarray([1, 2, -3, 4, 5, 6, 7, -2, 8, 9, 1, 2, 3, 4, -5, 6, 7, 8, 9, 1, 2, -3, 4, 5, 6, 7, 40], 40), 1);
assert.deepEqual(shortestSubarray([
    262, 65, -84, 271, -102, 237, 61, -103, 249, 17, -7, 175, -204, 115, 254, -225, 12, -95, -205,
    -188, 255, 294, -114, -17, -182, 177, -3,
    273, 265, 300, 184, 195, 293, 243, 245, -75, 281, 257, 168, 256,
    197, 62, -245, -10, 168, 211, 243, -289, -299, -279, 269, 51, 18, -224, 146, 207,
    -188, -109, 166, 122, 66, 84, -236, -18, 288, -11, 265, -243, 180, 94, -217, 247
], 3000), 14);
console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");