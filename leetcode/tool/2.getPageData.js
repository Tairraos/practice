/**
 * 1 用 node 执行 "1.getOperateList.js"，抓回缺失的模板slugTitle列表，将会更新 "2.getPageData.js"
 * 2 检查 "2.getPageData.js" 里 28 行的 csrfToken 是否有效
 * 3 把 "2.getPageData.js" 代码帖到 https://leetcode-cn.com/problemset/all/ 页面的 console 里跑
 * 4 从 console 得到输出后，把它更新到 "data.js" 和 "questionData.js" 里
 * 5 用 node 执行 "3.generateTemplate.js" 生成模板
 * 6 生成完后把 "data.js" 里的数据移动到 oldData.js 里备份。
 * 
 * 本工具用来从网站上获取题目数据，用于生成模板。
 * 本工具获取数据的 graphQl 查询受跨站请求限制，必须在 leetcode-cn.com 的域名下执行。
 * https://leetcode-cn.com/problemset/all/ 存在jQuery，所以直接使用 jQuery 的 ajax 工具
 */

//::Start refill operateList
var operateList = ["stone-game-ii","largest-1-bordered-square","alphabet-board-path","n-th-tribonacci-number","maximum-of-absolute-value-expression","shortest-path-with-alternating-colors","minimum-cost-tree-from-leaf-values","number-of-equivalent-domino-pairs"];
//::End refill

var dictDiffculty = {
        "Easy": "容易",
        "Medium": "中等",
        "Hard": "困难"
    },
    level = ["", "Easy", "Medium", "Hard"],
    quesInfo,
    leetCodeData = [],
    translations = {},
    //需要去网页里更新token
    csrfToken = "oVVYWtw0qNo1TJPjYXvSlqyyxxx4kQbWrLd2wQHCdLBzOocsMdP6pANcp5NyNV4x";
/**
 * 调用 getQues 把数据保存到 leetCodeData, 然后输出
 */
function getQuestionData() {
    operateList.forEach(item => getQues(item));
    leetCodeData = leetCodeData.sort((a, b) => +a.questionFrontendId - +b.questionFrontendId);

    console.log("let data = " + JSON.stringify(leetCodeData).replace(/(\[|",)"/g, "$1\n\"").replace(/"questionFrontendId"/g, "\"questionId\"") + ";module.exports = data;");
    console.log("把上面代码拷贝到 data.js:");

    getQuesInfo();

    console.log("module.exports = " + JSON.stringify(quesInfo) + ";");
    console.log("把上面代码拷贝到 quesionData.js:");
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
            question.questionFrontendId = ("000" + question.questionFrontendId).slice(-4);
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
                leetCodeData.push(question);
            }
        }
    });
}

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

getQuestionData();
