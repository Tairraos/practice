/**
 * https://leetcode-cn.com/problems/parsing-a-boolean-expression/
 * 1106.解析布尔表达式
 * 难度：困难
 * 
 * 给你一个以字符串形式表述的 布尔表达式（boolean） expression，返回该式的运算结果。
 * 
 * 有效的表达式需遵循以下约定：
 * 
 * "t"，运算结果为 True
 * "f"，运算结果为 False
 * "!(expr)"，运算过程为对内部表达式 expr 进行逻辑 非的运算（NOT）
 * "&amp;(expr1,expr2,...)"，运算过程为对 2 个或以上内部表达式 expr1, expr2, ... 进行逻辑 与的运算（AND）
 * "|(expr1,expr2,...)"，运算过程为对 2 个或以上内部表达式 expr1, expr2, ... 进行逻辑 或的运算（OR）
 * 
 * 示例 1：
 * 输入：expression = "!(f)"
 * 输出：true
 * 
 * 示例 2：
 * 输入：expression = "|(f,t)"
 * 输出：true
 * 
 * 示例 3：
 * 输入：expression = "&amp;(t,f)"
 * 输出：false
 * 
 * 示例 4：
 * 输入：expression = "|(&amp;(t,f,t),!(t))"
 * 输出：false
 * 
 * 提示：
 * 1 <= expression.length <= 20000
 * expression[i] 由 {&#39;(&#39;, &#39;)&#39;, &#39;&amp;&#39;, &#39;|&#39;, &#39;!&#39;, &#39;t&#39;, &#39;f&#39;, &#39;,&#39;} 中的字符组成。
 * expression 是以上述形式给出的有效表达式，表示一个布尔值。
 */

/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(parseBoolExpr("param"), "expect", "Case 1");
assert.deepEqual(parseBoolExpr("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
