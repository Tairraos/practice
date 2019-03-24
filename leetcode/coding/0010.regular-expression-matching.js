/**
 * https://leetcode-cn.com/problems/regular-expression-matching/
 * 0010.正则表达式匹配
 * 难度：困难
 * 
 * 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
 * '.' 匹配任意单个字符。
 * '*' 匹配零个或多个前面的元素。
 * 
 * 匹配应该覆盖整个字符串 (s) ，而不是部分字符串。
 * 
 * 说明：
 *   - s 可能为空，且只包含从 a-z 的小写字母。
 *   - p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 * 
 * 示例 1：
 * 输入：
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 * 
 * 示例 2：
 * 输入：
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
 * 
 * 示例 3：
 * 输入：
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
 * 
 * 示例 4：
 * 输入：
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。
 * 
 * 示例 5：
 * 输入：
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    //特例，如果s===p返回true，包括了输入一对空
    if (p === s) return true;
    //特例，如果p是*开头，或包含 ** 正则语法错误，直接返回false
    if (p[0] === "*" || p.includes("**")) return false;
    //处理正则，拆成四种情形，[单个字符]，[字符*], [.], [.*]
    let r = []; p.split("").forEach(c => c === "*" ? r.push(r.pop() + "*") : r.push(c));
    let ignore = "", cur = r.shift();
    s.split.forEach((c, i) => {
        if (c=r){}
        // switch

    });

};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(isMatch("a", "."), true);
assert.deepEqual(isMatch("aa", "a"), false);
assert.deepEqual(isMatch("ab", ".*"), true);
assert.deepEqual(isMatch("aaaabbbbccccdddd", "aa.*"), true);
assert.deepEqual(isMatch("aaaabbbbccccdddd", "aa.*bb.*"), true);
assert.deepEqual(isMatch("aaaabbbbccccdddd", "aa...bb.*"), true);
assert.deepEqual(isMatch("aaaabbbbccccdddd", "aa.*dd.*"), true);
assert.deepEqual(isMatch("aaaabbbbccccdddd", "aa.*dd.dd.*"), true);
assert.deepEqual(isMatch("aaaabbbbccccdddd", "aa.*dd"), true);

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");