let data = [{
    "questionId": "LCP 13",
    "titleSlug": "xun-bao",
    "translatedTitle": "寻宝",
    "translatedContent": ["我们得到了一副藏宝图，藏宝图显示，在一个迷宫中存在着未被世人发现的宝藏。",
        "",
        "迷宫是一个二维矩阵，用一个字符串数组表示。它标识了唯一的入口（用 &#39;S&#39; 表示），和唯一的宝藏地点（用 &#39;T&#39; 表示）。但是，宝藏被一些隐蔽的机关保护了起来。在地图上有若干个机关点（用 &#39;M&#39; 表示），只有所有机关均被触发，才可以拿到宝藏。",
        "", "要保持机关的触发，需要把一个重石放在上面。迷宫中有若干个石堆（用 &#39;O&#39; 表示），每个石堆都有无限个足够触发机关的重石。但是由于石头太重，我们一次只能搬一个石头到指定地点。",
        "", "迷宫中同样有一些墙壁（用 &#39;#&#39; 表示），我们不能走入墙壁。剩余的都是可随意通行的点（用 &#39;.&#39; 表示）。石堆、机关、起点和终点（无论是否能拿到宝藏）也是可以通行的。",
        "", "我们每步可以选择向上/向下/向左/向右移动一格，并且不能移出迷宫。搬起石头和放下石头不算步数。那么，从起点开始，我们最少需要多少步才能最后拿到宝藏呢？如果无法拿到宝藏，返回 -1 。",
        "", "示例 1：",
        "输入： [\"S#O\", \"M..\", \"M.T\"]",
        "", "输出：16",
        "",
        "解释：最优路线为： S->O, cost = 4, 去搬石头 O->第二行的M, cost = 3, M机关触发 第二行的M->O, cost = 3, 我们需要继续回去 O 搬石头。 O->第三行的M, cost = 4, 此时所有机关均触发 第三行的M->T, cost = 2，去T点拿宝藏。 总步数为16。 ",
        "", "示例 2：",
        "输入： [\"S#O\", \"M.#\", \"M.T\"]",
        "", "输出：-1",
        "", "解释：我们无法搬到石头触发机关",
        "", "示例 3：",
        "输入： [\"S#O\", \"M.T\", \"M..\"]",
        "", "输出：17",
        "", "解释：注意终点也是可以通行的。",
        "", "限制：",
        "", "1 <= maze.length <= 100",
        "1 <= maze[i].length <= 100",
        "maze[i].length == maze[j].length",
        "S 和 T 有且只有一个",
        "0 <= M的数量 <= 16",
        "0 <= O的数量 <= 40，题目保证当迷宫中存在 M 时，一定存在至少一个 O 。"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} maze\n * @return {number}\n */\nvar minimalSteps = function(maze) {\n\n};",
        "py": "class Solution:\n    def minimalSteps(self, maze: List[str]) -> int:"
    }
}, {
    "questionId": "LCP 09",
    "titleSlug": "zui-xiao-tiao-yue-ci-shu",
    "translatedTitle": "最小跳跃次数",
    "translatedContent": [
        "为了给刷题的同学一些奖励，力扣团队引入了一个弹簧游戏机。游戏机由 N 个特殊弹簧排成一排，编号为 0 到 N-1。初始有一个小球在编号 0 的弹簧处。若小球在编号为 i 的弹簧处，通过按动弹簧，可以选择把小球向右弹射 jump[i] 的距离，或者向左弹射到任意左侧弹簧的位置。也就是说，在编号为 i 弹簧处按动弹簧，小球可以弹向 0 到 i-1 中任意弹簧或者 i+jump[i] 的弹簧（若 i+jump[i]>=N ，则表示小球弹出了机器）。小球位于编号 0 处的弹簧时不能再向左弹。",
        "", "为了获得奖励，你需要将小球弹出机器。请求出最少需要按动多少次弹簧，可以将小球从编号 0 弹簧弹出整个机器，即向右越过编号 N-1 的弹簧。",
        "", "示例 1：",
        "输入：jump = [2, 5, 1, 1, 1, 1]",
        "", "输出：3",
        "", "解释：小 Z 最少需要按动 3 次弹簧，小球依次到达的顺序为 0 -> 2 -> 1 -> 6，最终小球弹出了机器。",
        "", "限制：",
        "", "1 <= jump.length <= 10^6",
        "1 <= jump[i] <= 10000"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} jump\n * @return {number}\n */\nvar minJump = function(jump) {\n\n};",
        "py": "class Solution:\n    def minJump(self, jump: List[int]) -> int:"
    }
}, {
    "questionId": "LCP 15",
    "titleSlug": "you-le-yuan-de-mi-gong",
    "translatedTitle": "游乐园的迷宫",
    "translatedContent": [
        "小王来到了游乐园，她玩的第一个项目是模拟推销员。有一个二维平面地图，其中散布着 N 个推销点，编号 0 到 N-1，不存在三点共线的情况。每两点之间有一条直线相连。游戏没有规定起点和终点，但限定了每次转角的方向。首先，小王需要先选择两个点分别作为起点和终点，然后从起点开始访问剩余 N-2 个点恰好一次并回到终点。访问的顺序需要满足一串给定的长度为 N-2 由 L 和 R 组成的字符串 direction，表示从起点出发之后在每个顶点上转角的方向。根据这个提示，小王希望你能够帮她找到一个可行的遍历顺序，输出顺序下标（若有多个方案，输出任意一种）。可以证明这样的遍历顺序一定是存在的。",
        "", "（上图：A->B->C 右转； 下图：D->E->F 左转）",
        "", "示例 1：",
        "输入：points = [[1,1],[1,4],[3,2],[2,1]], direction = \"LL\"",
        "", "输入：[0,2,1,3]",
        "", "解释：[0,2,1,3] 是符合\"LL\"的方案之一。在 [0,2,1,3] 方案中，0->2->1 是左转方向， 2->1->3 也是左转方向 ",
        "", "示例 2：",
        "输入：points = [[1,3],[2,4],[3,3],[2,1]], direction = \"LR\"",
        "", "输入：[0,3,1,2]",
        "", "解释：[0,3,1,2] 是符合\"LR\"的方案之一。在 [0,3,1,2] 方案中，0->3->1 是左转方向， 3->1->2 是右转方向",
        "", "限制：",
        "", "3 <= points.length <= 1000 且 points[i].length == 2",
        "1 <= points[i][0],points[i][1] <= 10000",
        "direction.length == points.length - 2",
        "direction 只包含 \"L\",\"R\""
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} points\n * @param {string} direction\n * @return {number[]}\n */\nvar visitOrder = function(points, direction) {\n\n};",
        "py": "class Solution:\n    def visitOrder(self, points: List[List[int]], direction: str) -> List[int]:"
    }
}, {
    "questionId": "LCP 12",
    "titleSlug": "xiao-zhang-shua-ti-ji-hua",
    "translatedTitle": "小张刷题计划",
    "translatedContent": ["为了提高自己的代码能力，小张制定了 LeetCode 刷题计划，他选中了 LeetCode 题库中的 n 道题，编号从 0 到 n-1，并计划在 m 天内按照题目编号顺序刷完所有的题目（注意，小张不能用多天完成同一题）。",
        "",
        "在小张刷题计划中，小张需要用 time[i] 的时间完成编号 i 的题目。此外，小张还可以使用场外求助功能，通过询问他的好朋友小杨题目的解法，可以省去该题的做题时间。为了防止&ldquo;小张刷题计划&rdquo;变成&ldquo;小杨刷题计划&rdquo;，小张每天最多使用一次求助。",
        "", "我们定义 m 天中做题时间最多的一天耗时为 T（小杨完成的题目不计入做题总时间）。请你帮小张求出最小的 T是多少。",
        "", "示例 1：",
        "输入：time = [1,2,3,3], m = 2",
        "", "输出：3",
        "", "解释：第一天小张完成前三题，其中第三题找小杨帮忙；第二天完成第四题，并且找小杨帮忙。这样做题时间最多的一天花费了 3 的时间，并且这个值是最小的。",
        "", "示例 2：",
        "输入：time = [999,999,999], m = 4",
        "", "输出：0",
        "", "解释：在前三天中，小张每天求助小杨一次，这样他可以在三天内完成所有的题目并不花任何时间。",
        "", "限制：",
        "", "1 <= time.length <= 10^5",
        "1 <= time[i] <= 10000",
        "1 <= m <= 1000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} time\n * @param {number} m\n * @return {number}\n */\nvar minTime = function(time, m) {\n\n};",
        "py": "class Solution:\n    def minTime(self, time: List[int], m: int) -> int:"
    }
}, {
    "questionId": "LCP 11",
    "titleSlug": "qi-wang-ge-shu-tong-ji",
    "translatedTitle": "期望个数统计",
    "translatedContent": ["某互联网公司一年一度的春招开始了，一共有 n 名面试者入选。每名面试者都会提交一份简历，公司会根据提供的简历资料产生一个预估的能力值，数值越大代表越有可能通过面试。",
        "",
        "小 A 和小 B 负责审核面试者，他们均有所有面试者的简历，并且将各自根据面试者能力值从大到小的顺序浏览。由于简历事先被打乱过，能力值相同的简历的出现顺序是从它们的全排列中等可能地取一个。现在给定 n 名面试者的能力值 scores，设 X 代表小 A 和小 B 的浏览顺序中出现在同一位置的简历数，求 X 的期望。",
        "", "提示：离散的非负随机变量的期望计算公式为 。在本题中，由于 X 的取值为 0 到 n 之间，期望计算公式可以是 。",
        "示例 1：",
        "", "输入：scores = [1,2,3]",
        "", "输出：3",
        "", "解释：由于面试者能力值互不相同，小 A 和小 B 的浏览顺序一定是相同的。X的期望是 3 。",
        "", "示例 2：",
        "输入：scores = [1,1]",
        "", "输出：1",
        "",
        "解释：设两位面试者的编号为 0, 1。由于他们的能力值都是 1，小 A 和小 B 的浏览顺序都为从全排列 [[0,1],[1,0]] 中等可能地取一个。如果小 A 和小 B 的浏览顺序都是 [0,1] 或者 [1,0] ，那么出现在同一位置的简历数为 2 ，否则是 0 。所以 X 的期望是 (2+0+2+0) * 1/4 = 1",
        "", "示例 3：",
        "输入：scores = [1,1,2]",
        "", "输出：2",
        "", "限制：",
        "", "1 <= scores.length <= 10^5",
        "0 <= scores[i] <= 10^6"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} scores\n * @return {number}\n */\nvar expectNumber = function(scores) {\n\n};",
        "py": "class Solution:\n    def expectNumber(self, scores: List[int]) -> int:"
    }
}, {
    "questionId": "LCP 16",
    "titleSlug": "you-le-yuan-de-you-lan-ji-hua",
    "translatedTitle": "游乐园的游览计划",
    "translatedContent": [
        "又到了一年一度的春游时间，小吴计划去游乐场游玩 1 天，游乐场总共有 N 个游乐项目，编号从 0 到 N-1。小吴给每个游乐项目定义了一个非负整数值 value[i] 表示自己的喜爱值。两个游乐项目之间会有双向路径相连，整个游乐场总共有 M 条双向路径，保存在二维数组 edges中。 小吴计划选择一个游乐项目 A 作为这一天游玩的重点项目。上午小吴准备游玩重点项目 A 以及与项目 A 相邻的两个项目 B、C （项目A、B与C要求是不同的项目，且项目B与项目C要求相邻），并返回 A ，即存在一条 A-B-C-A 的路径。 下午，小吴决定再游玩重点项目 A以及与A相邻的两个项目 B&#39;、C&#39;，（项目A、B&#39;与C&#39;要求是不同的项目，且项目B&#39;与项目C&#39;要求相邻），并返回 A ，即存在一条 A-B&#39;-C&#39;-A 的路径。下午游玩项目 B&#39;、C&#39; 可与上午游玩项目B、C存在重复项目。 小吴希望提前安排好游玩路径，使得喜爱值之和最大。请你返回满足游玩路径选取条件的最大喜爱值之和，如果没有这样的路径，返回 0。 注意：一天中重复游玩同一个项目并不能重复增加喜爱值了。例如：上下午游玩路径分别是 A-B-C-A与A-C-D-A 那么只能获得 value[A] + value[B] + value[C] + value[D] 的总和。",
        "", "示例 1：",
        "输入：edges = [[0,1],[1,2],[0,2]], value = [1,2,3]",
        "", "输出：6",
        "", "解释：喜爱值之和最高的方案之一是 0->1->2->0 与 0->2->1->0 。重复游玩同一点不重复计入喜爱值，返回1+2+3=6",
        "", "示例 2：",
        "输入：edges = [[0,2],[2,1]], value = [1,2,5]",
        "", "输出：0",
        "", "解释：无满足要求的游玩路径，返回 0",
        "", "示例 3：",
        "输入：edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[1,3],[2,4],[2,5],[3,4],[3,5],[4,5]], value = [7,8,6,8,9,7]",
        "", "输出：39",
        "", "解释：喜爱值之和最高的方案之一是 3->0->1->3 与 3->4->5->3 。喜爱值最高为 7+8+8+9+7=39",
        "", "限制：",
        "", "3 <= value.length <= 10000",
        "1 <= edges.length <= 10000",
        "0 <= edges[i][0],edges[i][1] < value.length",
        "0 <= value[i] <= 10000",
        "edges中没有重复的边",
        "edges[i][0] != edges[i][1]"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} edges\n * @param {number[]} value\n * @return {number}\n */\nvar maxWeight = function(edges, value) {\n\n};",
        "py": "class Solution:\n    def maxWeight(self, edges: List[List[int]], value: List[int]) -> int:"
    }
}, {
    "questionId": "LCP 07",
    "titleSlug": "chuan-di-xin-xi",
    "translatedTitle": "传递信息",
    "translatedContent": ["小朋友 A 在和 ta 的小伙伴们玩传信息游戏，游戏规则如下：",
        "", "有 n 名玩家，所有玩家编号分别为 0 ～ n-1，其中小朋友 A 的编号为 0",
        "每个玩家都有固定的若干个可传信息的其他玩家（也可能没有）。传信息的关系是单向的（比如 A 可以向 B 传信息，但 B 不能向 A 传信息）。",
        "每轮信息必须需要传递给另一个人，且信息可重复经过同一个人",
        "", "给定总玩家数 n，以及按 [玩家编号,对应可传递玩家编号] 关系组成的二维数组 relation。返回信息从小 A (编号 0 ) 经过 k 轮传递到编号为 n-1 的小伙伴处的方案数；若不能到达，返回 0。",
        "", "示例 1：",
        "输入：n = 5, relation = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], k = 3",
        "", "输出：3",
        "", "解释：信息从小 A 编号 0 处开始，经 3 轮传递，到达编号 4。共有 3 种方案，分别是 0->2->0->4， 0->2->1->4， 0->2->3->4。",
        "", "示例 2：",
        "输入：n = 3, relation = [[0,2],[2,1]], k = 2",
        "", "输出：0",
        "", "解释：信息不能从小 A 处经过 2 轮传递到编号 2",
        "", "限制：",
        "", "2 <= n <= 10",
        "1 <= k <= 5",
        "1 <= relation.length <= 90, 且 relation[i].length == 2",
        "0 <= relation[i][0],relation[i][1] < n 且 relation[i][0] != relation[i][1]"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @param {number[][]} relation\n * @param {number} k\n * @return {number}\n */\nvar numWays = function(n, relation, k) {\n\n};",
        "py": "class Solution:\n    def numWays(self, n: int, relation: List[List[int]], k: int) -> int:"
    }
}, {
    "questionId": "LCP 10",
    "titleSlug": "er-cha-shu-ren-wu-diao-du",
    "translatedTitle": "二叉树任务调度",
    "translatedContent": ["任务调度优化是计算机性能优化的关键任务之一。在任务众多时，不同的调度策略可能会得到不同的总体执行时间，因此寻求一个最优的调度方案是非常有必要的。",
        "",
        "通常任务之间是存在依赖关系的，即对于某个任务，你需要先完成他的前导任务（如果非空），才能开始执行该任务。我们保证任务的依赖关系是一棵二叉树，其中 root 为根任务，root.left 和 root.right 为他的两个前导任务（可能为空），root.val 为其自身的执行时间。",
        "", "在一个 CPU 核执行某个任务时，我们可以在任何时刻暂停当前任务的执行，并保留当前执行进度。在下次继续执行该任务时，会从之前停留的进度开始继续执行。暂停的时间可以不是整数。",
        "", "现在，系统有两个 CPU 核，即我们可以同时执行两个任务，但是同一个任务不能同时在两个核上执行。给定这颗任务树，请求出所有任务执行完毕的最小时间。",
        "", "示例 1：",
        "输入：root = [47, 74, 31]",
        "", "输出：121",
        "", "解释：根节点的左右节点可以并行执行31分钟，剩下的43+47分钟只能串行执行，因此总体执行时间是121分钟。",
        "", "示例 2：",
        "输入：root = [15, 21, null, 24, null, 27, 26]",
        "", "输出：87",
        "", "示例 3：",
        "输入：root = [1,3,2,null,null,4,4]",
        "", "输出：7.5",
        "", "限制：",
        "", "1 <= 节点数量 <= 1000",
        "1 <= 单节点执行时间 <= 1000"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar minimalExecTime = function(root) {\n\n};",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def minimalExecTime(self, root: TreeNode) -> float:"
    }
}, {
    "questionId": "LCP 14",
    "titleSlug": "qie-fen-shu-zu",
    "translatedTitle": "切分数组",
    "translatedContent": ["给定一个整数数组 nums ，小李想将 nums 切割成若干个非空子数组，使得每个子数组最左边的数和最右边的数的最大公约数大于 1 。为了减少他的工作量，请求出最少可以切成多少个子数组。",
        "", "示例 1：",
        "输入：nums = [2,3,3,2,3,3]",
        "", "输出：2",
        "", "解释：最优切割为 [2,3,3,2] 和 [3,3] 。第一个子数组头尾数字的最大公约数为 2 ，第二个子数组头尾数字的最大公约数为 3 。",
        "", "示例 2：",
        "输入：nums = [2,3,5,7]",
        "", "输出：4",
        "", "解释：只有一种可行的切割：[2], [3], [5], [7]",
        "", "限制：",
        "", "1 <= nums.length <= 10^5",
        "2 <= nums[i] <= 10^6"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar splitArray = function(nums) {\n\n};",
        "py": "class Solution:\n    def splitArray(self, nums: List[int]) -> int:"
    }
}, {
    "questionId": "LCP 08",
    "titleSlug": "ju-qing-hong-fa-shi-jian",
    "translatedTitle": "剧情触发时间",
    "translatedContent": ["在战略游戏中，玩家往往需要发展自己的势力来触发各种新的剧情。一个势力的主要属性有三种，分别是文明等级（C），资源储备（R）以及人口数量（H）。在游戏开始时（第 0 天），三种属性的值均为 0。",
        "",
        "随着游戏进程的进行，每一天玩家的三种属性都会对应增加，我们用一个二维数组 increase 来表示每天的增加情况。这个二维数组的每个元素是一个长度为 3 的一维数组，例如 [[1,2,1],[3,4,2]] 表示第一天三种属性分别增加 1,2,1 而第二天分别增加 3,4,2。",
        "",
        "所有剧情的触发条件也用一个二维数组 requirements 表示。这个二维数组的每个元素是一个长度为 3 的一维数组，对于某个剧情的触发条件 c[i], r[i], h[i]，如果当前 C >= c[i] 且 R >= r[i] 且 H >= h[i] ，则剧情会被触发。",
        "", "根据所给信息，请计算每个剧情的触发时间，并以一个数组返回。如果某个剧情不会被触发，则该剧情对应的触发时间为 -1 。",
        "", "示例 1：",
        "输入： increase = [[2,8,4],[2,5,0],[10,9,8]] requirements = [[2,11,3],[15,10,7],[9,17,12],[8,1,14]]",
        "", "输出: [2,-1,3,-1]",
        "", "解释：",
        "", "初始时，C = 0，R = 0，H = 0",
        "", "第 1 天，C = 2，R = 8，H = 4",
        "", "第 2 天，C = 4，R = 13，H = 4，此时触发剧情 0",
        "", "第 3 天，C = 14，R = 22，H = 12，此时触发剧情 2",
        "", "剧情 1 和 3 无法触发。",
        "", "示例 2：",
        "输入： increase = [[0,4,5],[4,8,8],[8,6,1],[10,10,0]] requirements = [[12,11,16],[20,2,6],[9,2,6],[10,18,3],[8,14,9]]",
        "", "输出: [-1,4,3,3,3]",
        "", "示例 3：",
        "输入： increase = [[1,1,1]] requirements = [[0,0,0]]",
        "", "输出: [0]",
        "", "限制：",
        "", "1 <= increase.length <= 10000",
        "1 <= requirements.length <= 100000",
        "0 <= increase[i] <= 10",
        "0 <= requirements[i] <= 100000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} increase\n * @param {number[][]} requirements\n * @return {number[]}\n */\nvar getTriggerTime = function(increase, requirements) {\n\n};",
        "py": "class Solution:\n    def getTriggerTime(self, increase: List[List[int]], requirements: List[List[int]]) -> List[int]:"
    }
}, {
    "questionId": "LCP 06",
    "titleSlug": "na-ying-bi",
    "translatedTitle": "拿硬币",
    "translatedContent": ["桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。",
        "", "示例 1：",
        "输入：[4,2,1]",
        "", "输出：4",
        "", "解释：第一堆力扣币最少需要拿 2 次，第二堆最少需要拿 1 次，第三堆最少需要拿 1 次，总共 4 次即可拿完。",
        "", "示例 2：",
        "输入：[2,3,10]",
        "", "输出：8",
        "", "限制：",
        "", "1 <= n <= 4",
        "1 <= coins[i] <= 10"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} coins\n * @return {number}\n */\nvar minCount = function(coins) {\n\n};",
        "py": "class Solution:\n    def minCount(self, coins: List[int]) -> int:"
    }
}, {
    "questionId": "面试题 17.26",
    "titleSlug": "sparse-similarity-lcci",
    "translatedTitle": "稀疏相似度",
    "translatedContent": [
        "两个(具有不同单词的)文档的交集(intersection)中元素的个数除以并集(union)中元素的个数，就是这两个文档的相似度。例如，{1, 5, 3} 和 {1, 7, 2, 3} 的相似度是 0.4，其中，交集的元素有 2 个，并集的元素有 5 个。给定一系列的长篇文档，每个文档元素各不相同，并与一个 ID 相关联。它们的相似度非常&ldquo;稀疏&rdquo;，也就是说任选 2 个文档，相似度都很接近 0。请设计一个算法返回每对文档的 ID 及其相似度。只需输出相似度大于 0 的组合。请忽略空文档。为简单起见，可以假定每个文档由一个含有不同整数的数组表示。",
        "",
        "输入为一个二维数组 docs，docs[i] 表示 id 为 i 的文档。返回一个数组，其中每个元素是一个字符串，代表每对相似度大于 0 的文档，其格式为 {id1},{id2}: {similarity}，其中 id1 为两个文档中较小的 id，similarity 为相似度，精确到小数点后 4 位。以任意顺序返回数组均可。",
        "", "示例:",
        "输入: ",
        "[",
        "  [14, 15, 100, 9, 3],",
        "  [32, 1, 9, 3, 5],",
        "  [15, 29, 2, 6, 8, 7],",
        "  [7, 10]",
        "]",
        "输出:",
        "[",
        "  \"0,1: 0.2500\",",
        "  \"0,2: 0.1000\",",
        "  \"2,3: 0.1429\"",
        "]",
        "", "提示：",
        "docs.length <= 500",
        "docs[i].length <= 500",
        "相似度大于 0 的文档对数不会超过 1000"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} docs\n * @return {string[]}\n */\nvar computeSimilarities = function(docs) {\n\n};",
        "py": "class Solution:\n    def computeSimilarities(self, docs: List[List[int]]) -> List[str]:"
    }
}, {
    "questionId": "面试题 16.22",
    "titleSlug": "langtons-ant-lcci",
    "translatedTitle": "兰顿蚂蚁",
    "translatedContent": ["一只蚂蚁坐在由白色和黑色方格构成的无限网格上。开始时，网格全白，蚂蚁面向右侧。每行走一步，蚂蚁执行以下操作。",
        "", "(1) 如果在白色方格上，则翻转方格的颜色，向右(顺时针)转 90 度，并向前移动一个单位。",
        "(2) 如果在黑色方格上，则翻转方格的颜色，向左(逆时针方向)转 90 度，并向前移动一个单位。",
        "", "编写程序来模拟蚂蚁执行的前 K 个动作，并返回最终的网格。",
        "",
        "网格由数组表示，每个元素是一个字符串，代表网格中的一行，黑色方格由 &#39;X&#39; 表示，白色方格由 &#39;_&#39; 表示，蚂蚁所在的位置由 &#39;L&#39;, &#39;U&#39;, &#39;R&#39;, &#39;D&#39; 表示，分别表示蚂蚁 左、上、右、下 的朝向。只需要返回能够包含蚂蚁走过的所有方格的最小矩形。",
        "", "示例 1:",
        "输入: 0",
        "输出: [\"R\"]",
        "", "示例 2:",
        "输入: 2",
        "输出:",
        "[",
        "  \"_X\",",
        "  \"LX\"",
        "]",
        "", "示例 3:",
        "输入: 5",
        "输出:",
        "[",
        "  \"_U\",",
        "  \"X_\",",
        "  \"XX\"",
        "]",
        "", "说明：",
        "", "K <= 100000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} K\n * @return {string[]}\n */\nvar printKMoves = function(K) {\n\n};",
        "py": "class Solution:\n    def printKMoves(self, K: int) -> List[str]:"
    }
}, {
    "questionId": "面试题 17.25",
    "titleSlug": "word-rectangle-lcci",
    "translatedTitle": "单词矩阵",
    "translatedContent": ["给定一份单词的清单，设计一个算法，创建由字母组成的面积最大的矩形，其中每一行组成一个单词(自左向右)，每一列也组成一个单词(自上而下)。不要求这些单词在清单里连续出现，但要求所有行等长，所有列等高。",
        "", "如果有多个面积最大的矩形，输出任意一个均可。一个单词可以重复使用。",
        "", "示例 1:",
        "输入: [\"this\", \"real\", \"hard\", \"trh\", \"hea\", \"iar\", \"sld\"]",
        "输出:",
        "[",
        "   \"this\",",
        "   \"real\",",
        "   \"hard\"",
        "]",
        "", "示例 2:",
        "输入: [\"aa\"]",
        "输出: [\"aa\",\"aa\"]",
        "", "说明：",
        "", "words.length <= 1000",
        "words[i].length <= 100",
        "数据保证单词足够随机"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} words\n * @return {string[]}\n */\nvar maxRectangle = function(words) {\n\n};",
        "py": "class Solution:\n    def maxRectangle(self, words: List[str]) -> List[str]:"
    }
}, {
    "questionId": "面试题 16.21",
    "titleSlug": "sum-swap-lcci",
    "translatedTitle": "交换和",
    "translatedContent": ["给定两个整数数组，请交换一对数值（每个数组中取一个数值），使得两个数组所有元素的和相等。",
        "", "返回一个数组，第一个元素是第一个数组中要交换的元素，第二个元素是第二个数组中要交换的元素。若有多个答案，返回任意一个均可。若无满足条件的数值，返回空数组。",
        "", "示例:",
        "输入: array1 = [4, 1, 2, 1, 1, 2], array2 = [3, 6, 3, 3]",
        "输出: [1, 3]",
        "", "示例:",
        "输入: array1 = [1, 2, 3], array2 = [4, 5, 6]",
        "输出: []",
        "", "提示：",
        "1 <= array1.length, array2.length <= 100000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} array1\n * @param {number[]} array2\n * @return {number[]}\n */\nvar findSwapValues = function(array1, array2) {\n\n};",
        "py": "class Solution:\n    def findSwapValues(self, array1: List[int], array2: List[int]) -> List[int]:"
    }
}, {
    "questionId": "面试题 16.20",
    "titleSlug": "t9-lcci",
    "translatedTitle": "T9键盘",
    "translatedContent": ["在老式手机上，用户通过数字键盘输入，手机将提供与这些数字相匹配的单词列表。每个数字映射到0至4个字母。给定一个数字序列，实现一个算法来返回匹配单词的列表。你会得到一张含有有效单词的列表。映射如下图所示：",
        "", "示例 1:",
        "输入: num = \"8733\", words = [\"tree\", \"used\"]",
        "输出: [\"tree\", \"used\"]",
        "", "示例 2:",
        "输入: num = \"2\", words = [\"a\", \"b\", \"c\", \"d\"]",
        "输出: [\"a\", \"b\", \"c\"]",
        "", "提示：",
        "num.length <= 1000",
        "words.length <= 500",
        "words[i].length == num.length",
        "num中不会出现 0, 1 这两个数字"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} num\n * @param {string[]} words\n * @return {string[]}\n */\nvar getValidT9Words = function(num, words) {\n\n};",
        "py": "class Solution:\n    def getValidT9Words(self, num: str, words: List[str]) -> List[str]:"
    }
}, {
    "questionId": "面试题 17.24",
    "titleSlug": "max-submatrix-lcci",
    "translatedTitle": "最大子矩阵",
    "translatedContent": ["给定一个正整数和负整数组成的 N &times; M 矩阵，编写代码找出元素总和最大的子矩阵。",
        "", "返回一个数组 [r1, c1, r2, c2]，其中 r1, c1 分别代表子矩阵左上角的行号和列号，r2, c2 分别代表右下角的行号和列号。若有多个满足条件的子矩阵，返回任意一个均可。",
        "", "注意：本题相对书上原题稍作改动",
        "", "示例:",
        "输入:",
        "[",
        "   [-1,0],",
        "   [0,-1]",
        "]",
        "输出: [0,1,0,1]",
        "解释: 输入中标粗的元素即为输出所表示的矩阵",
        "", "说明：",
        "", "1 <= matrix.length, matrix[0].length <= 200"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} matrix\n * @return {number[]}\n */\nvar getMaxMatrix = function(matrix) {\n\n};",
        "py": "class Solution:\n    def getMaxMatrix(self, matrix: List[List[int]]) -> List[int]:"
    }
}, {
    "questionId": "面试题 17.23",
    "titleSlug": "max-black-square-lcci",
    "translatedTitle": "最大黑方阵",
    "translatedContent": ["给定一个方阵，其中每个单元(像素)非黑即白。设计一个算法，找出 4 条边皆为黑色像素的最大子方阵。",
        "", "返回一个数组 [r, c, size] ，其中 r, c 分别代表子方阵左上角的行号和列号，size 是子方阵的边长。若有多个满足条件的子方阵，返回 r 最小的，若 r 相同，返回 c 最小的子方阵。若无满足条件的子方阵，返回空数组。",
        "", "示例 1:",
        "输入:",
        "[",
        "   [1,0,1],",
        "   [0,0,1],",
        "   [0,0,1]",
        "]",
        "输出: [1,0,2]",
        "解释: 输入中 0 代表黑色，1 代表白色，标粗的元素即为满足条件的最大子方阵",
        "", "示例 2:",
        "输入:",
        "[",
        "   [0,1,1],",
        "   [1,0,1],",
        "   [1,1,0]",
        "]",
        "输出: [0,0,1]",
        "", "提示：",
        "matrix.length == matrix[0].length <= 200"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} matrix\n * @return {number[]}\n */\nvar findSquare = function(matrix) {\n\n};",
        "py": "class Solution:\n    def findSquare(self, matrix: List[List[int]]) -> List[int]:"
    }
}, {
    "questionId": "面试题 17.19",
    "titleSlug": "missing-two-lcci",
    "translatedTitle": "消失的两个数字",
    "translatedContent": ["给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？",
        "", "以任意顺序返回这两个数字均可。",
        "", "示例 1:",
        "输入: [1]",
        "输出: [2,3]",
        "", "示例 2:",
        "输入: [2,3]",
        "输出: [1,4]",
        "", "提示：",
        "nums.length <= 30000"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar missingTwo = function(nums) {\n\n};",
        "py": "class Solution:\n    def missingTwo(self, nums: List[int]) -> List[int]:"
    }
}, {
    "questionId": "面试题 17.18",
    "titleSlug": "shortest-supersequence-lcci",
    "translatedTitle": "最短超串",
    "translatedContent": ["假设你有两个数组，一个长一个短，短的元素均不相同。找到长数组中包含短数组所有的元素的最短子数组，其出现顺序无关紧要。",
        "", "返回最短子数组的左端点和右端点，如有多个满足条件的子数组，返回左端点最小的一个。若不存在，返回空数组。",
        "", "示例 1:",
        "输入:",
        "big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7]",
        "small = [1,5,9]",
        "输出: [7,10]",
        "", "示例 2:",
        "输入:",
        "big = [1,2,3]",
        "small = [4]",
        "输出: []",
        "", "提示：",
        "big.length <= 100000",
        "1 <= small.length <= 100000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} big\n * @param {number[]} small\n * @return {number[]}\n */\nvar shortestSeq = function(big, small) {\n\n};",
        "py": "class Solution:\n    def shortestSeq(self, big: List[int], small: List[int]) -> List[int]:"
    }
}, {
    "questionId": "面试题 16.24",
    "titleSlug": "pairs-with-sum-lcci",
    "translatedTitle": "数对和",
    "translatedContent": ["设计一个算法，找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。",
        "", "示例 1:",
        "输入: nums = [5,6,5], target = 11",
        "输出: [[5,6]]",
        "", "示例 2:",
        "输入: nums = [5,6,5,6], target = 11",
        "输出: [[5,6],[5,6]]",
        "", "提示：",
        "nums.length <= 100000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[][]}\n */\nvar pairSums = function(nums, target) {\n\n};",
        "py": "class Solution:\n    def pairSums(self, nums: List[int], target: int) -> List[List[int]]:"
    }
}, {
    "questionId": "面试题 10.10",
    "titleSlug": "rank-from-stream-lcci",
    "translatedTitle": "数字流的秩",
    "translatedContent": ["假设你正在读取一串整数。每隔一段时间，你希望能找出数字 x 的秩(小于或等于 x 的值的个数)。请实现数据结构和算法来支持这些操作，也就是说：",
        "", "实现 track(int x) 方法，每读入一个数字都会调用该方法；",
        "", "实现 getRankOfNumber(int x) 方法，返回小于或等于 x 的值的个数。",
        "", "注意：本题相对原题稍作改动",
        "", "示例:",
        "输入:",
        "[\"StreamRank\", \"getRankOfNumber\", \"track\", \"getRankOfNumber\"]",
        "[[], [1], [0], [0]]",
        "输出:",
        "[null,0,null,1]",
        "", "提示：",
        "x <= 50000",
        "track 和 getRankOfNumber 方法的调用次数均不超过 2000 次"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "\nvar StreamRank = function() {\n\n};\n\n/** \n * @param {number} x\n * @return {void}\n */\nStreamRank.prototype.track = function(x) {\n\n};\n\n/** \n * @param {number} x\n * @return {number}\n */\nStreamRank.prototype.getRankOfNumber = function(x) {\n\n};\n\n/**\n * Your StreamRank object will be instantiated and called as such:\n * var obj = new StreamRank()\n * obj.track(x)\n * var param_2 = obj.getRankOfNumber(x)\n */",
        "py": "class StreamRank:\n\n    def __init__(self):\n\n\n    def track(self, x: int) -> None:\n\n\n    def getRankOfNumber(self, x: int) -> int:\n\n\n\n# Your StreamRank object will be instantiated and called as such:\n# obj = StreamRank()\n# obj.track(x)\n# param_2 = obj.getRankOfNumber(x)"
    }
}, {
    "questionId": "面试题 10.02",
    "titleSlug": "group-anagrams-lcci",
    "translatedTitle": "变位词组",
    "translatedContent": ["编写一种方法，对字符串数组进行排序，将所有变位词组合在一起。变位词是指字母相同，但排列不同的字符串。",
        "", "注意：本题相对原题稍作修改",
        "", "示例:",
        "输入: [\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"],",
        "输出:",
        "[",
        "  [\"ate\",\"eat\",\"tea\"],",
        "  [\"nat\",\"tan\"],",
        "  [\"bat\"]",
        "]",
        "", "说明：",
        "", "所有输入均为小写字母。",
        "不考虑答案输出的顺序。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} strs\n * @return {string[][]}\n */\nvar groupAnagrams = function(strs) {\n\n};",
        "py": "class Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:"
    }
}, {
    "questionId": "面试题 17.11",
    "titleSlug": "find-closest-lcci",
    "translatedTitle": "单词距离",
    "translatedContent": ["有个内含单词的超大文本文件，给定任意两个单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?",
        "", "示例：",
        "输入：words = [\"I\",\"am\",\"a\",\"student\",\"from\",\"a\",\"university\",\"in\",\"a\",\"city\"], word1 = \"a\", word2 = \"student\"",
        "输出：1",
        "", "提示：",
        "words.length <= 100000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} words\n * @param {string} word1\n * @param {string} word2\n * @return {number}\n */\nvar findClosest = function(words, word1, word2) {\n\n};",
        "py": "class Solution:\n    def findClosest(self, words: List[str], word1: str, word2: str) -> int:"
    }
}, {
    "questionId": "面试题 17.10",
    "titleSlug": "find-majority-element-lcci",
    "translatedTitle": "主要元素",
    "translatedContent": ["数组中占比超过一半的元素称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1。",
        "", "示例 1：",
        "输入：[1,2,5,9,5,9,5,5,5]",
        "输出：5",
        "", "示例 2：",
        "输入：[3,2]",
        "输出：-1",
        "", "示例 3：",
        "输入：[2,2,1,1,1,2,2]",
        "输出：2",
        "", "说明：",
        "你有办法在时间复杂度为 O(N)，空间复杂度为 O(1) 内完成吗？"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar majorityElement = function(nums) {\n\n};",
        "py": "class Solution:\n    def majorityElement(self, nums: List[int]) -> int:"
    }
}, {
    "questionId": "面试题 17.09",
    "titleSlug": "get-kth-magic-number-lcci",
    "translatedTitle": "第 k 个数",
    "translatedContent": ["有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。",
        "", "示例 1:",
        "输入: k = 5",
        "", "输出: 9"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} k\n * @return {number}\n */\nvar getKthMagicNumber = function(k) {\n\n};",
        "py": "class Solution:\n    def getKthMagicNumber(self, k: int) -> int:"
    }
}, {
    "questionId": "面试题 17.08",
    "titleSlug": "circus-tower-lcci",
    "translatedTitle": "马戏团人塔",
    "translatedContent": ["有个马戏团正在设计叠罗汉的表演节目，一个人要站在另一人的肩膀上。出于实际和美观的考虑，在上面的人要比下面的人矮一点且轻一点。已知马戏团每个人的身高和体重，请编写代码计算叠罗汉最多能叠几个人。",
        "", "示例：",
        "输入：height = [65,70,56,75,60,68] weight = [100,150,90,190,95,110]",
        "输出：6",
        "解释：从上往下数，叠罗汉最多能叠 6 层：(56,90), (60,95), (65,100), (68,110), (70,150), (75,190)",
        "", "提示：",
        "height.length == weight.length <= 10000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} height\n * @param {number[]} weight\n * @return {number}\n */\nvar bestSeqAtIndex = function(height, weight) {\n\n};",
        "py": "class Solution:\n    def bestSeqAtIndex(self, height: List[int], weight: List[int]) -> int:"
    }
}, {
    "questionId": "面试题 17.07",
    "titleSlug": "baby-names-lcci",
    "translatedTitle": "婴儿名字",
    "translatedContent": [
        "每年，政府都会公布一万个最常见的婴儿名字和它们出现的频率，也就是同名婴儿的数量。有些名字有多种拼法，例如，John 和 Jon 本质上是相同的名字，但被当成了两个名字公布出来。给定两个列表，一个是名字及对应的频率，另一个是本质相同的名字对。设计一个算法打印出每个真实名字的实际频率。注意，如果 John 和 Jon 是相同的，并且 Jon 和 Johnny 相同，则 John 与 Johnny 也相同，即它们有传递和对称性。",
        "", "在结果列表中，选择字典序最小的名字作为真实名字。",
        "", "示例：",
        "输入：names = [\"John(15)\",\"Jon(12)\",\"Chris(13)\",\"Kris(4)\",\"Christopher(19)\"], synonyms = [\"(Jon,John)\",\"(John,Johnny)\",\"(Chris,Kris)\",\"(Chris,Christopher)\"]",
        "输出：[\"John(27)\",\"Chris(36)\"]",
        "", "提示：",
        "names.length <= 100000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} names\n * @param {string[]} synonyms\n * @return {string[]}\n */\nvar trulyMostPopular = function(names, synonyms) {\n\n};",
        "py": "class Solution:\n    def trulyMostPopular(self, names: List[str], synonyms: List[str]) -> List[str]:"
    }
}, {
    "questionId": "面试题 17.06",
    "titleSlug": "number-of-2s-in-range-lcci",
    "translatedTitle": "2出现的次数",
    "translatedContent": ["编写一个方法，计算从 0 到 n (含 n) 中数字 2 出现的次数。",
        "", "示例:",
        "输入: 25",
        "输出: 9",
        "解释: (2, 12, 20, 21, 22, 23, 24, 25)(注意 22 应该算作两次)",
        "", "提示：",
        "n <= 10^9"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @return {number}\n */\nvar numberOf2sInRange = function(n) {\n\n};",
        "py": "class Solution:\n    def numberOf2sInRange(self, n: int) -> int:"
    }
}, {
    "questionId": "面试题 17.05",
    "titleSlug": "find-longest-subarray-lcci",
    "translatedTitle": " 字母与数字",
    "translatedContent": ["给定一个放有字符和数字的数组，找到最长的子数组，且包含的字符和数字的个数相同。",
        "", "返回该子数组，若存在多个最长子数组，返回左端点最小的。若不存在这样的数组，返回一个空数组。",
        "", "示例 1:",
        "输入: [\"A\",\"1\",\"B\",\"C\",\"D\",\"2\",\"3\",\"4\",\"E\",\"5\",\"F\",\"G\",\"6\",\"7\",\"H\",\"I\",\"J\",\"K\",\"L\",\"M\"]",
        "", "输出: [\"A\",\"1\",\"B\",\"C\",\"D\",\"2\",\"3\",\"4\",\"E\",\"5\",\"F\",\"G\",\"6\",\"7\"]",
        "", "示例 2:",
        "输入: [\"A\",\"A\"]",
        "", "输出: []",
        "", "提示：",
        "array.length <= 100000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} array\n * @return {string[]}\n */\nvar findLongestSubarray = function(array) {\n\n};",
        "py": "class Solution:\n    def findLongestSubarray(self, array: List[str]) -> List[str]:"
    }
}, {
    "questionId": "面试题 17.04",
    "titleSlug": "missing-number-lcci",
    "translatedTitle": "消失的数字",
    "translatedContent": ["数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？",
        "", "注意：本题相对书上原题稍作改动",
        "", "示例 1：",
        "输入：[3,0,1]",
        "输出：2",
        "", "示例 2：",
        "输入：[9,6,4,2,3,5,7,0,1]",
        "输出：8"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar missingNumber = function(nums) {\n\n};",
        "py": "class Solution:\n    def missingNumber(self, nums: List[int]) -> int:"
    }
}, {
    "questionId": "面试题 08.14",
    "titleSlug": "boolean-evaluation-lcci",
    "translatedTitle": "布尔运算",
    "translatedContent": ["给定一个布尔表达式和一个期望的布尔结果 result，布尔表达式由 0 (false)、1 (true)、&amp; (AND)、 | (OR) 和 ^ (XOR) 符号组成。实现一个函数，算出有几种可使该表达式得出 result 值的括号方法。",
        "", "示例 1:",
        "输入: s = \"1^0|0|1\", result = 0",
        "", "输出: 2",
        "解释: 两种可能的括号方法是",
        "1^(0|(0|1))",
        "1^((0|0)|1)",
        "", "示例 2:",
        "输入: s = \"0&amp;0&amp;0&amp;1^1|0\", result = 1",
        "", "输出: 10",
        "", "提示：",
        "运算符的数量不超过 19 个"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} s\n * @param {number} result\n * @return {number}\n */\nvar countEval = function(s, result) {\n\n};",
        "py": "class Solution:\n    def countEval(self, s: str, result: int) -> int:"
    }
}, {
    "questionId": "面试题 17.22",
    "titleSlug": "word-transformer-lcci",
    "translatedTitle": "单词转换",
    "translatedContent": ["给定字典中的两个词，长度相等。写一个方法，把一个词转换成另一个词， 但是一次只能改变一个字符。每一步得到的新词都必须能在字典中找到。",
        "", "编写一个程序，返回一个可能的转换序列。如有多个可能的转换序列，你可以返回任何一个。",
        "", "示例 1:",
        "输入:",
        "beginWord = \"hit\",",
        "endWord = \"cog\",",
        "wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "", "输出:",
        "[\"hit\",\"hot\",\"dot\",\"lot\",\"log\",\"cog\"]",
        "", "示例 2:",
        "输入:",
        "beginWord = \"hit\"",
        "endWord = \"cog\"",
        "wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "", "输出: []",
        "", "解释: endWord \"cog\" 不在字典中，所以不存在符合要求的转换序列。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} beginWord\n * @param {string} endWord\n * @param {string[]} wordList\n * @return {string[]}\n */\nvar findLadders = function(beginWord, endWord, wordList) {\n\n};",
        "py": "class Solution:\n    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[str]:"
    }
}, {
    "questionId": "面试题 17.21",
    "titleSlug": "volume-of-histogram-lcci",
    "translatedTitle": "直方图的水量",
    "translatedContent": ["给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。",
        "", "上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水（蓝色部分表示水）。 感谢 Marcos 贡献此图。",
        "", "示例:",
        "输入: [0,1,0,2,1,0,1,3,2,1,2,1]",
        "输出: 6"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} height\n * @return {number}\n */\nvar trap = function(height) {\n\n};",
        "py": "class Solution:\n    def trap(self, height: List[int]) -> int:"
    }
}, {
    "questionId": "面试题 17.20",
    "titleSlug": "continuous-median-lcci",
    "translatedTitle": "连续中值",
    "translatedContent": ["随机产生数字并传递给一个方法。你能否完成这个方法，在每次产生新值时，寻找当前所有值的中间值（中位数）并保存。",
        "", "中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。",
        "", "例如，",
        "", "[2,3,4] 的中位数是 3",
        "", "[2,3] 的中位数是 (2 + 3) / 2 = 2.5",
        "", "设计一个支持以下两种操作的数据结构：",
        "", "void addNum(int num) - 从数据流中添加一个整数到数据结构中。",
        "double findMedian() - 返回目前所有元素的中位数。",
        "", "示例：",
        "addNum(1)",
        "addNum(2)",
        "findMedian() -> 1.5",
        "addNum(3) ",
        "findMedian() -> 2"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * initialize your data structure here.\n */\nvar MedianFinder = function() {\n\n};\n\n/** \n * @param {number} num\n * @return {void}\n */\nMedianFinder.prototype.addNum = function(num) {\n\n};\n\n/**\n * @return {number}\n */\nMedianFinder.prototype.findMedian = function() {\n\n};\n\n/**\n * Your MedianFinder object will be instantiated and called as such:\n * var obj = new MedianFinder()\n * obj.addNum(num)\n * var param_2 = obj.findMedian()\n */",
        "py": "class MedianFinder:\n\n    def __init__(self):\n        \"\"\"\n        initialize your data structure here.\n        \"\"\"\n\n\n    def addNum(self, num: int) -> None:\n\n\n    def findMedian(self) -> float:\n\n\n\n# Your MedianFinder object will be instantiated and called as such:\n# obj = MedianFinder()\n# obj.addNum(num)\n# param_2 = obj.findMedian()"
    }
}, {
    "questionId": "面试题 16.26",
    "titleSlug": "calculator-lcci",
    "translatedTitle": "计算器",
    "translatedContent": ["给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。",
        "", "表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。",
        "", "示例 1:",
        "输入: \"3+2*2\"",
        "输出: 7",
        "", "示例 2:",
        "输入: \" 3/2 \"",
        "输出: 1",
        "", "示例 3:",
        "输入: \" 3+5 / 2 \"",
        "输出: 5",
        "", "说明：",
        "", "你可以假设所给定的表达式都是有效的。",
        "请不要使用内置的库函数 eval。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} s\n * @return {number}\n */\nvar calculate = function(s) {\n\n};",
        "py": "class Solution:\n    def calculate(self, s: str) -> int:"
    }
}, {
    "questionId": "面试题 16.25",
    "titleSlug": "lru-cache-lcci",
    "translatedTitle": "LRU缓存",
    "translatedContent": ["设计和构建一个&ldquo;最近最少使用&rdquo;缓存，该缓存会删除最近最少使用的项目。缓存应该从键映射到值(允许你插入和检索特定键对应的值)，并在初始化时指定最大容量。当缓存被填满时，它应该删除最近最少使用的项目。",
        "", "它应该支持以下操作： 获取数据 get 和 写入数据 put 。",
        "", "获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。",
        "写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。",
        "", "示例:",
        "LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );",
        "", "cache.put(1, 1);",
        "cache.put(2, 2);",
        "cache.get(1);       // 返回  1",
        "cache.put(3, 3);    // 该操作会使得密钥 2 作废",
        "cache.get(2);       // 返回 -1 (未找到)",
        "cache.put(4, 4);    // 该操作会使得密钥 1 作废",
        "cache.get(1);       // 返回 -1 (未找到)",
        "cache.get(3);       // 返回  3",
        "cache.get(4);       // 返回  4"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} capacity\n */\nvar LRUCache = function(capacity) {\n\n};\n\n/** \n * @param {number} key\n * @return {number}\n */\nLRUCache.prototype.get = function(key) {\n\n};\n\n/** \n * @param {number} key \n * @param {number} value\n * @return {void}\n */\nLRUCache.prototype.put = function(key, value) {\n\n};\n\n/**\n * Your LRUCache object will be instantiated and called as such:\n * var obj = new LRUCache(capacity)\n * var param_1 = obj.get(key)\n * obj.put(key,value)\n */",
        "py": "class LRUCache:\n\n    def __init__(self, capacity: int):\n\n\n    def get(self, key: int) -> int:\n\n\n    def put(self, key: int, value: int) -> None:\n\n\n\n# Your LRUCache object will be instantiated and called as such:\n# obj = LRUCache(capacity)\n# param_1 = obj.get(key)\n# obj.put(key,value)"
    }
}, {
    "questionId": "面试题 17.01",
    "titleSlug": "add-without-plus-lcci",
    "translatedTitle": "不用加号的加法",
    "translatedContent": ["设计一个函数把两个数字相加。不得使用 + 或者其他算术运算符。",
        "", "示例:",
        "输入: a = 1, b = 1",
        "输出: 2",
        "", "提示：",
        "a, b 均可能是负数或 0",
        "结果不会溢出 32 位整数"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} a\n * @param {number} b\n * @return {number}\n */\nvar add = function(a, b) {\n\n};",
        "py": "class Solution:\n    def add(self, a: int, b: int) -> int:"
    }
}, {
    "questionId": "面试题 17.17",
    "titleSlug": "multi-search-lcci",
    "translatedTitle": "多次搜索",
    "translatedContent": [
        "给定一个较长字符串big和一个包含较短字符串的数组smalls，设计一个方法，根据smalls中的每一个较短字符串，对big进行搜索。输出smalls中的字符串在big里出现的所有位置positions，其中positions[i]为smalls[i]出现的所有位置。",
        "", "示例：",
        "输入：",
        "big = \"mississippi\"",
        "smalls = [\"is\",\"ppi\",\"hi\",\"sis\",\"i\",\"ssippi\"]",
        "输出： [[1,4],[8],[],[3],[1,4,7,10],[5]]",
        "", "提示：",
        "0 <= len(big) <= 1000",
        "0 <= len(smalls[i]) <= 1000",
        "smalls的总字符数不会超过 100000。",
        "你可以认为smalls中没有重复字符串。",
        "所有出现的字符均为英文小写字母。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} big\n * @param {string[]} smalls\n * @return {number[][]}\n */\nvar multiSearch = function(big, smalls) {\n\n};",
        "py": "class Solution:\n    def multiSearch(self, big: str, smalls: List[str]) -> List[List[int]]:"
    }
}, {
    "questionId": "面试题 17.16",
    "titleSlug": "the-masseuse-lcci",
    "translatedTitle": "按摩师",
    "translatedContent": ["一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。",
        "", "注意：本题相对原题稍作改动",
        "", "示例 1：",
        "输入： [1,2,3,1]",
        "输出： 4",
        "解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。",
        "", "示例 2：",
        "输入： [2,7,9,3,1]",
        "输出： 12",
        "解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。",
        "", "示例 3：",
        "输入： [2,1,4,5,3,1,1,3]",
        "输出： 12",
        "解释： 选择 1 号预约、 3 号预约、 5 号预约和 8 号预约，总时长 = 2 + 4 + 3 + 3 = 12。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar massage = function(nums) {\n\n};",
        "py": "class Solution:\n    def massage(self, nums: List[int]) -> int:"
    }
}, {
    "questionId": "面试题 17.15",
    "titleSlug": "longest-word-lcci",
    "translatedTitle": "最长单词",
    "translatedContent": ["给定一组单词words，编写一个程序，找出其中的最长单词，且该单词由这组单词中的其他单词组合而成。若有多个长度相同的结果，返回其中字典序最小的一项，若没有符合要求的单词则返回空字符串。",
        "示例：",
        "输入： [\"cat\",\"banana\",\"dog\",\"nana\",\"walk\",\"walker\",\"dogwalker\"]",
        "输出： \"dogwalker\"",
        "解释： \"dogwalker\"可由\"dog\"和\"walker\"组成。",
        "", "提示：",
        "0 ",
        "1"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} words\n * @return {string}\n */\nvar longestWord = function(words) {\n\n};",
        "py": "class Solution:\n    def longestWord(self, words: List[str]) -> str:"
    }
}, {
    "questionId": "面试题 17.14",
    "titleSlug": "smallest-k-lcci",
    "translatedTitle": "最小K个数",
    "translatedContent": ["设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。",
        "", "示例：",
        "输入： arr = [1,3,5,7,2,4,6,8], k = 4",
        "输出： [1,2,3,4]",
        "", "提示：",
        "0 <= len(arr) <= 100000",
        "0 <= k <= min(100000, len(arr))"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} arr\n * @param {number} k\n * @return {number[]}\n */\nvar smallestK = function(arr, k) {\n\n};",
        "py": "class Solution:\n    def smallestK(self, arr: List[int], k: int) -> List[int]:"
    }
}, {
    "questionId": "面试题 17.13",
    "titleSlug": "re-space-lcci",
    "translatedTitle": "恢复空格",
    "translatedContent": [
        "哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。像句子\"I reset the computer. It still didn&rsquo;t boot!\"已经变成了\"iresetthecomputeritstilldidntboot\"。在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，不过，有些词没在词典里。假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。",
        "", "注意：本题相对原题稍作改动，只需返回未识别的字符数",
        "", "示例：",
        "输入：",
        "dictionary = [\"looked\",\"just\",\"like\",\"her\",\"brother\"]",
        "sentence = \"jesslookedjustliketimherbrother\"",
        "输出： 7",
        "解释： 断句后为\"jess looked just like tim her brother\"，共7个未识别字符。",
        "", "提示：",
        "0 <= len(sentence) <= 1000",
        "dictionary中总字符数不超过 150000。",
        "你可以认为dictionary和sentence中只包含小写字母。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} dictionary\n * @param {string} sentence\n * @return {number}\n */\nvar respace = function(dictionary, sentence) {\n\n};",
        "py": "class Solution:\n    def respace(self, dictionary: List[str], sentence: str) -> int:"
    }
}, {
    "questionId": "面试题 17.12",
    "titleSlug": "binode-lcci",
    "translatedTitle": "BiNode",
    "translatedContent": ["二叉树数据结构TreeNode可用来表示单向链表（其中left置空，right为下一个链表节点）。实现一个方法，把二叉搜索树转换为单向链表，要求值的顺序保持不变，转换操作应是原址的，也就是在原始的二叉搜索树上直接修改。",
        "", "返回转换后的单向链表的头节点。",
        "", "注意：本题相对原题稍作改动",
        "", "示例：",
        "输入： [4,2,5,1,3,null,6,0]",
        "输出： [0,null,1,null,2,null,3,null,4,null,5,null,6]",
        "", "提示：",
        "节点数量不会超过 100000。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar convertBiNode = function(root) {\n\n};",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def convertBiNode(self, root: TreeNode) -> TreeNode:"
    }
}, {
    "questionId": "面试题 16.08",
    "titleSlug": "english-int-lcci",
    "translatedTitle": "整数的英语表示",
    "translatedContent": ["给定一个整数，打印该整数的英文描述。",
        "", "示例 1:",
        "输入: 123",
        "输出: \"One Hundred Twenty Three\"",
        "", "示例 2:",
        "输入: 12345",
        "输出: \"Twelve Thousand Three Hundred Forty Five\"",
        "", "示例 3:",
        "输入: 1234567",
        "输出: \"One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven\"",
        "", "示例 4:",
        "输入: 1234567891",
        "输出: \"One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One\""
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number} num\n * @return {string}\n */\nvar numberToWords = function(num) {\n\n};",
        "py": "class Solution:\n    def numberToWords(self, num: int) -> str:"
    }
}, {
    "questionId": "面试题 16.05",
    "titleSlug": "factorial-zeros-lcci",
    "translatedTitle": "阶乘尾数",
    "translatedContent": ["设计一个算法，算出 n 阶乘有多少个尾随零。",
        "", "示例 1:",
        "输入: 3",
        "输出: 0",
        "解释: 3! = 6, 尾数中没有零。",
        "", "示例 2:",
        "输入: 5",
        "输出: 1",
        "解释: 5! = 120, 尾数中有 1 个零.",
        "", "说明: 你算法的时间复杂度应为 O(log n) 。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @return {number}\n */\nvar trailingZeroes = function(n) {\n\n};",
        "py": "class Solution:\n    def trailingZeroes(self, n: int) -> int:"
    }
}, {
    "questionId": "面试题 10.09",
    "titleSlug": "sorted-matrix-search-lcci",
    "translatedTitle": "排序矩阵查找",
    "translatedContent": ["给定M&times;N矩阵，每一行、每一列都按升序排列，请编写代码找出某元素。",
        "", "示例:",
        "现有矩阵 matrix 如下：",
        "", "[",
        "  [1,   4,  7, 11, 15],",
        "  [2,   5,  8, 12, 19],",
        "  [3,   6,  9, 16, 22],",
        "  [10, 13, 14, 17, 24],",
        "  [18, 21, 23, 26, 30]",
        "]",
        "", "给定 target = 5，返回 true。",
        "", "给定 target = 20，返回 false。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} matrix\n * @param {number} target\n * @return {boolean}\n */\nvar searchMatrix = function(matrix, target) {\n\n};",
        "py": "class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:"
    }
}, {
    "questionId": "面试题 08.06",
    "titleSlug": "hanota-lcci",
    "translatedTitle": "汉诺塔问题",
    "translatedContent": ["在经典汉诺塔问题中，有 3 根柱子及 N 个不同大小的穿孔圆盘，盘子可以滑入任意一根柱子。一开始，所有盘子自上而下按升序依次套在第一根柱子上(即每一个盘子只能放在更大的盘子上面)。移动圆盘时受到以下限制:",
        "(1) 每次只能移动一个盘子;",
        "(2) 盘子只能从柱子顶端滑出移到下一根柱子;",
        "(3) 盘子只能叠在比它大的盘子上。",
        "", "请编写程序，用栈将所有盘子从第一根柱子移到最后一根柱子。",
        "", "你需要原地修改栈。",
        "", "示例1:",
        " 输入：A = [2, 1, 0], B = [], C = []",
        " 输出：C = [2, 1, 0]",
        "", "示例2:",
        " 输入：A = [1, 0], B = [], C = []",
        " 输出：C = [1, 0]",
        "", "提示:",
        "A中盘子的数目不大于14个。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} A\n * @param {number[]} B\n * @param {number[]} C\n * @return {void} Do not return anything, modify C in-place instead.\n */\nvar hanota = function(A, B, C) {\n\n};",
        "py": "class Solution:\n    def hanota(self, A: List[int], B: List[int], C: List[int]) -> None:\n        \"\"\"\n        Do not return anything, modify C in-place instead.\n        \"\"\""
    }
}, {
    "questionId": "面试题 10.11",
    "titleSlug": "peaks-and-valleys-lcci",
    "translatedTitle": "峰与谷",
    "translatedContent": [
        "在一个整数数组中，&ldquo;峰&rdquo;是大于或等于相邻整数的元素，相应地，&ldquo;谷&rdquo;是小于或等于相邻整数的元素。例如，在数组{5, 8, 6, 2, 3, 4, 6}中，{8, 6}是峰， {5, 2}是谷。现在给定一个整数数组，将该数组按峰与谷的交替顺序排序。",
        "", "示例:",
        "输入: [5, 3, 1, 2, 3]",
        "输出: [5, 1, 3, 2, 3]",
        "", "提示：",
        "nums.length <= 10000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar wiggleSort = function(nums) {\n\n};",
        "py": "class Solution:\n    def wiggleSort(self, nums: List[int]) -> None:\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        \"\"\""
    }
}, {
    "questionId": "面试题 10.01",
    "titleSlug": "sorted-merge-lcci",
    "translatedTitle": "合并排序的数组",
    "translatedContent": ["给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。",
        "", "初始化 A 和 B 的元素数量分别为 m 和 n。",
        "", "示例:",
        "输入:",
        "A = [1,2,3,0,0,0], m = 3",
        "B = [2,5,6],       n = 3",
        "", "输出: [1,2,2,3,5,6]",
        "", "说明:",
        "", "A.length == n + m"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} A\n * @param {number} m\n * @param {number[]} B\n * @param {number} n\n * @return {void} Do not return anything, modify A in-place instead.\n */\nvar merge = function(A, m, B, n) {\n\n};",
        "py": "class Solution:\n    def merge(self, A: List[int], m: int, B: List[int], n: int) -> None:\n        \"\"\"\n        Do not return anything, modify A in-place instead.\n        \"\"\""
    }
}, {
    "questionId": "面试题 08.02",
    "titleSlug": "robot-in-a-grid-lcci",
    "translatedTitle": "迷路的机器人",
    "translatedContent": ["设想有个机器人坐在一个网格的左上角，网格 r 行 c 列。机器人只能向下或向右移动，但不能走到一些被禁止的网格（有障碍物）。设计一种算法，寻找机器人从左上角移动到右下角的路径。",
        "", "网格中的障碍物和空位置分别用 1 和 0 来表示。",
        "", "返回一条可行的路径，路径由经过的网格的行号和列号组成。左上角为 0 行 0 列。如果没有可行的路径，返回空数组。",
        "", "示例 1:",
        "输入:",
        "[",
        "  [0,0,0],",
        "  [0,1,0],",
        "  [0,0,0]",
        "]",
        "输出: [[0,0],[0,1],[0,2],[1,2],[2,2]]",
        "解释: ",
        "输入中标粗的位置即为输出表示的路径，即",
        "0行0列（左上角） -> 0行1列 -> 0行2列 -> 1行2列 -> 2行2列（右下角）",
        "", "说明：r 和 c 的值均不超过 100。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} obstacleGrid\n * @return {number[][]}\n */\nvar pathWithObstacles = function(obstacleGrid) {\n\n};",
        "py": "class Solution:\n    def pathWithObstacles(self, obstacleGrid: List[List[int]]) -> List[List[int]]:"
    }
}, {
    "questionId": "面试题 04.09",
    "titleSlug": "bst-sequences-lcci",
    "translatedTitle": "二叉搜索树序列",
    "translatedContent": ["从左向右遍历一个数组，通过不断将其中的元素插入树中可以逐步地生成一棵二叉搜索树。给定一个由不同节点组成的二叉树，输出所有可能生成此树的数组。",
        "", "示例:",
        "给定如下二叉树",
        "", "        2",
        "       / \\", "      1   3",
        "", "返回:",
        "", "[",
        "   [2,1,3],",
        "   [2,3,1]",
        "]"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar BSTSequences = function(root) {\n\n};",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def BSTSequences(self, root: TreeNode) -> List[List[int]]:"
    }
}, {
    "questionId": "面试题 04.12",
    "titleSlug": "paths-with-sum-lcci",
    "translatedTitle": "求和路径",
    "translatedContent": ["给定一棵二叉树，其中每个节点都含有一个整数数值(该值或正或负)。设计一个算法，打印节点数值总和等于某个给定值的所有路径的数量。注意，路径不一定非得从二叉树的根节点或叶节点开始或结束，但是其方向必须向下(只能从父节点指向子节点方向)。",
        "", "示例:",
        "给定如下二叉树，以及目标和 sum = 22，",
        "", "              5",
        "             / \\", "            4   8",
        "           /   / \\", "          11  13  4",
        "         /  \\    / \\", "        7    2  5   1",
        "", "返回:",
        "", "3",
        "解释：和为 22 的路径有：[5,4,11,2], [5,8,4,5], [4,11,7]",
        "", "提示：",
        "节点总数 <= 10000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {number} sum\n * @return {number}\n */\nvar pathSum = function(root, sum) {\n\n};",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def pathSum(self, root: TreeNode, sum: int) -> int:"
    }
}, {
    "questionId": "面试题 02.04",
    "titleSlug": "partition-list-lcci",
    "translatedTitle": "分割链表",
    "translatedContent": [
        "编写程序以 x 为基准分割链表，使得所有小于 x 的节点排在大于或等于 x 的节点之前。如果链表中包含 x，x 只需出现在小于 x 的元素之后(如下所示)。分割元素 x 只需处于&ldquo;右半部分&rdquo;即可，其不需要被置于左右两部分之间。",
        "", "示例:",
        "输入: head = 3->5->8->5->10->2->1, x = 5",
        "输出: 3->1->2->10->5->5->8"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} x\n * @return {ListNode}\n */\nvar partition = function(head, x) {\n\n};",
        "py": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def partition(self, head: ListNode, x: int) -> ListNode:"
    }
}, {
    "questionId": "面试题 02.02",
    "titleSlug": "kth-node-from-end-of-list-lcci",
    "translatedTitle": "返回倒数第 k 个节点",
    "translatedContent": ["实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。",
        "", "注意：本题相对原题稍作改动",
        "", "示例：",
        "输入： 1->2->3->4->5 和 k = 2",
        "输出： 4",
        "", "说明：",
        "", "给定的 k 保证是有效的。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} k\n * @return {number}\n */\nvar kthToLast = function(head, k) {\n\n};",
        "py": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def kthToLast(self, head: ListNode, k: int) -> int:"
    }
}, {
    "questionId": "面试题 01.05",
    "titleSlug": "one-away-lcci",
    "translatedTitle": "一次编辑",
    "translatedContent": ["字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。",
        "", "示例 1:",
        "输入: ",
        "first = \"pale\"",
        "second = \"ple\"",
        "输出: True",
        "", "示例 2:",
        "输入: ",
        "first = \"pales\"",
        "second = \"pal\"",
        "输出: False"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} first\n * @param {string} second\n * @return {boolean}\n */\nvar oneEditAway = function(first, second) {\n\n};",
        "py": "class Solution:\n    def oneEditAway(self, first: str, second: str) -> bool:"
    }
}, {
    "questionId": "面试题 16.19",
    "titleSlug": "pond-sizes-lcci",
    "translatedTitle": "水域大小",
    "translatedContent": ["你有一个用于表示一片土地的整数矩阵land，该矩阵中每个点的值代表对应地点的海拔高度。若值为0则表示水域。由垂直、水平或对角连接的水域为池塘。池塘的大小是指相连接的水域的个数。编写一个方法来计算矩阵中所有池塘的大小，返回值需要从小到大排序。",
        "示例：",
        "输入：",
        "[",
        "  [0,2,1,0],",
        "  [0,1,0,1],",
        "  [1,1,0,1],",
        "  [0,1,0,1]",
        "]",
        "输出： [1,2,4]",
        "", "提示：",
        "0 ",
        "0"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} land\n * @return {number[]}\n */\nvar pondSizes = function(land) {\n\n};",
        "py": "class Solution:\n    def pondSizes(self, land: List[List[int]]) -> List[int]:"
    }
}, {
    "questionId": "面试题 16.18",
    "titleSlug": "pattern-matching-lcci",
    "translatedTitle": "模式匹配",
    "translatedContent": [
        "你有两个字符串，即pattern和value。 pattern字符串由字母\"a\"和\"b\"组成，用于描述字符串中的模式。例如，字符串\"catcatgocatgo\"匹配模式\"aabab\"（其中\"cat\"是\"a\"，\"go\"是\"b\"），该字符串也匹配像\"a\"、\"ab\"和\"b\"这样的模式。但需注意\"a\"和\"b\"不能同时表示相同的字符串。编写一个方法判断value字符串是否匹配pattern字符串。",
        "示例 1：",
        "输入： pattern = \"abba\", value = \"dogcatcatdog\"",
        "输出： true",
        "", "示例 2：",
        "输入： pattern = \"abba\", value = \"dogcatcatfish\"",
        "输出： false",
        "", "示例 3：",
        "输入： pattern = \"aaaa\", value = \"dogcatcatdog\"",
        "输出： false",
        "", "示例 4：",
        "输入： pattern = \"abba\", value = \"dogdogdogdog\"",
        "输出： true",
        "解释： \"a\"=\"dogdog\",b=\"\"，反之也符合规则",
        "", "提示：",
        "0 ",
        "0 ",
        "你可以假设pattern只包含字母\"a\"和\"b\"，value仅包含小写字母。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} pattern\n * @param {string} value\n * @return {boolean}\n */\nvar patternMatching = function(pattern, value) {\n\n};",
        "py": "class Solution:\n    def patternMatching(self, pattern: str, value: str) -> bool:"
    }
}, {
    "questionId": "面试题 16.17",
    "titleSlug": "contiguous-sequence-lcci",
    "translatedTitle": "连续数列",
    "translatedContent": ["给定一个整数数组，找出总和最大的连续数列，并返回总和。",
        "", "示例：",
        "输入： [-2,1,-3,4,-1,2,1,-5,4]",
        "输出： 6",
        "解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。",
        "", "进阶：",
        "", "如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar maxSubArray = function(nums) {\n\n};",
        "py": "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:"
    }
}, {
    "questionId": "面试题 16.16",
    "titleSlug": "sub-sort-lcci",
    "translatedTitle": "部分排序",
    "translatedContent": [
        "给定一个整数数组，编写一个函数，找出索引m和n，只要将索引区间[m,n]的元素排好序，整个数组就是有序的。注意：n-m尽量最小，也就是说，找出符合条件的最短序列。函数返回值为[m,n]，若不存在这样的m和n（例如整个数组是有序的），请返回[-1,-1]。",
        "示例：",
        "输入： [1,2,4,7,10,11,7,12,6,7,16,18,19]",
        "输出： [3,9]",
        "", "提示：",
        "0"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} array\n * @return {number[]}\n */\nvar subSort = function(array) {\n\n};",
        "py": "class Solution:\n    def subSort(self, array: List[int]) -> List[int]:"
    }
}, {
    "questionId": "面试题 16.15",
    "titleSlug": "master-mind-lcci",
    "translatedTitle": "珠玑妙算",
    "translatedContent": ["珠玑妙算游戏（the game of master mind）的玩法如下。",
        "计算机有4个槽，每个槽放一个球，颜色可能是红色（R）、黄色（Y）、绿色（G）或蓝色（B）。例如，计算机可能有RGGB 4种（槽1为红色，槽2、3为绿色，槽4为蓝色）。作为用户，你试图猜出颜色组合。打个比方，你可能会猜YRGB。要是猜对某个槽的颜色，则算一次“猜中”；要是只猜对颜色但槽位猜错了，则算一次“伪猜中”。注意，“猜中”不能算入“伪猜中”。",
        "给定一种颜色组合solution和一个猜测guess，编写一个方法，返回猜中和伪猜中的次数answer，其中answer[0]为猜中的次数，answer[1]为伪猜中的次数。",
        "示例：",
        "输入： solution=\"RGBY\",guess=\"GGRR\"",
        "输出： [1,1]",
        "解释： 猜中1次，伪猜中1次。",
        "", "提示：",
        "len(solution) = len(guess) = 4",
        "solution和guess仅包含\"R\",\"G\",\"B\",\"Y\"这4种字符"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string} solution\n * @param {string} guess\n * @return {number[]}\n */\nvar masterMind = function(solution, guess) {\n\n};",
        "py": "class Solution:\n    def masterMind(self, solution: str, guess: str) -> List[int]:"
    }
}, {
    "questionId": "面试题 16.14",
    "titleSlug": "best-line-lcci",
    "translatedTitle": "最佳直线",
    "translatedContent": ["给定一个二维平面及平面上的 N 个点列表Points，其中第i个点的坐标为Points[i]=[Xi,Yi]。请找出一条直线，其通过的点的数目最多。",
        "设穿过最多点的直线所穿过的全部点编号从小到大排序的列表为S，你仅需返回[S[0],S[1]]作为答案，若有多条直线穿过了相同数量的点，则选择S[0]值较小的直线返回，S[0]相同则选择S[1]值较小的直线返回。",
        "示例：",
        "输入： [[0,0],[1,1],[1,0],[2,0]]",
        "输出： [0,2]",
        "解释： 所求直线穿过的3个点的编号为[0,2,3]",
        "", "提示：",
        "2 ",
        "len(Points[i]) = 2"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} points\n * @return {number[]}\n */\nvar bestLine = function(points) {\n\n};",
        "py": "class Solution:\n    def bestLine(self, points: List[List[int]]) -> List[int]:"
    }
}, {
    "questionId": "面试题 16.13",
    "titleSlug": "bisect-squares-lcci",
    "translatedTitle": "平分正方形",
    "translatedContent": ["给定两个正方形及一个二维平面。请找出将这两个正方形分割成两半的一条直线。假设正方形顶边和底边与 x 轴平行。",
        "",
        "每个正方形的数据square包含3个数值，正方形的左下顶点坐标[X,Y] = [square[0],square[1]]，以及正方形的边长square[2]。所求直线穿过两个正方形会形成4个交点，请返回4个交点形成线段的两端点坐标（两个端点即为4个交点中距离最远的2个点，这2个点所连成的线段一定会穿过另外2个交点）。2个端点坐标[X1,Y1]和[X2,Y2]的返回格式为{X1,Y1,X2,Y2}，要求若X1 != X2，需保证X1 < X2，否则需保证Y1 <= Y2。",
        "", "若同时有多条直线满足要求，则选择斜率最大的一条计算并返回（与Y轴平行的直线视为斜率无穷大）。",
        "", "示例：",
        "输入：",
        "square1 = {-1, -1, 2}",
        "square2 = {0, -1, 2}",
        "输出： {-1,0,2,0}",
        "解释： 直线 y = 0 能将两个正方形同时分为等面积的两部分，返回的两线段端点为[-1,0]和[2,0]",
        "", "提示：",
        "square.length == 3",
        "square[2] > 0"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} square1\n * @param {number[]} square2\n * @return {number[]}\n */\nvar cutSquares = function(square1, square2) {\n\n};",
        "py": "class Solution:\n    def cutSquares(self, square1: List[int], square2: List[int]) -> List[float]:"
    }
}, {
    "questionId": "面试题 16.11",
    "titleSlug": "diving-board-lcci",
    "translatedTitle": "跳水板",
    "translatedContent": ["你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。",
        "返回的长度需要从小到大排列。",
        "示例：",
        "输入：",
        "shorter = 1",
        "longer = 2",
        "k = 3",
        "输出： {3,4,5,6}",
        "", "提示：",
        "0 ",
        "0"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} shorter\n * @param {number} longer\n * @param {number} k\n * @return {number[]}\n */\nvar divingBoard = function(shorter, longer, k) {\n\n};",
        "py": "class Solution:\n    def divingBoard(self, shorter: int, longer: int, k: int) -> List[int]:"
    }
}, {
    "questionId": "面试题 16.10",
    "titleSlug": "living-people-lcci",
    "translatedTitle": "生存人数",
    "translatedContent": ["给定N个人的出生年份和死亡年份，第i个人的出生年份为birth[i]，死亡年份为death[i]，实现一个方法以计算生存人数最多的年份。",
        "你可以假设所有人都出生于1900年至2000年（含1900和2000）之间。如果一个人在某一年的任意时期都处于生存状态，那么他们应该被纳入那一年的统计中。例如，生于1908年、死于1909年的人应当被列入1908年和1909年的计数。",
        "如果有多个年份生存人数相同且均为最大值，输出其中最小的年份。",
        "示例：",
        "输入：",
        "birth = {1900, 1901, 1950}",
        "death = {1948, 1951, 2000}",
        "输出： 1901",
        "", "提示：",
        "0 ",
        "birth[i]"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} birth\n * @param {number[]} death\n * @return {number}\n */\nvar maxAliveYear = function(birth, death) {\n\n};",
        "py": "class Solution:\n    def maxAliveYear(self, birth: List[int], death: List[int]) -> int:"
    }
}, {
    "questionId": "面试题 16.09",
    "titleSlug": "operations-lcci",
    "translatedTitle": "运算",
    "translatedContent": ["请实现整数数字的乘法、减法和除法运算，运算结果均为整数数字，程序中只允许使用加法运算符和逻辑运算符，允许程序中出现正负常数，不允许使用位运算。",
        "你的实现应该支持如下操作：",
        "", "Operations() 构造函数",
        "minus(a, b) 减法，返回a - b",
        "multiply(a, b) 乘法，返回a * b",
        "divide(a, b) 除法，返回a / b",
        "", "示例：",
        "Operations operations = new Operations();",
        "operations.minus(1, 2); //返回-1",
        "operations.multiply(3, 4); //返回12",
        "operations.divide(5, -2); //返回-2",
        "", "提示：",
        "你可以假设函数输入一定是有效的，例如不会出现除法分母为0的情况",
        "单个用例的函数调用次数不会超过1000次"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "\nvar Operations = function() {\n\n};\n\n/** \n * @param {number} a \n * @param {number} b\n * @return {number}\n */\nOperations.prototype.minus = function(a, b) {\n\n};\n\n/** \n * @param {number} a \n * @param {number} b\n * @return {number}\n */\nOperations.prototype.multiply = function(a, b) {\n\n};\n\n/** \n * @param {number} a \n * @param {number} b\n * @return {number}\n */\nOperations.prototype.divide = function(a, b) {\n\n};\n\n/**\n * Your Operations object will be instantiated and called as such:\n * var obj = new Operations()\n * var param_1 = obj.minus(a,b)\n * var param_2 = obj.multiply(a,b)\n * var param_3 = obj.divide(a,b)\n */",
        "py": "class Operations:\n\n    def __init__(self):\n\n\n    def minus(self, a: int, b: int) -> int:\n\n\n    def multiply(self, a: int, b: int) -> int:\n\n\n    def divide(self, a: int, b: int) -> int:\n\n\n\n# Your Operations object will be instantiated and called as such:\n# obj = Operations()\n# param_1 = obj.minus(a,b)\n# param_2 = obj.multiply(a,b)\n# param_3 = obj.divide(a,b)"
    }
}, {
    "questionId": "面试题 16.07",
    "titleSlug": "maximum-lcci",
    "translatedTitle": "最大数值",
    "translatedContent": ["编写一个方法，找出两个数字a和b中最大的那一个。不得使用if-else或其他比较运算符。",
        "示例：",
        "输入： a = 1, b = 2",
        "输出： 2"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} a\n * @param {number} b\n * @return {number}\n */\nvar maximum = function(a, b) {\n\n};",
        "py": "class Solution:\n    def maximum(self, a: int, b: int) -> int:"
    }
}, {
    "questionId": "面试题 08.08",
    "titleSlug": "permutation-ii-lcci",
    "translatedTitle": "有重复字符串的排列组合",
    "translatedContent": ["有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。",
        "", "示例1:",
        " 输入：S = \"qqe\"",
        " 输出：[\"eqq\",\"qeq\",\"qqe\"]",
        "", "示例2:",
        " 输入：S = \"ab\"",
        " 输出：[\"ab\", \"ba\"]",
        "", "提示:",
        "字符都是英文字母。",
        "字符串长度在[1, 9]之间。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} S\n * @return {string[]}\n */\nvar permutation = function(S) {\n\n};",
        "py": "class Solution:\n    def permutation(self, S: str) -> List[str]:"
    }
}, {
    "questionId": "面试题68 - II",
    "titleSlug": "er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof",
    "translatedTitle": "二叉树的最近公共祖先",
    "translatedContent": ["给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。",
        "", "百度百科中最近公共祖先的定义为：&ldquo;对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。&rdquo;",
        "", "例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]",
        "", "示例 1:",
        "输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        "输出: 3",
        "解释: 节点 5 和节点 1 的最近公共祖先是节点 3。",
        "", "示例 2:",
        "输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4",
        "输出: 5",
        "解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。",
        "", "说明:",
        "", "所有节点的值都是唯一的。",
        "p、q 为不同节点且均存在于给定的二叉树中。",
        "", "注意：本题与主站 236 题相同：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "N/A",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:\n        "
    }
}, {
    "questionId": "面试题68 - I",
    "titleSlug": "er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof",
    "translatedTitle": "二叉搜索树的最近公共祖先",
    "translatedContent": ["给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。",
        "", "百度百科中最近公共祖先的定义为：&ldquo;对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。&rdquo;",
        "", "例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]",
        "", "示例 1:",
        "输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        "输出: 6 ",
        "解释: 节点 2 和节点 8 的最近公共祖先是 6。",
        "", "示例 2:",
        "输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
        "输出: 2",
        "解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。",
        "", "说明:",
        "", "所有节点的值都是唯一的。",
        "p、q 为不同节点且均存在于给定的二叉搜索树中。",
        "", "注意：本题与主站 235 题相同：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "N/A",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':"
    }
}, {
    "questionId": "面试题 16.06",
    "titleSlug": "smallest-difference-lcci",
    "translatedTitle": "最小差",
    "translatedContent": ["给定两个整数数组a和b，计算具有最小差绝对值的一对数值（每个数组中取一个值），并返回该对数值的差",
        "示例：",
        "输入：{1, 3, 15, 11, 2}, {23, 127, 235, 19, 8}",
        "输出： 3，即数值对(11, 8)",
        "", "提示：",
        "1 ",
        "-2147483648 ",
        "正确结果在区间[-2147483648, 2147483647]内"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} a\n * @param {number[]} b\n * @return {number}\n */\nvar smallestDifference = function(a, b) {\n\n};",
        "py": "class Solution:\n    def smallestDifference(self, a: List[int], b: List[int]) -> int:"
    }
}, {
    "questionId": "面试题 16.04",
    "titleSlug": "tic-tac-toe-lcci",
    "translatedTitle": "井字游戏",
    "translatedContent": ["设计一个算法，判断玩家是否赢了井字游戏。输入是一个 N x N 的数组棋盘，由字符\" \"，\"X\"和\"O\"组成，其中字符\" \"代表一个空位。",
        "", "以下是井字游戏的规则：",
        "", "玩家轮流将字符放入空位（\" \"）中。",
        "第一个玩家总是放字符\"O\"，且第二个玩家总是放字符\"X\"。",
        "\"X\"和\"O\"只允许放置在空位中，不允许对已放有字符的位置进行填充。",
        "当有N个相同（且非空）的字符填充任何行、列或对角线时，游戏结束，对应该字符的玩家获胜。",
        "当所有位置非空时，也算为游戏结束。",
        "如果游戏结束，玩家不允许再放置字符。",
        "", "如果游戏存在获胜者，就返回该游戏的获胜者使用的字符（\"X\"或\"O\"）；如果游戏以平局结束，则返回 \"Draw\"；如果仍会有行动（游戏未结束），则返回 \"Pending\"。",
        "", "示例 1：",
        "输入： board = [\"O X\",\" XO\",\"X O\"]",
        "输出： \"X\"",
        "", "示例 2：",
        "输入： board = [\"OOX\",\"XXO\",\"OXO\"]",
        "输出： \"Draw\"",
        "解释： 没有玩家获胜且不存在空位",
        "", "示例 3：",
        "输入： board = [\"OOX\",\"XXO\",\"OX \"]",
        "输出： \"Pending\"",
        "解释： 没有玩家获胜且仍存在空位",
        "", "提示：",
        "1 <= board.length == board[i].length <= 100",
        "输入一定遵循井字棋规则"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} board\n * @return {string}\n */\nvar tictactoe = function(board) {\n\n};",
        "py": "class Solution:\n    def tictactoe(self, board: List[str]) -> str:"
    }
}, {
    "questionId": "面试题 16.03",
    "titleSlug": "intersection-lcci",
    "translatedTitle": "交点",
    "translatedContent": ["给定两条线段（表示为起点start = {X1, Y1}和终点end = {X2, Y2}），如果它们有交点，请计算其交点，没有交点则返回空值。",
        "", "要求浮点型误差不超过10^-6。若有多个交点（线段重叠）则返回 X 值最小的点，X 坐标相同则返回 Y 值最小的点。",
        "", "示例 1：",
        "输入：",
        "line1 = {0, 0}, {1, 0}",
        "line2 = {1, 1}, {0, -1}",
        "输出： {0.5, 0}",
        "", "示例 2：",
        "输入：",
        "line1 = {0, 0}, {3, 3}",
        "line2 = {1, 1}, {2, 2}",
        "输出： {1, 1}",
        "", "示例 3：",
        "输入：",
        "line1 = {0, 0}, {1, 1}",
        "line2 = {1, 0}, {2, 1}",
        "输出： {}，两条线段没有交点",
        "", "提示：",
        "坐标绝对值不会超过 2^7",
        "输入的坐标均是有效的二维坐标"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} start1\n * @param {number[]} end1\n * @param {number[]} start2\n * @param {number[]} end2\n * @return {number[]}\n */\nvar intersection = function(start1, end1, start2, end2) {\n\n};",
        "py": "class Solution:\n    def intersection(self, start1: List[int], end1: List[int], start2: List[int], end2: List[int]) -> List[float]:"
    }
}, {
    "questionId": "面试题 16.02",
    "titleSlug": "words-frequency-lcci",
    "translatedTitle": "单词频率",
    "translatedContent": ["设计一个方法，找出任意指定单词在一本书中的出现频率。",
        "", "你的实现应该支持如下操作：",
        "", "WordsFrequency(book)构造函数，参数为字符串数组构成的一本书",
        "get(word)查询指定单词在书中出现的频率",
        "", "示例：",
        "WordsFrequency wordsFrequency = new WordsFrequency({\"i\", \"have\", \"an\", \"apple\", \"he\", \"have\", \"a\", \"pen\"});",
        "wordsFrequency.get(\"you\"); //返回0，\"you\"没有出现过",
        "wordsFrequency.get(\"have\"); //返回2，\"have\"出现2次",
        "wordsFrequency.get(\"an\"); //返回1",
        "wordsFrequency.get(\"apple\"); //返回1",
        "wordsFrequency.get(\"pen\"); //返回1",
        "", "提示：",
        "book[i]中只包含小写字母",
        "1 <= book.length <= 100000",
        "1 <= book[i].length <= 10",
        "get函数的调用次数不会超过100000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} book\n */\nvar WordsFrequency = function(book) {\n\n};\n\n/** \n * @param {string} word\n * @return {number}\n */\nWordsFrequency.prototype.get = function(word) {\n\n};\n\n/**\n * Your WordsFrequency object will be instantiated and called as such:\n * var obj = new WordsFrequency(book)\n * var param_1 = obj.get(word)\n */",
        "py": "class WordsFrequency:\n\n    def __init__(self, book: List[str]):\n\n\n    def get(self, word: str) -> int:\n\n\n\n# Your WordsFrequency object will be instantiated and called as such:\n# obj = WordsFrequency(book)\n# param_1 = obj.get(word)"
    }
}, {
    "questionId": "面试题 16.01",
    "titleSlug": "swap-numbers-lcci",
    "translatedTitle": "交换数字",
    "translatedContent": ["编写一个函数，不用临时变量，直接交换numbers = [a, b]中a与b的值。",
        "示例：",
        "输入: numbers = [1,2]",
        "输出: [2,1]",
        "", "提示：",
        "numbers.length == 2"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} numbers\n * @return {number[]}\n */\nvar swapNumbers = function(numbers) {\n\n};",
        "py": "class Solution:\n    def swapNumbers(self, numbers: List[int]) -> List[int]:"
    }
}, {
    "questionId": "面试题 10.05",
    "titleSlug": "sparse-array-search-lcci",
    "translatedTitle": "稀疏数组搜索",
    "translatedContent": ["稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。",
        "", "示例1:",
        " 输入: words = [\"at\", \"\", \"\", \"\", \"ball\", \"\", \"\", \"car\", \"\", \"\",\"dad\", \"\", \"\"], s = \"ta\"",
        " 输出：-1",
        " 说明: 不存在返回-1。",
        "", "示例2:",
        " 输入：words = [\"at\", \"\", \"\", \"\", \"ball\", \"\", \"\", \"car\", \"\", \"\",\"dad\", \"\", \"\"], s = \"ball\"",
        " 输出：4",
        "", "提示:",
        "words的长度在[1, 1000000]之间"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} words\n * @param {string} s\n * @return {number}\n */\nvar findString = function(words, s) {\n\n};",
        "py": "class Solution:\n    def findString(self, words: List[str], s: str) -> int:"
    }
}, {
    "questionId": "面试题 08.07",
    "titleSlug": "permutation-i-lcci",
    "translatedTitle": "无重复字符串的排列组合",
    "translatedContent": ["无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。",
        "", " 示例1:",
        "", " 输入：S = \"qwe\"",
        " 输出：[\"qwe\", \"qew\", \"wqe\", \"weq\", \"ewq\", \"eqw\"]",
        "", " 示例2:",
        "", " 输入：S = \"ab\"",
        " 输出：[\"ab\", \"ba\"]",
        "", " 提示:",
        "", "字符都是英文字母。",
        "字符串长度在[1, 9]之间。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} S\n * @return {string[]}\n */\nvar permutation = function(S) {\n\n};",
        "py": "class Solution:\n    def permutation(self, S: str) -> List[str]:"
    }
}, {
    "questionId": "面试题 08.03",
    "titleSlug": "magic-index-lcci",
    "translatedTitle": "魔术索引",
    "translatedContent": ["魔术索引。 在数组A[0...n-1]中，有所谓的魔术索引，满足条件A[i] = i。给定一个有序整数数组，编写一种方法找出魔术索引，若有的话，在数组A中找出一个魔术索引，如果没有，则返回-1。若有多个魔术索引，返回索引值最小的一个。",
        "", "示例1:",
        " 输入：nums = [0, 2, 3, 4, 5]",
        " 输出：0",
        " 说明: 0下标的元素为0",
        "", "示例2:",
        " 输入：nums = [1, 1, 1]",
        " 输出：1",
        "", "提示:",
        "nums长度在[1, 1000000]之间"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findMagicIndex = function(nums) {\n\n};",
        "py": "class Solution:\n    def findMagicIndex(self, nums: List[int]) -> int:"
    }
}, {
    "questionId": "面试题 08.12",
    "titleSlug": "eight-queens-lcci",
    "translatedTitle": "八皇后",
    "translatedContent": ["设计一种算法，打印 N 皇后在 N &times; N 棋盘上的各种摆法，其中每个皇后都不同行、不同列，也不在对角线上。这里的&ldquo;对角线&rdquo;指的是所有的对角线，不只是平分整个棋盘的那两条对角线。",
        "", "注意：本题相对原题做了扩展",
        "", "示例:",
        " 输入：4",
        " 输出：[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]",
        " 解释: 4 皇后问题存在如下两个不同的解法。",
        "[",
        " [\".Q..\",  // 解法 1",
        "  \"...Q\",",
        "  \"Q...\",",
        "  \"..Q.\"],",
        "", " [\"..Q.\",  // 解法 2",
        "  \"Q...\",",
        "  \"...Q\",",
        "  \".Q..\"]",
        "]"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @return {string[][]}\n */\nvar solveNQueens = function(n) {\n\n};",
        "py": "class Solution:\n    def solveNQueens(self, n: int) -> List[List[str]]:"
    }
}, {
    "questionId": "面试题 10.03",
    "titleSlug": "search-rotate-array-lcci",
    "translatedTitle": "搜索旋转数组",
    "translatedContent": ["搜索旋转数组。给定一个排序后的数组，包含n个整数，但这个数组已被旋转过很多次了，次数不详。请编写代码找出数组中的某个元素，假设数组元素原先是按升序排列的。若有多个相同元素，返回索引值最小的一个。",
        "", "示例1:",
        " 输入: arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 5",
        " 输出: 8（元素5在该数组中的索引）",
        "", "示例2:",
        " 输入：arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 11",
        " 输出：-1 （没有找到）",
        "", "提示:",
        "arr 长度范围在[1, 1000000]之间"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} arr\n * @param {number} target\n * @return {number}\n */\nvar search = function(arr, target) {\n\n};",
        "py": "class Solution:\n    def search(self, arr: List[int], target: int) -> int:"
    }
}, {
    "questionId": "面试题 08.11",
    "titleSlug": "coin-lcci",
    "translatedTitle": "硬币",
    "translatedContent": ["硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)",
        "", " 示例1:",
        "", " 输入: n = 5",
        " 输出：2",
        " 解释: 有两种方式可以凑成总金额:",
        "5=5",
        "5=1+1+1+1+1",
        "", " 示例2:",
        "", " 输入: n = 10",
        " 输出：4",
        " 解释: 有四种方式可以凑成总金额:",
        "10=10",
        "10=5+5",
        "10=5+1+1+1+1+1",
        "10=1+1+1+1+1+1+1+1+1+1",
        "", " 说明：",
        "", "注意:",
        "", "你可以假设：",
        "", "0 <= n (总金额) <= 1000000"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @return {number}\n */\nvar waysToChange = function(n) {\n\n};",
        "py": "class Solution:\n    def waysToChange(self, n: int) -> int:"
    }
}, {
    "questionId": "面试题 05.03",
    "titleSlug": "reverse-bits-lcci",
    "translatedTitle": "翻转数位",
    "translatedContent": ["给定一个32位整数 num，你可以将一个数位从0变为1。请编写一个程序，找出你能够获得的最长的一串1的长度。",
        "", "示例 1：",
        "输入: num = 1775(110111011112)",
        "输出: 8",
        "", "示例 2：",
        "输入: num = 7(01112)",
        "输出: 4"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} num\n * @return {number}\n */\nvar reverseBits = function(num) {\n\n};",
        "py": "class Solution:\n    def reverseBits(self, num: int) -> int:"
    }
}, {
    "questionId": "面试题 04.10",
    "titleSlug": "check-subtree-lcci",
    "translatedTitle": "检查子树",
    "translatedContent": ["检查子树。你有两棵非常大的二叉树：T1，有几万个节点；T2，有几万个节点。设计一个算法，判断 T2 是否为 T1 的子树。",
        "", "如果 T1 有这么一个节点 n，其子树与 T2 一模一样，则 T2 为 T1 的子树，也就是说，从节点 n 处把树砍断，得到的树与 T2 完全相同。",
        "", "示例1:",
        " 输入：t1 = [1, 2, 3], t2 = [2]",
        " 输出：true",
        "", "示例2:",
        " 输入：t1 = [1, null, 2, 4], t2 = [3, 2]",
        " 输出：false",
        "", "提示：",
        "树的节点数目范围为[0, 20000]。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} t1\n * @param {TreeNode} t2\n * @return {boolean}\n */\nvar checkSubTree = function(t1, t2) {\n\n};",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def checkSubTree(self, t1: TreeNode, t2: TreeNode) -> bool:"
    }
}, {
    "questionId": "面试题 03.06",
    "titleSlug": "animal-shelter-lcci",
    "translatedTitle": "动物收容所",
    "translatedContent": [
        "动物收容所。有家动物收容所只收容狗与猫，且严格遵守&ldquo;先进先出&rdquo;的原则。在收养该收容所的动物时，收养人只能收养所有动物中&ldquo;最老&rdquo;（由其进入收容所的时间长短而定）的动物，或者可以挑选猫或狗（同时必须收养此类动物中&ldquo;最老&rdquo;的）。换言之，收养人不能自由挑选想收养的对象。请创建适用于这个系统的数据结构，实现各种操作方法，比如enqueue、dequeueAny、dequeueDog和dequeueCat。允许使用Java内置的LinkedList数据结构。",
        "", "enqueue方法有一个animal参数，animal[0]代表动物编号，animal[1]代表动物种类，其中 0 代表猫，1 代表狗。",
        "", "dequeue*方法返回一个列表[动物编号, 动物种类]，若没有可以收养的动物，则返回[-1,-1]。",
        "", "示例1:",
        " 输入：",
        "[\"AnimalShelf\", \"enqueue\", \"enqueue\", \"dequeueCat\", \"dequeueDog\", \"dequeueAny\"]",
        "[[], [[0, 0]], [[1, 0]], [], [], []]",
        " 输出：",
        "[null,null,null,[0,0],[-1,-1],[1,0]]",
        "", "示例2:",
        " 输入：",
        "[\"AnimalShelf\", \"enqueue\", \"enqueue\", \"enqueue\", \"dequeueDog\", \"dequeueCat\", \"dequeueAny\"]",
        "[[], [[0, 0]], [[1, 0]], [[2, 1]], [], [], []]",
        " 输出：",
        "[null,null,null,null,[2,1],[0,0],[1,0]]",
        "", "说明:",
        "", "收纳所的最大容量为20000"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "\nvar AnimalShelf = function() {\n\n};\n\n/** \n * @param {number[]} animal\n * @return {void}\n */\nAnimalShelf.prototype.enqueue = function(animal) {\n\n};\n\n/**\n * @return {number[]}\n */\nAnimalShelf.prototype.dequeueAny = function() {\n\n};\n\n/**\n * @return {number[]}\n */\nAnimalShelf.prototype.dequeueDog = function() {\n\n};\n\n/**\n * @return {number[]}\n */\nAnimalShelf.prototype.dequeueCat = function() {\n\n};\n\n/**\n * Your AnimalShelf object will be instantiated and called as such:\n * var obj = new AnimalShelf()\n * obj.enqueue(animal)\n * var param_2 = obj.dequeueAny()\n * var param_3 = obj.dequeueDog()\n * var param_4 = obj.dequeueCat()\n */",
        "py": "class AnimalShelf:\n\n    def __init__(self):\n\n\n    def enqueue(self, animal: List[int]) -> None:\n\n\n    def dequeueAny(self) -> List[int]:\n\n\n    def dequeueDog(self) -> List[int]:\n\n\n    def dequeueCat(self) -> List[int]:\n\n\n\n# Your AnimalShelf object will be instantiated and called as such:\n# obj = AnimalShelf()\n# obj.enqueue(animal)\n# param_2 = obj.dequeueAny()\n# param_3 = obj.dequeueDog()\n# param_4 = obj.dequeueCat()"
    }
}, {
    "questionId": "面试题 05.02",
    "titleSlug": "bianry-number-to-string-lcci",
    "translatedTitle": "二进制数转字符串",
    "translatedContent": ["二进制数转字符串。给定一个介于0和1之间的实数（如0.72），类型为double，打印它的二进制表达式。如果该数字不在0和1之间，或者无法精确地用32位以内的二进制表示，则打印&ldquo;ERROR&rdquo;。",
        "", "示例1:",
        " 输入：0.625",
        " 输出：\"0.101\"",
        "", "示例2:",
        " 输入：0.1",
        " 输出：\"ERROR\"",
        " 提示：0.1无法被二进制准确表示",
        "", "提示：",
        "32位包括输出中的\"0.\"这两位。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} num\n * @return {string}\n */\nvar printBin = function(num) {\n\n};",
        "py": "class Solution:\n    def printBin(self, num: float) -> str:"
    }
}, {
    "questionId": "面试题 08.13",
    "titleSlug": "pile-box-lcci",
    "translatedTitle": "堆箱子",
    "translatedContent": ["堆箱子。给你一堆n个箱子，箱子宽 wi、深 di、高 hi。箱子不能翻转，将箱子堆起来时，下面箱子的宽度、高度和深度必须大于上面的箱子。实现一种方法，搭出最高的一堆箱子。箱堆的高度为每个箱子高度的总和。",
        "", "输入使用数组[wi, di, hi]表示每个箱子。",
        "", "示例1:",
        " 输入：box = [[1, 1, 1], [2, 2, 2], [3, 3, 3]]",
        " 输出：6",
        "", "示例2:",
        " 输入：box = [[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]",
        " 输出：10",
        "", "提示:",
        "箱子的数目不大于3000个。"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} box\n * @return {number}\n */\nvar pileBox = function(box) {\n\n};",
        "py": "class Solution:\n    def pileBox(self, box: List[List[int]]) -> int:"
    }
}, {
    "questionId": "面试题 08.10",
    "titleSlug": "color-fill-lcci",
    "translatedTitle": "颜色填充",
    "translatedContent": ["编写函数，实现许多图片编辑软件都支持的「颜色填充」功能。",
        "", "待填充的图像用二维数组 image 表示，元素为初始颜色值。初始坐标点的横坐标为 sr 纵坐标为 sc。需要填充的新颜色为 newColor 。",
        "", "「周围区域」是指颜色相同且在上、下、左、右四个方向上存在相连情况的若干元素。",
        "", "请用新颜色填充初始坐标点的周围区域，并返回填充后的图像。",
        "", "示例：",
        "输入：",
        "image = [[1,1,1],[1,1,0],[1,0,1]] ",
        "sr = 1, sc = 1, newColor = 2",
        "输出：[[2,2,2],[2,2,0],[2,0,1]]",
        "解释: ",
        "初始坐标点位于图像的正中间，坐标 (sr,sc)=(1,1) 。",
        "初始坐标点周围区域上所有符合条件的像素点的颜色都被更改成 2 。",
        "注意，右下角的像素没有更改为 2 ，因为它不属于初始坐标点的周围区域。",
        "", "提示：",
        "image 和 image[0] 的长度均在范围 [1, 50] 内。",
        "初始坐标点 (sr,sc) 满足 0 <= sr < image.length 和 0 <= sc < image[0].length 。",
        "image[i][j] 和 newColor 表示的颜色值在范围 [0, 65535] 内。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} image\n * @param {number} sr\n * @param {number} sc\n * @param {number} newColor\n * @return {number[][]}\n */\nvar floodFill = function(image, sr, sc, newColor) {\n\n};",
        "py": "class Solution:\n    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:"
    }
}, {
    "questionId": "面试题 08.09",
    "titleSlug": "bracket-lcci",
    "translatedTitle": "括号",
    "translatedContent": ["括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。",
        "", "说明：解集不能包含重复的子集。",
        "", "例如，给出 n = 3，生成结果为：",
        "", "[",
        "  \"((()))\",",
        "  \"(()())\",",
        "  \"(())()\",",
        "  \"()(())\",",
        "  \"()()()\"",
        "]"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @return {string[]}\n */\nvar generateParenthesis = function(n) {\n\n};",
        "py": "class Solution:\n    def generateParenthesis(self, n: int) -> List[str]:"
    }
}, {
    "questionId": "面试题 08.05",
    "titleSlug": "recursive-mulitply-lcci",
    "translatedTitle": "递归乘法",
    "translatedContent": ["递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。",
        "", " 示例1:",
        "", " 输入：A = 1, B = 10",
        " 输出：10",
        "", " 示例2:",
        "", " 输入：A = 3, B = 4",
        " 输出：12",
        "", " 提示:",
        "", "保证乘法范围不会溢出"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} A\n * @param {number} B\n * @return {number}\n */\nvar multiply = function(A, B) {\n\n};",
        "py": "class Solution:\n    def multiply(self, A: int, B: int) -> int:"
    }
}, {
    "questionId": "面试题 08.04",
    "titleSlug": "power-set-lcci",
    "translatedTitle": "幂集",
    "translatedContent": ["幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。",
        "", "说明：解集不能包含重复的子集。",
        "", "示例:",
        " 输入： nums = [1,2,3]",
        " 输出：",
        "[",
        "  [3],",
        "  [1],",
        "  [2],",
        "  [1,2,3],",
        "  [1,3],",
        "  [2,3],",
        "  [1,2],",
        "  []",
        "]"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsets = function(nums) {\n\n};",
        "py": "class Solution:\n    def subsets(self, nums: List[int]) -> List[List[int]]:"
    }
}, {
    "questionId": "面试题 08.01",
    "titleSlug": "three-steps-problem-lcci",
    "translatedTitle": "三步问题",
    "translatedContent": ["三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。",
        "", " 示例1:",
        "", " 输入：n = 3 ",
        " 输出：4",
        " 说明: 有四种走法",
        "", " 示例2:",
        "", " 输入：n = 5",
        " 输出：13",
        "", " 提示:",
        "", "n范围在[1, 1000000]之间"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @return {number}\n */\nvar waysToStep = function(n) {\n\n};",
        "py": "class Solution:\n    def waysToStep(self, n: int) -> int:"
    }
}, {
    "questionId": "面试题 05.08",
    "titleSlug": "draw-line-lcci",
    "translatedTitle": "绘制直线",
    "translatedContent": [
        "绘制直线。有个单色屏幕存储在一个一维数组中，使得32个连续像素可以存放在一个 int 里。屏幕宽度为w，且w可被32整除（即一个 int 不会分布在两行上），屏幕高度可由数组长度及屏幕宽度推算得出。请实现一个函数，绘制从点(x1, y)到点(x2, y)的水平线。",
        "", "给出数组的长度 length，宽度 w（以比特为单位）、直线开始位置 x1（比特为单位）、直线结束位置 x2（比特为单位）、直线所在行数 y。返回绘制过后的数组。",
        "", "示例1:",
        " 输入：length = 1, w = 32, x1 = 30, x2 = 31, y = 0",
        " 输出：[3]",
        " 说明：在第0行的第30位到第31为画一条直线，屏幕表示为[0b000000000000000000000000000000011]",
        "", "示例2:",
        " 输入：length = 3, w = 96, x1 = 0, x2 = 95, y = 0",
        " 输出：[-1, -1, -1]"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} length\n * @param {number} w\n * @param {number} x1\n * @param {number} x2\n * @param {number} y\n * @return {number[]}\n */\nvar drawLine = function(length, w, x1, x2, y) {\n\n};",
        "py": "class Solution:\n    def drawLine(self, length: int, w: int, x1: int, x2: int, y: int) -> List[int]:"
    }
}, {
    "questionId": "面试题 03.03",
    "titleSlug": "stack-of-plates-lcci",
    "translatedTitle": "堆盘子",
    "translatedContent": [
        "堆盘子。设想有一堆盘子，堆太高可能会倒下来。因此，在现实生活中，盘子堆到一定高度时，我们就会另外堆一堆盘子。请实现数据结构SetOfStacks，模拟这种行为。SetOfStacks应该由多个栈组成，并且在前一个栈填满时新建一个栈。此外，SetOfStacks.push()和SetOfStacks.pop()应该与普通栈的操作方法相同（也就是说，pop()返回的值，应该跟只有一个栈时的情况一样）。 进阶：实现一个popAt(int index)方法，根据指定的子栈，执行pop操作。",
        "", "当某个栈为空时，应当删除该栈。当栈中没有元素或不存在该栈时，pop，popAt 应返回 -1.",
        "", "示例1:",
        " 输入：",
        "[\"StackOfPlates\", \"push\", \"push\", \"popAt\", \"pop\", \"pop\"]",
        "[[1], [1], [2], [1], [], []]",
        " 输出：",
        "[null, null, null, 2, 1, -1]",
        "", "示例2:",
        " 输入：",
        "[\"StackOfPlates\", \"push\", \"push\", \"push\", \"popAt\", \"popAt\", \"popAt\"]",
        "[[2], [1], [2], [3], [0], [0], [0]]",
        " 输出：",
        "[null, null, null, null, 2, 1, 3]"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} cap\n */\nvar StackOfPlates = function(cap) {\n\n};\n\n/** \n * @param {number} val\n * @return {void}\n */\nStackOfPlates.prototype.push = function(val) {\n\n};\n\n/**\n * @return {number}\n */\nStackOfPlates.prototype.pop = function() {\n\n};\n\n/** \n * @param {number} index\n * @return {number}\n */\nStackOfPlates.prototype.popAt = function(index) {\n\n};\n\n/**\n * Your StackOfPlates object will be instantiated and called as such:\n * var obj = new StackOfPlates(cap)\n * obj.push(val)\n * var param_2 = obj.pop()\n * var param_3 = obj.popAt(index)\n */",
        "py": "class StackOfPlates:\n\n    def __init__(self, cap: int):\n\n\n    def push(self, val: int) -> None:\n\n\n    def pop(self) -> int:\n\n\n    def popAt(self, index: int) -> int:\n\n\n\n# Your StackOfPlates object will be instantiated and called as such:\n# obj = StackOfPlates(cap)\n# obj.push(val)\n# param_2 = obj.pop()\n# param_3 = obj.popAt(index)"
    }
}, {
    "questionId": "面试题 02.05",
    "titleSlug": "sum-lists-lcci",
    "translatedTitle": "链表求和",
    "translatedContent": ["给定两个用链表表示的整数，每个节点包含一个数位。",
        "这些数位是反向存放的，也就是个位排在链表首部。",
        "编写函数对这两个整数求和，并用链表形式返回结果。",
        "", "示例：",
        "输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295",
        "输出：2 -> 1 -> 9，即912",
        "", "进阶：假设这些数位是正向存放的，请再做一遍。",
        "", "示例：",
        "输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295",
        "输出：9 -> 1 -> 2，即912"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function(l1, l2) {\n\n};",
        "py": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:"
    }
}, {
    "questionId": "面试题 02.03",
    "titleSlug": "delete-middle-node-lcci",
    "translatedTitle": "删除中间节点",
    "translatedContent": ["实现一种算法，删除单向链表中间的某个节点（即不是第一个或最后一个节点），假定你只能访问该节点。",
        "", "示例：",
        "输入：单向链表a->b->c->d->e->f中的节点c",
        "结果：不返回任何数据，但该链表变为a->b->d->e->f"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} node\n * @return {void} Do not return anything, modify node in-place instead.\n */\nvar deleteNode = function(node) {\n    \n};",
        "py": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def deleteNode(self, node):\n        \"\"\"\n        :type node: ListNode\n        :rtype: void Do not return anything, modify node in-place instead.\n        \"\"\"\n        "
    }
}, {
    "questionId": "面试题 01.08",
    "titleSlug": "zero-matrix-lcci",
    "translatedTitle": "零矩阵",
    "translatedContent": ["编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。",
        "", "示例 1：",
        "输入：",
        "[",
        "  [1,1,1],",
        "  [1,0,1],",
        "  [1,1,1]",
        "]",
        "输出：",
        "[",
        "  [1,0,1],",
        "  [0,0,0],",
        "  [1,0,1]",
        "]",
        "", "示例 2：",
        "输入：",
        "[",
        "  [0,1,2,0],",
        "  [3,4,5,2],",
        "  [1,3,1,5]",
        "]",
        "输出：",
        "[",
        "  [0,0,0,0],",
        "  [0,4,5,0],",
        "  [0,3,1,0]",
        "]"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar setZeroes = function(matrix) {\n\n};",
        "py": "class Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        \"\"\"\n        Do not return anything, modify matrix in-place instead.\n        \"\"\""
    }
}, {
    "questionId": "面试题 01.07",
    "titleSlug": "rotate-matrix-lcci",
    "translatedTitle": "旋转矩阵",
    "translatedContent": ["给你一幅由 N &times; N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。",
        "", "不占用额外内存空间能否做到？",
        "", "示例 1:",
        "给定 matrix = ",
        "[",
        "  [1,2,3],",
        "  [4,5,6],",
        "  [7,8,9]",
        "],",
        "", "原地旋转输入矩阵，使其变为:",
        "[",
        "  [7,4,1],",
        "  [8,5,2],",
        "  [9,6,3]",
        "]",
        "", "示例 2:",
        "给定 matrix =",
        "[",
        "  [ 5, 1, 9,11],",
        "  [ 2, 4, 8,10],",
        "  [13, 3, 6, 7],",
        "  [15,14,12,16]",
        "], ",
        "", "原地旋转输入矩阵，使其变为:",
        "[",
        "  [15,13, 2, 5],",
        "  [14, 3, 4, 1],",
        "  [12, 6, 8, 9],",
        "  [16, 7,10,11]",
        "]"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar rotate = function(matrix) {\n\n};",
        "py": "class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        \"\"\"\n        Do not return anything, modify matrix in-place instead.\n        \"\"\""
    }
}, {
    "questionId": "面试题 01.04",
    "titleSlug": "palindrome-permutation-lcci",
    "translatedTitle": "回文排列",
    "translatedContent": ["给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。",
        "", "回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。",
        "", "回文串不一定是字典当中的单词。",
        "", "示例1：",
        "输入：\"tactcoa\"",
        "输出：true（排列有\"tacocat\"、\"atcocta\"，等等）"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string} s\n * @return {boolean}\n */\nvar canPermutePalindrome = function(s) {\n\n};",
        "py": "class Solution:\n    def canPermutePalindrome(self, s: str) -> bool:"
    }
}, {
    "questionId": "面试题 05.04",
    "titleSlug": "closed-number-lcci",
    "translatedTitle": "下一个数",
    "translatedContent": ["下一个数。给定一个正整数，找出与其二进制表达式中1的个数相同且大小最接近的那两个数（一个略大，一个略小）。",
        "", " 示例1:",
        "", " 输入：num = 2（或者0b10）",
        " 输出：[4, 1] 或者（[0b100, 0b1]）",
        "", " 示例2:",
        "", " 输入：num = 1",
        " 输出：[2, -1]",
        "", " 提示:",
        "", "num的范围在[1, 2147483647]之间；",
        "如果找不到前一个或者后一个满足条件的正数，那么输出 -1。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} num\n * @return {number[]}\n */\nvar findClosedNumbers = function(num) {\n\n};",
        "py": "class Solution:\n    def findClosedNumbers(self, num: int) -> List[int]:"
    }
}, {
    "questionId": "面试题 05.07",
    "titleSlug": "exchange-lcci",
    "translatedTitle": "配对交换",
    "translatedContent": ["配对交换。编写程序，交换某个整数的奇数位和偶数位，尽量使用较少的指令（也就是说，位0与位1交换，位2与位3交换，以此类推）。",
        "", " 示例1:",
        "", " 输入：num = 2（或者0b10）",
        " 输出 1 (或者 0b01)",
        "", " 示例2:",
        "", " 输入：num = 3",
        " 输出：3",
        "", " 提示:",
        "", "num的范围在[0, 2^30 - 1]之间，不会发生整数溢出。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} num\n * @return {number}\n */\nvar exchangeBits = function(num) {\n\n};",
        "py": "class Solution:\n    def exchangeBits(self, num: int) -> int:"
    }
}, {
    "questionId": "面试题 05.06",
    "titleSlug": "convert-integer-lcci",
    "translatedTitle": "整数转换",
    "translatedContent": ["整数转换。编写一个函数，确定需要改变几个位才能将整数A转成整数B。",
        "", " 示例1:",
        "", " 输入：A = 29 （或者0b11101）, B = 15（或者0b01111）",
        " 输出：2",
        "", " 示例2:",
        "", " 输入：A = 1，B = 2",
        " 输出：2",
        "", " 提示:",
        "", "A，B范围在[-2147483648, 2147483647]之间"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} A\n * @param {number} B\n * @return {number}\n */\nvar convertInteger = function(A, B) {\n\n};",
        "py": "class Solution:\n    def convertInteger(self, A: int, B: int) -> int:"
    }
}, {
    "questionId": "面试题 05.01",
    "titleSlug": "insert-into-bits-lcci",
    "translatedTitle": "插入",
    "translatedContent": [
        "插入。给定两个32位的整数N与M，以及表示比特位置的i与j。编写一种方法，将M插入N，使得M从N的第j位开始，到第i位结束。假定从j位到i位足以容纳M，也即若M = 10 011，那么j和i之间至少可容纳5个位。例如，不可能出现j = 3和i = 2的情况，因为第3位和第2位之间放不下M。",
        "", " 示例1:",
        "", " 输入：N = 10000000000, M = 10011, i = 2, j = 6",
        " 输出：N = 10001001100",
        "", " 示例2:",
        "", " 输入： N = 0, M = 11111, i = 0, j = 4",
        " 输出：N = 11111"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} N\n * @param {number} M\n * @param {number} i\n * @param {number} j\n * @return {number}\n */\nvar insertBits = function(N, M, i, j) {\n\n};",
        "py": "class Solution:\n    def insertBits(self, N: int, M: int, i: int, j: int) -> int:"
    }
}, {
    "questionId": "面试题 04.08",
    "titleSlug": "first-common-ancestor-lcci",
    "translatedTitle": "首个共同祖先",
    "translatedContent": ["设计并实现一个算法，找出二叉树中某两个节点的第一个共同祖先。不得将其他的节点存储在另外的数据结构中。注意：这不一定是二叉搜索树。",
        "", "例如，给定如下二叉树: root = [3,5,1,6,2,0,8,null,null,7,4]",
        "", "    3",
        "   / \\", "  5   1",
        " / \\ / \\", "6  2 0  8",
        "  / \\", " 7   4",
        "", "示例 1:",
        "输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        "输出: 3",
        "解释: 节点 5 和节点 1 的最近公共祖先是节点 3。",
        "", "示例 2:",
        "输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4",
        "输出: 5",
        "解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。",
        "", "说明:",
        "", "所有节点的值都是唯一的。",
        "p、q 为不同节点且均存在于给定的二叉树中。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */\nvar lowestCommonAncestor = function(root, p, q) {\n\n};",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:"
    }
}, {
    "questionId": "面试题 04.06",
    "titleSlug": "successor-lcci",
    "translatedTitle": "后继者",
    "translatedContent": ["设计一个算法，找出二叉搜索树中指定节点的&ldquo;下一个&rdquo;节点（也即中序后继）。",
        "", "如果指定节点没有对应的&ldquo;下一个&rdquo;节点，则返回null。",
        "", "示例 1:",
        "输入: root = [2,1,3], p = 1",
        "", "  2",
        " / \\", "1   3",
        "", "输出: 2",
        "", "示例 2:",
        "输入: root = [5,3,6,2,4,null,null,1], p = 6",
        "", "      5",
        "     / \\", "    3   6",
        "   / \\", "  2   4",
        " /   ",
        "1",
        "", "输出: null"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @return {TreeNode}\n */\nvar inorderSuccessor = function(root, p) {\n\n};",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def inorderSuccessor(self, root: TreeNode, p: TreeNode) -> TreeNode:"
    }
}, {
    "questionId": "面试题 04.05",
    "titleSlug": "legal-binary-search-tree-lcci",
    "translatedTitle": "合法二叉搜索树",
    "translatedContent": [
        "实现一个函数，检查一棵二叉树是否为二叉搜索树。示例 1:输入:    2   / &#92  1   3输出: true示例 2:输入:    5   / &#92  1   4     / &#92    3   6输出: false解释: 输入为: [5,1,4,null,null,3,6]。     根节点的值为 5 ，但是其右子节点值为 4 。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isValidBST = function(root) {\n\n};",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def isValidBST(self, root: TreeNode) -> bool:"
    }
}, {
    "questionId": "面试题 04.04",
    "titleSlug": "check-balance-lcci",
    "translatedTitle": "检查平衡性",
    "translatedContent": [
        "实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。示例 1:给定二叉树 [3,9,20,null,null,15,7]    3   / &#92  9  20    /  &#92   15   7返回 true 。示例 2:给定二叉树 [1,2,2,3,3,null,null,4,4]      1     / &#92    2   2   / &#92  3   3 / &#924   4返回 false 。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isBalanced = function(root) {\n\n};",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def isBalanced(self, root: TreeNode) -> bool:"
    }
}, {
    "questionId": "面试题 04.03",
    "titleSlug": "list-of-depth-lcci",
    "translatedTitle": "特定深度节点链表",
    "translatedContent": ["给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。",
        "", "示例：",
        "输入：[1,2,3,4,5,null,7,8]",
        "", "        1",
        "       /  \\ ",
        "      2    3",
        "     / \\    \\ ",
        "    4   5    7",
        "   /",
        "  8",
        "", "输出：[[1],[2,3],[4,5,7],[8]]"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {TreeNode} tree\n * @return {ListNode[]}\n */\nvar listOfDepth = function(tree) {\n\n};",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\n# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def listOfDepth(self, tree: TreeNode) -> List[ListNode]:"
    }
}, {
    "questionId": "面试题 04.02",
    "titleSlug": "minimum-height-tree-lcci",
    "translatedTitle": "最小高度树",
    "translatedContent": [
        "给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。示例:给定有序数组: [-10,-3,0,5,9],一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：          0          / &#92        -3   9        /   /      -10  5"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {number[]} nums\n * @return {TreeNode}\n */\nvar sortedArrayToBST = function(nums) {\n\n};",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:"
    }
}, {
    "questionId": "面试题 03.05",
    "titleSlug": "sort-of-stacks-lcci",
    "translatedTitle": "栈排序",
    "translatedContent": ["栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。该栈支持如下操作：push、pop、peek 和 isEmpty。当栈为空时，peek 返回 -1。",
        "", "示例1:",
        " 输入：",
        "[\"SortedStack\", \"push\", \"push\", \"peek\", \"pop\", \"peek\"]",
        "[[], [1], [2], [], [], []]",
        " 输出：",
        "[null,null,null,1,null,2]",
        "", "示例2:",
        " 输入： ",
        "[\"SortedStack\", \"pop\", \"pop\", \"push\", \"pop\", \"isEmpty\"]",
        "[[], [], [], [1], [], []]",
        " 输出：",
        "[null,null,null,null,null,true]",
        "", "说明:",
        "", "栈中的元素数目在[0, 5000]范围内。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "\nvar SortedStack = function() {\n\n};\n\n/** \n * @param {number} val\n * @return {void}\n */\nSortedStack.prototype.push = function(val) {\n\n};\n\n/**\n * @return {void}\n */\nSortedStack.prototype.pop = function() {\n\n};\n\n/**\n * @return {number}\n */\nSortedStack.prototype.peek = function() {\n\n};\n\n/**\n * @return {boolean}\n */\nSortedStack.prototype.isEmpty = function() {\n\n};\n\n/**\n * Your SortedStack object will be instantiated and called as such:\n * var obj = new SortedStack()\n * obj.push(val)\n * obj.pop()\n * var param_3 = obj.peek()\n * var param_4 = obj.isEmpty()\n */",
        "py": "class SortedStack:\n\n    def __init__(self):\n\n\n    def push(self, val: int) -> None:\n\n\n    def pop(self) -> None:\n\n\n    def peek(self) -> int:\n\n\n    def isEmpty(self) -> bool:\n\n\n\n# Your SortedStack object will be instantiated and called as such:\n# obj = SortedStack()\n# obj.push(val)\n# obj.pop()\n# param_3 = obj.peek()\n# param_4 = obj.isEmpty()"
    }
}, {
    "questionId": "面试题 03.01",
    "titleSlug": "three-in-one-lcci",
    "translatedTitle": "三合一",
    "translatedContent": ["三合一。描述如何只用一个数组来实现三个栈。",
        "", "你应该实现push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum)方法。stackNum表示栈下标，value表示压入的值。",
        "", "构造函数会传入一个stackSize参数，代表每个栈的大小。",
        "", "示例1:",
        " 输入：",
        "[\"TripleInOne\", \"push\", \"push\", \"pop\", \"pop\", \"pop\", \"isEmpty\"]",
        "[[1], [0, 1], [0, 2], [0], [0], [0], [0]]",
        " 输出：",
        "[null, null, null, 1, -1, -1, true]",
        "说明：当栈为空时`pop, peek`返回-1，当栈满时`push`不压入元素。",
        "", "示例2:",
        " 输入：",
        "[\"TripleInOne\", \"push\", \"push\", \"push\", \"pop\", \"pop\", \"pop\", \"peek\"]",
        "[[2], [0, 1], [0, 2], [0, 3], [0], [0], [0], [0]]",
        " 输出：",
        "[null, null, null, null, 2, 1, -1, -1]"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} stackSize\n */\nvar TripleInOne = function(stackSize) {\n\n};\n\n/** \n * @param {number} stackNum \n * @param {number} value\n * @return {void}\n */\nTripleInOne.prototype.push = function(stackNum, value) {\n\n};\n\n/** \n * @param {number} stackNum\n * @return {number}\n */\nTripleInOne.prototype.pop = function(stackNum) {\n\n};\n\n/** \n * @param {number} stackNum\n * @return {number}\n */\nTripleInOne.prototype.peek = function(stackNum) {\n\n};\n\n/** \n * @param {number} stackNum\n * @return {boolean}\n */\nTripleInOne.prototype.isEmpty = function(stackNum) {\n\n};\n\n/**\n * Your TripleInOne object will be instantiated and called as such:\n * var obj = new TripleInOne(stackSize)\n * obj.push(stackNum,value)\n * var param_2 = obj.pop(stackNum)\n * var param_3 = obj.peek(stackNum)\n * var param_4 = obj.isEmpty(stackNum)\n */",
        "py": "class TripleInOne:\n\n    def __init__(self, stackSize: int):\n\n\n    def push(self, stackNum: int, value: int) -> None:\n\n\n    def pop(self, stackNum: int) -> int:\n\n\n    def peek(self, stackNum: int) -> int:\n\n\n    def isEmpty(self, stackNum: int) -> bool:\n\n\n\n# Your TripleInOne object will be instantiated and called as such:\n# obj = TripleInOne(stackSize)\n# obj.push(stackNum,value)\n# param_2 = obj.pop(stackNum)\n# param_3 = obj.peek(stackNum)\n# param_4 = obj.isEmpty(stackNum)"
    }
}, {
    "questionId": "面试题 04.01",
    "titleSlug": "route-between-nodes-lcci",
    "translatedTitle": "节点间通路",
    "translatedContent": ["节点间通路。给定有向图，设计一个算法，找出两个节点之间是否存在一条路径。",
        "", "示例1:",
        " 输入：n = 3, graph = [[0, 1], [0, 2], [1, 2], [1, 2]], start = 0, target = 2",
        " 输出：true",
        "", "示例2:",
        " 输入：n = 5, graph = [[0, 1], [0, 2], [0, 4], [0, 4], [0, 1], [1, 3], [1, 4], [1, 3], [2, 3], [3, 4]], start = 0, target = 4",
        " 输出 true",
        "", "提示：",
        "节点数量n在[0, 1e5]范围内。",
        "节点编号大于等于 0 小于 n。",
        "图中可能存在自环和平行边。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @param {number[][]} graph\n * @param {number} start\n * @param {number} target\n * @return {boolean}\n */\nvar findWhetherExistsPath = function(n, graph, start, target) {\n\n};",
        "py": "class Solution:\n    def findWhetherExistsPath(self, n: int, graph: List[List[int]], start: int, target: int) -> bool:"
    }
}, {
    "questionId": "面试题 03.04",
    "titleSlug": "implement-queue-using-stacks-lcci",
    "translatedTitle": "化栈为队",
    "translatedContent": [
        "实现一个MyQueue类，该类用两个栈来实现一个队列。示例：MyQueue queue = new MyQueue();queue.push(1);queue.push(2);queue.peek();  // 返回 1queue.pop();   // 返回 1queue.empty(); // 返回 false说明：你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size 和 is empty 操作是合法的。你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * Initialize your data structure here.\n */\nvar MyQueue = function() {\n\n};\n\n/**\n * Push element x to the back of queue. \n * @param {number} x\n * @return {void}\n */\nMyQueue.prototype.push = function(x) {\n\n};\n\n/**\n * Removes the element from in front of queue and returns that element.\n * @return {number}\n */\nMyQueue.prototype.pop = function() {\n\n};\n\n/**\n * Get the front element.\n * @return {number}\n */\nMyQueue.prototype.peek = function() {\n\n};\n\n/**\n * Returns whether the queue is empty.\n * @return {boolean}\n */\nMyQueue.prototype.empty = function() {\n\n};\n\n/**\n * Your MyQueue object will be instantiated and called as such:\n * var obj = new MyQueue()\n * obj.push(x)\n * var param_2 = obj.pop()\n * var param_3 = obj.peek()\n * var param_4 = obj.empty()\n */",
        "py": "class MyQueue:\n\n    def __init__(self):\n        \"\"\"\n        Initialize your data structure here.\n        \"\"\"\n\n\n    def push(self, x: int) -> None:\n        \"\"\"\n        Push element x to the back of queue.\n        \"\"\"\n\n\n    def pop(self) -> int:\n        \"\"\"\n        Removes the element from in front of queue and returns that element.\n        \"\"\"\n\n\n    def peek(self) -> int:\n        \"\"\"\n        Get the front element.\n        \"\"\"\n\n\n    def empty(self) -> bool:\n        \"\"\"\n        Returns whether the queue is empty.\n        \"\"\"\n\n\n\n# Your MyQueue object will be instantiated and called as such:\n# obj = MyQueue()\n# obj.push(x)\n# param_2 = obj.pop()\n# param_3 = obj.peek()\n# param_4 = obj.empty()"
    }
}, {
    "questionId": "面试题 03.02",
    "titleSlug": "min-stack-lcci",
    "translatedTitle": "栈的最小值",
    "translatedContent": [
        "请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。示例：MinStack minStack = new MinStack();minStack.push(-2);minStack.push(0);minStack.push(-3);minStack.getMin();   --> 返回 -3.minStack.pop();minStack.top();      --> 返回 0.minStack.getMin();   --> 返回 -2."
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * initialize your data structure here.\n */\nvar MinStack = function() {\n\n};\n\n/** \n * @param {number} x\n * @return {void}\n */\nMinStack.prototype.push = function(x) {\n\n};\n\n/**\n * @return {void}\n */\nMinStack.prototype.pop = function() {\n\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.top = function() {\n\n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.getMin = function() {\n\n};\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * var obj = new MinStack()\n * obj.push(x)\n * obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.getMin()\n */",
        "py": "class MinStack:\n\n    def __init__(self):\n        \"\"\"\n        initialize your data structure here.\n        \"\"\"\n\n\n    def push(self, x: int) -> None:\n\n\n    def pop(self) -> None:\n\n\n    def top(self) -> int:\n\n\n    def getMin(self) -> int:\n\n\n\n# Your MinStack object will be instantiated and called as such:\n# obj = MinStack()\n# obj.push(x)\n# obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.getMin()"
    }
}, {
    "questionId": "面试题 02.08",
    "titleSlug": "linked-list-cycle-lcci",
    "translatedTitle": "环路检测",
    "translatedContent": [
        "给定一个有环链表，实现一个算法返回环路的开头节点。有环链表的定义：在链表中某个节点的next元素指向在它前面出现过的节点，则表明该链表存在环路。示例 1：输入：head = [3,2,0,-4], pos = 1输出：tail connects to node index 1解释：链表中有一个环，其尾部连接到第二个节点。示例 2：输入：head = [1,2], pos = 0输出：tail connects to node index 0解释：链表中有一个环，其尾部连接到第一个节点。示例 3：输入：head = [1], pos = -1输出：no cycle解释：链表中没有环。进阶：你是否可以不用额外空间解决此题？"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar detectCycle = function(head) {\n    \n};",
        "py": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def detectCycle(self, head: ListNode) -> ListNode:\n        "
    }
}, {
    "questionId": "面试题 02.07",
    "titleSlug": "intersection-of-two-linked-lists-lcci",
    "translatedTitle": "链表相交",
    "translatedContent": [
        "给定两个（单向）链表，判定它们是否相交并返回交点。请注意相交的定义基于节点的引用，而不是基于节点的值。换句话说，如果一个链表的第k个节点与另一个链表的第j个节点是同一节点（引用完全相同），则这两个链表相交。示例 1：输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3输出：Reference of the node with value = 8输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。示例 2：输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1输出：Reference of the node with value = 2输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。示例 3：输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2输出：null输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。解释：这两个链表不相交，因此返回 null。注意：如果两个链表没有交点，返回 null 。在返回结果后，两个链表仍须保持原有的结构。可假定整个链表结构中没有循环。程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n\n/**\n * @param {ListNode} headA\n * @param {ListNode} headB\n * @return {ListNode}\n */\nvar getIntersectionNode = function(headA, headB) {\n    \n};",
        "py": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:\n        "
    }
}, {
    "questionId": "面试题 02.06",
    "titleSlug": "palindrome-linked-list-lcci",
    "translatedTitle": "回文链表",
    "translatedContent": ["编写一个函数，检查输入的链表是否是回文的。",
        "", "示例 1：",
        "输入： 1->2",
        "输出： false ",
        "", "示例 2：",
        "输入： 1->2->2->1",
        "输出： true ",
        "", "进阶：",
        "你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {boolean}\n */\nvar isPalindrome = function(head) {\n\n};",
        "py": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def isPalindrome(self, head: ListNode) -> bool:"
    }
}, {
    "questionId": "面试题 02.01",
    "titleSlug": "remove-duplicate-node-lcci",
    "translatedTitle": "移除重复节点",
    "translatedContent": ["编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。",
        "", " 示例1:",
        "", " 输入：[1, 2, 3, 3, 2, 1]",
        " 输出：[1, 2, 3]",
        "", " 示例2:",
        "", " 输入：[1, 1, 1, 1, 2]",
        " 输出：[1, 2]",
        "", "提示：",
        "链表长度在[0, 20000]范围内。",
        "链表元素在[0, 20000]范围内。",
        "", " 进阶：",
        "", "如果不得使用临时缓冲区，该怎么解决？"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar removeDuplicateNodes = function(head) {\n\n};",
        "py": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def removeDuplicateNodes(self, head: ListNode) -> ListNode:"
    }
}, {
    "questionId": "面试题 01.09",
    "titleSlug": "string-rotation-lcci",
    "translatedTitle": "字符串轮转",
    "translatedContent": ["字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。",
        "", "示例1:",
        " 输入：s1 = \"waterbottle\", s2 = \"erbottlewat\"",
        " 输出：True",
        "", "示例2:",
        " 输入：s1 = \"aa\", \"aba\"",
        " 输出：False",
        "", "提示：",
        "字符串长度在[0, 100000]范围内。",
        "", "说明:",
        "", "你能只调用一次检查子串的方法吗？"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string} s1\n * @param {string} s2\n * @return {boolean}\n */\nvar isFlipedString = function(s1, s2) {\n\n};",
        "py": "class Solution:\n    def isFlipedString(self, s1: str, s2: str) -> bool:"
    }
}, {
    "questionId": "面试题 01.06",
    "titleSlug": "compress-string-lcci",
    "translatedTitle": "字符串压缩",
    "translatedContent": ["字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。",
        "", " 示例1:",
        "", " 输入：\"aabcccccaaa\"",
        " 输出：\"a2b1c5a3\"",
        "", " 示例2:",
        "", " 输入：\"abbccd\"",
        " 输出：\"abbccd\"",
        " 解释：\"abbccd\"压缩后为\"a1b2c2d1\"，比原字符串长度更长。",
        "", "提示：",
        "字符串长度在[0, 50000]范围内。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string} S\n * @return {string}\n */\nvar compressString = function(S) {\n\n};",
        "py": "class Solution:\n    def compressString(self, S: str) -> str:"
    }
}, {
    "questionId": "面试题 01.03",
    "titleSlug": "string-to-url-lcci",
    "translatedTitle": "URL化",
    "translatedContent": ["URL化。编写一种方法，将字符串中的空格全部替换为%20。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的&ldquo;真实&rdquo;长度。（注：用Java实现的话，请使用字符数组实现，以便直接在数组上操作。）",
        "", "示例1:",
        " 输入：\"Mr John Smith    \", 13",
        " 输出：\"Mr%20John%20Smith\"",
        "", "示例2:",
        " 输入：\"               \", 5",
        " 输出：\"%20%20%20%20%20\"",
        "", "提示：",
        "字符串长度在[0, 500000]范围内。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string} S\n * @param {number} length\n * @return {string}\n */\nvar replaceSpaces = function(S, length) {\n\n};",
        "py": "class Solution:\n    def replaceSpaces(self, S: str, length: int) -> str:"
    }
}, {
    "questionId": "面试题 01.02",
    "titleSlug": "check-permutation-lcci",
    "translatedTitle": "判定是否互为字符重排",
    "translatedContent": ["给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。",
        "", "示例 1：",
        "输入: s1 = \"abc\", s2 = \"bca\"",
        "输出: true ",
        "", "示例 2：",
        "输入: s1 = \"abc\", s2 = \"bad\"",
        "输出: false",
        "", "说明：",
        "", "0 <= len(s1) <= 100 ",
        "0 <= len(s2) <= 100"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string} s1\n * @param {string} s2\n * @return {boolean}\n */\nvar CheckPermutation = function(s1, s2) {\n\n};",
        "py": "class Solution:\n    def CheckPermutation(self, s1: str, s2: str) -> bool:"
    }
}, {
    "questionId": "面试题 01.01",
    "titleSlug": "is-unique-lcci",
    "translatedTitle": "判定字符是否唯一",
    "translatedContent": ["实现一个算法，确定一个字符串 s 的所有字符是否全都不同。",
        "", "示例 1：",
        "输入: s = \"leetcode\"",
        "输出: false ",
        "", "示例 2：",
        "输入: s = \"abc\"",
        "输出: true",
        "", "限制：",
        "", "0 ",
        "如果你不使用额外的数据结构，会很加分。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string} astr\n * @return {boolean}\n */\nvar isUnique = function(astr) {\n\n};",
        "py": "class Solution:\n    def isUnique(self, astr: str) -> bool:"
    }
}, {
    "questionId": "LCP 01",
    "titleSlug": "guess-numbers",
    "translatedTitle": "猜数字",
    "translatedContent": ["小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，请返回 小A 猜对了几次？",
        "", "输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。",
        "", "示例 1：",
        "输入：guess = [1,2,3], answer = [1,2,3]",
        "输出：3",
        "解释：小A 每次都猜对了。",
        "", "示例 2：",
        "输入：guess = [2,2,3], answer = [3,2,1]",
        "输出：1",
        "解释：小A 只猜对了第二次。",
        "", "限制：",
        "", "guess的长度 = 3",
        "answer的长度 = 3",
        "guess的元素取值为 {1, 2, 3} 之一。",
        "answer的元素取值为 {1, 2, 3} 之一。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} guess\n * @param {number[]} answer\n * @return {number}\n */\nvar game = function(guess, answer) {\n\n};",
        "py": "class Solution:\n    def game(self, guess: List[int], answer: List[int]) -> int:"
    }
}, {
    "questionId": "LCP 03",
    "titleSlug": "programmable-robot",
    "translatedTitle": "机器人大冒险",
    "translatedContent": ["力扣团队买了一个可编程机器人，机器人初始位置在原点(0, 0)。小伙伴事先给机器人输入一串指令command，机器人就会无限循环这条指令的步骤进行移动。指令有两种：",
        "", "U: 向y轴正方向移动一格",
        "R: 向x轴正方向移动一格。",
        "", "不幸的是，在 xy 平面上还有一些障碍物，他们的坐标用obstacles表示。机器人一旦碰到障碍物就会被损毁。",
        "", "给定终点坐标(x, y)，返回机器人能否完好地到达终点。如果能，返回true；否则返回false。",
        "", "示例 1：",
        "输入：command = \"URR\", obstacles = [], x = 3, y = 2",
        "输出：true",
        "解释：U(0, 1) -> R(1, 1) -> R(2, 1) -> U(2, 2) -> R(3, 2)。",
        "", "示例 2：",
        "输入：command = \"URR\", obstacles = [[2, 2]], x = 3, y = 2",
        "输出：false",
        "解释：机器人在到达终点前会碰到(2, 2)的障碍物。",
        "", "示例 3：",
        "输入：command = \"URR\", obstacles = [[4, 2]], x = 3, y = 2",
        "输出：true",
        "解释：到达终点后，再碰到障碍物也不影响返回结果。",
        "", "限制：",
        "", "2 <= command的长度 <= 1000",
        "command由U，R构成，且至少有一个U，至少有一个R",
        "0 <= x <= 1e9, 0 <= y <= 1e9",
        "0 <= obstacles的长度 <= 1000",
        "obstacles[i]不为原点或者终点"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} command\n * @param {number[][]} obstacles\n * @param {number} x\n * @param {number} y\n * @return {boolean}\n */\nvar robot = function(command, obstacles, x, y) {\n\n};",
        "py": "class Solution:\n    def robot(self, command: str, obstacles: List[List[int]], x: int, y: int) -> bool:"
    }
}, {
    "questionId": "LCP 05",
    "titleSlug": "coin-bonus",
    "translatedTitle": "发 LeetCoin",
    "translatedContent": ["力扣决定给一个刷题团队发LeetCoin作为奖励。同时，为了监控给大家发了多少LeetCoin，力扣有时候也会进行查询。",
        "", "该刷题团队的管理模式可以用一棵树表示：",
        "", "团队只有一个负责人，编号为1。除了该负责人外，每个人有且仅有一个领导（负责人没有领导）；",
        "不存在循环管理的情况，如A管理B，B管理C，C管理A。",
        "", "力扣想进行的操作有以下三种：",
        "", "给团队的一个成员（也可以是负责人）发一定数量的LeetCoin；",
        "给团队的一个成员（也可以是负责人），以及他/她管理的所有人（即他/她的下属、他/她下属的下属，&hellip;&hellip;），发一定数量的LeetCoin；",
        "查询某一个成员（也可以是负责人），以及他/她管理的所有人被发到的LeetCoin之和。",
        "", "输入：",
        "", "N表示团队成员的个数（编号为1～N，负责人为1）；",
        "leadership是大小为(N - 1) * 2的二维数组，其中每个元素[a, b]代表b是a的下属；",
        "operations是一个长度为Q的二维数组，代表以时间排序的操作，格式如下：",
        "", "operations[i][0] = 1: 代表第一种操作，operations[i][1]代表成员的编号，operations[i][2]代表LeetCoin的数量；",
        "operations[i][0] = 2: 代表第二种操作，operations[i][1]代表成员的编号，operations[i][2]代表LeetCoin的数量；",
        "operations[i][0] = 3: 代表第三种操作，operations[i][1]代表成员的编号；",
        "", "输出：",
        "", "返回一个数组，数组里是每次查询的返回值（发LeetCoin的操作不需要任何返回值）。由于发的LeetCoin很多，请把每次查询的结果模1e9+7 (1000000007)。",
        "", "示例 1：",
        "输入：N = 6, leadership = [[1, 2], [1, 6], [2, 3], [2, 5], [1, 4]], operations = [[1, 1, 500], [2, 2, 50], [3, 1], [2, 6, 15], [3, 1]]",
        "输出：[650, 665]",
        "解释：团队的管理关系见下图。",
        "第一次查询时，每个成员得到的LeetCoin的数量分别为（按编号顺序）：500, 50, 50, 0, 50, 0;",
        "第二次查询时，每个成员得到的LeetCoin的数量分别为（按编号顺序）：500, 50, 50, 0, 50, 15.",
        "", "限制：",
        "", "1 <= N <= 50000",
        "1 <= Q <= 50000",
        "operations[i][0] != 3 时，1 <= operations[i][2] <= 5000"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @param {number[][]} leadership\n * @param {number[][]} operations\n * @return {number[]}\n */\nvar bonus = function(n, leadership, operations) {\n\n};",
        "py": "class Solution:\n    def bonus(self, n: int, leadership: List[List[int]], operations: List[List[int]]) -> List[int]:"
    }
}, {
    "questionId": "LCP 04",
    "titleSlug": "broken-board-dominoes",
    "translatedTitle": "覆盖",
    "translatedContent": ["你有一块棋盘，棋盘上有一些格子已经坏掉了。你还有无穷块大小为1 * 2的多米诺骨牌，你想把这些骨牌不重叠地覆盖在完好的格子上，请找出你最多能在棋盘上放多少块骨牌？这些骨牌可以横着或者竖着放。",
        "", "输入：n, m代表棋盘的大小；broken是一个b * 2的二维数组，其中每个元素代表棋盘上每一个坏掉的格子的位置。",
        "", "输出：一个整数，代表最多能在棋盘上放的骨牌数。",
        "", "示例 1：",
        "输入：n = 2, m = 3, broken = [[1, 0], [1, 1]]",
        "输出：2",
        "解释：我们最多可以放两块骨牌：[[0, 0], [0, 1]]以及[[0, 2], [1, 2]]。（见下图）",
        "", "示例 2：",
        "输入：n = 3, m = 3, broken = []",
        "输出：4",
        "解释：下图是其中一种可行的摆放方式",
        "", "限制：",
        "", "1 <= n <= 8",
        "1 <= m <= 8",
        "0 <= b <= n * m"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @param {number} m\n * @param {number[][]} broken\n * @return {number}\n */\nvar domino = function(n, m, broken) {\n\n};",
        "py": "class Solution:\n    def domino(self, n: int, m: int, broken: List[List[int]]) -> int:"
    }
}, {
    "questionId": "LCP 02",
    "titleSlug": "deep-dark-fraction",
    "translatedTitle": "分式化简",
    "translatedContent": ["有一个同学在学习分式。他需要将一个连分数化成最简分数，你能帮助他吗？",
        "", "连分数是形如上图的分式。在本题中，所有系数都是大于等于0的整数。",
        "", "输入的cont代表连分数的系数（cont[0]代表上图的a0，以此类推）。返回一个长度为2的数组[n, m]，使得连分数的值等于n / m，且n, m最大公约数为1。",
        "", "示例 1：",
        "输入：cont = [3, 2, 0, 2]",
        "输出：[13, 4]",
        "解释：原连分数等价于3 + (1 / (2 + (1 / (0 + 1 / 2))))。注意[26, 8], [-13, -4]都不是正确答案。",
        "", "示例 2：",
        "输入：cont = [0, 0, 3]",
        "输出：[3, 1]",
        "解释：如果答案是整数，令分母为1即可。",
        "", "限制：",
        "", "cont[i] >= 0",
        "1 <= cont的长度 <= 10",
        "cont最后一个元素不等于0",
        "答案的n, m的取值都能被32位int整型存下（即不超过2 ^ 31 - 1）。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} cont\n * @return {number[]}\n */\nvar fraction = function(cont) {\n\n};",
        "py": "class Solution:\n    def fraction(self, cont: List[int]) -> List[int]:"
    }
}, {
    "questionId": "0284",
    "titleSlug": "peeking-iterator",
    "translatedTitle": "顶端迭代器",
    "translatedContent": ["给定一个迭代器类的接口，接口包含两个方法： next() 和 hasNext()。设计并实现一个支持 peek() 操作的顶端迭代器 -- 其本质就是把原本应由 next() 方法返回的元素 peek() 出来。",
        "", "示例:",
        "假设迭代器被初始化为列表 [1,2,3]。",
        "", "调用 next() 返回 1，得到列表中的第一个元素。",
        "现在调用 peek() 返回 2，下一个元素。在此之后调用 next() 仍然返回 2。",
        "最后一次调用 next() 返回 3，末尾元素。在此之后调用 hasNext() 应该返回 false。",
        "", "进阶：你将如何拓展你的设计？使之变得通用化，从而适应所有的类型，而不只是整数型？"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * // This is the Iterator's API interface.\n * // You should not implement it, or speculate about its implementation.\n * function Iterator() {\n *    @ return {number}\n *    this.next = function() { // return the next number of the iterator\n *       ...\n *    }; \n *\n *    @return {boolean}\n *    this.hasNext = function() { // return true if it still has numbers\n *       ...\n *    };\n * };\n */\n\n/**\n * @param {Iterator} iterator\n */\nvar PeekingIterator = function(iterator) {\n    \n};\n\n/**\n * @return {number}\n */\nPeekingIterator.prototype.peek = function() {\n    \n};\n\n/**\n * @return {number}\n */\nPeekingIterator.prototype.next = function() {\n    \n};\n\n/**\n * @return {boolean}\n */\nPeekingIterator.prototype.hasNext = function() {\n    \n};\n\n/** \n * Your PeekingIterator object will be instantiated and called as such:\n * var obj = new PeekingIterator(arr)\n * var param_1 = obj.peek()\n * var param_2 = obj.next()\n * var param_3 = obj.hasNext()\n */",
        "py": "# Below is the interface for Iterator, which is already defined for you.\n#\n# class Iterator:\n#     def __init__(self, nums):\n#         \"\"\"\n#         Initializes an iterator object to the beginning of a list.\n#         :type nums: List[int]\n#         \"\"\"\n#\n#     def hasNext(self):\n#         \"\"\"\n#         Returns true if the iteration has more elements.\n#         :rtype: bool\n#         \"\"\"\n#\n#     def next(self):\n#         \"\"\"\n#         Returns the next element in the iteration.\n#         :rtype: int\n#         \"\"\"\n\nclass PeekingIterator:\n    def __init__(self, iterator):\n        \"\"\"\n        Initialize your data structure here.\n        :type iterator: Iterator\n        \"\"\"\n        \n\n    def peek(self):\n        \"\"\"\n        Returns the next element in the iteration without advancing the iterator.\n        :rtype: int\n        \"\"\"\n        \n\n    def next(self):\n        \"\"\"\n        :rtype: int\n        \"\"\"\n        \n\n    def hasNext(self):\n        \"\"\"\n        :rtype: bool\n        \"\"\"\n        \n\n# Your PeekingIterator object will be instantiated and called as such:\n# iter = PeekingIterator(Iterator(nums))\n# while iter.hasNext():\n#     val = iter.peek()   # Get the next element but not advance the iterator.\n#     iter.next()         # Should return the same value as [val]."
    }
}, {
    "questionId": "0558",
    "titleSlug": "logical-or-of-two-binary-grids-represented-as-quad-trees",
    "translatedTitle": "四叉树交集",
    "translatedContent": ["二进制矩阵中的所有元素不是 0 就是 1 。",
        "", "给你两个四叉树，quadTree1 和 quadTree2。其中 quadTree1 表示一个 n * n 二进制矩阵，而 quadTree2 表示另一个 n * n 二进制矩阵。",
        "", "请你返回一个表示 n * n 二进制矩阵的四叉树，它是 quadTree1 和 quadTree2 所表示的两个二进制矩阵进行 按位逻辑或运算 的结果。",
        "", "注意，当 isLeaf 为 False 时，你可以把 True 或者 False 赋值给节点，两种值都会被判题机制 接受 。",
        "", "四叉树数据结构中，每个内部节点只有四个子节点。此外，每个节点都有两个属性：",
        "", "val：储存叶子结点所代表的区域的值。1 对应 True，0 对应 False；",
        "isLeaf: 当这个节点是一个叶子结点时为 True，如果它有 4 个子节点则为 False 。",
        "", "class Node {",
        "    public boolean val;",
        "    public boolean isLeaf;",
        "    public Node topLeft;",
        "    public Node topRight;",
        "    public Node bottomLeft;",
        "    public Node bottomRight;",
        "}",
        "", "我们可以按以下步骤为二维区域构建四叉树：",
        "", "如果当前网格的值相同（即，全为 0 或者全为 1），将 isLeaf 设为 True ，将 val 设为网格相应的值，并将四个子节点都设为 Null 然后停止。",
        "如果当前网格的值不同，将 isLeaf 设为 False， 将 val 设为任意值，然后如下图所示，将当前网格划分为四个子网格。",
        "使用适当的子网格递归每个子节点。",
        "", "如果你想了解更多关于四叉树的内容，可以参考 wiki 。",
        "", "四叉树格式：",
        "", "输出为使用层序遍历后四叉树的序列化形式，其中 null 表示路径终止符，其下面不存在节点。",
        "", "它与二叉树的序列化非常相似。唯一的区别是节点以列表形式表示 [isLeaf, val] 。",
        "", "如果 isLeaf 或者 val 的值为 True ，则表示它在列表 [isLeaf, val] 中的值为 1 ；如果 isLeaf 或者 val 的值为 False ，则表示值为 0 。",
        "", "示例 1：",
        "输入：quadTree1 = [[0,1],[1,1],[1,1],[1,0],[1,0]]",
        ", quadTree2 = [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]",
        "输出：[[0,0],[1,1],[1,1],[1,1],[1,0]]",
        "解释：quadTree1 和 quadTree2 如上所示。由四叉树所表示的二进制矩阵也已经给出。",
        "如果我们对这两个矩阵进行按位逻辑或运算，则可以得到下面的二进制矩阵，由一个作为结果的四叉树表示。",
        "注意，我们展示的二进制矩阵仅仅是为了更好地说明题意，你无需构造二进制矩阵来获得结果四叉树。",
        "", "示例 2：",
        "输入：quadTree1 = [[1,0]]",
        ", quadTree2 = [[1,0]]",
        "输出：[[1,0]]",
        "解释：两个数所表示的矩阵大小都为 1*1，值全为 0 ",
        "结果矩阵大小为 1*1，值全为 0 。",
        "", "示例 3：",
        "输入：quadTree1 = [[0,0],[1,0],[1,0],[1,1],[1,1]]",
        ", quadTree2 = [[0,0],[1,1],[1,1],[1,0],[1,1]]",
        "输出：[[1,1]]",
        "", "示例 4：",
        "输入：quadTree1 = [[0,0],[1,1],[1,0],[1,1],[1,1]]",
        ", quadTree2 = [[0,0],[1,1],[0,1],[1,1],[1,1],null,null,null,null,[1,1],[1,0],[1,0],[1,1]]",
        "输出：[[0,0],[1,1],[0,1],[1,1],[1,1],null,null,null,null,[1,1],[1,0],[1,0],[1,1]]",
        "", "示例 5：",
        "输入：quadTree1 = [[0,1],[1,0],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]",
        ", quadTree2 = [[0,1],[0,1],[1,0],[1,1],[1,0],[1,0],[1,0],[1,1],[1,1]]",
        "输出：[[0,0],[0,1],[0,1],[1,1],[1,0],[1,0],[1,0],[1,1],[1,1],[1,0],[1,0],[1,1],[1,1]]",
        "", "提示：",
        "quadTree1 和 quadTree2 都是符合题目要求的四叉树，每个都代表一个 n * n 的矩阵。",
        "n == 2^x ，其中 0 <= x <= 9."
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * // Definition for a QuadTree node.\n * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {\n *    this.val = val;\n *    this.isLeaf = isLeaf;\n *    this.topLeft = topLeft;\n *    this.topRight = topRight;\n *    this.bottomLeft = bottomLeft;\n *    this.bottomRight = bottomRight;\n * };\n */\n\n/**\n * @param {Node} quadTree1\n * @param {Node} quadTree2\n * @return {Node}\n */\nvar intersect = function(quadTree1, quadTree2) {\n    \n};",
        "py": "\"\"\"\n# Definition for a QuadTree node.\nclass Node:\n    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):\n        self.val = val\n        self.isLeaf = isLeaf\n        self.topLeft = topLeft\n        self.topRight = topRight\n        self.bottomLeft = bottomLeft\n        self.bottomRight = bottomRight\n\"\"\"\n\nclass Solution:\n    def intersect(self, quadTree1: 'Node', quadTree2: 'Node') -> 'Node':\n        "
    }
}, {
    "questionId": "0690",
    "titleSlug": "employee-importance",
    "translatedTitle": "员工的重要性",
    "translatedContent": ["给定一个保存员工信息的数据结构，它包含了员工唯一的id，重要度 和 直系下属的id。",
        "",
        "比如，员工1是员工2的领导，员工2是员工3的领导。他们相应的重要度为15, 10, 5。那么员工1的数据结构是[1, 15, [2]]，员工2的数据结构是[2, 10, [3]]，员工3的数据结构是[3, 5, []]。注意虽然员工3也是员工1的一个下属，但是由于并不是直系下属，因此没有体现在员工1的数据结构中。",
        "", "现在输入一个公司的所有员工信息，以及单个员工id，返回这个员工和他所有下属的重要度之和。",
        "", "示例 1:",
        "输入: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1",
        "输出: 11",
        "解释:",
        "员工1自身的重要度是5，他有两个直系下属2和3，而且2和3的重要度均为3。因此员工1的总重要度是 5 + 3 + 3 = 11。",
        "", "注意:",
        "", "一个员工最多有一个直系领导，但是可以有多个直系下属",
        "员工数量不超过2000。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * Definition for Employee.\n * function Employee(id, importance, subordinates) {\n *     this.id = id;\n *     this.importance = importance;\n *     this.subordinates = subordinates;\n * }\n */\n\n/**\n * @param {Employee[]} employees\n * @param {number} id\n * @return {number}\n */\nvar GetImportance = function(employees, id) {\n    \n};",
        "py": "\"\"\"\n# Definition for Employee.\nclass Employee:\n    def __init__(self, id: int, importance: int, subordinates: List[int]):\n        self.id = id\n        self.importance = importance\n        self.subordinates = subordinates\n\"\"\"\n\nclass Solution:\n    def getImportance(self, employees: List['Employee'], id: int) -> int:\n        "
    }
}, {
    "questionId": "0828",
    "titleSlug": "count-unique-characters-of-all-substrings-of-a-given-string",
    "translatedTitle": "统计子串中的唯一字符",
    "translatedContent": ["我们定义了一个函数 countUniqueChars(s) 来统计字符串 s 中的唯一字符，并返回唯一字符的个数。",
        "", "例如：s = \"LEETCODE\" ，则其中 \"L\", \"T\",\"C\",\"O\",\"D\" 都是唯一字符，因为它们只出现一次，所以 countUniqueChars(s) = 5 。",
        "", "本题将会给你一个字符串 s ，我们需要返回 countUniqueChars(t) 的总和，其中 t 是 s 的子字符串。注意，某些子字符串可能是重复的，但你统计时也必须算上这些重复的子字符串（也就是说，你必须统计 s 的所有子字符串中的唯一字符）。",
        "", "由于答案可能非常大，请将结果 mod 10 ^ 9 + 7 后再返回。",
        "", "示例 1：",
        "输入: \"ABC\"",
        "输出: 10",
        "解释: 所有可能的子串为：\"A\",\"B\",\"C\",\"AB\",\"BC\" 和 \"ABC\"。",
        "     其中，每一个子串都由独特字符构成。",
        "     所以其长度总和为：1 + 1 + 1 + 2 + 2 + 3 = 10",
        "", "示例 2：",
        "输入: \"ABA\"",
        "输出: 8",
        "解释: 除了 countUniqueChars(\"ABA\") = 1 之外，其余与示例 1 相同。",
        "", "示例 3：",
        "输入：s = \"LEETCODE\"",
        "输出：92",
        "", "提示：",
        "0 <= s.length <= 10^4",
        "s 只包含大写英文字符"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {string} s\n * @return {number}\n */\nvar uniqueLetterString = function(s) {\n\n};",
        "py": "class Solution:\n    def uniqueLetterString(self, s: str) -> int:"
    }
}, {
    "questionId": "1114",
    "titleSlug": "print-in-order",
    "translatedTitle": "按序打印",
    "translatedContent": ["我们提供了一个类：",
        "", "public class Foo {",
        "  public void one() { print(\"one\"); }",
        "  public void two() { print(\"two\"); }",
        "  public void three() { print(\"three\"); }",
        "}",
        "", "三个不同的线程将会共用一个 Foo 实例。",
        "", "线程 A 将会调用 one() 方法",
        "线程 B 将会调用 two() 方法",
        "线程 C 将会调用 three() 方法",
        "", "请设计修改程序，以确保 two() 方法在 one() 方法之后被执行，three() 方法在 two() 方法之后被执行。",
        "", "示例 1:",
        "输入: [1,2,3]",
        "输出: \"onetwothree\"",
        "解释: ",
        "有三个线程会被异步启动。",
        "输入 [1,2,3] 表示线程 A 将会调用 one() 方法，线程 B 将会调用 two() 方法，线程 C 将会调用 three() 方法。",
        "正确的输出是 \"onetwothree\"。",
        "", "示例 2:",
        "输入: [1,3,2]",
        "输出: \"onetwothree\"",
        "解释: ",
        "输入 [1,3,2] 表示线程 A 将会调用 one() 方法，线程 B 将会调用 three() 方法，线程 C 将会调用 two() 方法。",
        "正确的输出是 \"onetwothree\"。",
        "", "注意:",
        "", "尽管输入中的数字似乎暗示了顺序，但是我们并不保证线程在操作系统中的调度顺序。",
        "", "你看到的输入格式主要是为了确保测试的全面性。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "N/A",
        "py": "class Foo:\n    def __init__(self):\n        pass\n\n\n    def first(self, printFirst: 'Callable[[], None]') -> None:\n        \n        # printFirst() outputs \"first\". Do not change or remove this line.\n        printFirst()\n\n\n    def second(self, printSecond: 'Callable[[], None]') -> None:\n        \n        # printSecond() outputs \"second\". Do not change or remove this line.\n        printSecond()\n\n\n    def third(self, printThird: 'Callable[[], None]') -> None:\n        \n        # printThird() outputs \"third\". Do not change or remove this line.\n        printThird()"
    }
}, {
    "questionId": "1115",
    "titleSlug": "print-foobar-alternately",
    "translatedTitle": "交替打印FooBar",
    "translatedContent": ["我们提供一个类：",
        "", "class FooBar {",
        "  public void foo() {",
        "    for (int i = 0; i < n; i++) {",
        "      print(\"foo\");",
        "    }",
        "  }",
        "", "  public void bar() {",
        "    for (int i = 0; i < n; i++) {",
        "      print(\"bar\");",
        "    }",
        "  }",
        "}",
        "", "两个不同的线程将会共用一个 FooBar 实例。其中一个线程将会调用 foo() 方法，另一个线程将会调用 bar() 方法。",
        "", "请设计修改程序，以确保 \"foobar\" 被输出 n 次。",
        "", "示例 1:",
        "输入: n = 1",
        "输出: \"foobar\"",
        "解释: 这里有两个线程被异步启动。其中一个调用 foo() 方法, 另一个调用 bar() 方法，\"foobar\" 将被输出一次。",
        "", "示例 2:",
        "输入: n = 2",
        "输出: \"foobarfoobar\"",
        "解释: \"foobar\" 将被输出两次。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "N/A",
        "py": "class FooBar:\n    def __init__(self, n):\n        self.n = n\n\n\n    def foo(self, printFoo: 'Callable[[], None]') -> None:\n        \n        for i in range(self.n):\n            \n            # printFoo() outputs \"foo\". Do not change or remove this line.\n        \tprintFoo()\n\n\n    def bar(self, printBar: 'Callable[[], None]') -> None:\n        \n        for i in range(self.n):\n            \n            # printBar() outputs \"bar\". Do not change or remove this line.\n        \tprintBar()"
    }
}, {
    "questionId": "1116",
    "titleSlug": "print-zero-even-odd",
    "translatedTitle": "打印零与奇偶数",
    "translatedContent": ["假设有这么一个类：",
        "", "class ZeroEvenOdd {",
        "  public ZeroEvenOdd(int n) { ... }      // 构造函数",
        "  public void zero(printNumber) { ... }  // 仅打印出 0",
        "  public void even(printNumber) { ... }  // 仅打印出 偶数",
        "  public void odd(printNumber) { ... }   // 仅打印出 奇数",
        "}",
        "", "相同的一个 ZeroEvenOdd 类实例将会传递给三个不同的线程：",
        "", "线程 A 将调用 zero()，它只输出 0 。",
        "线程 B 将调用 even()，它只输出偶数。",
        "线程 C 将调用 odd()，它只输出奇数。",
        "", "每个线程都有一个 printNumber 方法来输出一个整数。请修改给出的代码以输出整数序列 010203040506... ，其中序列的长度必须为 2n。",
        "", "示例 1：",
        "输入：n = 2",
        "输出：\"0102\"",
        "说明：三条线程异步执行，其中一个调用 zero()，另一个线程调用 even()，最后一个线程调用odd()。正确的输出为 \"0102\"。",
        "", "示例 2：",
        "输入：n = 5",
        "输出：\"0102030405\""
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "N/A",
        "py": "class ZeroEvenOdd:\n    def __init__(self, n):\n        self.n = n\n        \n        \n\t# printNumber(x) outputs \"x\", where x is an integer.\n    def zero(self, printNumber: 'Callable[[int], None]') -> None:\n        \n        \n        \n    def even(self, printNumber: 'Callable[[int], None]') -> None:\n        \n        \n        \n    def odd(self, printNumber: 'Callable[[int], None]') -> None:\n        \n        "
    }
}, {
    "questionId": "1117",
    "titleSlug": "building-h2o",
    "translatedTitle": "H2O 生成",
    "translatedContent": ["现在有两种线程，氢 oxygen 和氧 hydrogen，你的目标是组织这两种线程来产生水分子。",
        "", "存在一个屏障（barrier）使得每个线程必须等候直到一个完整水分子能够被产生出来。",
        "", "氢和氧线程会被分别给予 releaseHydrogen 和 releaseOxygen 方法来允许它们突破屏障。",
        "", "这些线程应该三三成组突破屏障并能立即组合产生一个水分子。",
        "", "你必须保证产生一个水分子所需线程的结合必须发生在下一个水分子产生之前。",
        "", "换句话说:",
        "", "如果一个氧线程到达屏障时没有氢线程到达，它必须等候直到两个氢线程到达。",
        "如果一个氢线程到达屏障时没有其它线程到达，它必须等候直到一个氧线程和另一个氢线程到达。",
        "", "书写满足这些限制条件的氢、氧线程同步代码。",
        "", "示例 1:",
        "输入: \"HOH\"",
        "输出: \"HHO\"",
        "解释: \"HOH\" 和 \"OHH\" 依然都是有效解。",
        "", "示例 2:",
        "输入: \"OOHHHH\"",
        "输出: \"HHOHHO\"",
        "解释: \"HOHHHO\", \"OHHHHO\", \"HHOHOH\", \"HOHHOH\", \"OHHHOH\", \"HHOOHH\", \"HOHOHH\" 和 \"OHHOHH\" 依然都是有效解。",
        "", "限制条件:",
        "", "输入字符串的总长将会是 3n, 1 &le; n &le; 50；",
        "输入字符串中的 &ldquo;H&rdquo; 总数将会是 2n；",
        "输入字符串中的 &ldquo;O&rdquo; 总数将会是 n。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "N/A",
        "py": "class H2O:\n    def __init__(self):\n        pass\n\n\n    def hydrogen(self, releaseHydrogen: 'Callable[[], None]') -> None:\n        \n        # releaseHydrogen() outputs \"H\". Do not change or remove this line.\n        releaseHydrogen()\n\n\n    def oxygen(self, releaseOxygen: 'Callable[[], None]') -> None:\n        \n        # releaseOxygen() outputs \"O\". Do not change or remove this line.\n        releaseOxygen()"
    }
}, {
    "questionId": "1195",
    "titleSlug": "fizz-buzz-multithreaded",
    "translatedTitle": "交替打印字符串",
    "translatedContent": ["编写一个可以从 1 到 n 输出代表这个数字的字符串的程序，但是：",
        "", "如果这个数字可以被 3 整除，输出 \"fizz\"。",
        "如果这个数字可以被 5 整除，输出 \"buzz\"。",
        "如果这个数字可以同时被 3 和 5 整除，输出 \"fizzbuzz\"。",
        "", "例如，当 n = 15，输出： 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz。",
        "", "假设有这么一个类：",
        "", "class FizzBuzz {",
        "  public FizzBuzz(int n) { ... }               // constructor",
        "  public void fizz(printFizz) { ... }          // only output \"fizz\"",
        "  public void buzz(printBuzz) { ... }          // only output \"buzz\"",
        "  public void fizzbuzz(printFizzBuzz) { ... }  // only output \"fizzbuzz\"",
        "  public void number(printNumber) { ... }      // only output the numbers",
        "}",
        "", "请你实现一个有四个线程的多线程版  FizzBuzz， 同一个 FizzBuzz 实例会被如下四个线程使用：",
        "", "线程A将调用 fizz() 来判断是否能被 3 整除，如果可以，则输出 fizz。",
        "线程B将调用 buzz() 来判断是否能被 5 整除，如果可以，则输出 buzz。",
        "线程C将调用 fizzbuzz() 来判断是否同时能被 3 和 5 整除，如果可以，则输出 fizzbuzz。",
        "线程D将调用 number() 来实现输出既不能被 3 整除也不能被 5 整除的数字。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "N/A",
        "py": "class FizzBuzz:\n    def __init__(self, n: int):\n        self.n = n\n\n    # printFizz() outputs \"fizz\"\n    def fizz(self, printFizz: 'Callable[[], None]') -> None:\n    \t\n\n    # printBuzz() outputs \"buzz\"\n    def buzz(self, printBuzz: 'Callable[[], None]') -> None:\n    \t\n\n    # printFizzBuzz() outputs \"fizzbuzz\"\n    def fizzbuzz(self, printFizzBuzz: 'Callable[[], None]') -> None:\n        \n\n    # printNumber(x) outputs \"x\", where x is an integer.\n    def number(self, printNumber: 'Callable[[int], None]') -> None:\n        "
    }
}, {
    "questionId": "1226",
    "titleSlug": "the-dining-philosophers",
    "translatedTitle": "哲学家进餐",
    "translatedContent": ["5 个沉默寡言的哲学家围坐在圆桌前，每人面前一盘意面。叉子放在哲学家之间的桌面上。（5 个哲学家，5 根叉子）",
        "",
        "所有的哲学家都只会在思考和进餐两种行为间交替。哲学家只有同时拿到左边和右边的叉子才能吃到面，而同一根叉子在同一时间只能被一个哲学家使用。每个哲学家吃完面后都需要把叉子放回桌面以供其他哲学家吃面。只要条件允许，哲学家可以拿起左边或者右边的叉子，但在没有同时拿到左右叉子时不能进食。",
        "", "假设面的数量没有限制，哲学家也能随便吃，不需要考虑吃不吃得下。",
        "", "设计一个进餐规则（并行算法）使得每个哲学家都不会挨饿；也就是说，在没有人知道别人什么时候想吃东西或思考的情况下，每个哲学家都可以在吃饭和思考之间一直交替下去。",
        "", "问题描述和图片来自维基百科 wikipedia.org",
        "", "哲学家从 0 到 4 按 顺时针 编号。请实现函数 void wantsToEat(philosopher, pickLeftFork, pickRightFork, eat, putLeftFork, putRightFork)：",
        "", "philosopher 哲学家的编号。",
        "pickLeftFork 和 pickRightFork 表示拿起左边或右边的叉子。",
        "eat 表示吃面。",
        "putLeftFork 和 putRightFork 表示放下左边或右边的叉子。",
        "由于哲学家不是在吃面就是在想着啥时候吃面，所以思考这个方法没有对应的回调。",
        "", "给你 5 个线程，每个都代表一个哲学家，请你使用类的同一个对象来模拟这个过程。在最后一次调用结束之前，可能会为同一个哲学家多次调用该函数。",
        "", "示例：",
        "输入：n = 1",
        "输出：[[4,2,1],[4,1,1],[0,1,1],[2,2,1],[2,1,1],[2,0,3],[2,1,2],[2,2,2],[4,0,3],[4,1,2],[0,2,1],[4,2,2],[3,2,1],[3,1,1],[0,0,3],[0,1,2],[0,2,2],[1,2,1],[1,1,1],[3,0,3],[3,1,2],[3,2,2],[1,0,3],[1,1,2],[1,2,2]]",
        "解释:",
        "n 表示每个哲学家需要进餐的次数。",
        "输出数组描述了叉子的控制和进餐的调用，它的格式如下：",
        "output[i] = [a, b, c] (3个整数)",
        "- a 哲学家编号。",
        "- b 指定叉子：{1 : 左边, 2 : 右边}.",
        "- c 指定行为：{1 : 拿起, 2 : 放下, 3 : 吃面}。",
        "如 [4,2,1] 表示 4 号哲学家拿起了右边的叉子。",
        "", "提示：",
        "1 <= n <= 60"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "N/A",
        "py": "class DiningPhilosophers:\n\n    # call the functions directly to execute, for example, eat()\n    def wantsToEat(self,\n                   philosopher: int,\n                   pickLeftFork: 'Callable[[], None]',\n                   pickRightFork: 'Callable[[], None]',\n                   eat: 'Callable[[], None]',\n                   putLeftFork: 'Callable[[], None]',\n                   putRightFork: 'Callable[[], None]') -> None:\n        "
    }
}, {
    "questionId": "1394",
    "titleSlug": "find-lucky-integer-in-an-array",
    "translatedTitle": "找出数组中的幸运数",
    "translatedContent": ["在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。",
        "", "给你一个整数数组 arr，请你从中找出并返回一个幸运数。",
        "", "如果数组中存在多个幸运数，只需返回 最大 的那个。",
        "如果数组中不含幸运数，则返回 -1 。",
        "", "示例 1：",
        "输入：arr = [2,2,3,4]",
        "输出：2",
        "解释：数组中唯一的幸运数是 2 ，因为数值 2 的出现频次也是 2 。",
        "", "示例 2：",
        "输入：arr = [1,2,2,3,3,3]",
        "输出：3",
        "解释：1、2 以及 3 都是幸运数，只需要返回其中最大的 3 。",
        "", "示例 3：",
        "输入：arr = [2,2,2,3,3]",
        "输出：-1",
        "解释：数组中不存在幸运数。",
        "", "示例 4：",
        "输入：arr = [5]",
        "输出：-1",
        "", "示例 5：",
        "输入：arr = [7,7,7,7,7,7,7]",
        "输出：7",
        "", "提示：",
        "1 <= arr.length <= 500",
        "1 <= arr[i] <= 500"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} arr\n * @return {number}\n */\nvar findLucky = function(arr) {\n    \n};",
        "py": "class Solution:\n    def findLucky(self, arr: List[int]) -> int:\n        "
    }
}, {
    "questionId": "1395",
    "titleSlug": "count-number-of-teams",
    "translatedTitle": "统计作战单位数",
    "translatedContent": ["n 名士兵站成一排。每个士兵都有一个 独一无二 的评分 rating 。",
        "", "每 3 个士兵可以组成一个作战单位，分组规则如下：",
        "", "从队伍中选出下标分别为 i、j、k 的 3 名士兵，他们的评分分别为 rating[i]、rating[j]、rating[k]",
        "作战单位需满足： rating[i] < rating[j] < rating[k] 或者 rating[i] > rating[j] > rating[k] ，其中  0 <= i < j < k < n",
        "", "请你返回按上述条件可以组建的作战单位数量。每个士兵都可以是多个作战单位的一部分。",
        "", "示例 1：",
        "输入：rating = [2,5,3,4,1]",
        "输出：3",
        "解释：我们可以组建三个作战单位 (2,3,4)、(5,4,1)、(5,3,1) 。",
        "", "示例 2：",
        "输入：rating = [2,1,3]",
        "输出：0",
        "解释：根据题目条件，我们无法组建作战单位。",
        "", "示例 3：",
        "输入：rating = [1,2,3,4]",
        "输出：4",
        "", "提示：",
        "n == rating.length",
        "1 <= n <= 200",
        "1 <= rating[i] <= 10^5",
        "", ""
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} rating\n * @return {number}\n */\nvar numTeams = function(rating) {\n    \n};",
        "py": "class Solution:\n    def numTeams(self, rating: List[int]) -> int:\n        "
    }
}, {
    "questionId": "1396",
    "titleSlug": "design-underground-system",
    "translatedTitle": "设计地铁系统",
    "translatedContent": ["请你实现一个类 UndergroundSystem ，它支持以下 3 种方法：",
        "", "1. checkIn(int id, string stationName, int t)",
        "", "编号为 id 的乘客在 t 时刻进入地铁站 stationName 。",
        "一个乘客在同一时间只能在一个地铁站进入或者离开。",
        "", "2. checkOut(int id, string stationName, int t)",
        "", "编号为 id 的乘客在 t 时刻离开地铁站 stationName 。",
        "", "3. getAverageTime(string startStation, string endStation) ",
        "", "返回从地铁站 startStation 到地铁站 endStation 的平均花费时间。",
        "平均时间计算的行程包括当前为止所有从 startStation 直接到达 endStation 的行程。",
        "调用 getAverageTime 时，询问的路线至少包含一趟行程。",
        "", "你可以假设所有对 checkIn 和 checkOut 的调用都是符合逻辑的。也就是说，如果一个顾客在 t1 时刻到达某个地铁站，那么他离开的时间 t2 一定满足 t2 > t1 。所有的事件都按时间顺序给出。",
        "", "示例：",
        "输入：",
        "[\"UndergroundSystem\",\"checkIn\",\"checkIn\",\"checkIn\",\"checkOut\",\"checkOut\",\"checkOut\",\"getAverageTime\",\"getAverageTime\",\"checkIn\",\"getAverageTime\",\"checkOut\",\"getAverageTime\"]",
        "[[],[45,\"Leyton\",3],[32,\"Paradise\",8],[27,\"Leyton\",10],[45,\"Waterloo\",15],[27,\"Waterloo\",20],[32,\"Cambridge\",22],[\"Paradise\",\"Cambridge\"],[\"Leyton\",\"Waterloo\"],[10,\"Leyton\",24],[\"Leyton\",\"Waterloo\"],[10,\"Waterloo\",38],[\"Leyton\",\"Waterloo\"]]",
        "", "输出：",
        "[null,null,null,null,null,null,null,14.0,11.0,null,11.0,null,12.0]",
        "", "解释：",
        "UndergroundSystem undergroundSystem = new UndergroundSystem();",
        "undergroundSystem.checkIn(45, \"Leyton\", 3);",
        "undergroundSystem.checkIn(32, \"Paradise\", 8);",
        "undergroundSystem.checkIn(27, \"Leyton\", 10);",
        "undergroundSystem.checkOut(45, \"Waterloo\", 15);",
        "undergroundSystem.checkOut(27, \"Waterloo\", 20);",
        "undergroundSystem.checkOut(32, \"Cambridge\", 22);",
        "undergroundSystem.getAverageTime(\"Paradise\", \"Cambridge\");       // 返回 14.0。从 \"Paradise\"（时刻 8）到 \"Cambridge\"(时刻 22)的行程只有一趟",
        "undergroundSystem.getAverageTime(\"Leyton\", \"Waterloo\");          // 返回 11.0。总共有 2 躺从 \"Leyton\" 到 \"Waterloo\" 的行程，编号为 id=45 的乘客出发于 time=3 到达于 time=15，编号为 id=27 的乘客于 time=10 出发于 time=20 到达。所以平均时间为 ( (15-3) + (20-10) ) / 2 = 11.0",
        "undergroundSystem.checkIn(10, \"Leyton\", 24);",
        "undergroundSystem.getAverageTime(\"Leyton\", \"Waterloo\");          // 返回 11.0",
        "undergroundSystem.checkOut(10, \"Waterloo\", 38);",
        "undergroundSystem.getAverageTime(\"Leyton\", \"Waterloo\");          // 返回 12.0",
        "", "提示：",
        "总共最多有 20000 次操作。",
        "1 <= id, t <= 10^6",
        "所有的字符串包含大写字母，小写字母和数字。",
        "1 <= stationName.length <= 10",
        "与标准答案误差在 10^-5 以内的结果都视为正确结果。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "\nvar UndergroundSystem = function() {\n\n};\n\n/** \n * @param {number} id \n * @param {string} stationName \n * @param {number} t\n * @return {void}\n */\nUndergroundSystem.prototype.checkIn = function(id, stationName, t) {\n\n};\n\n/** \n * @param {number} id \n * @param {string} stationName \n * @param {number} t\n * @return {void}\n */\nUndergroundSystem.prototype.checkOut = function(id, stationName, t) {\n\n};\n\n/** \n * @param {string} startStation \n * @param {string} endStation\n * @return {number}\n */\nUndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {\n\n};\n\n/**\n * Your UndergroundSystem object will be instantiated and called as such:\n * var obj = new UndergroundSystem()\n * obj.checkIn(id,stationName,t)\n * obj.checkOut(id,stationName,t)\n * var param_3 = obj.getAverageTime(startStation,endStation)\n */",
        "py": "class UndergroundSystem:\n\n    def __init__(self):\n\n\n    def checkIn(self, id: int, stationName: str, t: int) -> None:\n\n\n    def checkOut(self, id: int, stationName: str, t: int) -> None:\n\n\n    def getAverageTime(self, startStation: str, endStation: str) -> float:\n\n\n\n# Your UndergroundSystem object will be instantiated and called as such:\n# obj = UndergroundSystem()\n# obj.checkIn(id,stationName,t)\n# obj.checkOut(id,stationName,t)\n# param_3 = obj.getAverageTime(startStation,endStation)"
    }
}, {
    "questionId": "1397",
    "titleSlug": "find-all-good-strings",
    "translatedTitle": "找到所有好字符串",
    "translatedContent": ["给你两个长度为 n 的字符串 s1 和 s2 ，以及一个字符串 evil 。请你返回 好字符串 的数目。",
        "", "好字符串 的定义为：它的长度为 n ，字典序大于等于 s1 ，字典序小于等于 s2 ，且不包含 evil 为子字符串。",
        "", "由于答案可能很大，请你返回答案对 10^9 + 7 取余的结果。",
        "", "示例 1：",
        "输入：n = 2, s1 = \"aa\", s2 = \"da\", evil = \"b\"",
        "输出：51 ",
        "解释：总共有 25 个以 &#39;a&#39; 开头的好字符串：\"aa\"，\"ac\"，\"ad\"，...，\"az\"。还有 25 个以 &#39;c&#39; 开头的好字符串：\"ca\"，\"cc\"，\"cd\"，...，\"cz\"。最后，还有一个以 &#39;d&#39; 开头的好字符串：\"da\"。",
        "", "示例 2：",
        "输入：n = 8, s1 = \"leetcode\", s2 = \"leetgoes\", evil = \"leet\"",
        "输出：0 ",
        "解释：所有字典序大于等于 s1 且小于等于 s2 的字符串都以 evil 字符串 \"leet\" 开头。所以没有好字符串。",
        "", "示例 3：",
        "输入：n = 2, s1 = \"gx\", s2 = \"gz\", evil = \"x\"",
        "输出：2",
        "", "提示：",
        "s1.length == n",
        "s2.length == n",
        "s1 <= s2",
        "1 <= n <= 500",
        "1 <= evil.length <= 50",
        "所有字符串都只包含小写英文字母。"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @param {string} s1\n * @param {string} s2\n * @param {string} evil\n * @return {number}\n */\nvar findGoodStrings = function(n, s1, s2, evil) {\n\n};",
        "py": "class Solution:\n    def findGoodStrings(self, n: int, s1: str, s2: str, evil: str) -> int:"
    }
}, {
    "questionId": "1399",
    "titleSlug": "count-largest-group",
    "translatedTitle": "统计最大组的数目",
    "translatedContent": ["给你一个整数 n 。请你先求出从 1 到 n 的每个整数 10 进制表示下的数位和（每一位上的数字相加），然后把数位和相等的数字放到同一个组中。",
        "", "请你统计每个组中的数字数目，并返回数字数目并列最多的组有多少个。",
        "", "示例 1：",
        "输入：n = 13",
        "输出：4",
        "解释：总共有 9 个组，将 1 到 13 按数位求和后这些组分别是：",
        "[1,10]，[2,11]，[3,12]，[4,13]，[5]，[6]，[7]，[8]，[9]。总共有 4 个组拥有的数字并列最多。",
        "", "示例 2：",
        "输入：n = 2",
        "输出：2",
        "解释：总共有 2 个大小为 1 的组 [1]，[2]。",
        "", "示例 3：",
        "输入：n = 15",
        "输出：6",
        "", "示例 4：",
        "输入：n = 24",
        "输出：5",
        "", "提示：",
        "1 <= n <= 10^4"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @return {number}\n */\nvar countLargestGroup = function(n) {\n    \n};",
        "py": "class Solution:\n    def countLargestGroup(self, n: int) -> int:\n        "
    }
}, {
    "questionId": "1400",
    "titleSlug": "construct-k-palindrome-strings",
    "translatedTitle": "构造 K 个回文字符串",
    "translatedContent": ["给你一个字符串 s 和一个整数 k 。请你用 s 字符串中 所有字符 构造 k 个非空 回文串 。",
        "", "如果你可以用 s 中所有字符构造 k 个回文字符串，那么请你返回 True ，否则返回 False 。",
        "", "示例 1：",
        "输入：s = \"annabelle\", k = 2",
        "输出：true",
        "解释：可以用 s 中所有字符构造 2 个回文字符串。",
        "一些可行的构造方案包括：\"anna\" + \"elble\"，\"anbna\" + \"elle\"，\"anellena\" + \"b\"",
        "", "示例 2：",
        "输入：s = \"leetcode\", k = 3",
        "输出：false",
        "解释：无法用 s 中所有字符构造 3 个回文串。",
        "", "示例 3：",
        "输入：s = \"true\", k = 4",
        "输出：true",
        "解释：唯一可行的方案是让 s 中每个字符单独构成一个字符串。",
        "", "示例 4：",
        "输入：s = \"yzyzyzyzyzyzyzy\", k = 2",
        "输出：true",
        "解释：你只需要将所有的 z 放在一个字符串中，所有的 y 放在另一个字符串中。那么两个字符串都是回文串。",
        "", "示例 5：",
        "输入：s = \"cr\", k = 7",
        "输出：false",
        "解释：我们没有足够的字符去构造 7 个回文串。",
        "", "提示：",
        "1 <= s.length <= 10^5",
        "s 中所有字符都是小写英文字母。",
        "1 <= k <= 10^5"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} s\n * @param {number} k\n * @return {boolean}\n */\nvar canConstruct = function(s, k) {\n    \n};",
        "py": "class Solution:\n    def canConstruct(self, s: str, k: int) -> bool:\n        "
    }
}, {
    "questionId": "1401",
    "titleSlug": "circle-and-rectangle-overlapping",
    "translatedTitle": "圆和矩形是否有重叠",
    "translatedContent": ["给你一个以 (radius, x_center, y_center) 表示的圆和一个与坐标轴平行的矩形 (x1, y1, x2, y2)，其中 (x1, y1) 是矩形左下角的坐标，(x2, y2) 是右上角的坐标。",
        "", "如果圆和矩形有重叠的部分，请你返回 True ，否则返回 False 。",
        "", "换句话说，请你检测是否 存在 点 (xi, yi) ，它既在圆上也在矩形上（两者都包括点落在边界上的情况）。",
        "", "示例 1：",
        "输入：radius = 1, x_center = 0, y_center = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1",
        "输出：true",
        "解释：圆和矩形有公共点 (1,0) ",
        "", "示例 2：",
        "输入：radius = 1, x_center = 0, y_center = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1",
        "输出：true",
        "", "示例 3：",
        "输入：radius = 1, x_center = 1, y_center = 1, x1 = -3, y1 = -3, x2 = 3, y2 = 3",
        "输出：true",
        "", "示例 4：",
        "输入：radius = 1, x_center = 1, y_center = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1",
        "输出：false",
        "", "提示：",
        "1 <= radius <= 2000",
        "-10^4 <= x_center, y_center, x1, y1, x2, y2 <= 10^4",
        "x1 < x2",
        "y1 < y2"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} radius\n * @param {number} x_center\n * @param {number} y_center\n * @param {number} x1\n * @param {number} y1\n * @param {number} x2\n * @param {number} y2\n * @return {boolean}\n */\nvar checkOverlap = function(radius, x_center, y_center, x1, y1, x2, y2) {\n    \n};",
        "py": "class Solution:\n    def checkOverlap(self, radius: int, x_center: int, y_center: int, x1: int, y1: int, x2: int, y2: int) -> bool:\n        "
    }
}, {
    "questionId": "1402",
    "titleSlug": "reducing-dishes",
    "translatedTitle": "做菜顺序",
    "translatedContent": ["一个厨师收集了他 n 道菜的满意程度 satisfaction ，这个厨师做出每道菜的时间都是 1 单位时间。",
        "", "一道菜的 「喜爱时间」系数定义为烹饪这道菜以及之前每道菜所花费的时间乘以这道菜的满意程度，也就是 time[i]*satisfaction[i] 。",
        "", "请你返回做完所有菜 「喜爱时间」总和的最大值为多少。",
        "", "你可以按 任意 顺序安排做菜的顺序，你也可以选择放弃做某些菜来获得更大的总和。",
        "", "示例 1：",
        "输入：satisfaction = [-1,-8,0,5,-9]",
        "输出：14",
        "解释：去掉第二道和最后一道菜，最大的喜爱时间系数和为 (-1*1 + 0*2 + 5*3 = 14) 。每道菜都需要花费 1 单位时间完成。",
        "", "示例 2：",
        "输入：satisfaction = [4,3,2]",
        "输出：20",
        "解释：按照原来顺序相反的时间做菜 (2*1 + 3*2 + 4*3 = 20)",
        "", "示例 3：",
        "输入：satisfaction = [-1,-4,-5]",
        "输出：0",
        "解释：大家都不喜欢这些菜，所以不做任何菜可以获得最大的喜爱时间系数。",
        "", "示例 4：",
        "输入：satisfaction = [-2,5,-1,0,3,-3]",
        "输出：35",
        "", "提示：",
        "n == satisfaction.length",
        "1 <= n <= 500",
        "-10^3 <= satisfaction[i] <= 10^3"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} satisfaction\n * @return {number}\n */\nvar maxSatisfaction = function(satisfaction) {\n    \n};",
        "py": "class Solution:\n    def maxSatisfaction(self, satisfaction: List[int]) -> int:\n        "
    }
}, {
    "questionId": "1403",
    "titleSlug": "minimum-subsequence-in-non-increasing-order",
    "translatedTitle": "非递增顺序的最小子序列",
    "translatedContent": ["给你一个数组 nums，请你从中抽取一个子序列，满足该子序列的元素之和 严格 大于未包含在该子序列中的各元素之和。",
        "", "如果存在多个解决方案，只需返回 长度最小 的子序列。如果仍然有多个解决方案，则返回 元素之和最大 的子序列。",
        "", "与子数组不同的地方在于，「数组的子序列」不强调元素在原数组中的连续性，也就是说，它可以通过从数组中分离一些（也可能不分离）元素得到。",
        "", "注意，题目数据保证满足所有约束条件的解决方案是 唯一 的。同时，返回的答案应当按 非递增顺序 排列。",
        "", "示例 1：",
        "输入：nums = [4,3,10,9,8]",
        "输出：[10,9] ",
        "解释：子序列 [10,9] 和 [10,8] 是最小的、满足元素之和大于其他各元素之和的子序列。但是 [10,9] 的元素之和最大。 ",
        "", "示例 2：",
        "输入：nums = [4,4,7,6,7]",
        "输出：[7,7,6] ",
        "解释：子序列 [7,7] 的和为 14 ，不严格大于剩下的其他元素之和（14 = 4 + 4 + 6）。因此，[7,6,7] 是满足题意的最小子序列。注意，元素按非递增顺序返回。  ",
        "", "示例 3：",
        "输入：nums = [6]",
        "输出：[6]",
        "", "提示：",
        "1 <= nums.length <= 500",
        "1 <= nums[i] <= 100"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar minSubsequence = function(nums) {\n\n};",
        "py": "class Solution:\n    def minSubsequence(self, nums: List[int]) -> List[int]:"
    }
}, {
    "questionId": "1404",
    "titleSlug": "number-of-steps-to-reduce-a-number-in-binary-representation-to-one",
    "translatedTitle": "将二进制表示减到 1 的步骤数",
    "translatedContent": ["给你一个以二进制形式表示的数字 s 。请你返回按下述规则将其减少到 1 所需要的步骤数：",
        "", "如果当前数字为偶数，则将其除以 2 。",
        "", "如果当前数字为奇数，则将其加上 1 。",
        "", "题目保证你总是可以按上述规则将测试用例变为 1 。",
        "", "示例 1：",
        "输入：s = \"1101\"",
        "输出：6",
        "解释：\"1101\" 表示十进制数 13 。",
        "Step 1) 13 是奇数，加 1 得到 14 ",
        "Step 2) 14 是偶数，除 2 得到 7",
        "Step 3) 7  是奇数，加 1 得到 8",
        "Step 4) 8  是偶数，除 2 得到 4  ",
        "Step 5) 4  是偶数，除 2 得到 2 ",
        "Step 6) 2  是偶数，除 2 得到 1  ",
        "", "示例 2：",
        "输入：s = \"10\"",
        "输出：1",
        "解释：\"10\" 表示十进制数 2 。",
        "Step 1) 2 是偶数，除 2 得到 1 ",
        "", "示例 3：",
        "输入：s = \"1\"",
        "输出：0",
        "", "提示：",
        "1 <= s.length <= 500",
        "s 由字符 &#39;0&#39; 或 &#39;1&#39; 组成。",
        "s[0] == &#39;1&#39;"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} s\n * @return {number}\n */\nvar numSteps = function(s) {\n\n};",
        "py": "class Solution:\n    def numSteps(self, s: str) -> int:"
    }
}, {
    "questionId": "1405",
    "titleSlug": "longest-happy-string",
    "translatedTitle": "最长快乐字符串",
    "translatedContent": ["如果字符串中不含有任何 &#39;aaa&#39;，&#39;bbb&#39; 或 &#39;ccc&#39; 这样的字符串作为子串，那么该字符串就是一个「快乐字符串」。",
        "", "给你三个整数 a，b ，c，请你返回 任意一个 满足下列全部条件的字符串 s：",
        "", "s 是一个尽可能长的快乐字符串。",
        "s 中 最多 有a 个字母 &#39;a&#39;、b 个字母 &#39;b&#39;、c 个字母 &#39;c&#39; 。",
        "s 中只含有 &#39;a&#39;、&#39;b&#39; 、&#39;c&#39; 三种字母。",
        "", "如果不存在这样的字符串 s ，请返回一个空字符串 \"\"。",
        "", "示例 1：",
        "输入：a = 1, b = 1, c = 7",
        "输出：\"ccaccbcc\"",
        "解释：\"ccbccacc\" 也是一种正确答案。",
        "", "示例 2：",
        "输入：a = 2, b = 2, c = 1",
        "输出：\"aabbc\"",
        "", "示例 3：",
        "输入：a = 7, b = 1, c = 0",
        "输出：\"aabaa\"",
        "解释：这是该测试用例的唯一正确答案。",
        "", "提示：",
        "0 <= a, b, c <= 100",
        "a + b + c > 0"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} a\n * @param {number} b\n * @param {number} c\n * @return {string}\n */\nvar longestDiverseString = function(a, b, c) {\n    \n};",
        "py": "class Solution:\n    def longestDiverseString(self, a: int, b: int, c: int) -> str:\n        "
    }
}, {
    "questionId": "1406",
    "titleSlug": "stone-game-iii",
    "translatedTitle": "石子游戏 III",
    "translatedContent": ["Alice 和 Bob 用几堆石子在做游戏。几堆石子排成一行，每堆石子都对应一个得分，由数组 stoneValue 给出。",
        "", "Alice 和 Bob 轮流取石子，Alice 总是先开始。在每个玩家的回合中，该玩家可以拿走剩下石子中的的前 1、2 或 3 堆石子 。比赛一直持续到所有石头都被拿走。",
        "", "每个玩家的最终得分为他所拿到的每堆石子的对应得分之和。每个玩家的初始分数都是 0 。比赛的目标是决出最高分，得分最高的选手将会赢得比赛，比赛也可能会出现平局。",
        "", "假设 Alice 和 Bob 都采取 最优策略 。如果 Alice 赢了就返回 \"Alice\" ，Bob 赢了就返回 \"Bob\"，平局（分数相同）返回 \"Tie\" 。",
        "", "示例 1：",
        "输入：values = [1,2,3,7]",
        "输出：\"Bob\"",
        "解释：Alice 总是会输，她的最佳选择是拿走前三堆，得分变成 6 。但是 Bob 的得分为 7，Bob 获胜。",
        "", "示例 2：",
        "输入：values = [1,2,3,-9]",
        "输出：\"Alice\"",
        "解释：Alice 要想获胜就必须在第一个回合拿走前三堆石子，给 Bob 留下负分。",
        "如果 Alice 只拿走第一堆，那么她的得分为 1，接下来 Bob 拿走第二、三堆，得分为 5 。之后 Alice 只能拿到分数 -9 的石子堆，输掉比赛。",
        "如果 Alice 拿走前两堆，那么她的得分为 3，接下来 Bob 拿走第三堆，得分为 3 。之后 Alice 只能拿到分数 -9 的石子堆，同样会输掉比赛。",
        "注意，他们都应该采取 最优策略 ，所以在这里 Alice 将选择能够使她获胜的方案。",
        "", "示例 3：",
        "输入：values = [1,2,3,6]",
        "输出：\"Tie\"",
        "解释：Alice 无法赢得比赛。如果她决定选择前三堆，她可以以平局结束比赛，否则她就会输。",
        "", "示例 4：",
        "输入：values = [1,2,3,-1,-2,-3,7]",
        "输出：\"Alice\"",
        "", "示例 5：",
        "输入：values = [-1,-2,-3]",
        "输出：\"Tie\"",
        "", "提示：",
        "1 <= values.length <= 50000",
        "-1000 <= values[i] <= 1000"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} stoneValue\n * @return {string}\n */\nvar stoneGameIII = function(stoneValue) {\n\n};",
        "py": "class Solution:\n    def stoneGameIII(self, stoneValue: List[int]) -> str:"
    }
}, {
    "questionId": "1408",
    "titleSlug": "string-matching-in-an-array",
    "translatedTitle": "数组中的字符串匹配",
    "translatedContent": ["给你一个字符串数组 words ，数组中的每个字符串都可以看作是一个单词。请你按 任意 顺序返回 words 中是其他单词的子字符串的所有单词。",
        "", "如果你可以删除 words[j] 最左侧和/或最右侧的若干字符得到 word[i] ，那么字符串 words[i] 就是 words[j] 的一个子字符串。",
        "", "示例 1：",
        "输入：words = [\"mass\",\"as\",\"hero\",\"superhero\"]",
        "输出：[\"as\",\"hero\"]",
        "解释：\"as\" 是 \"mass\" 的子字符串，\"hero\" 是 \"superhero\" 的子字符串。",
        "[\"hero\",\"as\"] 也是有效的答案。",
        "", "示例 2：",
        "输入：words = [\"leetcode\",\"et\",\"code\"]",
        "输出：[\"et\",\"code\"]",
        "解释：\"et\" 和 \"code\" 都是 \"leetcode\" 的子字符串。",
        "", "示例 3：",
        "输入：words = [\"blue\",\"green\",\"bu\"]",
        "输出：[]",
        "", "提示：",
        "1 <= words.length <= 100",
        "1 <= words[i].length <= 30",
        "words[i] 仅包含小写英文字母。",
        "题目数据 保证 每个 words[i] 都是独一无二的。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} words\n * @return {string[]}\n */\nvar stringMatching = function(words) {\n\n};",
        "py": "class Solution:\n    def stringMatching(self, words: List[str]) -> List[str]:"
    }
}, {
    "questionId": "1409",
    "titleSlug": "queries-on-a-permutation-with-key",
    "translatedTitle": "查询带键的排列",
    "translatedContent": ["给你一个待查数组 queries ，数组中的元素为 1 到 m 之间的正整数。 请你根据以下规则处理所有待查项 queries[i]（从 i=0 到 i=queries.length-1）：",
        "", "一开始，排列 P=[1,2,3,...,m]。",
        "对于当前的 i ，请你找出待查项 queries[i] 在排列 P 中的位置（下标从 0 开始），然后将其从原位置移动到排列 P 的起始位置（即下标为 0 处）。注意， queries[i] 在 P 中的位置就是 queries[i] 的查询结果。",
        "", "请你以数组形式返回待查数组  queries 的查询结果。",
        "", "示例 1：",
        "输入：queries = [3,1,2,1], m = 5",
        "输出：[2,1,2,1] ",
        "解释：待查数组 queries 处理如下：",
        "对于 i=0: queries[i]=3, P=[1,2,3,4,5], 3 在 P 中的位置是 2，接着我们把 3 移动到 P 的起始位置，得到 P=[3,1,2,4,5] 。",
        "对于 i=1: queries[i]=1, P=[3,1,2,4,5], 1 在 P 中的位置是 1，接着我们把 1 移动到 P 的起始位置，得到 P=[1,3,2,4,5] 。 ",
        "对于 i=2: queries[i]=2, P=[1,3,2,4,5], 2 在 P 中的位置是 2，接着我们把 2 移动到 P 的起始位置，得到 P=[2,1,3,4,5] 。",
        "对于 i=3: queries[i]=1, P=[2,1,3,4,5], 1 在 P 中的位置是 1，接着我们把 1 移动到 P 的起始位置，得到 P=[1,2,3,4,5] 。 ",
        "因此，返回的结果数组为 [2,1,2,1] 。  ",
        "", "示例 2：",
        "输入：queries = [4,1,2,2], m = 4",
        "输出：[3,1,2,0]",
        "", "示例 3：",
        "输入：queries = [7,5,5,8,3], m = 8",
        "输出：[6,5,0,7,5]",
        "", "提示：",
        "1 <= m <= 10^3",
        "1 <= queries.length <= m",
        "1 <= queries[i] <= m"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} queries\n * @param {number} m\n * @return {number[]}\n */\nvar processQueries = function(queries, m) {\n\n};",
        "py": "class Solution:\n    def processQueries(self, queries: List[int], m: int) -> List[int]:"
    }
}, {
    "questionId": "1410",
    "titleSlug": "html-entity-parser",
    "translatedTitle": "HTML 实体解析器",
    "translatedContent": ["「HTML 实体解析器」 是一种特殊的解析器，它将 HTML 代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。",
        "", "HTML 里这些特殊字符和它们对应的字符实体包括：",
        "", "双引号：字符实体为 &amp;quot; ，对应的字符是 \" 。",
        "单引号：字符实体为 &amp;apos; ，对应的字符是 &#39; 。",
        "与符号：字符实体为 &amp;amp; ，对应对的字符是 &amp; 。",
        "大于号：字符实体为 &amp;gt; ，对应的字符是 > 。",
        "小于号：字符实体为 &amp;lt; ，对应的字符是 < 。",
        "斜线号：字符实体为 &amp;frasl; ，对应的字符是 / 。",
        "", "给你输入字符串 text ，请你实现一个 HTML 实体解析器，返回解析器解析后的结果。",
        "", "示例 1：",
        "输入：text = \"&amp;amp; is an HTML entity but &amp;ambassador; is not.\"",
        "输出：\"&amp; is an HTML entity but &amp;ambassador; is not.\"",
        "解释：解析器把字符实体 &amp;amp; 用 &amp; 替换",
        "", "示例 2：",
        "输入：text = \"and I quote: &amp;quot;...&amp;quot;\"",
        "输出：\"and I quote: \\\"...\\\"\"",
        "", "示例 3：",
        "输入：text = \"Stay home! Practice on Leetcode :)\"",
        "输出：\"Stay home! Practice on Leetcode :)\"",
        "", "示例 4：",
        "输入：text = \"x &amp;gt; y &amp;amp;&amp;amp; x &amp;lt; y is always false\"",
        "输出：\"x > y &amp;&amp; x < y is always false\"",
        "", "示例 5：",
        "输入：text = \"leetcode.com&amp;frasl;problemset&amp;frasl;all\"",
        "输出：\"leetcode.com/problemset/all\"",
        "", "提示：",
        "1 <= text.length <= 10^5",
        "字符串可能包含 256 个ASCII 字符中的任意字符。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} text\n * @return {string}\n */\nvar entityParser = function(text) {\n\n};",
        "py": "class Solution:\n    def entityParser(self, text: str) -> str:"
    }
}, {
    "questionId": "1411",
    "titleSlug": "number-of-ways-to-paint-n-x-3-grid",
    "translatedTitle": "给 N x 3 网格图涂色的方案数",
    "translatedContent": ["你有一个 n x 3 的网格图 grid ，你需要用 红，黄，绿 三种颜色之一给每一个格子上色，且确保相邻格子颜色不同（也就是有相同水平边或者垂直边的格子颜色不同）。",
        "", "给你网格图的行数 n 。",
        "", "请你返回给 grid 涂色的方案数。由于答案可能会非常大，请你返回答案对 10^9 + 7 取余的结果。",
        "", "示例 1：",
        "输入：n = 1",
        "输出：12",
        "解释：总共有 12 种可行的方法：",
        "", "示例 2：",
        "输入：n = 2",
        "输出：54",
        "", "示例 3：",
        "输入：n = 3",
        "输出：246",
        "", "示例 4：",
        "输入：n = 7",
        "输出：106494",
        "", "示例 5：",
        "输入：n = 5000",
        "输出：30228214",
        "", "提示：",
        "n == grid.length",
        "grid[i].length == 3",
        "1 <= n <= 5000"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @return {number}\n */\nvar numOfWays = function(n) {\n\n};",
        "py": "class Solution:\n    def numOfWays(self, n: int) -> int:"
    }
}, {
    "questionId": "1413",
    "titleSlug": "minimum-value-to-get-positive-step-by-step-sum",
    "translatedTitle": "逐步求和得到正数的最小值",
    "translatedContent": ["给你一个整数数组 nums 。你可以选定任意的 正数 startValue 作为初始值。",
        "", "你需要从左到右遍历 nums 数组，并将 startValue 依次累加上 nums 数组中的值。",
        "", "请你在确保累加和始终大于等于 1 的前提下，选出一个最小的 正数 作为 startValue 。",
        "", "示例 1：",
        "输入：nums = [-3,2,-3,4,2]",
        "输出：5",
        "解释：如果你选择 startValue = 4，在第三次累加时，和小于 1 。",
        "                累加求和",
        "                startValue = 4 | startValue = 5 | nums",
        "                  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3",
        "                  (1 +2 ) = 3  | (2 +2 ) = 4    |   2",
        "                  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3",
        "                  (0 +4 ) = 4  | (1 +4 ) = 5    |   4",
        "                  (4 +2 ) = 6  | (5 +2 ) = 7    |   2",
        "", "示例 2：",
        "输入：nums = [1,2]",
        "输出：1",
        "解释：最小的 startValue 需要是正数。",
        "", "示例 3：",
        "输入：nums = [1,-2,-3]",
        "输出：5",
        "", "提示：",
        "1 <= nums.length <= 100",
        "-100 <= nums[i] <= 100"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar minStartValue = function(nums) {\n    \n};",
        "py": "class Solution:\n    def minStartValue(self, nums: List[int]) -> int:\n        "
    }
}, {
    "questionId": "1414",
    "titleSlug": "find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k",
    "translatedTitle": "和为 K 的最少斐波那契数字数目",
    "translatedContent": ["给你数字 k ，请你返回和为 k 的斐波那契数字的最少数目，其中，每个斐波那契数字都可以被使用多次。",
        "", "斐波那契数字定义为：",
        "", "F1 = 1",
        "F2 = 1",
        "Fn = Fn-1 + Fn-2 ， 其中 n > 2 。",
        "", "数据保证对于给定的 k ，一定能找到可行解。",
        "", "示例 1：",
        "输入：k = 7",
        "输出：2 ",
        "解释：斐波那契数字为：1，1，2，3，5，8，13，&hellip;&hellip;",
        "对于 k = 7 ，我们可以得到 2 + 5 = 7 。",
        "", "示例 2：",
        "输入：k = 10",
        "输出：2 ",
        "解释：对于 k = 10 ，我们可以得到 2 + 8 = 10 。",
        "", "示例 3：",
        "输入：k = 19",
        "输出：3 ",
        "解释：对于 k = 19 ，我们可以得到 1 + 5 + 13 = 19 。",
        "", "提示：",
        "1 <= k <= 10^9"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} k\n * @return {number}\n */\nvar findMinFibonacciNumbers = function(k) {\n    \n};",
        "py": "class Solution:\n    def findMinFibonacciNumbers(self, k: int) -> int:\n        "
    }
}, {
    "questionId": "1415",
    "titleSlug": "the-k-th-lexicographical-string-of-all-happy-strings-of-length-n",
    "translatedTitle": "长度为 n 的开心字符串中字典序第 k 小的字符串",
    "translatedContent": ["一个 「开心字符串」定义为：",
        "", "仅包含小写字母 [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;].",
        "对所有在 1 到 s.length - 1 之间的 i ，满足 s[i] != s[i + 1] （字符串的下标从 1 开始）。",
        "", "比方说，字符串 \"abc\"，\"ac\"，\"b\" 和 \"abcbabcbcb\" 都是开心字符串，但是 \"aa\"，\"baa\" 和 \"ababbc\" 都不是开心字符串。",
        "", "给你两个整数 n 和 k ，你需要将长度为 n 的所有开心字符串按字典序排序。",
        "", "请你返回排序后的第 k 个开心字符串，如果长度为 n 的开心字符串少于 k 个，那么请你返回 空字符串 。",
        "", "示例 1：",
        "输入：n = 1, k = 3",
        "输出：\"c\"",
        "解释：列表 [\"a\", \"b\", \"c\"] 包含了所有长度为 1 的开心字符串。按照字典序排序后第三个字符串为 \"c\" 。",
        "", "示例 2：",
        "输入：n = 1, k = 4",
        "输出：\"\"",
        "解释：长度为 1 的开心字符串只有 3 个。",
        "", "示例 3：",
        "输入：n = 3, k = 9",
        "输出：\"cab\"",
        "解释：长度为 3 的开心字符串总共有 12 个 [\"aba\", \"abc\", \"aca\", \"acb\", \"bab\", \"bac\", \"bca\", \"bcb\", \"cab\", \"cac\", \"cba\", \"cbc\"] 。第 9 个字符串为 \"cab\"",
        "", "示例 4：",
        "输入：n = 2, k = 7",
        "输出：\"\"",
        "", "示例 5：",
        "输入：n = 10, k = 100",
        "输出：\"abacbabacb\"",
        "", "提示：",
        "1 <= n <= 10",
        "1 <= k <= 100"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @param {number} k\n * @return {string}\n */\nvar getHappyString = function(n, k) {\n    \n};",
        "py": "class Solution:\n    def getHappyString(self, n: int, k: int) -> str:\n        "
    }
}, {
    "questionId": "1416",
    "titleSlug": "restore-the-array",
    "translatedTitle": "恢复数组",
    "translatedContent": ["某个程序本来应该输出一个整数数组。但是这个程序忘记输出空格了以致输出了一个数字字符串，我们所知道的信息只有：数组中所有整数都在 [1, k] 之间，且数组中的数字都没有前导 0 。",
        "", "给你字符串 s 和整数 k 。可能会有多种不同的数组恢复结果。",
        "", "按照上述程序，请你返回所有可能输出字符串 s 的数组方案数。",
        "", "由于数组方案数可能会很大，请你返回它对 10^9 + 7 取余 后的结果。",
        "", "示例 1：",
        "输入：s = \"1000\", k = 10000",
        "输出：1",
        "解释：唯一一种可能的数组方案是 [1000]",
        "", "示例 2：",
        "输入：s = \"1000\", k = 10",
        "输出：0",
        "解释：不存在任何数组方案满足所有整数都 >= 1 且 <= 10 同时输出结果为 s 。",
        "", "示例 3：",
        "输入：s = \"1317\", k = 2000",
        "输出：8",
        "解释：可行的数组方案为 [1317]，[131,7]，[13,17]，[1,317]，[13,1,7]，[1,31,7]，[1,3,17]，[1,3,1,7]",
        "", "示例 4：",
        "输入：s = \"2020\", k = 30",
        "输出：1",
        "解释：唯一可能的数组方案是 [20,20] 。 [2020] 不是可行的数组方案，原因是 2020 > 30 。 [2,020] 也不是可行的数组方案，因为 020 含有前导 0 。",
        "", "示例 5：",
        "输入：s = \"1234567890\", k = 90",
        "输出：34",
        "", "提示：",
        "1 <= s.length <= 10^5.",
        "s 只包含数字且不包含前导 0 。",
        "1 <= k <= 10^9."
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {string} s\n * @param {number} k\n * @return {number}\n */\nvar numberOfArrays = function(s, k) {\n    \n};",
        "py": "class Solution:\n    def numberOfArrays(self, s: str, k: int) -> int:\n        "
    }
}, {
    "questionId": "1417",
    "titleSlug": "reformat-the-string",
    "translatedTitle": "重新格式化字符串",
    "translatedContent": ["给你一个混合了数字和字母的字符串 s，其中的字母均为小写英文字母。",
        "", "请你将该字符串重新格式化，使得任意两个相邻字符的类型都不同。也就是说，字母后面应该跟着数字，而数字后面应该跟着字母。",
        "", "请你返回 重新格式化后 的字符串；如果无法按要求重新格式化，则返回一个 空字符串 。",
        "", "示例 1：",
        "输入：s = \"a0b1c2\"",
        "输出：\"0a1b2c\"",
        "解释：\"0a1b2c\" 中任意两个相邻字符的类型都不同。 \"a0b1c2\", \"0a1b2c\", \"0c2a1b\" 也是满足题目要求的答案。",
        "", "示例 2：",
        "输入：s = \"leetcode\"",
        "输出：\"\"",
        "解释：\"leetcode\" 中只有字母，所以无法满足重新格式化的条件。",
        "", "示例 3：",
        "输入：s = \"1229857369\"",
        "输出：\"\"",
        "解释：\"1229857369\" 中只有数字，所以无法满足重新格式化的条件。",
        "", "示例 4：",
        "输入：s = \"covid2019\"",
        "输出：\"c2o0v1i9d\"",
        "", "示例 5：",
        "输入：s = \"ab123\"",
        "输出：\"1a2b3\"",
        "", "提示：",
        "1 <= s.length <= 500",
        "s 仅由小写英文字母和/或数字组成。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string} s\n * @return {string}\n */\nvar reformat = function(s) {\n\n};",
        "py": "class Solution:\n    def reformat(self, s: str) -> str:"
    }
}, {
    "questionId": "1418",
    "titleSlug": "display-table-of-food-orders-in-a-restaurant",
    "translatedTitle": "点菜展示表",
    "translatedContent": [
        "给你一个数组 orders，表示客户在餐厅中完成的订单，确切地说， orders[i]=[customerNamei,tableNumberi,foodItemi] ，其中 customerNamei 是客户的姓名，tableNumberi 是客户所在餐桌的桌号，而 foodItemi 是客户点的餐品名称。",
        "",
        "请你返回该餐厅的 点菜展示表 。在这张表中，表中第一行为标题，其第一列为餐桌桌号 &ldquo;Table&rdquo; ，后面每一列都是按字母顺序排列的餐品名称。接下来每一行中的项则表示每张餐桌订购的相应餐品数量，第一列应当填对应的桌号，后面依次填写下单的餐品数量。",
        "", "注意：客户姓名不是点菜展示表的一部分。此外，表中的数据行应该按餐桌桌号升序排列。",
        "", "示例 1：",
        "输入：orders = [[\"David\",\"3\",\"Ceviche\"],[\"Corina\",\"10\",\"Beef Burrito\"],[\"David\",\"3\",\"Fried Chicken\"],[\"Carla\",\"5\",\"Water\"],[\"Carla\",\"5\",\"Ceviche\"],[\"Rous\",\"3\",\"Ceviche\"]]",
        "输出：[[\"Table\",\"Beef Burrito\",\"Ceviche\",\"Fried Chicken\",\"Water\"],[\"3\",\"0\",\"2\",\"1\",\"0\"],[\"5\",\"0\",\"1\",\"0\",\"1\"],[\"10\",\"1\",\"0\",\"0\",\"0\"]] ",
        "解释：",
        "点菜展示表如下所示：",
        "Table,Beef Burrito,Ceviche,Fried Chicken,Water",
        "3    ,0           ,2      ,1            ,0",
        "5    ,0           ,1      ,0            ,1",
        "10   ,1           ,0      ,0            ,0",
        "对于餐桌 3：David 点了 \"Ceviche\" 和 \"Fried Chicken\"，而 Rous 点了 \"Ceviche\"",
        "而餐桌 5：Carla 点了 \"Water\" 和 \"Ceviche\"",
        "餐桌 10：Corina 点了 \"Beef Burrito\" ",
        "", "示例 2：",
        "输入：orders = [[\"James\",\"12\",\"Fried Chicken\"],[\"Ratesh\",\"12\",\"Fried Chicken\"],[\"Amadeus\",\"12\",\"Fried Chicken\"],[\"Adam\",\"1\",\"Canadian Waffles\"],[\"Brianna\",\"1\",\"Canadian Waffles\"]]",
        "输出：[[\"Table\",\"Canadian Waffles\",\"Fried Chicken\"],[\"1\",\"2\",\"0\"],[\"12\",\"0\",\"3\"]] ",
        "解释：",
        "对于餐桌 1：Adam 和 Brianna 都点了 \"Canadian Waffles\"",
        "而餐桌 12：James, Ratesh 和 Amadeus 都点了 \"Fried Chicken\"",
        "", "示例 3：",
        "输入：orders = [[\"Laura\",\"2\",\"Bean Burrito\"],[\"Jhon\",\"2\",\"Beef Burrito\"],[\"Melissa\",\"2\",\"Soda\"]]",
        "输出：[[\"Table\",\"Bean Burrito\",\"Beef Burrito\",\"Soda\"],[\"2\",\"1\",\"1\",\"1\"]]",
        "", "提示：",
        "1 <= orders.length <= 5 * 10^4",
        "orders[i].length == 3",
        "1 <= customerNamei.length, foodItemi.length <= 20",
        "customerNamei 和 foodItemi 由大小写英文字母及空格字符 &#39; &#39; 组成。",
        "tableNumberi 是 1 到 500 范围内的整数。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string[][]} orders\n * @return {string[][]}\n */\nvar displayTable = function(orders) {\n\n};",
        "py": "class Solution:\n    def displayTable(self, orders: List[List[str]]) -> List[List[str]]:"
    }
}, {
    "questionId": "1419",
    "titleSlug": "minimum-number-of-frogs-croaking",
    "translatedTitle": "数青蛙",
    "translatedContent": [
        "给你一个字符串 croakOfFrogs，它表示不同青蛙发出的蛙鸣声（字符串 \"croak\" ）的组合。由于同一时间可以有多只青蛙呱呱作响，所以 croakOfFrogs 中会混合多个 &ldquo;croak&rdquo; 。请你返回模拟字符串中所有蛙鸣所需不同青蛙的最少数目。",
        "",
        "注意：要想发出蛙鸣 \"croak\"，青蛙必须 依序 输出 &lsquo;c&rsquo;, &rsquo;r&rsquo;, &rsquo;o&rsquo;, &rsquo;a&rsquo;, &rsquo;k&rsquo; 这 5 个字母。如果没有输出全部五个字母，那么它就不会发出声音。",
        "", "如果字符串 croakOfFrogs 不是由若干有效的 \"croak\" 字符混合而成，请返回 -1 。",
        "", "示例 1：",
        "输入：croakOfFrogs = \"croakcroak\"",
        "输出：1 ",
        "解释：一只青蛙 &ldquo;呱呱&rdquo; 两次",
        "", "示例 2：",
        "输入：croakOfFrogs = \"crcoakroak\"",
        "输出：2 ",
        "解释：最少需要两只青蛙，&ldquo;呱呱&rdquo; 声用黑体标注",
        "第一只青蛙 \"crcoakroak\"",
        "第二只青蛙 \"crcoakroak\"",
        "", "示例 3：",
        "输入：croakOfFrogs = \"croakcrook\"",
        "输出：-1",
        "解释：给出的字符串不是 \"croak\" 的有效组合。",
        "", "示例 4：",
        "输入：croakOfFrogs = \"croakcroa\"",
        "输出：-1",
        "", "提示：",
        "1 <= croakOfFrogs.length <= 10^5",
        "字符串中的字符只有 &#39;c&#39;, &#39;r&#39;, &#39;o&#39;, &#39;a&#39; 或者 &#39;k&#39;"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} croakOfFrogs\n * @return {number}\n */\nvar minNumberOfFrogs = function(croakOfFrogs) {\n\n};",
        "py": "class Solution:\n    def minNumberOfFrogs(self, croakOfFrogs: str) -> int:"
    }
}, {
    "questionId": "1420",
    "titleSlug": "build-array-where-you-can-find-the-maximum-exactly-k-comparisons",
    "translatedTitle": "生成数组",
    "translatedContent": ["给你三个整数 n、m 和 k 。下图描述的算法用于找出正整数数组中最大的元素。",
        "", "请你生成一个具有下述属性的数组 arr ：",
        "", "arr 中有 n 个整数。",
        "1 <= arr[i] <= m 其中 (0 <= i < n) 。",
        "将上面提到的算法应用于 arr ，search_cost 的值等于 k 。",
        "", "返回上述条件下生成数组 arr 的 方法数 ，由于答案可能会很大，所以 必须 对 10^9 + 7 取余。",
        "", "示例 1：",
        "输入：n = 2, m = 3, k = 1",
        "输出：6",
        "解释：可能的数组分别为 [1, 1], [2, 1], [2, 2], [3, 1], [3, 2] [3, 3]",
        "", "示例 2：",
        "输入：n = 5, m = 2, k = 3",
        "输出：0",
        "解释：没有数组可以满足上述条件",
        "", "示例 3：",
        "输入：n = 9, m = 1, k = 1",
        "输出：1",
        "解释：可能的数组只有 [1, 1, 1, 1, 1, 1, 1, 1, 1]",
        "", "示例 4：",
        "输入：n = 50, m = 100, k = 25",
        "输出：34549172",
        "解释：不要忘了对 1000000007 取余",
        "", "示例 5：",
        "输入：n = 37, m = 17, k = 7",
        "输出：418930126",
        "", "提示：",
        "1 <= n <= 50",
        "1 <= m <= 100",
        "0 <= k <= n"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @param {number} m\n * @param {number} k\n * @return {number}\n */\nvar numOfArrays = function(n, m, k) {\n\n};",
        "py": "class Solution:\n    def numOfArrays(self, n: int, m: int, k: int) -> int:"
    }
}, {
    "questionId": "1422",
    "titleSlug": "maximum-score-after-splitting-a-string",
    "translatedTitle": "分割字符串的最大得分",
    "translatedContent": ["给你一个由若干 0 和 1 组成的字符串 s ，请你计算并返回将该字符串分割成两个 非空 子字符串（即 左 子字符串和 右 子字符串）所能获得的最大得分。",
        "", "「分割字符串的得分」为 左 子字符串中 0 的数量加上 右 子字符串中 1 的数量。",
        "", "示例 1：",
        "输入：s = \"011101\"",
        "输出：5 ",
        "解释：",
        "将字符串 s 划分为两个非空子字符串的可行方案有：",
        "左子字符串 = \"0\" 且 右子字符串 = \"11101\"，得分 = 1 + 4 = 5 ",
        "左子字符串 = \"01\" 且 右子字符串 = \"1101\"，得分 = 1 + 3 = 4 ",
        "左子字符串 = \"011\" 且 右子字符串 = \"101\"，得分 = 1 + 2 = 3 ",
        "左子字符串 = \"0111\" 且 右子字符串 = \"01\"，得分 = 1 + 1 = 2 ",
        "左子字符串 = \"01110\" 且 右子字符串 = \"1\"，得分 = 2 + 1 = 3",
        "", "示例 2：",
        "输入：s = \"00111\"",
        "输出：5",
        "解释：当 左子字符串 = \"00\" 且 右子字符串 = \"111\" 时，我们得到最大得分 = 2 + 3 = 5",
        "", "示例 3：",
        "输入：s = \"1111\"",
        "输出：3",
        "", "提示：",
        "2 <= s.length <= 500",
        "字符串 s 仅由字符 &#39;0&#39; 和 &#39;1&#39; 组成。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string} s\n * @return {number}\n */\nvar maxScore = function(s) {\n\n};",
        "py": "class Solution:\n    def maxScore(self, s: str) -> int:"
    }
}, {
    "questionId": "1423",
    "titleSlug": "maximum-points-you-can-obtain-from-cards",
    "translatedTitle": "可获得的最大点数",
    "translatedContent": ["几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。",
        "", "每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。",
        "", "你的点数就是你拿到手中的所有卡牌的点数之和。",
        "", "给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。",
        "", "示例 1：",
        "输入：cardPoints = [1,2,3,4,5,6,1], k = 3",
        "输出：12",
        "解释：第一次行动，不管拿哪张牌，你的点数总是 1 。但是，先拿最右边的卡牌将会最大化你的可获得点数。最优策略是拿右边的三张牌，最终点数为 1 + 6 + 5 = 12 。",
        "", "示例 2：",
        "输入：cardPoints = [2,2,2], k = 2",
        "输出：4",
        "解释：无论你拿起哪两张卡牌，可获得的点数总是 4 。",
        "", "示例 3：",
        "输入：cardPoints = [9,7,7,9,7,7,9], k = 7",
        "输出：55",
        "解释：你必须拿起所有卡牌，可以获得的点数为所有卡牌的点数之和。",
        "", "示例 4：",
        "输入：cardPoints = [1,1000,1], k = 1",
        "输出：1",
        "解释：你无法拿到中间那张卡牌，所以可以获得的最大点数为 1 。 ",
        "", "示例 5：",
        "输入：cardPoints = [1,79,80,1,1,1,200,1], k = 3",
        "输出：202",
        "", "提示：",
        "1 <= cardPoints.length <= 10^5",
        "1 <= cardPoints[i] <= 10^4",
        "1 <= k <= cardPoints.length"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} cardPoints\n * @param {number} k\n * @return {number}\n */\nvar maxScore = function(cardPoints, k) {\n\n};",
        "py": "class Solution:\n    def maxScore(self, cardPoints: List[int], k: int) -> int:"
    }
}, {
    "questionId": "1424",
    "titleSlug": "diagonal-traverse-ii",
    "translatedTitle": "对角线遍历 II",
    "translatedContent": ["给你一个列表 nums ，里面每一个元素都是一个整数列表。请你依照下面各图的规则，按顺序返回 nums 中对角线上的整数。",
        "", "示例 1：",
        "输入：nums = [[1,2,3],[4,5,6],[7,8,9]]",
        "输出：[1,4,2,7,5,3,8,6,9]",
        "", "示例 2：",
        "输入：nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]",
        "输出：[1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]",
        "", "示例 3：",
        "输入：nums = [[1,2,3],[4],[5,6,7],[8],[9,10,11]]",
        "输出：[1,4,2,5,3,8,6,9,7,10,11]",
        "", "示例 4：",
        "输入：nums = [[1,2,3,4,5,6]]",
        "输出：[1,2,3,4,5,6]",
        "", "提示：",
        "1 <= nums.length <= 10^5",
        "1 <= nums[i].length <= 10^5",
        "1 <= nums[i][j] <= 10^9",
        "nums 中最多有 10^5 个数字。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} nums\n * @return {number[]}\n */\nvar findDiagonalOrder = function(nums) {\n\n};",
        "py": "class Solution:\n    def findDiagonalOrder(self, nums: List[List[int]]) -> List[int]:"
    }
}, {
    "questionId": "1425",
    "titleSlug": "constrained-subsequence-sum",
    "translatedTitle": "带限制的子序列和",
    "translatedContent": [
        "给你一个整数数组 nums 和一个整数 k ，请你返回 非空 子序列元素和的最大值，子序列需要满足：子序列中每两个 相邻 的整数 nums[i] 和 nums[j] ，它们在原数组中的下标 i 和 j 满足 i < j 且 j - i <= k 。",
        "", "数组的子序列定义为：将数组中的若干个数字删除（可以删除 0 个数字），剩下的数字按照原本的顺序排布。",
        "", "示例 1：",
        "输入：nums = [10,2,-10,5,20], k = 2",
        "输出：37",
        "解释：子序列为 [10, 2, 5, 20] 。",
        "", "示例 2：",
        "输入：nums = [-1,-2,-3], k = 1",
        "输出：-1",
        "解释：子序列必须是非空的，所以我们选择最大的数字。",
        "", "示例 3：",
        "输入：nums = [10,-2,-10,-5,20], k = 2",
        "输出：23",
        "解释：子序列为 [10, -2, -5, 20] 。",
        "", "提示：",
        "1 <= k <= nums.length <= 10^5",
        "-10^4 <= nums[i] <= 10^4"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nvar constrainedSubsetSum = function(nums, k) {\n\n};",
        "py": "class Solution:\n    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:"
    }
}, {
    "questionId": "1431",
    "titleSlug": "kids-with-the-greatest-number-of-candies",
    "translatedTitle": "拥有最多糖果的孩子",
    "translatedContent": ["给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。",
        "", "对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。",
        "", "示例 1：",
        "输入：candies = [2,3,5,1,3], extraCandies = 3",
        "输出：[true,true,true,false,true] ",
        "解释：",
        "孩子 1 有 2 个糖果，如果他得到所有额外的糖果（3个），那么他总共有 5 个糖果，他将成为拥有最多糖果的孩子。",
        "孩子 2 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。",
        "孩子 3 有 5 个糖果，他已经是拥有最多糖果的孩子。",
        "孩子 4 有 1 个糖果，即使他得到所有额外的糖果，他也只有 4 个糖果，无法成为拥有糖果最多的孩子。",
        "孩子 5 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。",
        "", "示例 2：",
        "输入：candies = [4,2,1,1,2], extraCandies = 1",
        "输出：[true,false,false,false,false] ",
        "解释：只有 1 个额外糖果，所以不管额外糖果给谁，只有孩子 1 可以成为拥有糖果最多的孩子。",
        "", "示例 3：",
        "输入：candies = [12,1,12], extraCandies = 10",
        "输出：[true,false,true]",
        "", "提示：",
        "2 <= candies.length <= 100",
        "1 <= candies[i] <= 100",
        "1 <= extraCandies <= 50"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} candies\n * @param {number} extraCandies\n * @return {boolean[]}\n */\nvar kidsWithCandies = function(candies, extraCandies) {\n\n};",
        "py": "class Solution:\n    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:"
    }
}, {
    "questionId": "1432",
    "titleSlug": "max-difference-you-can-get-from-changing-an-integer",
    "translatedTitle": "改变一个整数能得到的最大差值",
    "translatedContent": ["给你一个整数 num 。你可以对它进行如下步骤恰好 两次 ：",
        "", "选择一个数字 x (0 <= x <= 9).",
        "选择另一个数字 y (0 <= y <= 9) 。数字 y 可以等于 x 。",
        "将 num 中所有出现 x 的数位都用 y 替换。",
        "得到的新的整数 不能 有前导 0 ，得到的新整数也 不能 是 0 。",
        "", "令两次对 num 的操作得到的结果分别为 a 和 b 。",
        "", "请你返回 a 和 b 的 最大差值 。",
        "", "示例 1：",
        "输入：num = 555",
        "输出：888",
        "解释：第一次选择 x = 5 且 y = 9 ，并把得到的新数字保存在 a 中。",
        "第二次选择 x = 5 且 y = 1 ，并把得到的新数字保存在 b 中。",
        "现在，我们有 a = 999 和 b = 111 ，最大差值为 888",
        "", "示例 2：",
        "输入：num = 9",
        "输出：8",
        "解释：第一次选择 x = 9 且 y = 9 ，并把得到的新数字保存在 a 中。",
        "第二次选择 x = 9 且 y = 1 ，并把得到的新数字保存在 b 中。",
        "现在，我们有 a = 9 和 b = 1 ，最大差值为 8",
        "", "示例 3：",
        "输入：num = 123456",
        "输出：820000",
        "", "示例 4：",
        "输入：num = 10000",
        "输出：80000",
        "", "示例 5：",
        "输入：num = 9288",
        "输出：8700",
        "", "提示：",
        "1 <= num <= 10^8"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} num\n * @return {number}\n */\nvar maxDiff = function(num) {\n\n};",
        "py": "class Solution:\n    def maxDiff(self, num: int) -> int:"
    }
}, {
    "questionId": "1433",
    "titleSlug": "check-if-a-string-can-break-another-string",
    "translatedTitle": "检查一个字符串是否可以打破另一个字符串",
    "translatedContent": ["给你两个字符串 s1 和 s2 ，它们长度相等，请你检查是否存在一个 s1  的排列可以打破 s2 的一个排列，或者是否存在一个 s2 的排列可以打破 s1 的一个排列。",
        "", "字符串 x 可以打破字符串 y （两者长度都为 n ）需满足对于所有 i（在 0 到 n - 1 之间）都有 x[i] >= y[i]（字典序意义下的顺序）。",
        "", "示例 1：",
        "输入：s1 = \"abc\", s2 = \"xya\"",
        "输出：true",
        "解释：\"ayx\" 是 s2=\"xya\" 的一个排列，\"abc\" 是字符串 s1=\"abc\" 的一个排列，且 \"ayx\" 可以打破 \"abc\" 。",
        "", "示例 2：",
        "输入：s1 = \"abe\", s2 = \"acd\"",
        "输出：false ",
        "解释：s1=\"abe\" 的所有排列包括：\"abe\"，\"aeb\"，\"bae\"，\"bea\"，\"eab\" 和 \"eba\" ，s2=\"acd\" 的所有排列包括：\"acd\"，\"adc\"，\"cad\"，\"cda\"，\"dac\" 和 \"dca\"。然而没有任何 s1 的排列可以打破 s2 的排列。也没有 s2 的排列能打破 s1 的排列。",
        "", "示例 3：",
        "输入：s1 = \"leetcodee\", s2 = \"interview\"",
        "输出：true",
        "", "提示：",
        "s1.length == n",
        "s2.length == n",
        "1 <= n <= 10^5",
        "所有字符串都只包含小写英文字母。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} s1\n * @param {string} s2\n * @return {boolean}\n */\nvar checkIfCanBreak = function(s1, s2) {\n\n};",
        "py": "class Solution:\n    def checkIfCanBreak(self, s1: str, s2: str) -> bool:"
    }
}, {
    "questionId": "1434",
    "titleSlug": "number-of-ways-to-wear-different-hats-to-each-other",
    "translatedTitle": "每个人戴不同帽子的方案数",
    "translatedContent": ["总共有 n 个人和 40 种不同的帽子，帽子编号从 1 到 40 。",
        "", "给你一个整数列表的列表 hats ，其中 hats[i] 是第 i 个人所有喜欢帽子的列表。",
        "", "请你给每个人安排一顶他喜欢的帽子，确保每个人戴的帽子跟别人都不一样，并返回方案数。",
        "", "由于答案可能很大，请返回它对 10^9 + 7 取余后的结果。",
        "", "示例 1：",
        "输入：hats = [[3,4],[4,5],[5]]",
        "输出：1",
        "解释：给定条件下只有一种方法选择帽子。",
        "第一个人选择帽子 3，第二个人选择帽子 4，最后一个人选择帽子 5。",
        "", "示例 2：",
        "输入：hats = [[3,5,1],[3,5]]",
        "输出：4",
        "解释：总共有 4 种安排帽子的方法：",
        "(3,5)，(5,3)，(1,3) 和 (1,5)",
        "", "示例 3：",
        "输入：hats = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]",
        "输出：24",
        "解释：每个人都可以从编号为 1 到 4 的帽子中选。",
        "(1,2,3,4) 4 个帽子的排列方案数为 24 。",
        "", "示例 4：",
        "输入：hats = [[1,2,3],[2,3,5,6],[1,3,7,9],[1,8,9],[2,5,7]]",
        "输出：111",
        "", "提示：",
        "n == hats.length",
        "1 <= n <= 10",
        "1 <= hats[i].length <= 40",
        "1 <= hats[i][j] <= 40",
        "hats[i] 包含一个数字互不相同的整数列表。"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} hats\n * @return {number}\n */\nvar numberWays = function(hats) {\n\n};",
        "py": "class Solution:\n    def numberWays(self, hats: List[List[int]]) -> int:"
    }
}, {
    "questionId": "1436",
    "titleSlug": "destination-city",
    "translatedTitle": "旅行终点站",
    "translatedContent": [
        "给你一份旅游线路图，该线路图中的旅行线路用数组 paths 表示，其中 paths[i] = [cityAi, cityBi] 表示该线路将会从 cityAi 直接前往 cityBi 。请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。",
        "", "题目数据保证线路图会形成一条不存在循环的线路，因此只会有一个旅行终点站。",
        "", "示例 1：",
        "输入：paths = [[\"London\",\"New York\"],[\"New York\",\"Lima\"],[\"Lima\",\"Sao Paulo\"]]",
        "输出：\"Sao Paulo\" ",
        "解释：从 \"London\" 出发，最后抵达终点站 \"Sao Paulo\" 。本次旅行的路线是 \"London\" -> \"New York\" -> \"Lima\" -> \"Sao Paulo\" 。",
        "", "示例 2：",
        "输入：paths = [[\"B\",\"C\"],[\"D\",\"B\"],[\"C\",\"A\"]]",
        "输出：\"A\"",
        "解释：所有可能的线路是：",
        "\"D\" -> \"B\" -> \"C\" -> \"A\". ",
        "\"B\" -> \"C\" -> \"A\". ",
        "\"C\" -> \"A\". ",
        "\"A\". ",
        "显然，旅行终点站是 \"A\" 。",
        "", "示例 3：",
        "输入：paths = [[\"A\",\"Z\"]]",
        "输出：\"Z\"",
        "", "提示：",
        "1 <= paths.length <= 100",
        "paths[i].length == 2",
        "1 <= cityAi.length, cityBi.length <= 10",
        "cityAi != cityBi",
        "所有字符串均由大小写英文字母和空格字符组成。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string[][]} paths\n * @return {string}\n */\nvar destCity = function(paths) {\n\n};",
        "py": "class Solution:\n    def destCity(self, paths: List[List[str]]) -> str:"
    }
}, {
    "questionId": "1437",
    "titleSlug": "check-if-all-1s-are-at-least-length-k-places-away",
    "translatedTitle": "是否所有 1 都至少相隔 k 个元素",
    "translatedContent": ["给你一个由若干 0 和 1 组成的数组 nums 以及整数 k。如果所有 1 都至少相隔 k 个元素，则返回 True ；否则，返回 False 。",
        "", "示例 1：",
        "输入：nums = [1,0,0,0,1,0,0,1], k = 2",
        "输出：true",
        "解释：每个 1 都至少相隔 2 个元素。",
        "", "示例 2：",
        "输入：nums = [1,0,0,1,0,1], k = 2",
        "输出：false",
        "解释：第二个 1 和第三个 1 之间只隔了 1 个元素。",
        "", "示例 3：",
        "输入：nums = [1,1,1,1,1], k = 0",
        "输出：true",
        "", "示例 4：",
        "输入：nums = [0,1,0,1], k = 1",
        "输出：true",
        "", "提示：",
        "1 <= nums.length <= 10^5",
        "0 <= k <= nums.length",
        "nums[i] 的值为 0 或 1"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {boolean}\n */\nvar kLengthApart = function(nums, k) {\n\n};",
        "py": "class Solution:\n    def kLengthApart(self, nums: List[int], k: int) -> bool:"
    }
}, {
    "questionId": "1438",
    "titleSlug": "longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit",
    "translatedTitle": "绝对差不超过限制的最长连续子数组",
    "translatedContent": ["给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。",
        "", "如果不存在满足条件的子数组，则返回 0 。",
        "", "示例 1：",
        "输入：nums = [8,2,4,7], limit = 4",
        "输出：2 ",
        "解释：所有子数组如下：",
        "[8] 最大绝对差 |8-8| = 0 <= 4.",
        "[8,2] 最大绝对差 |8-2| = 6 > 4. ",
        "[8,2,4] 最大绝对差 |8-2| = 6 > 4.",
        "[8,2,4,7] 最大绝对差 |8-2| = 6 > 4.",
        "[2] 最大绝对差 |2-2| = 0 <= 4.",
        "[2,4] 最大绝对差 |2-4| = 2 <= 4.",
        "[2,4,7] 最大绝对差 |2-7| = 5 > 4.",
        "[4] 最大绝对差 |4-4| = 0 <= 4.",
        "[4,7] 最大绝对差 |4-7| = 3 <= 4.",
        "[7] 最大绝对差 |7-7| = 0 <= 4. ",
        "因此，满足题意的最长子数组的长度为 2 。",
        "", "示例 2：",
        "输入：nums = [10,1,2,4,7,2], limit = 5",
        "输出：4 ",
        "解释：满足题意的最长子数组是 [2,4,7,2]，其最大绝对差 |2-7| = 5 <= 5 。",
        "", "示例 3：",
        "输入：nums = [4,2,2,2,4,4,2,2], limit = 0",
        "输出：3",
        "", "提示：",
        "1 <= nums.length <= 10^5",
        "1 <= nums[i] <= 10^9",
        "0 <= limit <= 10^9"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} nums\n * @param {number} limit\n * @return {number}\n */\nvar longestSubarray = function(nums, limit) {\n\n};",
        "py": "class Solution:\n    def longestSubarray(self, nums: List[int], limit: int) -> int:"
    }
}, {
    "questionId": "1439",
    "titleSlug": "find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows",
    "translatedTitle": "有序矩阵中的第 k 个最小数组和",
    "translatedContent": ["给你一个 m * n 的矩阵 mat，以及一个整数 k ，矩阵中的每一行都以非递减的顺序排列。",
        "", "你可以从每一行中选出 1 个元素形成一个数组。返回所有可能数组中的第 k 个 最小 数组和。",
        "", "示例 1：",
        "输入：mat = [[1,3,11],[2,4,6]], k = 5",
        "输出：7",
        "解释：从每一行中选出一个元素，前 k 个和最小的数组分别是：",
        "[1,2], [1,4], [3,2], [3,4], [1,6]。其中第 5 个的和是 7 。  ",
        "", "示例 2：",
        "输入：mat = [[1,3,11],[2,4,6]], k = 9",
        "输出：17",
        "", "示例 3：",
        "输入：mat = [[1,10,10],[1,4,5],[2,3,6]], k = 7",
        "输出：9",
        "解释：从每一行中选出一个元素，前 k 个和最小的数组分别是：",
        "[1,1,2], [1,1,3], [1,4,2], [1,4,3], [1,1,6], [1,5,2], [1,5,3]。其中第 7 个的和是 9 。 ",
        "", "示例 4：",
        "输入：mat = [[1,1,10],[2,2,9]], k = 7",
        "输出：12",
        "", "提示：",
        "m == mat.length",
        "n == mat.length[i]",
        "1 <= m, n <= 40",
        "1 <= k <= min(200, n ^ m)",
        "1 <= mat[i][j] <= 5000",
        "mat[i] 是一个非递减数组"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} mat\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function(mat, k) {\n\n};",
        "py": "class Solution:\n    def kthSmallest(self, mat: List[List[int]], k: int) -> int:"
    }
}, {
    "questionId": "1441",
    "titleSlug": "build-an-array-with-stack-operations",
    "translatedTitle": "用栈操作构建数组",
    "translatedContent": ["给你一个目标数组 target 和一个整数 n。每次迭代，需要从  list = {1,2,3..., n} 中依序读取一个数字。",
        "", "请使用下述操作来构建目标数组 target ：",
        "", "Push：从 list 中读取一个新元素， 并将其推入数组中。",
        "Pop：删除数组中的最后一个元素。",
        "如果目标数组构建完成，就停止读取更多元素。",
        "", "题目数据保证目标数组严格递增，并且只包含 1 到 n 之间的数字。",
        "", "请返回构建目标数组所用的操作序列。",
        "", "题目数据保证答案是唯一的。",
        "", "示例 1：",
        "输入：target = [1,3], n = 3",
        "输出：[\"Push\",\"Push\",\"Pop\",\"Push\"]",
        "解释： ",
        "读取 1 并自动推入数组 -> [1]",
        "读取 2 并自动推入数组，然后删除它 -> [1]",
        "读取 3 并自动推入数组 -> [1,3]",
        "", "示例 2：",
        "输入：target = [1,2,3], n = 3",
        "输出：[\"Push\",\"Push\",\"Push\"]",
        "", "示例 3：",
        "输入：target = [1,2], n = 4",
        "输出：[\"Push\",\"Push\"]",
        "解释：只需要读取前 2 个数字就可以停止。",
        "", "示例 4：",
        "输入：target = [2,3,4], n = 4",
        "输出：[\"Push\",\"Pop\",\"Push\",\"Push\",\"Push\"]",
        "", "提示：",
        "1 <= target.length <= 100",
        "1 <= target[i] <= 100",
        "1 <= n <= 100",
        "target 是严格递增的"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} target\n * @param {number} n\n * @return {string[]}\n */\nvar buildArray = function(target, n) {\n\n};",
        "py": "class Solution:\n    def buildArray(self, target: List[int], n: int) -> List[str]:"
    }
}, {
    "questionId": "1442",
    "titleSlug": "count-triplets-that-can-form-two-arrays-of-equal-xor",
    "translatedTitle": "形成两个异或相等数组的三元组数目",
    "translatedContent": ["给你一个整数数组 arr 。",
        "", "现需要从数组中取三个下标 i、j 和 k ，其中 (0 <= i < j <= k < arr.length) 。",
        "", "a 和 b 定义如下：",
        "", "a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]",
        "b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]",
        "", "注意：^ 表示 按位异或 操作。",
        "", "请返回能够令 a == b 成立的三元组 (i, j , k) 的数目。",
        "", "示例 1：",
        "输入：arr = [2,3,1,6,7]",
        "输出：4",
        "解释：满足题意的三元组分别是 (0,1,2), (0,2,2), (2,3,4) 以及 (2,4,4)",
        "", "示例 2：",
        "输入：arr = [1,1,1,1,1]",
        "输出：10",
        "", "示例 3：",
        "输入：arr = [2,3]",
        "输出：0",
        "", "示例 4：",
        "输入：arr = [1,3,5,7,9]",
        "输出：3",
        "", "示例 5：",
        "输入：arr = [7,11,12,9,5,2,7,17,22]",
        "输出：8",
        "", "提示：",
        "1 <= arr.length <= 300",
        "1 <= arr[i] <= 10^8"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} arr\n * @return {number}\n */\nvar countTriplets = function(arr) {\n\n};",
        "py": "class Solution:\n    def countTriplets(self, arr: List[int]) -> int:"
    }
}, {
    "questionId": "1443",
    "titleSlug": "minimum-time-to-collect-all-apples-in-a-tree",
    "translatedTitle": "收集树上所有苹果的最少时间",
    "translatedContent": ["给你一棵有 n 个节点的无向树，节点编号为 0 到 n-1 ，它们中有一些节点有苹果。通过树上的一条边，需要花费 1 秒钟。你从 节点 0 出发，请你返回最少需要多少秒，可以收集到所有苹果，并回到节点 0 。",
        "",
        "无向树的边由 edges 给出，其中 edges[i] = [fromi, toi] ，表示有一条边连接 from 和 toi 。除此以外，还有一个布尔数组 hasApple ，其中 hasApple[i] = true 代表节点 i 有一个苹果，否则，节点 i 没有苹果。",
        "", "示例 1：",
        "输入：n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]",
        "输出：8 ",
        "解释：上图展示了给定的树，其中红色节点表示有苹果。一个能收集到所有苹果的最优方案由绿色箭头表示。",
        "", "示例 2：",
        "输入：n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]",
        "输出：6",
        "解释：上图展示了给定的树，其中红色节点表示有苹果。一个能收集到所有苹果的最优方案由绿色箭头表示。",
        "", "示例 3：",
        "输入：n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]",
        "输出：0",
        "", "提示：",
        "1 <= n <= 10^5",
        "edges.length == n-1",
        "edges[i].length == 2",
        "0 <= fromi, toi <= n-1",
        "fromi < toi",
        "hasApple.length == n"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @param {number[][]} edges\n * @param {boolean[]} hasApple\n * @return {number}\n */\nvar minTime = function(n, edges, hasApple) {\n    \n};",
        "py": "class Solution:\n    def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:"
    }
}, {
    "questionId": "1444",
    "titleSlug": "number-of-ways-of-cutting-a-pizza",
    "translatedTitle": "切披萨的方案数",
    "translatedContent": ["给你一个 rows x cols 大小的矩形披萨和一个整数 k ，矩形包含两种字符： &#39;A&#39; （表示苹果）和 &#39;.&#39; （表示空白格子）。你需要切披萨 k-1 次，得到 k 块披萨并送给别人。",
        "", "切披萨的每一刀，先要选择是向垂直还是水平方向切，再在矩形的边界上选一个切的位置，将披萨一分为二。如果垂直地切披萨，那么需要把左边的部分送给一个人，如果水平地切，那么需要把上面的部分送给一个人。在切完最后一刀后，需要把剩下来的一块送给最后一个人。",
        "", "请你返回确保每一块披萨包含 至少 一个苹果的切披萨方案数。由于答案可能是个很大的数字，请你返回它对 10^9 + 7 取余的结果。",
        "", "示例 1：",
        "输入：pizza = [\"A..\",\"AAA\",\"...\"], k = 3",
        "输出：3 ",
        "解释：上图展示了三种切披萨的方案。注意每一块披萨都至少包含一个苹果。",
        "", "示例 2：",
        "输入：pizza = [\"A..\",\"AA.\",\"...\"], k = 3",
        "输出：1",
        "", "示例 3：",
        "输入：pizza = [\"A..\",\"A..\",\"...\"], k = 1",
        "输出：1",
        "", "提示：",
        "1 <= rows, cols <= 50",
        "rows == pizza.length",
        "cols == pizza[i].length",
        "1 <= k <= 10",
        "pizza 只包含字符 &#39;A&#39; 和 &#39;.&#39; 。"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {string[]} pizza\n * @param {number} k\n * @return {number}\n */\nvar ways = function(pizza, k) {\n\n};",
        "py": "class Solution:\n    def ways(self, pizza: List[str], k: int) -> int:"
    }
}, {
    "questionId": "1446",
    "titleSlug": "consecutive-characters",
    "translatedTitle": "连续字符",
    "translatedContent": ["给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。",
        "", "请你返回字符串的能量。",
        "", "示例 1：",
        "输入：s = \"leetcode\"",
        "输出：2",
        "解释：子字符串 \"ee\" 长度为 2 ，只包含字符 &#39;e&#39; 。",
        "", "示例 2：",
        "输入：s = \"abbcccddddeeeeedcba\"",
        "输出：5",
        "解释：子字符串 \"eeeee\" 长度为 5 ，只包含字符 &#39;e&#39; 。",
        "", "示例 3：",
        "输入：s = \"triplepillooooow\"",
        "输出：5",
        "", "示例 4：",
        "输入：s = \"hooraaaaaaaaaaay\"",
        "输出：11",
        "", "示例 5：",
        "输入：s = \"tourist\"",
        "输出：1",
        "", "提示：",
        "1 <= s.length <= 500",
        "s 只包含小写英文字母。"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {string} s\n * @return {number}\n */\nvar maxPower = function(s) {\n\n};",
        "py": "class Solution:\n    def maxPower(self, s: str) -> int:"
    }
}, {
    "questionId": "1447",
    "titleSlug": "simplified-fractions",
    "translatedTitle": "最简分数",
    "translatedContent": ["给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。",
        "", "示例 1：",
        "输入：n = 2",
        "输出：[\"1/2\"]",
        "解释：\"1/2\" 是唯一一个分母小于等于 2 的最简分数。",
        "", "示例 2：",
        "输入：n = 3",
        "输出：[\"1/2\",\"1/3\",\"2/3\"]",
        "", "示例 3：",
        "输入：n = 4",
        "输出：[\"1/2\",\"1/3\",\"1/4\",\"2/3\",\"3/4\"]",
        "解释：\"2/4\" 不是最简分数，因为它可以化简为 \"1/2\" 。",
        "", "示例 4：",
        "输入：n = 1",
        "输出：[]",
        "", "提示：",
        "1 <= n <= 100"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {number} n\n * @return {string[]}\n */\nvar simplifiedFractions = function(n) {\n\n};",
        "py": "class Solution:\n    def simplifiedFractions(self, n: int) -> List[str]:"
    }
}, {
    "questionId": "1448",
    "titleSlug": "count-good-nodes-in-binary-tree",
    "translatedTitle": "统计二叉树中好节点的数目",
    "translatedContent": ["给你一棵根为 root 的二叉树，请你返回二叉树中好节点的数目。",
        "", "「好节点」X 定义为：从根到该节点 X 所经过的节点中，没有任何节点的值大于 X 的值。",
        "", "示例 1：",
        "输入：root = [3,1,4,3,null,1,5]",
        "输出：4",
        "解释：图中蓝色节点为好节点。",
        "根节点 (3) 永远是个好节点。",
        "节点 4 -> (3,4) 是路径中的最大值。",
        "节点 5 -> (3,4,5) 是路径中的最大值。",
        "节点 3 -> (3,1,3) 是路径中的最大值。",
        "", "示例 2：",
        "输入：root = [3,3,null,4,2]",
        "输出：3",
        "解释：节点 2 -> (3, 3, 2) 不是好节点，因为 \"3\" 比它大。",
        "", "示例 3：",
        "输入：root = [1]",
        "输出：1",
        "解释：根节点是好节点。",
        "", "提示：",
        "二叉树中节点数目范围是 [1, 10^5] 。",
        "每个节点权值的范围是 [-10^4, 10^4] 。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar goodNodes = function(root) {\n    \n};",
        "py": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def goodNodes(self, root: TreeNode) -> int:\n        "
    }
}, {
    "questionId": "1449",
    "titleSlug": "form-largest-integer-with-digits-that-add-up-to-target",
    "translatedTitle": "数位成本和为目标值的最大数字",
    "translatedContent": ["给你一个整数数组 cost 和一个整数 target 。请你返回满足如下规则可以得到的 最大 整数：",
        "", "给当前结果添加一个数位（i + 1）的成本为 cost[i] （cost 数组下标从 0 开始）。",
        "总成本必须恰好等于 target 。",
        "添加的数位中没有数字 0 。",
        "", "由于答案可能会很大，请你以字符串形式返回。",
        "", "如果按照上述要求无法得到任何整数，请你返回 \"0\" 。",
        "", "示例 1：",
        "输入：cost = [4,3,2,5,6,7,2,5,5], target = 9",
        "输出：\"7772\"",
        "解释：添加数位 &#39;7&#39; 的成本为 2 ，添加数位 &#39;2&#39; 的成本为 3 。所以 \"7772\" 的代价为 2*3+ 3*1 = 9 。 \"997\" 也是满足要求的数字，但 \"7772\" 是较大的数字。",
        " 数字     成本",
        "  1  ->   4",
        "  2  ->   3",
        "  3  ->   2",
        "  4  ->   5",
        "  5  ->   6",
        "  6  ->   7",
        "  7  ->   2",
        "  8  ->   5",
        "  9  ->   5",
        "", "示例 2：",
        "输入：cost = [7,6,5,5,5,6,8,7,8], target = 12",
        "输出：\"85\"",
        "解释：添加数位 &#39;8&#39; 的成本是 7 ，添加数位 &#39;5&#39; 的成本是 5 。\"85\" 的成本为 7 + 5 = 12 。",
        "", "示例 3：",
        "输入：cost = [2,4,6,2,4,6,4,4,4], target = 5",
        "输出：\"0\"",
        "解释：总成本是 target 的条件下，无法生成任何整数。",
        "", "示例 4：",
        "输入：cost = [6,10,15,40,40,40,40,40,40], target = 47",
        "输出：\"32211\"",
        "", "提示：",
        "cost.length == 9",
        "1 <= cost[i] <= 5000",
        "1 <= target <= 5000"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} cost\n * @param {number} target\n * @return {string}\n */\nvar largestNumber = function(cost, target) {\n\n};",
        "py": "class Solution:\n    def largestNumber(self, cost: List[int], target: int) -> str:"
    }
}, {
    "questionId": "1450",
    "titleSlug": "number-of-students-doing-homework-at-a-given-time",
    "translatedTitle": "在既定时间做作业的学生人数",
    "translatedContent": ["给你两个整数数组 startTime（开始时间）和 endTime（结束时间），并指定一个整数 queryTime 作为查询时间。",
        "", "已知，第 i 名学生在 startTime[i] 时开始写作业并于 endTime[i] 时完成作业。",
        "", "请返回在查询时间 queryTime 时正在做作业的学生人数。形式上，返回能够使 queryTime 处于区间 [startTime[i], endTime[i]]（含）的学生人数。",
        "", "示例 1：",
        "输入：startTime = [1,2,3], endTime = [3,2,7], queryTime = 4",
        "输出：1",
        "解释：一共有 3 名学生。",
        "第一名学生在时间 1 开始写作业，并于时间 3 完成作业，在时间 4 没有处于做作业的状态。",
        "第二名学生在时间 2 开始写作业，并于时间 2 完成作业，在时间 4 没有处于做作业的状态。",
        "第二名学生在时间 3 开始写作业，预计于时间 7 完成作业，这是是唯一一名在时间 4 时正在做作业的学生。",
        "", "示例 2：",
        "输入：startTime = [4], endTime = [4], queryTime = 4",
        "输出：1",
        "解释：在查询时间只有一名学生在做作业。",
        "", "示例 3：",
        "输入：startTime = [4], endTime = [4], queryTime = 5",
        "输出：0",
        "", "示例 4：",
        "输入：startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7",
        "输出：0",
        "", "示例 5：",
        "输入：startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5",
        "输出：5",
        "", "提示：",
        "startTime.length == endTime.length",
        "1 <= startTime.length <= 100",
        "1 <= startTime[i] <= endTime[i] <= 1000",
        "1 <= queryTime <= 1000"
    ],
    "difficulty": "容易",
    "codeSnippets": {
        "js": "/**\n * @param {number[]} startTime\n * @param {number[]} endTime\n * @param {number} queryTime\n * @return {number}\n */\nvar busyStudent = function(startTime, endTime, queryTime) {\n\n};",
        "py": "class Solution:\n    def busyStudent(self, startTime: List[int], endTime: List[int], queryTime: int) -> int:"
    }
}, {
    "questionId": "1451",
    "titleSlug": "rearrange-words-in-a-sentence",
    "translatedTitle": "重新排列句子中的单词",
    "translatedContent": ["「句子」是一个用空格分隔单词的字符串。给你一个满足下述格式的句子 text :",
        "", "句子的首字母大写",
        "text 中的每个单词都用单个空格分隔。",
        "", "请你重新排列 text 中的单词，使所有单词按其长度的升序排列。如果两个单词的长度相同，则保留其在原句子中的相对顺序。",
        "", "请同样按上述格式返回新的句子。",
        "", "示例 1：",
        "输入：text = \"Leetcode is cool\"",
        "输出：\"Is cool leetcode\"",
        "解释：句子中共有 3 个单词，长度为 8 的 \"Leetcode\" ，长度为 2 的 \"is\" 以及长度为 4 的 \"cool\" 。",
        "输出需要按单词的长度升序排列，新句子中的第一个单词首字母需要大写。",
        "", "示例 2：",
        "输入：text = \"Keep calm and code on\"",
        "输出：\"On and keep calm code\"",
        "解释：输出的排序情况如下：",
        "\"On\" 2 个字母。",
        "\"and\" 3 个字母。",
        "\"keep\" 4 个字母，因为存在长度相同的其他单词，所以它们之间需要保留在原句子中的相对顺序。",
        "\"calm\" 4 个字母。",
        "\"code\" 4 个字母。",
        "", "示例 3：",
        "输入：text = \"To be or not to be\"",
        "输出：\"To be or to be not\"",
        "", "提示：",
        "text 以大写字母开头，然后包含若干小写字母以及单词间的单个空格。",
        "1 <= text.length <= 10^5"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string} text\n * @return {string}\n */\nvar arrangeWords = function(text) {\n\n};",
        "py": "class Solution:\n    def arrangeWords(self, text: str) -> str:"
    }
}, {
    "questionId": "1452",
    "titleSlug": "people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list",
    "translatedTitle": "收藏清单",
    "translatedContent": ["给你一个数组 favoriteCompanies ，其中 favoriteCompanies[i] 是第 i 名用户收藏的公司清单（下标从 0 开始）。",
        "", "请找出不是其他任何人收藏的公司清单的子集的收藏清单，并返回该清单下标。下标需要按升序排列。",
        "", "示例 1：",
        "输入：favoriteCompanies = [[\"leetcode\",\"google\",\"facebook\"],[\"google\",\"microsoft\"],[\"google\",\"facebook\"],[\"google\"],[\"amazon\"]]",
        "输出：[0,1,4] ",
        "解释：",
        "favoriteCompanies[2]=[\"google\",\"facebook\"] 是 favoriteCompanies[0]=[\"leetcode\",\"google\",\"facebook\"] 的子集。",
        "favoriteCompanies[3]=[\"google\"] 是 favoriteCompanies[0]=[\"leetcode\",\"google\",\"facebook\"] 和 favoriteCompanies[1]=[\"google\",\"microsoft\"] 的子集。",
        "其余的收藏清单均不是其他任何人收藏的公司清单的子集，因此，答案为 [0,1,4] 。",
        "", "示例 2：",
        "输入：favoriteCompanies = [[\"leetcode\",\"google\",\"facebook\"],[\"leetcode\",\"amazon\"],[\"facebook\",\"google\"]]",
        "输出：[0,1] ",
        "解释：favoriteCompanies[2]=[\"facebook\",\"google\"] 是 favoriteCompanies[0]=[\"leetcode\",\"google\",\"facebook\"] 的子集，因此，答案为 [0,1] 。",
        "", "示例 3：",
        "输入：favoriteCompanies = [[\"leetcode\"],[\"google\"],[\"facebook\"],[\"amazon\"]]",
        "输出：[0,1,2,3]",
        "", "提示：",
        "1 <= favoriteCompanies.length <= 100",
        "1 <= favoriteCompanies[i].length <= 500",
        "1 <= favoriteCompanies[i][j].length <= 20",
        "favoriteCompanies[i] 中的所有字符串 各不相同 。",
        "用户收藏的公司清单也 各不相同 ，也就是说，即便我们按字母顺序排序每个清单， favoriteCompanies[i] != favoriteCompanies[j] 仍然成立。",
        "所有字符串仅包含小写英文字母。"
    ],
    "difficulty": "中等",
    "codeSnippets": {
        "js": "/**\n * @param {string[][]} favoriteCompanies\n * @return {number[]}\n */\nvar peopleIndexes = function(favoriteCompanies) {\n\n};",
        "py": "class Solution:\n    def peopleIndexes(self, favoriteCompanies: List[List[str]]) -> List[int]:"
    }
}, {
    "questionId": "1453",
    "titleSlug": "maximum-number-of-darts-inside-of-a-circular-dartboard",
    "translatedTitle": "圆形靶内的最大飞镖数量",
    "translatedContent": ["墙壁上挂着一个圆形的飞镖靶。现在请你蒙着眼睛向靶上投掷飞镖。",
        "", "投掷到墙上的飞镖用二维平面上的点坐标数组表示。飞镖靶的半径为 r 。",
        "", "请返回能够落在 任意 半径为 r 的圆形靶内或靶上的最大飞镖数。",
        "", "示例 1：",
        "输入：points = [[-2,0],[2,0],[0,2],[0,-2]], r = 2",
        "输出：4",
        "解释：如果圆形的飞镖靶的圆心为 (0,0) ，半径为 2 ，所有的飞镖都落在靶上，此时落在靶上的飞镖数最大，值为 4 。",
        "", "示例 2：",
        "输入：points = [[-3,0],[3,0],[2,6],[5,4],[0,9],[7,8]], r = 5",
        "输出：5",
        "解释：如果圆形的飞镖靶的圆心为 (0,4) ，半径为 5 ，则除了 (7,8) 之外的飞镖都落在靶上，此时落在靶上的飞镖数最大，值为 5 。",
        "", "示例 3：",
        "输入：points = [[-2,0],[2,0],[0,2],[0,-2]], r = 1",
        "输出：1",
        "", "示例 4：",
        "输入：points = [[1,2],[3,5],[1,-1],[2,3],[4,1],[1,3]], r = 2",
        "输出：4",
        "", "提示：",
        "1 <= points.length <= 100",
        "points[i].length == 2",
        "-10^4 <= points[i][0], points[i][1] <= 10^4",
        "1 <= r <= 5000"
    ],
    "difficulty": "困难",
    "codeSnippets": {
        "js": "/**\n * @param {number[][]} points\n * @param {number} r\n * @return {number}\n */\nvar numPoints = function(points, r) {\n\n};",
        "py": "class Solution:\n    def numPoints(self, points: List[List[int]], r: int) -> int:"
    }
}];
module.exports = data;
