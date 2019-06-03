/**
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
 * 0345.反转字符串中的元音字母
 * 难度：容易
 * 
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1：
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 示例 2：
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 
 * 说明：
 * 元音字母不包含字母"y"。
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = s.replace(/[^aeiou]/ig, "").split(""); //找到所有的元音，收在数组里
    return s.replace(/[aeiou]/ig, m => vowels.pop()); //再找一次，用数组倒过来

    //不怕麻烦的话，可以用扫描一遍字串，把元音存在vowels[]里，每个元音的位置存在indexs[]里
    //遍历index把元音换进去：indexs.forEach(i => s[i] = vowels.pop());
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(reverseVowels("hello"), "holle", "hello");
assert.deepEqual(reverseVowels("leetcode"), "leotcede", "leetcode");
assert.deepEqual(reverseVowels("a"), "a", "a");
assert.deepEqual(reverseVowels(""), "", "empty");
assert.deepEqual(reverseVowels("tst aeiou"), "tst uoiea", "tst aeiou");
assert.deepEqual(reverseVowels("aeiou tst"), "uoiea tst", "aeiou tst");
assert.deepEqual(reverseVowels("tst Aeiou"), "tst uoieA", "tst Aeiou");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");