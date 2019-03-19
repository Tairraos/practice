/*
 * https://leetcode-cn.com/problems/container-with-most-water
 * 0011.盛最多水的容器
 * 
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，
 * 垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器
 * 可以容纳最多的水。
 * 
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 
 * [示例图](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 示例:
 * 输入: [1,8,6,2,5,4,8,3,7]
 * 输出: 49
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (h) {
    //两柱间的面积 = 距离 * min(柱1高, 柱2高)
    //把每根柱子和右侧柱子可能组成的最大面积求出来，然后取最大值。
    return Math.max(...h.map((n, i) => Math.max(...h.slice(i + 1).map((m, j) => (j + 1) * Math.min(m, n)))));
};