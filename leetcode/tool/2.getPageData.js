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
var operateList = [
    "er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof", "er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof", "the-dining-philosophers",
    "fizz-buzz-multithreaded", "reformat-department-table", "print-zero-even-odd", "print-in-order", "print-foobar-alternately", "building-h2o",
    "count-unique-characters-of-all-substrings-of-a-given-string", "logical-or-of-two-binary-grids-represented-as-quad-trees", "swap-salary",
    "exchange-seats", "not-boring-movies", "human-traffic-of-stadium", "classes-more-than-5-students", "big-countries", "trips-and-users",
    "rising-temperature", "delete-duplicate-emails", "tenth-line", "transpose-file", "valid-phone-numbers", "word-frequency",
    "department-top-three-salaries", "department-highest-salary", "customers-who-never-order", "duplicate-emails",
    "employees-earning-more-than-their-managers", "consecutive-numbers", "rank-scores", "nth-highest-salary", "second-highest-salary", "combine-two-tables"
];
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
    quesInfo.sort((a,b)=>a.rawId-b.rawId);
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
