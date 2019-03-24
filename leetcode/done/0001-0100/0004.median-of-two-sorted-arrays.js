/**
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 * 0004.寻找两个有序数组的中位数
 * 难度：困难
 * 
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1：
 * nums1 = [1, 3]
 * nums2 = [2]
 * 则中位数是 2.0
 * 
 * 示例 2：
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 则中位数是 (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    //排序，从两头各取一个中间值，加起来除2
    let a = [...nums1, ...nums2].sort((a, b) => a - b);
    //奇数长度两次都会取到中间值，偶数长度会取到中间两个值
    return (a[a.length / 2 | 0] + a[a.length - (a.length / 2 | 0) - 1]) / 2;
};