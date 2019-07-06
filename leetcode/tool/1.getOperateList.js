/**
 * 1 用 node 执行 getOperateList.js，抓回缺失的模板slugTitle列表，执行结果为待抓取题目的 titleSlug 列表
 * 2 打开 getPageData.js，用上面步骤的执行结果替换第 15 行的 operateList
 * 3 从页面里得到有效的 csrfToken，更新在 getPageData.js 第 22 行
 * 4 把修改过的 getPageData.js 代码帖到 https://leetcode-cn.com/problemset/all/ 页面的 console 里跑
 * 5 从 console 得到输出后，把它帖到 data.js 里，用 node 执行 generateTemplate.js 生成模板
 * 6 生成完后把 data.js 里的数据移动到 oldData.js 里备份。
 * 
 * 本工具用来从网站获取所有的题目列表，把还没有生成模板过的题目抓出来
 */

let x = require("xtool.js"),
    path = require("path"),
    questionData = require("./questionData"),
    request = require("request"),
    existDataList = {};

//已经存在的模板是 coding / done ／template 里的 js 集合
x.readDir(path.resolve(__dirname, ".."), {
    find: ["coding/*.js", "done/*.js", "template/*.js"],
    recursive: true
}).forEach(
    item => existDataList[item.replace(/.*(\d\d\d\d)\.(.*)\.js/, "$1")] = RegExp.$2
);

request("https://leetcode-cn.com/api/problems/all/", function(error, response, body) {
    let respData = JSON.parse(body),
        operateList = respData.stat_status_pairs.map(item => ({
            "qid": ("000" + item.stat.frontend_question_id).slice(-4),
            "paid": item.paid_only,
            "titleSlug": item.stat.question__title_slug
        })).filter(item =>
            !item.paid && existDataList[item.qid] !== item.titleSlug
        ).map(item => item.titleSlug);

    if (operateList.length) {
        let ignoreLine = false,
            newContent = [],
            newOperateList = "var operateList = " + JSON.stringify(operateList) + ";",
            file = path.resolve(__dirname, "2.getPageData.js");

        x.scanFile(file, (line, index) => {
            if (line.includes("//::Start refill operateList")) {
                ignoreLine = true;
                newContent.push(newOperateList);
            } else if (line.includes("//::Snd refill")) {
                ignoreLine = false;
            }

            if (!ignoreLine) {
                newContent.push(line);
            }
        });

        x.saveFile(file, newContent.join("\n"));
        // console.log("\033[31m把下面这行代码拷贝到 getPageData.js 第 15 行:");
        // console.log("\033[32m");
        // console.log("var operateList = " + JSON.stringify(operateList) + ";");
        // console.log("\033[0m");
        console.log("\033[32m\"2.getPageData.js\" 已经更新\033[0m");
    } else {
        console.log("\033[32m题库模板无需更新\033[0m");
    }
});
