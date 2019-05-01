let x = require("xtool.js"),
    path = require("path"),
    oldData = require("./oldData"),
    maxId = +oldData.slice(-1)[0].questionId, totalQuestion = oldData.length,
    doneList = {}, difficultyList = {}, dmap = {"容易": ":suspect:", "中等": ":rage2:", "困难": ":feelsgood:"},
    mdContent = [], table = [], pointer = 0, mdLine = "|",
    status = {counter: 0, easy: 0, medium: 0, hard: 0};

x.readDir(path.resolve(__dirname, "..", "done"), {
    find: "*.js",
    recursive: true
}).forEach(item => doneList[+item.replace(/.*(\d\d\d\d)\..*/, "$1")] = "done/" + item);
oldData.forEach(item => difficultyList[item.questionId] = dmap[item.difficulty]);

while (pointer <= maxId) {
    let questionId = ("000" + pointer).slice(-4);
    if (doneList[pointer]) {
        mdLine += `[${questionId}](${doneList[pointer]})${difficultyList[questionId]}|`;
        status.counter++;
        status.easy += difficultyList[questionId] === ":suspect:";
        status.medium += difficultyList[questionId] === ":rage2:";
        status.hard += difficultyList[questionId] === ":feelsgood:";
    } else {
        mdLine += difficultyList[questionId] ? ` |` : ` ~~${questionId}~~ |`;
    }
    if (!(++pointer % 10)) {
        if (!mdLine.match(/^(\|[ ~0-9]+)*\|$/)) { //不写入全空行
            table.push(mdLine);
        }
        mdLine = "|";
    }
}

mdContent.push(`### Leetcode 已完成题目列表`);
mdContent.push(`总题数: ${totalQuestion}, 已答: ${status.counter}  `);
mdContent.push(`已答: 容易: ${status.easy}, 中等: ${status.medium}, 困难: ${status.hard}  `);
mdContent.push(`  `);
mdContent.push(` ~~删除线~~表示无此题，空格表示未解答  `);
mdContent.push(``);
mdContent.push(`|:octocat:|:octocat:|:octocat:|:octocat:|:octocat:|:octocat:|:octocat:|:octocat:|:octocat:|:octocat:|`);
mdContent.push(`|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|`);

x.saveFile(path.resolve(__dirname, "..", "README.md"), [...mdContent, ...table].join("\n"));
console.log(`已经生成新的Readme, 总题数: ${totalQuestion}, 已答: ${status.counter}`);