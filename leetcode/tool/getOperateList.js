/**
 * 先在 node 里执行 getOperateList.js，抓回缺失的模板slugTitle列表，把列表替换第 14 行的 operateList
 * 然后把所有代码帖到 https://leetcode-cn.com/problemset/all/ 页面的 console 里跑，因为有 CSRF 校验，必须在这个页面跑
 * 如果有错误，需要更新本代码里的 x-csrftoken，可以从页面的 cookie 里看到有效的 token
 * 得到输出后，把它帖到 data.js 里，用 node 执行 getPageData.js 生成模板
 * 生成完后把 data.js 里的数据移动到 oldData.js 里备份。
 * 
 * 本工具用来从网站获取所有的题目列表，把还没有生成模板过的题目抓出来
 */

let x = require("xtool.js"),
    oldData = require("./oldData"),
    request = require("request"),
    existDataList = {};

//抓取问题列表，忽略已经存在的模板
oldData.forEach(item => existDataList[item.questionId] = item.titleSlug);
request("https://leetcode-cn.com/api/problems/all/", function (error, response, body) {
    let respData = JSON.parse(body);
    if (respData.length) {
        console.log("\033[31m把下面这行代码拷贝到 getPageData.js 第 14 行:");
        console.log("\033[32m");
        console.log("var operateList = " + JSON.stringify(respData.stat_status_pairs.map(item => ({
            "questionId": ("000" + item.stat.frontend_question_id).slice(-4),
            "titleSlug": item.stat.question__title_slug
        })).filter(item => existDataList[item.questionId] !== item.titleSlug).map(item => item.titleSlug)) + ";");
        console.log("\033[0m");
    } else {
        console.log("\033[32m题库模板已经保持最新\033[0m");
    }
});