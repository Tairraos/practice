/**
 * https://leetcode-cn.com/problems/push-dominoes/
 * 0838.推多米诺
 * 难度：中等
 * 
 * 一行中有 N 张多米诺骨牌，我们将每张多米诺骨牌垂直竖立。
 * 在开始时，我们同时把一些多米诺骨牌向左或向右推。
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0838.png)
 * 每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。
 * 同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。
 * 如果同时有多米诺骨牌落在一张垂直竖立的多米诺骨牌的两边，由于受力平衡， 该骨牌仍然保持不变。
 * 就这个问题而言，我们会认为正在下降的多米诺骨牌不会对其它正在下降或已经下降的多米诺骨牌施加额外的力。
 * 给定表示初始状态的字符串 "S" 。如果第 i 张多米诺骨牌被推向左边，则 S[i] = 'L'；如果第 i 张多米诺骨牌被推向右边，则 S[i] = 'R'；如果第 i 张多米诺骨牌没有被推动，则 S[i] = '.'。
 * 返回表示最终状态的字符串。
 * 
 * 示例 1：
 * 输入：".L.R...LR..L.."
 * 输出："LL.RR.LLRRLL.."
 * 
 * 示例 2：
 * 输入："RR.L"
 * 输出："RR.L"
 * 
 * 说明：第一张多米诺骨牌没有给第二张施加额外的力。
 * 提示：
 *   - 0 <= N <= 10^5
 *   - 表示多米诺骨牌状态的字符串只含有 'L'，'R'; 以及 '.';
 */

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(pushDominoes("param"), "expect", "caseName");
assert.deepEqual(pushDominoes("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
