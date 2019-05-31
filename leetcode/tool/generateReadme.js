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
    mdContent = [],
    paid = questionData.filter(item=>item.isPaidOnly);

questionData.forEach(item => titleDict[item.questionId] = item);

mdContent.push("### Leetcode 已完成题目列表");
mdContent.push(`完成度：${doneList.length}/${questionData.length-paid.length} (有${paid.length}题付费题未计算在总数内)`);
doneList.forEach(
    item => {
        let qid = item.replace(/.*(\d\d\d\d)\.[\w-]+\.js/, "$1"),
            title = `${qid} - ${titleDict[+qid].titleCn}`,
            url = `https://github.com/Tairraos/practice/blob/master/leetcode/done/${item}`
            remote = `https://leetcode-cn.com/problems/${titleDict[+qid].titleSlug}/`,
            difficulty = difficultyDict[titleDict[+qid].level];
        mdContent.push(`- [${title}](${url}) ${difficulty} [源](${remote})`);
    }
);


x.saveFile(path.resolve(__dirname, "..", "README.md"), mdContent.join("\n"));
// console.log(`已经生成新的Readme, 总题数: ${questionData.num_total}, 已答: ${questionData.num_solved}`);