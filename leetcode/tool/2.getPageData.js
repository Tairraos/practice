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
var operateList = ["sparse-similarity-lcci","langtons-ant-lcci","word-rectangle-lcci","sum-swap-lcci","t9-lcci","max-submatrix-lcci","max-black-square-lcci","missing-two-lcci","shortest-supersequence-lcci","pairs-with-sum-lcci","rank-from-stream-lcci","group-anagrams-lcci","find-closest-lcci","find-majority-element-lcci","get-kth-magic-number-lcci","circus-tower-lcci","baby-names-lcci","number-of-2s-in-range-lcci","find-longest-subarray-lcci","missing-number-lcci","boolean-evaluation-lcci","word-transformer-lcci","volume-of-histogram-lcci","continuous-median-lcci","calculator-lcci","lru-cache-lcci","add-without-plus-lcci","multi-search-lcci","the-masseuse-lcci","longest-word-lcci","smallest-k-lcci","re-space-lcci","binode-lcci","english-int-lcci","factorial-zeros-lcci","sorted-matrix-search-lcci","hanota-lcci","peaks-and-valleys-lcci","sorted-merge-lcci","robot-in-a-grid-lcci","bst-sequences-lcci","paths-with-sum-lcci","partition-list-lcci","kth-node-from-end-of-list-lcci","one-away-lcci","pond-sizes-lcci","pattern-matching-lcci","contiguous-sequence-lcci","sub-sort-lcci","master-mind-lcci","best-line-lcci","bisect-squares-lcci","diving-board-lcci","living-people-lcci","operations-lcci","maximum-lcci","permutation-ii-lcci","er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof","er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof","qiu-12n-lcof","gu-piao-de-zui-da-li-run-lcof","yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof","ping-heng-er-cha-shu-lcof","bu-ke-pai-zhong-de-shun-zi-lcof","ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof","nge-tou-zi-de-dian-shu-lcof","gou-jian-cheng-ji-shu-zu-lcof","dui-lie-de-zui-da-zhi-lcof","hua-dong-chuang-kou-de-zui-da-zhi-lcof","bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof","chou-shu-lcof","er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof","zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof","que-shi-de-shu-zi-lcof","zuo-xuan-zhuan-zi-fu-chuan-lcof","zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof","fan-zhuan-dan-ci-shun-xu-lcof","li-wu-de-zui-da-jie-zhi-lcof","liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof","ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof","he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof","ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof","he-wei-sde-liang-ge-shu-zi-lcof","shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof","shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof","er-cha-shu-de-shen-du-lcof","shu-zu-zhong-de-ni-xu-dui-lcof","er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof","di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof","er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof","cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof","shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof","cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof","cong-shang-dao-xia-da-yin-er-cha-shu-lcof","shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof","1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof","zi-fu-chuan-de-pai-lie-lcof","xu-lie-hua-er-cha-shu-lcof","zhan-de-ya-ru-dan-chu-xu-lie-lcof","er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof","lian-xu-zi-shu-zu-de-zui-da-he-lcof","shu-ju-liu-zhong-de-zhong-wei-shu-lcof","bao-han-minhan-shu-de-zhan-lcof","zui-xiao-de-kge-shu-lcof","fu-za-lian-biao-de-fu-zhi-lcof","shan-chu-lian-biao-de-jie-dian-lcof","fan-zhuan-lian-biao-lcof","zheng-ze-biao-da-shi-pi-pei-lcof","da-yin-cong-1dao-zui-da-de-nwei-shu-lcof","shu-zhi-de-zheng-shu-ci-fang-lcof","lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof","shun-shi-zhen-da-yin-ju-zhen-lcof","er-jin-zhi-zhong-1de-ge-shu-lcof","diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof","biao-shi-shu-zhi-de-zi-fu-chuan-lcof","dui-cheng-de-er-cha-shu-lcof","er-cha-shu-de-jing-xiang-lcof","shu-de-zi-jie-gou-lcof","he-bing-liang-ge-pai-xu-de-lian-biao-lcof","jian-sheng-zi-ii-lcof","jian-sheng-zi-lcof","zhong-jian-er-cha-shu-lcof","cong-wei-dao-tou-da-yin-lian-biao-lcof","ji-qi-ren-de-yun-dong-fan-wei-lcof","ti-huan-kong-ge-lcof","ju-zhen-zhong-de-lu-jing-lcof","xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof","qing-wa-tiao-tai-jie-wen-ti-lcof","er-wei-shu-zu-zhong-de-cha-zhao-lcof","shu-zu-zhong-zhong-fu-de-shu-zi-lcof","fei-bo-na-qi-shu-lie-lcof","yong-liang-ge-zhan-shi-xian-dui-lie-lcof","smallest-difference-lcci","tic-tac-toe-lcci","intersection-lcci","words-frequency-lcci","swap-numbers-lcci","sparse-array-search-lcci","permutation-i-lcci","magic-index-lcci","eight-queens-lcci","search-rotate-array-lcci","coin-lcci","reverse-bits-lcci","check-subtree-lcci","animal-shelter-lcci","bianry-number-to-string-lcci","pile-box-lcci","color-fill-lcci","bracket-lcci","recursive-mulitply-lcci","power-set-lcci","three-steps-problem-lcci","draw-line-lcci","stack-of-plates-lcci","sum-lists-lcci","delete-middle-node-lcci","zero-matrix-lcci","rotate-matrix-lcci","palindrome-permutation-lcci","closed-number-lcci","exchange-lcci","convert-integer-lcci","insert-into-bits-lcci","first-common-ancestor-lcci","successor-lcci","legal-binary-search-tree-lcci","check-balance-lcci","list-of-depth-lcci","minimum-height-tree-lcci","sort-of-stacks-lcci","three-in-one-lcci","route-between-nodes-lcci","implement-queue-using-stacks-lcci","min-stack-lcci","linked-list-cycle-lcci","intersection-of-two-linked-lists-lcci","palindrome-linked-list-lcci","remove-duplicate-node-lcci","string-rotation-lcci","compress-string-lcci","string-to-url-lcci","check-permutation-lcci","is-unique-lcci","longest-happy-prefix","check-if-there-is-a-valid-path-in-a-grid","create-target-array-in-the-given-order","maximum-performance-of-a-team","find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree","design-a-stack-with-increment-operation","lucky-numbers-in-a-matrix","frog-position-after-t-seconds","time-needed-to-inform-all-employees","bulb-switcher-iii","generate-a-string-with-characters-that-have-odd-counts","pizza-with-3n-slices","sort-integers-by-the-power-value","cinema-seat-allocation","find-the-distance-value-between-two-arrays","minimum-cost-to-make-at-least-one-valid-path-in-a-grid","linked-list-in-binary-tree","rank-teams-by-votes","how-many-numbers-are-smaller-than-the-current-number","construct-target-array-with-multiple-sums","maximum-number-of-events-that-can-be-attended","product-of-the-last-k-numbers","count-negative-numbers-in-a-sorted-matrix","maximum-sum-bst-in-binary-tree","longest-zigzag-path-in-a-binary-tree","find-the-longest-substring-containing-vowels-in-even-counts","increasing-decreasing-string","maximum-students-taking-exam","tweet-counts-per-frequency","minimum-number-of-steps-to-make-two-strings-anagram","check-if-n-and-its-double-exist","jump-game-v","maximum-product-of-splitted-binary-tree","reduce-array-size-to-the-half","the-k-weakest-rows-in-a-matrix","count-all-valid-pickup-and-delivery-options","number-of-substrings-containing-all-three-characters","apply-discount-every-n-orders","sort-integers-by-the-number-of-1-bits","minimum-difficulty-of-a-job-schedule","find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance","filter-restaurants-by-vegan-friendly-price-and-distance","remove-palindromic-subsequences","minimum-number-of-taps-to-open-to-water-a-garden","delete-leaves-with-a-given-value","print-words-vertically","maximum-69-number","jump-game-iv","angle-between-hands-of-a-clock","number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold","number-of-steps-to-reduce-a-number-to-zero","minimum-distance-to-type-a-word-using-two-fingers","number-of-operations-to-make-network-connected","minimum-flips-to-make-a-or-b-equal-to-c","convert-integer-to-the-sum-of-two-no-zero-integers","minimum-insertion-steps-to-make-a-string-palindrome","get-watched-videos-by-your-friends","xor-queries-of-a-subarray","decrypt-string-from-alphabet-to-integer-mapping","verbal-arithmetic-puzzle","jump-game-iii","all-elements-in-two-binary-search-trees","find-n-unique-integers-sum-up-to-zero","maximum-candies-you-can-get-from-boxes","maximum-number-of-occurrences-of-a-substring","divide-array-in-sets-of-k-consecutive-numbers","find-numbers-with-even-number-of-digits","the-dining-philosophers","fizz-buzz-multithreaded","reformat-department-table","balance-a-binary-search-tree","four-divisors","largest-multiple-of-three","closest-divisors","validate-binary-tree-nodes","number-of-days-between-two-dates","rank-transform-of-an-array","reverse-subarray-to-maximize-array-value","deepest-leaves-sum","sort-the-matrix-diagonally","break-a-palindrome","distinct-echo-substrings","sum-of-nodes-with-even-valued-grandparent","matrix-block-sum","decompress-run-length-encoded-list","number-of-paths-with-max-score","sum-of-mutated-array-closest-to-target","replace-elements-with-greatest-element-on-right-side","print-zero-even-odd","print-in-order","print-foobar-alternately","building-h2o","count-unique-characters-of-all-substrings-of-a-given-string","logical-or-of-two-binary-grids-represented-as-quad-trees","employee-importance","swap-salary","exchange-seats","not-boring-movies","human-traffic-of-stadium","classes-more-than-5-students","big-countries","guess-number-higher-or-lower","peeking-iterator","trips-and-users","rising-temperature","delete-duplicate-emails","tenth-line","transpose-file","valid-phone-numbers","word-frequency","department-top-three-salaries","department-highest-salary","customers-who-never-order","duplicate-emails","employees-earning-more-than-their-managers","consecutive-numbers","rank-scores","nth-highest-salary","second-highest-salary","combine-two-tables"];
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
    console.info("let data = " + JSON.stringify(leetCodeData).replace(/","/g, "\",\n\"").replace(/\\r/g, "").replace(/"questionFrontendId"/g, "\"questionId\"") + ";module.exports = data;");
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
