/**
 * 1 用 node 执行 "1.getOperateList.js"，抓回缺失的模板slugTitle列表，将会更新 "2.getPageData.js"
 * 2 把 "2.getPageData.js" 代码帖到 https://leetcode-cn.com/problemset/all/ 页面的 console 里跑
 * 3 从 console 得到输出后，把它更新到 "data.js" 和 "questionData.js" 里
 * 4 用 node 执行 "3.generateTemplate.js" 生成模板
 * 5 用 node 执行 "4.mergeData" 合并数据文件
 * 
 * 本工具用来从网站上获取题目数据，用于生成模板。
 * 本工具获取数据的 graphQl 查询受跨站请求限制，必须在 leetcode-cn.com 的域名下执行。
 * https://leetcode-cn.com/problemset/all/ 存在jQuery，所以直接使用 jQuery 的 ajax 工具
 */

//需要处理的slugTitle, 有可能是新题，也有可能是没有能用JS或PY解答的题。
//没有能用JS或PY解答的题也需要下载题目内容回来才知道有没有更新。
//::Start refill operateList
var operateList = ["IQvJ9i","2vYnGI","ccw6C7","nGK0Fy","Uh984O","Za25hA","meChtZ","hSRGyL","5TxKeK","UlBDOe","er94lq","er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof","er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof","qiu-12n-lcof","gu-piao-de-zui-da-li-run-lcof","yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof","ping-heng-er-cha-shu-lcof","bu-ke-pai-zhong-de-shun-zi-lcof","ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof","gou-jian-cheng-ji-shu-zu-lcof","dui-lie-de-zui-da-zhi-lcof","hua-dong-chuang-kou-de-zui-da-zhi-lcof","bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof","chou-shu-lcof","er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof","zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof","que-shi-de-shu-zi-lcof","zuo-xuan-zhuan-zi-fu-chuan-lcof","zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof","fan-zhuan-dan-ci-shun-xu-lcof","li-wu-de-zui-da-jie-zhi-lcof","liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof","ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof","he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof","ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof","he-wei-sde-liang-ge-shu-zi-lcof","shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof","shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof","er-cha-shu-de-shen-du-lcof","shu-zu-zhong-de-ni-xu-dui-lcof","er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof","di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof","er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof","cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof","shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof","cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof","cong-shang-dao-xia-da-yin-er-cha-shu-lcof","shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof","1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof","zi-fu-chuan-de-pai-lie-lcof","xu-lie-hua-er-cha-shu-lcof","zhan-de-ya-ru-dan-chu-xu-lie-lcof","er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof","lian-xu-zi-shu-zu-de-zui-da-he-lcof","shu-ju-liu-zhong-de-zhong-wei-shu-lcof","bao-han-minhan-shu-de-zhan-lcof","zui-xiao-de-kge-shu-lcof","fu-za-lian-biao-de-fu-zhi-lcof","shan-chu-lian-biao-de-jie-dian-lcof","fan-zhuan-lian-biao-lcof","zheng-ze-biao-da-shi-pi-pei-lcof","da-yin-cong-1dao-zui-da-de-nwei-shu-lcof","shu-zhi-de-zheng-shu-ci-fang-lcof","lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof","shun-shi-zhen-da-yin-ju-zhen-lcof","er-jin-zhi-zhong-1de-ge-shu-lcof","diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof","biao-shi-shu-zhi-de-zi-fu-chuan-lcof","dui-cheng-de-er-cha-shu-lcof","er-cha-shu-de-jing-xiang-lcof","shu-de-zi-jie-gou-lcof","he-bing-liang-ge-pai-xu-de-lian-biao-lcof","jian-sheng-zi-ii-lcof","jian-sheng-zi-lcof","zhong-jian-er-cha-shu-lcof","cong-wei-dao-tou-da-yin-lian-biao-lcof","ji-qi-ren-de-yun-dong-fan-wei-lcof","ti-huan-kong-ge-lcof","ju-zhen-zhong-de-lu-jing-lcof","xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof","qing-wa-tiao-tai-jie-wen-ti-lcof","er-wei-shu-zu-zhong-de-cha-zhao-lcof","shu-zu-zhong-zhong-fu-de-shu-zi-lcof","fei-bo-na-qi-shu-lie-lcof","yong-liang-ge-zhan-shi-xian-dui-lie-lcof","create-sorted-array-through-instructions","sell-diminishing-valued-colored-balls","minimum-deletions-to-make-character-frequencies-unique","get-maximum-in-generated-array","design-an-expression-tree-with-evaluate-function","furthest-building-you-can-reach","count-sorted-vowel-strings","check-array-formation-through-concatenation","path-with-minimum-effort","arithmetic-subarrays","slowest-key","best-team-with-no-conflicts","lexicographically-smallest-string-after-applying-operations","largest-substring-between-two-equal-characters","number-of-ways-to-form-a-target-string-given-a-dictionary","count-substrings-that-differ-by-one-character","widest-vertical-area-between-two-points-containing-no-points","sort-array-by-increasing-frequency","count-subtrees-with-max-distance-between-cities","split-two-strings-to-make-palindrome","maximal-network-rank","maximum-nesting-depth-of-the-parentheses","maximum-number-of-visible-points","minimum-one-bit-operations-to-make-integers-zero","even-odd-tree","special-array-with-x-elements-greater-than-or-equal-x","fancy-sequence","coordinate-with-maximum-network-quality","number-of-sets-of-k-non-overlapping-line-segments","maximum-number-of-achievable-transfer-requests","throne-inheritance","maximum-profit-of-operating-a-centennial-wheel","crawler-log-folder","minimum-cost-to-connect-two-groups-of-points","maximum-non-negative-product-in-a-matrix","split-a-string-into-the-max-number-of-unique-substrings","rearrange-spaces-between-words","find-valid-matrix-given-row-and-column-sums","find-servers-that-handled-most-number-of-requests","alert-using-same-key-card-three-or-more-times-in-a-one-hour-period","design-parking-system","check-if-string-is-transformable-with-substring-sort-operations","min-cost-to-connect-all-points","count-unhappy-friends","special-positions-in-a-binary-matrix","remove-max-number-of-edges-to-keep-graph-fully-traversable","minimum-deletion-cost-to-avoid-repeating-letters","number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers","replace-all-s-to-avoid-consecutive-repeating-characters","strange-printer-ii","maximum-sum-obtained-of-any-permutation","make-sum-divisible-by-p","sum-of-all-odd-length-subarrays","number-of-ways-to-reorder-array-to-get-same-bst","minimum-number-of-days-to-disconnect-island","maximum-length-of-subarray-with-positive-product","detect-pattern-of-length-m-repeated-k-or-more-times","stone-game-v","find-latest-group-of-size-m","maximum-number-of-coins-you-can-get","most-visited-sector-in-a-circular-track","count-all-possible-routes","shortest-subarray-to-be-removed-to-make-array-sorted","number-of-ways-to-split-a-string","matrix-diagonal-sum","minimum-number-of-days-to-eat-n-oranges","magnetic-force-between-two-balls","minimum-operations-to-make-array-equal","minimum-cost-to-cut-a-stick","find-longest-awesome-substring","find-kth-bit-in-nth-binary-string","make-the-string-great","detect-cycles-in-2d-grid","minimum-numbers-of-function-calls-to-make-target-array","minimum-number-of-vertices-to-reach-all-nodes","thousand-separator","get-the-maximum-score","minimum-swaps-to-arrange-a-binary-grid","find-the-winner-of-an-array-game","count-good-triplets","number-of-good-leaf-nodes-pairs","bulb-switcher-iv","shuffle-string","maximum-number-of-non-overlapping-subarrays-with-sum-equals-target","minimum-insertions-to-balance-a-parentheses-string","can-convert-string-in-k-moves","kth-missing-positive-number","find-a-value-of-a-mysterious-function-closest-to-target","maximum-number-of-non-overlapping-substrings","number-of-nodes-in-the-sub-tree-with-the-same-label","water-bottles","best-position-for-a-service-centre","string-compression-ii","number-of-substrings-with-only-1s","number-of-good-pairs","minimum-number-of-increments-on-subarrays-to-form-a-target-array","number-of-good-ways-to-split-a-string","number-of-sub-arrays-with-odd-sum","count-odd-numbers-in-an-interval-range","minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits","count-submatrices-with-all-ones","last-moment-before-all-ants-fall-out-of-a-plank","can-make-arithmetic-progression-from-sequence","max-value-of-equation","number-of-subsequences-that-satisfy-the-given-sum-condition","check-if-array-pairs-are-divisible-by-k","path-crossing","stone-game-iv","minimum-difference-between-largest-and-smallest-value-in-three-moves","range-sum-of-sorted-subarray-sums","find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree","avoid-flood-in-the-city","making-file-names-unique","xor-operation-in-an-array","minimum-number-of-days-to-make-m-bouquets","least-number-of-unique-integers-after-k-removals","running-sum-of-1d-array","parallel-courses-ii","longest-subarray-of-1s-after-deleting-one-element","the-kth-factor-of-n","average-salary-excluding-the-minimum-and-maximum-salary","paint-house-iii","design-browser-history","the-k-strongest-values-in-an-array","shuffle-the-array","probability-of-a-two-boxes-having-the-same-number-of-distinct-balls","reorder-routes-to-make-all-paths-lead-to-the-city-zero","maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts","maximum-product-of-two-elements-in-an-array","find-two-non-overlapping-sub-arrays-each-with-target-sum","subrectangle-queries","allocate-mailboxes","final-prices-with-a-special-discount-in-a-shop","cherry-pickup-ii","course-schedule-iv","check-if-a-string-contains-all-binary-codes-of-size-k","make-two-arrays-equal-by-reversing-sub-arrays","the-dining-philosophers","minimum-cost-to-move-chips-to-the-same-position","path-with-maximum-probability","fizz-buzz-multithreaded","reformat-department-table","kth-ancestor-of-a-tree-node","three-consecutive-odds","reformat-date","rank-transform-of-a-matrix","graph-connectivity-with-threshold","print-zero-even-odd","mean-of-array-after-removing-some-elements","print-in-order","print-foobar-alternately","building-h2o","longest-arithmetic-subsequence","count-unique-characters-of-all-substrings-of-a-given-string","logical-or-of-two-binary-grids-represented-as-quad-trees","swap-salary","exchange-seats","not-boring-movies","human-traffic-of-stadium","classes-more-than-5-students","big-countries","kth-smallest-instructions","trips-and-users","design-add-and-search-words-data-structure","rising-temperature","delete-duplicate-emails","tenth-line","transpose-file","valid-phone-numbers","word-frequency","department-top-three-salaries","department-highest-salary","customers-who-never-order","duplicate-emails","employees-earning-more-than-their-managers","consecutive-numbers","rank-scores","nth-highest-salary","second-highest-salary","combine-two-tables"];
//::End refill

var dictDiffculty = {
        "Easy": "容易",
        "Medium": "中等",
        "Hard": "困难"
    },
    level = ["", "Easy", "Medium", "Hard"],
    quesInfo, leetCodeData = [],
    translations = {},
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
    quesInfo.sort((a, b) => a.rawId - b.rawId);
    console.info("把上面代码拷贝到 quesionData.js:");

    console.info("");
    console.info("********************************************************");
    console.info("*                                                      *");
    console.info("*                   醒 目 的 分 隔 线                    *");
    console.info("*                                                      *");
    console.info("********************************************************");
    console.info("");

    getQuesData();
    console.info("let data = " + JSON.stringify(leetCodeData).replace(/([^\\])","/g, "$1\",\n\"").replace(/\\r/g, "").replace(/"questionFrontendId"/g,
        "\"questionId\"") + ";\nmodule.exports = data;");
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
            query: "query questionData { question(titleSlug: \"" + name +
                "\") { questionFrontendId titleSlug translatedTitle translatedContent difficulty codeSnippets { lang code } }}",
        },
        beforeSend: function(jqXHR, settings) {
            jqXHR.setRequestHeader("x-csrftoken", csrfToken);
        },
        success: data => {
            var question = data.data.question,
                codejs = "N/A",
                codepy = "N/A",
                id = question.questionFrontendId;
            question.questionFrontendId = id.match(/^\d+$/) ? ("000" + id).slice(-4) :
                id.replace(/(\d+|-)/g, " $1 ").replace(/ +/g, " ").replace(/^ | $| (?=[.-])|(?<=[.-]) /g, "");
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
                })).sort((a, b) => a.questionId < b.questionId ? -1 : a.questionId > b.questionId ? 1 : 0);
        }
    });
}

goFetch();
