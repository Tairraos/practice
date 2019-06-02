/**
 * https://leetcode-cn.com/problems/prime-palindrome/
 * 0866.回文素数
 * 难度：中等
 * 
 * 求出大于或等于 N 的最小回文素数。
 * 回顾一下，如果一个数大于 1，且其因数只有 1 和它自身，那么这个数是素数。
 * 
 * 例如，2，3，5，7，11 以及 13 是素数。
 * 回顾一下，如果一个数从左往右读与从右往左读是一样的，那么这个数是回文数。
 * 
 * 例如，12321 是回文数。
 * 
 * 示例 1：
 * 输入：6
 * 输出：7
 * 
 * 示例 2：
 * 输入：8
 * 输出：11
 * 
 * 示例 3：
 * 输入：13
 * 输出：101
 * 
 * 提示：
 *   - 1 <= N <= 10^8
 *   - 答案肯定存在，且小于 2 * 10^8。
 */

/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function (N) {
    if (N <= 2) return 2;
    let rev = s => s.split("").reverse().join(""),
        isPrime = n => { //是否素数，输入总是奇数
            if (n % 2 === 0) return false;
            let l = Math.sqrt(N) | 0;
            for (let i = 3; i <= l; i += 2)
                if (n % i === 0) return false;
            return true;
        },
        nextPalindrome = n => {
            let s = ("" + (n + 1)).replace(/^([2468])/, i => ++i), //素数不可能是2468开头的回文数
                len = s.length,
                left = s.slice(0, Math.ceil(len / 2));
            //如果左侧反过来比右侧小, 左侧需要加大一位
            if (+rev(left.slice(0, Math.floor(len / 2))) < +s.slice(Math.ceil(len / 2), len))
                left = "" + (+left + 1);
            return +(left + rev(left.slice(0, len / 2)));
        };
    N = nextPalindrome(N - 1); //确保N是回文数
    while (!isPrime(N))
        N = nextPalindrome(N);
    return N;
};




// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(primePalindrome(1), 2);
assert.deepEqual(primePalindrome(6), 7);
assert.deepEqual(primePalindrome(8), 11);
assert.deepEqual(primePalindrome(11), 11);
assert.deepEqual(primePalindrome(13), 101);
assert.deepEqual(primePalindrome(9989900), 100030001);

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");