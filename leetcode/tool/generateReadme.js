let x = require("xtool.js"),
    path = require("path"),
    questionData = require("./questionData"),
    difficultyDict = ["", "容易", "中等", "困难"],
    findPatten = {
        find: "*.js",
        recursive: true
    },
    doneList = x.readDir(path.resolve(__dirname, "..", "done"), findPatten).sort(),
    titleDict = {},
    readme = [],
    list = [],
    paid = questionData.filter(item => item.isPaidOnly);

questionData.forEach(item => titleDict[item.questionId] = item);

readme.push("### Leetcode 已完成题目列表");
readme.push(`完成度：${doneList.length}/${questionData.length-paid.length} (有${paid.length}题付费题未计算在总数内, 附[所有题目清单](LIST.md))`);
doneList.forEach(
    item => {
        let qid = item.replace(/.*(\d\d\d\d)\.[\w-]+\.js/, "$1"),
            title = `${qid} - ${titleDict[+qid].titleCn}`,
            url = `done/${item}`,
            remote = `https://leetcode-cn.com/problems/${titleDict[+qid].titleSlug}/`,
            difficulty = difficultyDict[titleDict[+qid].level];
        readme.push(`- [${title}](${url}) 难度：${difficulty} [源](${remote})`);
    }
);

list.push("### Leetcode 题目清单");
list.push(`总题数：${questionData.length} / 未付费题：${questionData.length-paid.length} / 付费题：${paid.length}`);
questionData.forEach(
    item => {
        let remote = `https://leetcode-cn.com/problems/${item.titleSlug}/`,
            difficulty = difficultyDict[item.level];
        list.push(`- [${item.qid} - ${item.titleCn || item.titleEn}](${remote}) 难度：${difficulty}${item.isPaidOnly?" / 付费题":""}`);
    }
);


x.saveFile(path.resolve(__dirname, "..", "README.md"), readme.join("\n"));
x.saveFile(path.resolve(__dirname, "..", "LIST.md"), list.join("\n"));

console.log(`已经生成新的Readme, 总题数: ${questionData.length-paid.length}, 已答: ${doneList.length}`);