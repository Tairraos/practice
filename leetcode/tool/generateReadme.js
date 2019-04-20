let x = require("xtool.js"),
    oldData = require("./oldData"),
    path = require("path"),
    maxId = +oldData.pop().questionId,
    doneList = {},
    mdContent = [],
    pointer = 0,
    mdLine = "",
    questionId;

x.readDir(path.resolve(__dirname, "..", "done"), {
    find: "*.js",
    recursive: true
}).forEach(item => doneList[+item.replace(/.*(\d\d\d\d)\..*/, "$1")] = "done/" + item);

mdContent.push("### Leetcode 已完成题目列表");
mdContent.push("|      |`---0`|`---1`|`---2`|`---3`|`---4`|`---5`|`---6`|`---7`|`---8`|`---9`|");
mdContent.push("|------|------|------|------|------|------|------|------|------|------|------|");

while (pointer <= maxId) {
    questionId = ("000" + pointer).slice(-4);
    if (!(pointer % 10)) mdLine = "|`" + questionId.slice(0, 3) + "-`";
    if (doneList[pointer]) mdLine += "|[" + questionId + "](" + doneList[pointer] + ")";
    else mdLine += "| ";
    pointer += 1;
    if (!(pointer % 10) || pointer === maxId) {
        mdLine += "|";
        mdContent.push(mdLine);
    }
}

x.saveFile(path.resolve(__dirname, "..", "README.md"), mdContent.join("\n"));
console.log("已经生成新的Readme, 最大题目：" + maxId);