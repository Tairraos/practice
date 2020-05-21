/**
 * 1 用 node 执行 "1.getOperateList.js"，抓回缺失的模板slugTitle列表，将会更新 "2.getPageData.js"
 * 2 把 "2.getPageData.js" 代码帖到 https://leetcode-cn.com/problemset/all/ 页面的 console 里跑
 * 3 从 console 得到输出后，把它更新到 "data.js" 和 "questionData.js" 里
 * 4 用 node 执行 "3.generateTemplate.js" 生成模板
 * 5 用 node 执行 "4.mergeData" 合并数据文件
 * 
 * 本工具用来从网站获取所有的题目列表，把还没有生成模板过的题目抓出来
 */

let x = require("xtool.js"),
    path = require("path"),
    request = require("request"),
    outputFile = path.resolve(__dirname, "2.getPageData.js"),
    jsDataList = {},
    pyDataList = {},
    existDataList = {}

//已经存在的模板是 coding / done ／template 里的 js 集合
x.readDir(path.resolve(__dirname, ".."), {
    find: ["coding/*.js", "done/*.js", "template/*.js", "coding/*.py", "done/*.py", "template/*.py"],
    recursive: true
}).forEach(
    item => item.match(/\.js$/) ?
    jsDataList[item.replace(/.*\/(.*)\.([^.]+)\.py$/, "$1")] = RegExp.$2 : //本地的JS文件集
    pyDataList[item.replace(/.*\/(.*)\.([^.]+)\.py$/, "$1")] = RegExp.$2 //本地的PY文件集
);

request("https://leetcode-cn.com/api/problems/all/", function(error, response, body) {
    let respData = JSON.parse(body),
        operateList = respData.stat_status_pairs.map(item => ({
            "qid": +item.stat.frontend_question_id ? ("000" + item.stat.frontend_question_id).slice(-4) : item.stat.frontend_question_id
                .replace(/(\d+|-)/g, " $1 ").replace(/ +/g, " ").replace(/^ | $| (?=[.-])|(?<=[.-]) /g, ""),
            "paid": item.paid_only,
            "titleSlug": item.stat.question__title_slug
        })).filter(item =>
            !item.paid &&
            (jsDataList[item.qid] !== item.titleSlug || pyDataList[item.qid] !== item.titleSlug) //本地没有对应的JS或PY文件
        ).map(item => item.titleSlug);

    if (operateList.length) {
        let ignoreLine = false,
            newContent = [],
            newOperateList = "var operateList = " + JSON.stringify(operateList) + ";";

        x.scanFile(outputFile, (line, index) => {
            if (line.includes("//::End refill")) {
                ignoreLine = false;
            }
            if (!ignoreLine) {
                newContent.push(line);
            }
            if (line.includes("//::Start refill operateList")) {
                ignoreLine = true;
                newContent.push(newOperateList);
            }
        });

        x.saveFile(outputFile, newContent.join("\n"));
        // console.log("\033[31m把下面这行代码拷贝到 getPageData.js 第 15 行:");
        // console.log("\033[32m");
        // console.log("var operateList = " + JSON.stringify(operateList) + ";");
        // console.log("\033[0m");
        console.log("\033[32m\"2.getPageData.js\" 已经更新\033[0m");
    } else {
        console.log("\033[32m题库模板无需更新\033[0m");
    }
});
