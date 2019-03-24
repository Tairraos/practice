/**
 * https://leetcode-cn.com/problems/largest-component-size-by-common-factor/
 * 0952.按公因数计算最大组件大小
 * 难度：困难
 * 
 * 给定一个由不同正整数的组成的非空数组 A，考虑下面的图：
 *   - 有 A.length 个节点，按从 A[0] 到 A[A.length - 1] 标记；
 *   - 只有当 A[i] 和 A[j] 共用一个大于 1 的公因数时，A[i] 和 A[j] 之间才有一条边。
 * 
 * 返回图中最大连通组件的大小。
 * 
 * 示例 1：
 * 输入：[4,6,15,35]
 * 输出：4
 * [示意图](https://assets.leetcode-cn.com/aliyun-lc-uploads/uploads/2018/12/01/ex1.png)[示意图](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/01/ex1.png)
 * 
 * 示例 2：
 * 输入：[20,50,9,63]
 * 输出：2
 * [示意图](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/01/ex2.png)
 * 
 * 示例 3：
 * 输入：[2,3,6,7,4,12,21,39]
 * 输出：8
 * [示意图](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/01/ex3.png)
 * 
 * 提示：
 *   - 1 <= A.length <= 20000
 *   - 1 <= A[i] <= 100000
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var largestComponentSize = function(A) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(largestComponentSize("参数"), "期望结果");
assert.deepEqual(largestComponentSize("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
