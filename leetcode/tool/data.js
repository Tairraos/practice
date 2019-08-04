let data = [{
    "questionId": "1128",
    "titleSlug": "number-of-equivalent-domino-pairs",
    "translatedTitle": "等价多米诺骨牌对的数量",
    "translatedContent": [
        "给你一个由一些多米诺骨牌组成的列表 dominoes。",
        "",
        "如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。",
        "",
        "形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。",
        "",
        "在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。",
        "",
        "示例：",
        "输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]",
        "输出：1",
        "",
        "提示：",
        "1 <= dominoes.length <= 40000",
        "1 <= dominoes[i][j] <= 9"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} dominoes\n * @return {number}\n */\nvar numEquivDominoPairs = function(dominoes) {\n    \n};",
        "py": "class Solution:\n    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:\n        "
    }
}, {
    "questionId": "1129",
    "titleSlug": "shortest-path-with-alternating-colors",
    "translatedTitle": "颜色交替的最短路径",
    "translatedContent": [
        "在一个有向图中，节点分别标记为 0, 1, ..., n-1。这个图中的每条边不是红色就是蓝色，且存在自环或平行边。",
        "",
        "red_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的红色有向边。类似地，blue_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的蓝色有向边。",
        "",
        "返回长度为 n 的数组 answer，其中 answer[X] 是从节点 0 到节点 X 的最短路径的长度，且路径上红色边和蓝色边交替出现。如果不存在这样的路径，那么 answer[x] = -1。",
        "",
        "示例 1：",
        "输入：n = 3, red_edges = [[0,1],[1,2]], blue_edges = []",
        "输出：[0,1,-1]",
        "",
        "示例 2：",
        "输入：n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]",
        "输出：[0,1,-1]",
        "",
        "示例 3：",
        "输入：n = 3, red_edges = [[1,0]], blue_edges = [[2,1]]",
        "输出：[0,-1,-1]",
        "",
        "示例 4：",
        "输入：n = 3, red_edges = [[0,1]], blue_edges = [[1,2]]",
        "输出：[0,1,2]",
        "",
        "示例 5：",
        "输入：n = 3, red_edges = [[0,1],[0,2]], blue_edges = [[1,0]]",
        "输出：[0,1,1]",
        "",
        "提示：",
        "1 <= n <= 100",
        "red_edges.length <= 400",
        "blue_edges.length <= 400",
        "red_edges[i].length == blue_edges[i].length == 2",
        "0 <= red_edges[i][j], blue_edges[i][j] < n"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @param {number[][]} red_edges\n * @param {number[][]} blue_edges\n * @return {number[]}\n */\nvar shortestAlternatingPaths = function(n, red_edges, blue_edges) {\n    \n};",
        "py": "class Solution:\n    def shortestAlternatingPaths(self, n: int, red_edges: List[List[int]], blue_edges: List[List[int]]) -> List[int]:\n        "
    }
}, {
    "questionId": "1130",
    "titleSlug": "minimum-cost-tree-from-leaf-values",
    "translatedTitle": "叶值的最小代价生成树",
    "translatedContent": [
        "给你一个正整数数组 arr，考虑所有满足以下条件的二叉树：",
        "",
        "每个节点都有 0 个或是 2 个子节点。",
        "数组 arr 中的值与树的中序遍历中每个叶节点的值一一对应。（知识回顾：如果一个节点有 0 个子节点，那么该节点为叶节点。）",
        "每个非叶节点的值等于其左子树和右子树中叶节点的最大值的乘积。",
        "",
        "在所有这样的二叉树中，返回每个非叶节点的值的最小可能总和。这个和的值是一个 32 位整数。",
        "",
        "示例：",
        "输入：arr = [6,2,4]",
        "输出：32",
        "解释：",
        "有两种可能的树，第一种的非叶节点的总和为 36，第二种非叶节点的总和为 32。",
        "",
        "    24            24",
        "   /  \\          /  \\",
        "  12   4        6    8",
        " /  \\               / \\",
        "6    2             2   4",
        "",
        "提示：",
        "2 <= arr.length <= 40",
        "1 <= arr[i] <= 15",
        "答案保证是一个 32 位带符号整数，即小于 2^31。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} arr\n * @return {number}\n */\nvar mctFromLeafValues = function(arr) {\n    \n};",
        "py": "class Solution:\n    def mctFromLeafValues(self, arr: List[int]) -> int:\n        "
    }
}, {
    "questionId": "1131",
    "titleSlug": "maximum-of-absolute-value-expression",
    "translatedTitle": "绝对值表达式的最大值",
    "translatedContent": [
        "给你两个长度相等的整数数组，返回下面表达式的最大值：",
        "",
        "|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|",
        "",
        "其中下标 i，j 满足 0 <= i, j < arr1.length。",
        "",
        "示例 1：",
        "输入：arr1 = [1,2,3,4], arr2 = [-1,4,5,6]",
        "输出：13",
        "",
        "示例 2：",
        "输入：arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]",
        "输出：20",
        "",
        "提示：",
        "2 <= arr1.length == arr2.length <= 40000",
        "-10^6 <= arr1[i], arr2[i] <= 10^6"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} arr1\n * @param {number[]} arr2\n * @return {number}\n */\nvar maxAbsValExpr = function(arr1, arr2) {\n    \n};",
        "py": "class Solution:\n    def maxAbsValExpr(self, arr1: List[int], arr2: List[int]) -> int:\n        "
    }
}, {
    "questionId": "1137",
    "titleSlug": "n-th-tribonacci-number",
    "translatedTitle": "第 N 个泰波那契数",
    "translatedContent": [
        "泰波那契序列 Tn 定义如下： ",
        "",
        "T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2",
        "",
        "给你整数 n，请返回第 n 个泰波那契数 Tn 的值。",
        "",
        "示例 1：",
        "输入：n = 4",
        "输出：4",
        "解释：",
        "T_3 = 0 + 1 + 1 = 2",
        "T_4 = 1 + 1 + 2 = 4",
        "",
        "示例 2：",
        "输入：n = 25",
        "输出：1389537",
        "",
        "提示：",
        "0 <= n <= 37",
        "答案保证是一个 32 位整数，即 answer <= 2^31 - 1。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @return {number}\n */\nvar tribonacci = function(n) {\n    \n};",
        "py": "class Solution:\n    def tribonacci(self, n: int) -> int:\n        "
    }
}, {
    "questionId": "1138",
    "titleSlug": "alphabet-board-path",
    "translatedTitle": "字母板上的路径",
    "translatedContent": [
        "我们从一块字母板上的位置 (0, 0) 出发，该坐标对应的字符为 board[0][0]。",
        "",
        "在本题里，字母板为board = [\"abcde\", \"fghij\", \"klmno\", \"pqrst\", \"uvwxy\", \"z\"].",
        "",
        "我们可以按下面的指令规则行动：",
        "",
        "如果方格存在，&#39;U&#39; 意味着将我们的位置上移一行；",
        "如果方格存在，&#39;D&#39; 意味着将我们的位置下移一行；",
        "如果方格存在，&#39;L&#39; 意味着将我们的位置左移一列；",
        "如果方格存在，&#39;R&#39; 意味着将我们的位置右移一列；",
        "&#39;!&#39; 会把在我们当前位置 (r, c) 的字符 board[r][c] 添加到答案中。",
        "",
        "返回指令序列，用最小的行动次数让答案和目标 target 相同。你可以返回任何达成目标的路径。",
        "",
        "示例 1：",
        "输入：target = \"leet\"",
        "输出：\"DDR!UURRR!!DDD!\"",
        "",
        "示例 2：",
        "输入：target = \"code\"",
        "输出：\"RR!DDRR!UUL!R!\"",
        "",
        "提示：",
        "1 <= target.length <= 100",
        "target 仅含有小写英文字母。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} target\n * @return {string}\n */\nvar alphabetBoardPath = function(target) {\n    \n};",
        "py": "class Solution:\n    def alphabetBoardPath(self, target: str) -> str:\n        "
    }
}, {
    "questionId": "1139",
    "titleSlug": "largest-1-bordered-square",
    "translatedTitle": "最大的以 1 为边界的正方形",
    "translatedContent": [
        "给你一个由若干 0 和 1 组成的二维网格 grid，请你找出边界全部由 1 组成的最大 正方形 子网格，并返回该子网格中的元素数量。如果不存在，则返回 0。",
        "",
        "示例 1：",
        "输入：grid = [[1,1,1],[1,0,1],[1,1,1]]",
        "输出：9",
        "",
        "示例 2：",
        "输入：grid = [[1,1,0,0]]",
        "输出：1",
        "",
        "提示：",
        "1 <= grid.length <= 100",
        "1 <= grid[0].length <= 100",
        "grid[i][j] 为 0 或 1"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} grid\n * @return {number}\n */\nvar largest1BorderedSquare = function(grid) {\n    \n};",
        "py": "class Solution:\n    def largest1BorderedSquare(self, grid: List[List[int]]) -> int:\n        "
    }
}, {
    "questionId": "1140",
    "titleSlug": "stone-game-ii",
    "translatedTitle": "石子游戏 II",
    "translatedContent": [
        "亚历克斯和李继续他们的石子游戏。许多堆石子 排成一行，每堆都有正整数颗石子 piles[i]。游戏以谁手中的石子最多来决出胜负。",
        "",
        "亚历克斯和李轮流进行，亚历克斯先开始。最初，M = 1。",
        "",
        "在每个玩家的回合中，该玩家可以拿走剩下的 前 X 堆的所有石子，其中 1 <= X <= 2M。然后，令 M = max(M, X)。",
        "",
        "游戏一直持续到所有石子都被拿走。",
        "",
        "假设亚历克斯和李都发挥出最佳水平，返回亚历克斯可以得到的最大数量的石头。",
        "",
        "示例：",
        "输入：piles = [2,7,9,4,4]",
        "输出：10",
        "解释：",
        "如果亚历克斯在开始时拿走一堆石子，李拿走两堆，接着亚历克斯也拿走两堆。在这种情况下，亚历克斯可以拿到 2 + 4 + 4 = 10 颗石子。 ",
        "如果亚历克斯在开始时拿走两堆石子，那么李就可以拿走剩下全部三堆石子。在这种情况下，亚历克斯可以拿到 2 + 7 = 9 颗石子。",
        "所以我们返回更大的 10。 ",
        "",
        "提示：",
        "1 <= piles.length <= 100",
        "1 <= piles[i] <= 10 ^ 4"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} piles\n * @return {number}\n */\nvar stoneGameII = function(piles) {\n    \n};",
        "py": "class Solution:\n    def stoneGameII(self, piles: List[int]) -> int:\n        "
    }
}];
module.exports = data;
