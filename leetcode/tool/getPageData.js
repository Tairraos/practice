/**
 * 先在 node 里执行 getOperateList.js，抓回缺失的模板slugTitle列表，把列表替换第 12 行的 operateList
 * 然后把所有代码帖到 https://leetcode-cn.com/problemset/all/ 页面的 console 里跑，因为有 CSRF 校验，必须在这个页面跑
 * 如果有错误，需要更新本代码 21 行的 csrfToken，可以从页面的 cookie 里看到有效的 token
 * 得到输出后，把它帖到 data.js 里，用 node 执行 getPageData.js 生成模板
 * 生成完后把 data.js 里的数据移动到 oldData.js 里备份。
 * 
 * 本工具用来从网站上获取题目数据，用于生成模板。
 * 本工具获取数据的 graphQl 查询受跨站请求限制，必须在 leetcode-cn.com 的域名下执行。
 * https://leetcode-cn.com/problemset/all/ 存在jQuery，所以直接使用 jQuery 的 ajax 工具
 * 
 */

var operateList = ["recover-a-tree-from-preorder-traversal", "maximum-difference-between-node-and-ancestor", "longest-arithmetic-sequence", "divisor-game", "video-stitching", "camelcase-matching", "sum-of-root-to-leaf-binary-numbers", "remove-outermost-parentheses", "number-of-enclaves", "next-greater-node-in-linked-list", "binary-prefix-divisible-by-5", "convert-to-base-2", "binary-string-with-substrings-representing-1-to-n", "smallest-integer-divisible-by-k", "best-sightseeing-pair", "partition-array-into-three-parts-with-equal-sum", "numbers-with-repeated-digits", "capacity-to-ship-packages-within-d-days", "pairs-of-songs-with-total-durations-divisible-by-60", "complement-of-base-10-integer", "construct-binary-search-tree-from-preorder-traversal", "minimum-domino-rotations-for-equal-row", "clumsy-factorial", "maximize-sum-of-array-after-k-negations", "max-consecutive-ones-iii", "check-if-word-is-valid-after-substitutions", "find-common-characters", "grid-illumination", "minimum-cost-to-merge-stones", "available-captures-for-rook", "maximum-binary-tree-ii", "find-the-town-judge", "number-of-squareful-arrays", "minimum-number-of-k-consecutive-bit-flips", "rotting-oranges", "cousins-in-binary-tree", "subarrays-with-k-different-integers", "broken-calculator", "satisfiability-of-equality-equations", "add-to-array-form-of-integer", "smallest-string-starting-from-leaf", "vertical-order-traversal-of-a-binary-tree", "interval-list-intersections", "sum-of-even-numbers-after-queries", "string-without-aaa-or-bbb", "minimum-cost-for-tickets", "triples-with-bitwise-and-equal-to-zero", "time-based-key-value-store", "unique-paths-iii", "distribute-coins-in-binary-tree", "longest-turbulent-subarray", "squares-of-a-sorted-array", "largest-perimeter-triangle", "odd-even-jump", "subarray-sums-divisible-by-k", "flip-binary-tree-to-match-preorder-traversal", "powerful-integers", "pancake-sorting", "random-pick-with-weight", "letter-case-permutation", "n-ary-tree-postorder-traversal", "maximum-depth-of-n-ary-tree", "construct-quad-tree", "set-intersection-size-at-least-two", "reach-a-number", "contain-virus", "to-lower-case"];

var dictDiffculty = {
        "Easy": "容易",
        "Medium": "中等",
        "Hard": "困难"
    },
    csrfToken = "16Bj6wbYhAzcorp39MEqGdJbTu0Is0I1NwHwbO7NCHtMXvDjmSwVQqkHbK1aKqAp";

window.leetCodeData = [];

/**
 * 调用 getQues 把数据保存到 leetCodeData, 然后输出 
 */
function getQuestionData() {
    operateList.forEach(item => getQues(item));
    console.log("let data = " + JSON.stringify(window.leetCodeData) + ";module.exports = data;");
    console.log("//格式化，再做下面替换，再格式化。 (\\[|\", )\" => $1\\n\"");
}

/** 
 * 把HTML转成txt 
 */
function html2txt(str) {
    return str.replace(/<img[^>]*href="([^"]+)"[^>]*>/, "[示意图]($1)")
        .replace(/[\t\r]|<[^>]+>/g, "")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&nbsp;/g, " ")
        .replace(/&quot;/g, "\"")
        .replace(/\n +\n/g, "\n\n")
        .replace(/：/g, ": ")
        .replace(/\n\n+/g, "\n\n")
        .replace(/^\s+|\s+$/, "")
        .replace(/(\n(示例|提示)[^\n]*\n)\n/g, "$1")
        .split("\n");
}

/**
 * 发送 graphQl 请求，把题目数据抓回来
 * @param {string} name - titleSlug
 */
function getQues(name) {

    $.ajax({
        url: "https://leetcode-cn.com/graphql",
        async: false,
        dataType: "json",
        type: "POST",
        data: {
            operationName: "questionData",
            query: "query questionData { question(titleSlug: \"" + name + "\") { questionFrontendId titleSlug translatedTitle translatedContent difficulty codeSnippets { lang code } }}",
        },
        beforeSend: function (jqXHR, settings) {
            jqXHR.setRequestHeader("x-csrftoken", csrfToken);
        },
        success: data => {
            var question = data.data.question,
                code = "N/A";
            //抓回来所有语言的题目，只保留JS的
            question.codeSnippets.forEach(i => {
                if (i.lang === "JavaScript") code = i.code;
            });
            question.codeSnippets = code;
            question.difficulty = dictDiffculty[question.difficulty];
            question.translatedContent = html2txt(question.translatedContent);
            window.leetCodeData.push(question);
            // console.log(JSON.stringify(question) + ",");
        }
    });
}

getQuestionData();