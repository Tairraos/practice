/*
 * https://leetcode-cn.com/problems/max-points-on-a-line
 * 0149.直线上最多的点数
 * 
 * 给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。
 * 
 * 示例 1:
 * 输入: [[1,1],[2,2],[3,3]]
 * 输出: 3
 * 解释:
 * ^
 * |
 * |        o
 * |     o
 * |  o  
 * +------------->
 * 0  1  2  3  4
 * 
 * 示例 2:
 * 输入: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * 输出: 4
 * 解释:
 * ^
 * |
 * |  o
 * |     o        o
 * |        o
 * |  o        o
 * +------------------->
 * 0  1  2  3  4  5  6
 */

/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function (points) {
    //计算op和x轴夹角的ctg值
    let calcCtg = (o, p) => {
        let dx = p.x - o.x, //邻边
            dy = p.y - o.y; //对边
        //3个例外：如果两点重合 => 0，如果两点连线：平行X轴 => "x"，平行Y轴 => "y"
        return dx === 0 ? dy === 0 ? 0 : "y" : dy === 0 ? "x" : dx / dy;
    }
    return points.length > 2 ? Math.max(...points.map((o, i) => points.slice(i + 1).map(
        p => calcCtg(o, p)
    )).map(x => Math.max(...x.map(
        item => ("!" + x.join("!!") + "!").match(RegExp("!0!|!" + item + "!", "g")).length
    )))) + 1 : points.length;
};