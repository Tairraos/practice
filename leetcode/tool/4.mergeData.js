/**
 * 1 用 node 执行 "1.getOperateList.js"，抓回缺失的模板slugTitle列表，将会更新 "2.getPageData.js"
 * 2 把 "2.getPageData.js" 代码帖到 https://leetcode-cn.com/problemset/all/ 页面的 console 里跑
 * 3 从 console 得到输出后，把它更新到 "data.js" 和 "questionData.js" 里
 * 4 用 node 执行 "3.generateTemplate.js" 生成模板
 * 5 用 node 执行 "4.mergeData" 合并数据文件
 * 
 * 本工具会把data.js里的内容合并到oldData.js里
 */

let x = require("xtool.js"),
    data = require("./data"),
    backupData = require("./backupData"),
    quesInfo = {},
    quesList = [],
    content = [];

backupData.concat(data).forEach(item => {
    let id = item.questionId;
    quesInfo[id] = item;
    quesList.push(id);
});

quesList = [...new Set(quesList)].sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

quesList.forEach(id => {
    content.push(JSON.stringify(quesInfo[id]).replace(/[\n\r]+/g, "\n"));
});

x.saveFile("leetcode/tool/backupData.js", [
    "let data = [",
    content.join(",\n"),
    "];",
    "module.exports = data;",
    "",
].join("\n"));

x.saveFile("leetcode/tool/data.js", [
    "let data = [];",
    "module.exports = data;",
    "",
].join("\n"));
