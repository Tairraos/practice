/**
 * https://leetcode-cn.com/problems/divide-two-integers/
 * 0029.两数相除
 * 难度：中等
 * 
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 
 * 示例 1：
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 
 * 示例 2：
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 
 * 说明：
 *   - 被除数和除数均为 32 位有符号整数。
 *   - 除数不为 0。
 *   - 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [-2^31,  2^31 - 1]。本题中，如果除法结果溢出，则返回 2^31 - 1。
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    //32位整符号整型运算超界特例
    if (dividend <= -2147483648 && divisor === -1) return 2147483647;
    var [isNag, dividend, divisor] = [dividend < 0 ^ divisor < 0, Math.abs(dividend), Math.abs(divisor)];

    let result = 0;
    while (dividend >= divisor) {
        let times = 1, temp = divisor;
        while ((dividend >> 1) >= temp) { //右移试商, 不够除2除2就是结果
            temp <<= 1;
            times <<= 1;
        }
        dividend -= temp;
        result += times;
    }
    return isNag ? -result : result;
};



