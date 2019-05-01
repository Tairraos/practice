/**
 * https://leetcode-cn.com/problems/find-the-closest-palindrome/
 * 0564.寻找最近的回文数
 * 难度：困难
 * 
 * 给定一个整数 n ，你需要找到与它最近的回文数（不包括自身）。
 * “最近的”定义为两个整数差的绝对值最小。
 * 
 * 示例 1：
 * 输入: "123"
 * 输出: "121"
 * 
 * 注意：
 *   - n 是由字符串表示的正整数，其长度不超过18。
 *   - 如果有多个结果，返回最小的那个。
 */

/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
    let rev = s => s.split("").reverse().join(""), //把字串倒过来
    getPalindrome = (num, step) => { // 寻找上一个回文数或下一个回文数，step是步进方向，-1 | 1
        let s = String(BigInt(num) + BigInt(step)); //避开 n=9999 的下一个回文数需要进位查找的情况
        if (s.match(/.0$/)) s = String(BigInt(s) + BigInt(step)); //避开 n=1001 的上一个回文需要退位的情况
        let len = s.length,
            left = +s.slice(0, Math.ceil(len / 2)), //左侧一半
            leftVal = +rev(s.slice(0, Math.floor(len / 2))), //左侧一半,倒过来
            rightVal = +s.slice(Math.ceil(len / 2), len); //右侧一半
        if ((step > 0 && leftVal < rightVal) || (step < 0 && leftVal > rightVal)) left += step;
        return left + rev(String(left).slice(0, len / 2));
    },
    prev = getPalindrome(n, -1), next = getPalindrome(n, 1);
    return BigInt(n) - BigInt(prev) <= BigInt(next) - BigInt(n) ? prev : next;
};

// 执行用时 : 96 ms, 在Find the Closest Palindrome的JavaScript提交中击败了100.00% 的用户
// 内存消耗 : 34.2 MB, 在Find the Closest Palindrome的JavaScript提交中击败了20.00% 的用户

// Local test
let assert = require("assert");

console.time("leetcode");

assert.deepEqual(nearestPalindromic("123"), "121");
assert.deepEqual(nearestPalindromic("1"), "0");
assert.deepEqual(nearestPalindromic("123123123123"), "123123321321");
assert.deepEqual(nearestPalindromic("999999999999999999"), "1000000000000000001");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");