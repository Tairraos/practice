/**
 * https://leetcode-cn.com/problems/max-points-on-a-line/
 * 0149.直线上最多的点数
 * 难度：困难
 * 
 * 给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。
 * 
 * 示例 1：
 * 输入: [[1,1],[2,2],[3,3]]
 * 输出: 3
 * 解释：
 * ^
 * |
 * |        o
 * |     o
 * |  o
 * +------------->
 * 0  1  2  3  4
 * 
 * 示例 2：
 * 输入: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * 输出: 4
 * 解释：
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
    //对的，就是很任性，用一行代码解题~
    return points.length > 2 ? Math.max(...points.map((o, i) => points.slice(i+1).map(
        p => {let dx=p.x-o.x, dy=p.y - o.y; return dx===0?dy===0?0:"y":dy===0?"x":dx/dy;}
    )).map(x => Math.max(...x.map(
        item => ("!"+x.join("!!")+"!").match(RegExp("!0!|!"+item+"!", "g")).length
    )))) + 1 :　points.length;
};

//带注释版本, 帮助理解单行解
var maxPoints_Comments = function (points) {
    //0，1，2个点的case，所有的点都在一条直线上。
    if (points.length <= 2) return points.length;
    //计算o,p连线和x轴夹角的ctg值
    let calcCtg = (o, p) => {
        let dx = p.x - o.x, //邻边
            dy = p.y - o.y; //对边
        //3个例外：如果两点重合 => 0，如果两点连线：平行X轴 => "x"，平行Y轴 => "y"
        return dx === 0 ? dy === 0 ? 0 : "y" : dy === 0 ? "x" : dx / dy;
    };
    //传入数组里存着每个点和参照点的ctg值, 把ctg值相同的和0值(重合的点)数出来有几个
    //把数值前后添上"!"用正则match来数匹配次数
    let filterPoint = item => ("!" + x.join("!!") + "!").match(RegExp("!0!|!" + item + "!", "g")).length

    return  Math.max(
        //每个点和之后的点连线计算ctg值存入数组
        ...points.map((o, i) => points.slice(i + 1).map(p => calcCtg(o, p)))
        //把上述数组里，ctg值重复次数和重合的点数出来
        .map(x => Math.max(...x.map(item => filterPoint(item))))
    ) + 1; //取出最大值后要加1，参考点自己也要算进去   
};