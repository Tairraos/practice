/**
 * https://leetcode-cn.com/problems/minimum-number-of-frogs-croaking/
 * 1419.数青蛙
 * 难度：中等
 * 
 * 给你一个字符串 croakOfFrogs，它表示不同青蛙发出的蛙鸣声（字符串 "croak" ）的组合。由于同一时间可以有多只青蛙呱呱作响，所以 croakOfFrogs 中会混合多个 &ldquo;croak&rdquo; 。请你返回模拟字符串中所有蛙鸣所需不同青蛙的最少数目。
 * 
 * 注意：要想发出蛙鸣 "croak"，青蛙必须 依序 输出 &lsquo;c&rsquo;, &rsquo;r&rsquo;, &rsquo;o&rsquo;, &rsquo;a&rsquo;, &rsquo;k&rsquo; 这 5 个字母。如果没有输出全部五个字母，那么它就不会发出声音。
 * 
 * 如果字符串 croakOfFrogs 不是由若干有效的 "croak" 字符混合而成，请返回 -1 。
 * 
 * 示例 1：
 * 输入：croakOfFrogs = "croakcroak"
 * 输出：1 
 * 解释：一只青蛙 &ldquo;呱呱&rdquo; 两次
 * 
 * 示例 2：
 * 输入：croakOfFrogs = "crcoakroak"
 * 输出：2 
 * 解释：最少需要两只青蛙，&ldquo;呱呱&rdquo; 声用黑体标注
 * 第一只青蛙 "crcoakroak"
 * 第二只青蛙 "crcoakroak"
 * 
 * 示例 3：
 * 输入：croakOfFrogs = "croakcrook"
 * 输出：-1
 * 解释：给出的字符串不是 "croak" 的有效组合。
 * 
 * 示例 4：
 * 输入：croakOfFrogs = "croakcroa"
 * 输出：-1
 * 
 * 提示：
 * 1 <= croakOfFrogs.length <= 10^5
 * 字符串中的字符只有 &#39;c&#39;, &#39;r&#39;, &#39;o&#39;, &#39;a&#39; 或者 &#39;k&#39;
 */

/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(minNumberOfFrogs("param"), "expect", "Case 1");
assert.deepEqual(minNumberOfFrogs("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
