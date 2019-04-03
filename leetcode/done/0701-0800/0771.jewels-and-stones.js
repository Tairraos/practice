/**
 * https://leetcode-cn.com/problems/jewels-and-stones/
 * 0771.宝石与石头
 * 难度：容易
 * 
 * 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 * 
 * 示例 1：
 * 输入: J = "aA", S = "aAAbbbb"
 * 输出: 3
 * 
 * 示例 2：
 * 输入: J = "z", S = "ZZ"
 * 输出: 0
 * 
 * 注意：
 *   - S 和 J 最多含有50个字母。
 *   -  J 中的字符不重复。
 */

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    //S按字母拆成数组，把J里包含的字母留下来，数组长度就是答案
    return S.split("").filter(s => J.includes(s)).length;
};

// 执行用时 : 92 ms, 在Jewels and Stones的JavaScript提交中击败了40.71% 的用户
// 内存消耗 : 33.7 MB, 在Jewels and Stones的JavaScript提交中击败了0.58% 的用户
