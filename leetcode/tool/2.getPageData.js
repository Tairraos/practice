/**
 * 1 用 node 执行 "1.getOperateList.js"，抓回缺失的模板slugTitle列表，将会更新 "2.getPageData.js"
 * 2 把 "2.getPageData.js" 代码帖到 https://leetcode-cn.com/problemset/all/ 页面的 console 里跑
 * 3 从 console 得到输出后，把它更新到 "data.js" 和 "questionData.js" 里
 * 4 用 node 执行 "3.generateTemplate.js" 生成模板
 * 5 生成完后把 "data.js" 里的数据移动到 oldData.js 里备份。
 * 
 * 本工具用来从网站上获取题目数据，用于生成模板。
 * 本工具获取数据的 graphQl 查询受跨站请求限制，必须在 leetcode-cn.com 的域名下执行。
 * https://leetcode-cn.com/problemset/all/ 存在jQuery，所以直接使用 jQuery 的 ajax 工具
 */

//需要处理的slugTitle, 有可能是新题，也有可能是没有能用JS或PY解答的题。
//没有能用JS或PY解答的题也需要下载题目内容回来才知道有没有更新。
//::Start refill operateList
var operateList = ["xun-bao","zui-xiao-tiao-yue-ci-shu","you-le-yuan-de-mi-gong","xiao-zhang-shua-ti-ji-hua","qi-wang-ge-shu-tong-ji","you-le-yuan-de-you-lan-ji-hua","chuan-di-xin-xi","er-cha-shu-ren-wu-diao-du","qie-fen-shu-zu","ju-qing-hong-fa-shi-jian","na-ying-bi","sparse-similarity-lcci","langtons-ant-lcci","word-rectangle-lcci","sum-swap-lcci","t9-lcci","max-submatrix-lcci","max-black-square-lcci","missing-two-lcci","shortest-supersequence-lcci","pairs-with-sum-lcci","rank-from-stream-lcci","group-anagrams-lcci","find-closest-lcci","find-majority-element-lcci","get-kth-magic-number-lcci","circus-tower-lcci","baby-names-lcci","number-of-2s-in-range-lcci","find-longest-subarray-lcci","missing-number-lcci","boolean-evaluation-lcci","word-transformer-lcci","volume-of-histogram-lcci","continuous-median-lcci","calculator-lcci","lru-cache-lcci","add-without-plus-lcci","multi-search-lcci","the-masseuse-lcci","longest-word-lcci","smallest-k-lcci","re-space-lcci","binode-lcci","english-int-lcci","factorial-zeros-lcci","sorted-matrix-search-lcci","hanota-lcci","peaks-and-valleys-lcci","sorted-merge-lcci","robot-in-a-grid-lcci","bst-sequences-lcci","paths-with-sum-lcci","partition-list-lcci","kth-node-from-end-of-list-lcci","one-away-lcci","pond-sizes-lcci","pattern-matching-lcci","contiguous-sequence-lcci","sub-sort-lcci","master-mind-lcci","best-line-lcci","bisect-squares-lcci","diving-board-lcci","living-people-lcci","operations-lcci","maximum-lcci","permutation-ii-lcci","er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof","er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof","smallest-difference-lcci","tic-tac-toe-lcci","intersection-lcci","words-frequency-lcci","swap-numbers-lcci","sparse-array-search-lcci","permutation-i-lcci","magic-index-lcci","eight-queens-lcci","search-rotate-array-lcci","coin-lcci","reverse-bits-lcci","check-subtree-lcci","animal-shelter-lcci","bianry-number-to-string-lcci","pile-box-lcci","color-fill-lcci","bracket-lcci","recursive-mulitply-lcci","power-set-lcci","three-steps-problem-lcci","draw-line-lcci","stack-of-plates-lcci","sum-lists-lcci","delete-middle-node-lcci","zero-matrix-lcci","rotate-matrix-lcci","palindrome-permutation-lcci","closed-number-lcci","exchange-lcci","convert-integer-lcci","insert-into-bits-lcci","first-common-ancestor-lcci","successor-lcci","legal-binary-search-tree-lcci","check-balance-lcci","list-of-depth-lcci","minimum-height-tree-lcci","sort-of-stacks-lcci","three-in-one-lcci","route-between-nodes-lcci","implement-queue-using-stacks-lcci","min-stack-lcci","linked-list-cycle-lcci","intersection-of-two-linked-lists-lcci","palindrome-linked-list-lcci","remove-duplicate-node-lcci","string-rotation-lcci","compress-string-lcci","string-to-url-lcci","check-permutation-lcci","is-unique-lcci","guess-numbers","programmable-robot","coin-bonus","broken-board-dominoes","deep-dark-fraction","maximum-number-of-darts-inside-of-a-circular-dartboard","people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list","rearrange-words-in-a-sentence","number-of-students-doing-homework-at-a-given-time","number-of-ways-of-cutting-a-pizza","minimum-time-to-collect-all-apples-in-a-tree","count-triplets-that-can-form-two-arrays-of-equal-xor","build-an-array-with-stack-operations","find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows","longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit","check-if-all-1s-are-at-least-length-k-places-away","destination-city","form-largest-integer-with-digits-that-add-up-to-target","count-good-nodes-in-binary-tree","simplified-fractions","consecutive-characters","diagonal-traverse-ii","maximum-points-you-can-obtain-from-cards","maximum-score-after-splitting-a-string","build-array-where-you-can-find-the-maximum-exactly-k-comparisons","minimum-number-of-frogs-croaking","display-table-of-food-orders-in-a-restaurant","reformat-the-string","number-of-ways-to-wear-different-hats-to-each-other","check-if-a-string-can-break-another-string","max-difference-you-can-get-from-changing-an-integer","kids-with-the-greatest-number-of-candies","number-of-ways-to-paint-n-x-3-grid","html-entity-parser","queries-on-a-permutation-with-key","string-matching-in-an-array","stone-game-iii","number-of-steps-to-reduce-a-number-in-binary-representation-to-one","minimum-subsequence-in-non-increasing-order","restore-the-array","the-k-th-lexicographical-string-of-all-happy-strings-of-length-n","find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k","minimum-value-to-get-positive-step-by-step-sum","find-all-good-strings","design-underground-system","count-number-of-teams","find-lucky-integer-in-an-array","reducing-dishes","construct-k-palindrome-strings","circle-and-rectangle-overlapping","count-largest-group","the-dining-philosophers","fizz-buzz-multithreaded","longest-happy-string","reformat-department-table","constrained-subsequence-sum","print-zero-even-odd","print-in-order","print-foobar-alternately","building-h2o","count-unique-characters-of-all-substrings-of-a-given-string","logical-or-of-two-binary-grids-represented-as-quad-trees","employee-importance","swap-salary","exchange-seats","not-boring-movies","human-traffic-of-stadium","classes-more-than-5-students","big-countries","peeking-iterator","trips-and-users","rising-temperature","delete-duplicate-emails","tenth-line","transpose-file","valid-phone-numbers","word-frequency","department-top-three-salaries","department-highest-salary","customers-who-never-order","duplicate-emails","employees-earning-more-than-their-managers","consecutive-numbers","rank-scores","nth-highest-salary","second-highest-salary","combine-two-tables"];
//::End refill

var dictDiffculty = { "Easy": "容易", "Medium": "中等", "Hard": "困难" }, level = ["", "Easy", "Medium", "Hard"],
    quesInfo, leetCodeData = [], translations = {},
    // 如果从cookie里抓token出错，需要去网页里的Network里，找到graphql记录，从RequestHeader里更新x-csrfToken值在这里
    // csrfToken = "oVVYWtw0qNo1TJPjYXvSlqyyxxx4kQbWrLd2wQHCdLBzOocsMdP6pANcp5NyNV4x";
    csrfToken = document.cookie.match(/csrftoken=([^;]+)/)[1];

/**
 * 输出问题信息，和更新的题目
 */
function goFetch() {
    console.clear();

    getQuesInfo();
    console.info("module.exports = " + JSON.stringify(quesInfo).replace(/[\n\r]+/g, "\n") + ";");
    console.info("把上面代码拷贝到 quesionData.js:");

    console.info("");
    console.info("********************************************************");
    console.info("*                                                      *");
    console.info("*                   醒 目 的 分 隔 线                    *");
    console.info("*                                                      *");
    console.info("********************************************************");
    console.info("");

    getQuesData();
    console.info("let data = " + JSON.stringify(leetCodeData).replace(/([^\\])","/g, "$1\",\n\"").replace(/\\r/g, "").replace(/"questionFrontendId"/g, "\"questionId\"") + ";module.exports = data;");
    console.info("把上面代码拷贝到 data.js:");
}

/**
 * 调用 getQues 把数据保存到 leetCodeData
 */
function getQuesData() {
    operateList.forEach(item => getQues(item));
    leetCodeData = leetCodeData.sort((a, b) => +a.questionFrontendId - +b.questionFrontendId);
}

/** 
 * 把 HTML 转成 txt
 */
function html2txt(str) {
    return str.replace(/<img[^>]*href="([^"]+)"[^>]*>/, "[示意图]($1)")
        .replace(/[\t\r]|<[^>]+>/g, "")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&nbsp;/g, " ")
        .replace(/&quot;/g, "\"")
        .replace(/\n +\n/g, "\n\n")
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
        beforeSend: function(jqXHR, settings) {
            jqXHR.setRequestHeader("x-csrftoken", csrfToken);
        },
        success: data => {
            var question = data.data.question,
                codejs = "N/A",
                codepy = "N/A";
            if (question.questionFrontendId.match(/^\d+$/)) {
                question.questionFrontendId = ("000" + question.questionFrontendId).slice(-4);
            }
            //抓回来所有语言的题目，只保留JS和PY的，如果有PY3就保留PY3
            if (question.codeSnippets) {
                question.codeSnippets.forEach(i => {
                    if (i.lang === "JavaScript") codejs = i.code;
                    if (i.lang === "Python") codepy = "#Python 2\n\n" + i.code;
                    if (i.lang === "Python3") codepy = i.code;
                });
                question.codeSnippets = {
                    js: codejs,
                    py: codepy
                };
                question.difficulty = dictDiffculty[question.difficulty];
                question.translatedContent = html2txt(question.translatedContent);
                if (codejs !== "N/A" || codepy !== "N/A") {
                    leetCodeData.push(question);
                }
            }
        }
    });
}

/**
 * 取回所有问题信息
 */
function getQuesInfo() {
    $.ajax({
        url: "https://leetcode-cn.com/graphql",
        async: false,
        dataType: "json",
        type: "POST",
        data: {
            operationName: "getQuestionTranslation",
            query: "query getQuestionTranslation  {  translations: allAppliedQuestionTranslations { title questionId }}",
        },
        beforeSend: function(jqXHR, settings) {
            jqXHR.setRequestHeader("x-csrftoken", csrfToken);
        },
        success: data => {
            data.data.translations.map(item => translations[item.questionId] = item.title);
        }
    });

    $.ajax({
        url: "https://leetcode-cn.com/api/problems/all/",
        async: false,
        dataType: "json",
        type: "GET",
        beforeSend: function(jqXHR, settings) {
            jqXHR.setRequestHeader("x-csrftoken", csrfToken);
        },
        success: data => {
            quesInfo = data.stat_status_pairs.map(
                item => ({
                    rawId: item.stat.question_id,
                    questionId: item.stat.frontend_question_id,
                    qid: ("000" + item.stat.frontend_question_id).slice(-4),
                    titleEn: item.stat.question__title,
                    titleCn: translations[item.stat.question_id],
                    titleSlug: item.stat.question__title_slug,
                    difficulty: level[item.difficulty.level],
                    level: item.difficulty.level,
                    isPaidOnly: item.paid_only
                })).sort((a, b) => a.questionId - b.questionId);
        }
    });
}

goFetch();
