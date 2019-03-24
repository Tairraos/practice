/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * 0014.最长公共前缀
 * 难度：容易
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1：
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 示例 2：
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 说明：
 * 所有输入只包含小写字母 a-z 。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    //字串两两比较
    return strs.reduce((a, b) => {
        for (let i = 0; i < a.length; i++)
            //截字串从0开始到第一处不同的位置
            if (a[i] !== b[i]) return a.slice(0, i);
        //找不到不同就把整串返回
        return a;
    });
};
