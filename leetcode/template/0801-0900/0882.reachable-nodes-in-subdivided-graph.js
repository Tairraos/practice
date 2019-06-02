/**
 * https://leetcode-cn.com/problems/reachable-nodes-in-subdivided-graph/
 * 0882.细分图中的可到达结点
 * 难度：困难
 * 
 * 从具有 0 到 N-1 的结点的无向图（“原始图”）开始，对一些边进行细分。
 * 该图给出如下：edges[k] 是整数对 (i, j, n) 组成的列表，使 (i, j) 是原始图的边。
 * n 是该边上新结点的总数
 * 然后，将边 (i, j) 从原始图中删除，将 n 个新结点 (x_1, x_2, ..., x_n) 添加到原始图中，
 * 将 n+1 条新边 (i, x_1), (x_1, x_2), (x_2, x_3), ..., (x_{n-1}, x_n), (x_n, j) 添加到原始图中。
 * 现在，你将从原始图中的结点 0 处出发，并且每次移动，你都将沿着一条边行进。
 * 返回最多 M 次移动可以达到的结点数。
 * 
 * 示例 1：
 * 输入：edges = [[0,1,10],[0,2,1],[1,2,2]], M = 6, N = 3
 * 输出：13
 * 解释：
 * 在 M = 6 次移动之后在最终图中可到达的结点如下所示。
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0882.png)
 * 
 * 示例 2：
 * 输入：edges = [[0,1,4],[1,2,6],[0,2,8],[1,3,1]], M = 10, N = 4
 * 输出：23
 * 
 * 提示：
 *   - 0 <= edges.length <= 10000
 *   - 0 <= edges[i][0] < edges[i][1] < N
 *   - 不存在任何 i != j 情况下 edges[i][0] == edges[j][0] 且 edges[i][1] == edges[j][1].
 *   - 原始图没有平行的边。
 *   - 0 <= edges[i][2] <= 10000
 *   - 0 <= M <= 10^9
 *   - 1 <= N <= 3000
 */

/**
 * @param {number[][]} edges
 * @param {number} M
 * @param {number} N
 * @return {number}
 */
var reachableNodes = function(edges, M, N) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(reachableNodes("param"), "expect", "caseName");
assert.deepEqual(reachableNodes("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
