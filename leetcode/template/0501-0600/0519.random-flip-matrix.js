/**
 * https://leetcode-cn.com/problems/random-flip-matrix/
 * 0519.随机翻转矩阵
 * 难度：中等
 * 
 * 题中给出一个 n 行 n 列的二维矩阵 (n_rows,n_cols)，且所有值被初始化为 0。要求编写一个 flip 函数，[均匀随机](https://zh.wikipedia.org/wiki/%E9%9B%A2%E6%95%A3%E5%9E%8B%E5%9D%87%E5%8B%BB%E5%88%86%E4%BD%88)的将矩阵中的 0 变为 1，并返回该值的位置下标 [row_id,col_id]；同样编写一个 reset 函数，将所有的值都重新置为 0。尽量最少调用随机函数 Math.random()，并且优化时间和空间复杂度。
 * 
 * 注意：
 * 1.1 <= n_rows, n_cols <= 10000
 * 2. 0 <= row.id < n_rows 并且 0 <= col.id < n_cols
 * 3.当矩阵中没有值为 0 时，不可以调用 flip 函数
 * 4.调用 flip 和 reset 函数的次数加起来不会超过 1000 次
 * 
 * 示例 1：
 * 输入：
 * ["Solution","flip","flip","flip","flip"]
 * [[2,3],[],[],[],[]]
 * 输出: [null,[0,1],[1,2],[1,0],[1,1]]
 * 
 * 示例 2：
 * 输入：
 * ["Solution","flip","flip","reset","flip"]
 * [[1,2],[],[],[],[]]
 * 输出: [null,[0,0],[0,1],null,[0,0]]
 * 输入语法解释：
 * 输入包含两个列表：被调用的子程序和他们的参数。Solution 的构造函数有两个参数，分别为 n_rows 和 n_cols。flip 和 reset 没有参数，参数总会以列表形式给出，哪怕该列表为空
 */

/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
var Solution = function(n_rows, n_cols) {
    
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
    
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(n_rows, n_cols)
 * var param_1 = obj.flip()
 * obj.reset()
 */

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(Solution("param"), "expect", "caseName");
assert.deepEqual(Solution("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
