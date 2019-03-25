/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 0020.有效的括号
 * 难度：容易
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 *   - 左括号必须用相同类型的右括号闭合。
 *   - 左括号必须以正确的顺序闭合。
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1：
 * 输入: "()"
 * 输出: true
 * 
 * 示例 2：
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 示例 3：
 * 输入: "(]"
 * 输出: false
 * 
 * 示例 4：
 * 输入: "([)]"
 * 输出: false
 * 
 * 示例 5：
 * 输入: "{[]}"
 * 输出: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [], dict = {"}": "{", "]": "[", ")": "("};
    for (let i = 0; i < s.length; i++) {
        //如果是开括号，压栈
        if (!dict[s[i]]) stack.push(s[i]);
        //如果是闭括号，需要和栈里最后一个成员匹配
        else if (dict[s[i]] !== stack.pop()) return false;
    }
    //如果遍历完全匹配的话栈应该清空
    return !stack.length;
};

// 执行用时 : 100 ms, 在Valid Parentheses的JavaScript提交中击败了34.29% 的用户
// 内存消耗 : 33.6 MB, 在Valid Parentheses的JavaScript提交中击败了0.99% 的用户
