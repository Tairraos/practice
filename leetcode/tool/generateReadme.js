let x = require("xtool.js"),
    oldData = require("./oldData"),
    path = require("path"),
    maxId = +oldData.pop().questionId,
    doneList = {},
    difficultyList = {},
    mdContent = [],
    pointer = 0,
    mdLine = "",
    questionId;

x.readDir(path.resolve(__dirname, "..", "done"), {
    find: "*.js",
    recursive: true
}).forEach(item => doneList[+item.replace(/.*(\d\d\d\d)\..*/, "$1")] = "done/" + item);
oldData.forEach(item => difficultyList[item.questionId] = item.difficulty);

mdContent.push("### Leetcode 已完成题目列表");
mdContent.push("| | LE | ET | CO | DE | 已经 | 解答 | 完成 | 题目 | 索引 | 列表 |");
mdContent.push("|------|------|------|------|------|------|------|------|------|------|------|");

while (pointer <= maxId) {
    questionId = ("000" + pointer).slice(-4);
    if (!(pointer % 10)) mdLine = "|`" + questionId.slice(0, 3) + "x`";
    if (doneList[pointer]) mdLine += "|[" + questionId + "](" + doneList[pointer] + ")" + difficultyList[questionId];
    else mdLine += "| ";
    pointer += 1;
    if (!(pointer % 10) || pointer === maxId) {
        mdLine += "|";
        if (!mdLine.match(/x`(\| )*\|$/)) //不写入全空行
            mdContent.push(mdLine);
    }
}

x.saveFile(path.resolve(__dirname, "..", "README.md"), mdContent.join("\n"));
console.log("已经生成新的Readme, 最大题目：" + maxId);