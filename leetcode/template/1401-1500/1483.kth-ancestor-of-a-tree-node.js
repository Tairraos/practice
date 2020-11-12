/**
 * https://leetcode-cn.com/problems/kth-ancestor-of-a-tree-node/
 * 1483.树节点的第 K 个祖先
 * 难度：困难
 * 
 * 给你一棵树，树上有 n 个节点，按从 0 到 n-1 编号。树以父节点数组的形式给出，其中 parent[i] 是节点 i 的父节点。树的根节点是编号为 0 的节点。
 * 
 * 请你设计并实现 getKthAncestor(int node, int k) 函数，函数返回节点 node 的第 k 个祖先节点。如果不存在这样的祖先节点，返回 -1 。
 * 
 * 树节点的第 k 个祖先节点是从该节点到根节点路径上的第 k 个节点。
 * 
 * 示例：
 * 输入：
 * ["TreeAncestor","getKthAncestor","getKthAncestor","getKthAncestor"]
 * [[7,[-1,0,0,1,1,2,2]],[3,1],[5,2],[6,3]]
 * 
 * 输出：
 * [null,1,0,-1]
 * 
 * 解释：
 * TreeAncestor treeAncestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
 * 
 * treeAncestor.getKthAncestor(3, 1);  // 返回 1 ，它是 3 的父节点
 * treeAncestor.getKthAncestor(5, 2);  // 返回 0 ，它是 5 的祖父节点
 * treeAncestor.getKthAncestor(6, 3);  // 返回 -1 因为不存在满足要求的祖先节点
 * 
 * 提示：
 * 1 <= k <= n <= 5*10^4
 * parent[0] == -1 表示编号为 0 的节点是根节点。
 * 对于所有的 0 < i < n ，0 <= parent[i] < n 总成立
 * 0 <= node < n
 * 至多查询 5*10^4 次
 */

/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function(n, parent) {

};

/** 
 * @param {number} node 
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function(node, k) {

};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(TreeAncestor("param"), "expect", "Case 1");
assert.deepEqual(TreeAncestor("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
