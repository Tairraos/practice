/**
 * https://leetcode-cn.com/problems/encode-and-decode-tinyurl/
 * 0535.TinyURL 的加密与解密
 * 难度：中等
 * 
 * TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk.
 * 要求：设计一个 TinyURL 的加密 encode 和解密 decode 的方法。你的加密和解密算法如何设计和运作是没有限制的，你只需要保证一个URL可以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。
 */

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
    let db = global.db = global.db || {}, //用全局变量模拟数据库
        key = (Math.random() * (16 ** 6) | 0).toString(16); //产生随机hash
    db[key] = longUrl; //写库
    return key;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    let db = global.db = global.db || {};
    return db[shortUrl]; //读库
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

// 执行用时 : 112 ms, 在Encode and Decode TinyURL的JavaScript提交中击败了82.80% 的用户
// 内存消耗 : 34.7 MB, 在Encode and Decode TinyURL的JavaScript提交中击败了67.21% 的用户

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(decode(encode("test")), "test");
assert.deepEqual(decode(encode("111")), "111");
assert.deepEqual(decode(encode("222")), "222");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");