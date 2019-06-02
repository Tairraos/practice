/**
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * 0017.电话号码的字母组合
 * 难度：中等
 * 
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * +---------+---------+---------+
 * |    1    |    2    |    3    |
 * |   O_O   |   abc   |   def   |
 * +---------+---------+---------+
 * |    4    |    5    |    6    |
 * |   ghi   |   jkl   |   mno   |
 * +---------+---------+---------+
 * |    7    |    8    |    9    |
 * |   pqrs  |   tuv   |   wxyz  |
 * +---------+---------+---------+
 * |    *    |    0    |    #    |
 * |    +    |    _    |         |
 * +---------+---------+---------+
 * 
 * 示例：
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 说明：
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let dict = [
        0, 0,                 ["a", "b", "c"], ["d", "e", "f"],
        ["g", "h", "i"],      ["j", "k", "l"], ["m", "n", "o"],
        ["p", "q", "r", "s"], ["t", "u", "v"], ["w", "x", "y", "z"]
    ];
    return digits.length ? digits.split("").map(i => dict[i]).reduce((a, b) =>
        //遍历所有数组的组合
        a.map(x => b.map(y => x + y)).join(",").split(",")
    ) : [];
};



